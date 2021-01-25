 
 /* Styles the height and width of an element equal to the width and height of another

   This can be used to set the size of a section that only contains elements with 
   position: absolute, such as when stacking images for animation.                    */




// Set Height Only

 function divSize(){
        var imgQuery = document.querySelector("#img1");
        var divHeight = imgQuery.clientHeight;        
        document.getElementById("img-container").style.height = divHeight + "px";
    }
    divSize();
    window.addEventListener("resize", divSize);

///////////////////////////////////////////////////////////////////////////////////////


// Set Width Only

    function divSize(){
        var imgQuery = document.querySelector("#img1");
        var divWidth = imgQuery.clientWidth;        
        document.getElementById("img-container").style.width = divWidth + "px";
    }
    divSize();
    window.addEventListener("resize", divSize);

///////////////////////////////////////////////////////////////////////////////////////

// Set Width and Height


 function divSize(){
        var imgQuery = document.querySelector("#img1");
        var divHeight = imgQuery.clientHeight;
        var divWidth = imgQuery.clientWidth;        
        document.getElementById("img-container").style.height = divHeight + "px";
        document.getElementById("img-container").style.width = divWidth + "px";
    }
    divSize();
    window.addEventListener("resize", divSize);







