"use strict";
var express = require('express');
var fs = require('fs');
var app = express();


var server = app.listen( 5938, function(){
    console.log( 'Server started on port 5938' );
});

app.use( express.static('resources'));

app.get( '/', ( req, res ) =>{
    let options = {
        root : __dirname + '/resources'
    };
    res.sendFile( 'index.html', options);
});

app.get( '/files', ( req, res ) => {
    let basePath = process.env.HOME_DIR + '/data';
    let getFilesInDirectory = function( path ){
        return fs.readdirSync( path ).map( (filename) => {
            if( fs.statSync( `${path}/${filename}`).isDirectory()){
                return getFilesInDirectory( `${path}/${filename}` );
            }else {
                return filename;
            }
        }).reduce( (a, b) => a.concat( b ), []);
    }

    res.json( getFilesInDirectory( basePath) );
    
});

app.post( '/file/:filename/:sid/:tablename', (req, res ) => {

});