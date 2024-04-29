var fs = require("fs");
var firstFlag = false;

let total = 0;
var firstNum;
var lastNum;
var combine;

console.log("finding codes");

//loop through each input line of text
fs.readFile("input.txt", function(error, data) {
    if (error) { throw error; }
    data.toString().split("\n").forEach(function(line, index, arr) {
        if(index === arr.length - 1 && line === "") {return;}
        //loop through each character
        for(let i = 0; i < line.length; i++){
            //if character is a number it will be the same upper and lower
            if(line[i].toLowerCase() === line[i].toUpperCase()){
                //if we havent found a number yet this is our first
                if(!firstFlag){
                    firstNum = line[i];
                    firstFlag = true;
                }
                //keep going until we find last number as well
                lastNum = line[i];
            }
        }
        //get a combined number with tens and ones place
        combine = firstNum + lastNum;
        //add to total
        total += Number(combine);
        //reset first number flag and number holders
        firstFlag = false;
        firstNum = 0;
        lastNum = 0;
    });
//print solution
console.log(total);
});
