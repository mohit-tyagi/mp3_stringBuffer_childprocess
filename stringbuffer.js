/**
 * Created by intelligrape on 25/6/14.
 */
function StringBuffer(){
    //if(!size) size=250;
    var buff=new Buffer(250);
    var offset= 0;
    this.append=function(str) {
        if(typeof(str)!=="string")
        {
            if(typeof(str)=="object")
                str=JSON.stringify(str);
            else
                str=""+str;
        }

        var len=buff.write(str,offset,str.length);


        offset+=str.length;

    }
    this.toString=function(){
        return buff.toString("utf8",0,offset);
    }
}



var str=new StringBuffer();
str.append("hello");
str.append("hello");
str.append({"roll":102,"stuName":"Mohit"});
str.append("hello");
console.log(str.toString());

