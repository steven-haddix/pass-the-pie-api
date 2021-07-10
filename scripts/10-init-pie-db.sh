#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    DROP ROLE IF EXISTS docker;
    CREATE USER docker;

    DROP DATABASE IF EXISTS pie;
    CREATE DATABASE pie;
    
    GRANT ALL PRIVILEGES ON DATABASE pie TO docker;
EOSQL