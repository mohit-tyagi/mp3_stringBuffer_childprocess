/**
 * Created by intelligrape on 25/6/14.
 */
var lame=require('lame');
var fs =require("fs");
var Speaker = require('speaker');


var audioOptions = {channels: 2, bitDepth: 16, sampleRate: 4100};

var decoder = lame.Decoder(audioOptions);

var speaker = new Speaker(audioOptions);
console.log("start");
var inputStream = fs.createReadStream("/home/intelligrape/Desktop/Banjaara.mp3");


inputStream.pipe(decoder).pipe(speaker);
speaker.on('flush', function(){
    console.log("finished");

});
