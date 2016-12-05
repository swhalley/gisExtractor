FROM node:latest

ENV HOME_DIR /home/workspace

#install shape file tools. postgis package installs postgres and a whole lot more. need to find a lite version
RUN apt-get update \   
 && apt-get -y install postgis

#Bring in the service code
RUN mkdir -p $HOME_DIR/web
RUN mkdir -p $HOME_DIR/data
WORKDIR $HOME_DIR/web

ADD ./client/package.json $HOME_DIR/web/package.json
RUN npm install

EXPOSE 5938
CMD ["npm","start"]