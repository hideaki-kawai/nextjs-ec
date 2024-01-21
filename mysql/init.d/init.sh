#!/usr/bin/env bash

mysql --user=root --password="$MYSQL_ROOT_PASSWORD" <<-EOSQL
    GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO '$MYSQL_USER'@'%';
EOSQL