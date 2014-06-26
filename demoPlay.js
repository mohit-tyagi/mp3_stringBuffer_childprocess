var lame=require('lame');
var fs =require("fs");
var Speaker = require('speaker');


var audioOptions = {channels: 2, bitDepth: 16, sampleRate: 4100};
var speaker = new Speaker(audioOptions);
console.log("start");
fs.createReadStream("/home/intelligrape/Desktop/Banjaara.mp3").pipe(lame.Decoder()).pipe(speaker);
speaker.on('close', function(){
    console.log("finished");

});
