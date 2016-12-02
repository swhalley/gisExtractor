#!/bin/bash
# $1 -> SRID, $2 -> path to shape file, $3 -> db table to create
if [  $# -le 2 ] 
then 
    echo "Usage is $0 <srid> </path/to/file.shp> <dbTable>"
    exit 1
fi 

shp2pgsql -I -s $1 $2 $3 > SHAPEFILE.sql
# ${POSTGRES_USER} is the database loading into, 
psql -U postgres -d $POSTGRES_USER -f SHAPEFILE.sql