#!/bin/bash
server=$1
statuscode=`curl -s -I "$server" | head -n 1 | cut -d$' ' -f2`

if [ -z "$statuscode" ]; then
    echo "Status code is empty"
    exit -1;
fi

if [ "$statuscode" -ne 200 ]; then
    echo "Status code is $statuscode"
    exit -1;
fi

