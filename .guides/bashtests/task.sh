#!/bin/bash

read REQUIREMENT

case $REQUIREMENT in

  "task")
    grep -E "\"test\"\: ?\"jest\"" autoProject/package.json > /dev/null; echo $? 
    ;;

  *)
    echo $REQUIREMENT Unknown
    exit 1
    ;;
esac

exit 0
