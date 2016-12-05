FROM mdillon/postgis 

ENV HOME_FOLDER /home/workspace

#Get Data Folder Ready
RUN mkdir $HOME_FOLDER
RUN mkdir $HOME_FOLDER/data
WORKDIR $HOME_FOLDER

#install node
RUN apt-get update 
RUN apt-get -y install wget 
RUN wget -nv http://nodejs.org/dist/v7.1.0/node-v7.1.0-linux-x64.tar.gz 
RUN tar -C /usr/local --strip-components 1 -xzf node-v7.1.0-linux-x64.tar.gz
RUN rm  node-v7.1.0-linux-x64.tar.gz

#Bring in the service code
COPY shapeService/ $HOME_FOLDER/
RUN npm install forever -g
RUN npm install

CMD forever start $HOME_FOLDER/server.js