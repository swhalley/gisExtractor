#Usage
docker-compose up
docker exec -it gis_loader /bin/sh
./extract.sh <sid> <path/to/shape/file> <databaseTable>

#Todo
currently we dont copy in the shape file to the container, need to 

#Thanks and Credit to
http://suite.opengeo.org/docs/latest/dataadmin/pgGettingStarted/shp2pgsql.html
https://hub.docker.com/r/mdillon/postgis/
https://docs.docker.com/compose/compose-file/

SHP's .proj can be converted to the <sid>
http://prj2epsg.org/search
