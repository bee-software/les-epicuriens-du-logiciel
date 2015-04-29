#!/bin/bash

install_git_and_node() {
    apt-get update
    curl -sL https://deb.nodesource.com/setup | sudo bash -
    apt-get install -y git nodejs npm
}

create_git_repo() {
    local project=$1
    local env=$2
    mkdir ${project}-${env}
    mkdir ${project}-${env}-repo
    cd ${project}-${env}-repo
    git init --bare
    echo "
    #!/bin/bash
    git --work-tree=/root/${project}-${env} --git-dir=/root/${project}-${env}-repo checkout master -f
    cd /root/${project}-${env}
    npm run build
    cd -
    "> hooks/post-receive
    chmod +x hooks/post-receive
    cd -
}

install_git_and_node
create_git_repo les-epicuriens-du-logiciel test
create_git_repo les-epicuriens-du-logiciel prod