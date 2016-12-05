FROM node:latest

WORKDIR /home/workspace/web

#install shape file tools. postgis package installs postgres and a whole lot more. need to find a lite version
RUN apt-get update \   
 && apt-get -y install postgis

#Bring in the service code
RUN mkdir -p /home/workspace/web
RUN mkdir -p /home/workspace/data

COPY ./client /home/workspace/web
RUN npm install -verbose

CMD npm start