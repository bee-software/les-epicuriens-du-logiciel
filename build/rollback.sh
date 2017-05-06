#!/bin/bash

env=$1
tag=$2

ssh root@bee.software bash -c "'
git --work-tree=/root/bee-software-${env} --git-dir=/root/bee-software-${env}-repo checkout tags/${tag}
cd /root/bee-software-${env}
npm run build
'"