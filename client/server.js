"use strict";
var express = require( 'express');
var app = express();
var fs = require( 'fs' );

var server = app.listen( 5938, function(){
    console.log( 'Server started on port 5938' );
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get( '/lookForDataFiles', function( req, res ){
    res.send( '<div>Found 4 files</div>' );
});