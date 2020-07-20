//
var currentLevel = 0;
//
document.getElementById("next-level").addEventListener("click",function(){
    //
    if(currentLevel == 0){
        document.getElementById("level1").innerHTML = "The Duck as Self Reflection";
        currentLevel += 1;
    }
    
    // else if(){
    //     currentLevel += 1;
    // }
    
    // else if (){
    //     currentLevel += 1;
    // }
    // //
    // else if (){
    //     currentLevel += 1;
    //     document.getElementById("next-level").innerHTML = "Reset Triangle";
    // }
    // //
    // else{
    //     // make all levels blank again
    //     document.getElementById("level1").innerHTML = "";



    //     // reset button text
    //     document.getElementById("next-level").innerHTML = "Click for next level of support";
    //     //
    //     currentLevel = 0;
    // }
});