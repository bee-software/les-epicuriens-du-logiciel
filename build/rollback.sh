#!/bin/bash

env=$1
tag=$2

ssh root@les-epicuriens-du-logiciel.ca bash -c "'
git --work-tree=/root/les-epicuriens-du-logiciel-${env} --git-dir=/root/les-epicuriens-du-logiciel-${env}-repo checkout tags/${tag}
'"