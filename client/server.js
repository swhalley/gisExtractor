"use strict";
var express = require('express');
var app = express();


var server = app.listen( 5938, function(){
    console.log( 'Server started on port 5938' );
});


app.get( '/', function( req, res ){
    res.send( 'Hello World');
});

app.get( '/file', function( req, res ){
    res.send( '<div>Found 4 files</div>' );
});