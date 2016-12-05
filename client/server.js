"use strict";
var express = require('express');
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
    res.send( '<div>Found 4 files</div>' );
});

app.post( '/file/:filename/:sid/:tablename', (req, res ) => {

});