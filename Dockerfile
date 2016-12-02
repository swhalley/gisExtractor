FROM mdillon/postgis 

RUN mkdir /home/workspace
RUN mkdir /home/workspace/data
COPY extract.sh /home/workspace/extract.sh
RUN chmod 777 /home/workspace/extract.sh
WORKDIR /home/workspace