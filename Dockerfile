FROM mdillon/postgis 

RUN mkdir /home/workspace
COPY extract.sh /home/workspace/extract.sh
RUN chmod 777 /home/workspace/extract.sh
WORKDIR /home/workspace