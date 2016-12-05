"use strict";
var express = require('express');
var app = express();

var fs = require('fs');
var notSoSecure = require( './notSoSecure');

var server = app.listen( 5938, function(){
    console.log( 'Server started on port 5938' );
});

app.set('view engine', 'pug');
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
                return {
                    "filename" : filename,
                    "hash" : notSoSecure.encrypt( `${path}/${filename}`  )
                };
            }
        }).reduce( (a, b) => a.concat( b ), [])
        .filter( ( file ) => file.filename.indexOf(".shp", file.filename.length - ".shp".length) !== -1);
    }

    res.render( 'shapeFileList', { shapeFiles : getFilesInDirectory( basePath) } );
    
});

app.post( '/file/:filename/:sid/:tablename', (req, res ) => { });