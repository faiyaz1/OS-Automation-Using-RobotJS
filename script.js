var robot = require("robotjs");
var screen = robot.getScreenSize();
var fs = require("fs");

setTimeout(handleLaunchPad, 2000);

function handleLaunchPad(){
    robot.moveMouseSmooth(207, 851);
    robot.mouseClick();
    setTimeout(openVscode, 2000);
}

function openVscode(){
    robot.moveMouseSmooth(919, 668);
    robot.mouseClick();
    setTimeout(openSafari, 2000);
}

function openSafari(){
    robot.moveMouseSmooth(207, 851);
    robot.mouseClick();
    robot.moveMouseSmooth(196, 669);
    robot.mouseClick();
    setTimeout(openTabs, 3000);
}


function openTabs(){
    var rdata = fs.readFileSync("./safari.json");
    var tabs = JSON.parse(rdata);

    for (var i = 0; i < tabs.length; i++){
        for(var j = 0; j < tabs[i].length; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j < tabs[i].length - 1){
                robot.keyToggle("command","down");
                robot.keyTap("T");
                robot.keyToggle("command","up");
            }else if(i < tabs.length -1){
                robot.keyToggle("command","down");
                robot.keyTap("N");
                robot.keyToggle("command","up");
            }
        }

    }
}