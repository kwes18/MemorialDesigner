window.onload = init;

function init(){

    var canvas = new fabric.Canvas('canvas');
    let txtb = document.getElementById("text");
    let type = document.getElementById("type");
    let sub = document.getElementById("submit");

    sub.addEventListener("click", function(){
        alert("You are about to submit your design.\nYou won't be able to edit it after it is submitted.");
    } )

    type.addEventListener("change", function(){
        if(type.nodeValue = "Upright Memorial"){
            canvas.add(new fabric.)
        } 
    })

    txtb.addEventListener("click", function(){
    canvas.add(new fabric.Textbox('Click to Edit'));
    }
    )
    
}