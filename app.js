//read text file
let readfile = function () {
    document.getElementById('file').onchange = function () {
        debugger;
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function (progressEvent) {
            // Entire file
            console.log(this.result);
            // By lines
            var lines = this.result.split('\n');
            var list = [];
            for (var line = 0; line < lines.length; line++) {
                list.push(lines[line]);
            }
        };
        reader.readAsText(usa.txt);
    };
};

   
   $(document).on("load", $("#keys").hide(),$("#game_logo").show());
   $(document).on("load", $("#playerImage").hide(), $(".gameHeader").hide());
   $("#game").on("click", function(){
       $("#game_logo").hide()
       $(".gameHeader").show()
       $("#keys").show();
       $("#playerImage").show();
       $("#playerImage").fadeOut(120000, function(){
           alert("You Lose!!");
       });
   })
let Word = "dynamic";
let convertedWord = Word.toUpperCase();
let splitWord = [];
let array = convertedWord.split("")
console.log(array)
   //split guessword into array for equality logic

$(".letterChoice").on("click", function(){
    for(let i = 0; i < array.length; i++){

    if (array.includes(this.value) == true){
     console.log("values match!")
     //alert("Correct! Keep Going!")
 } else {
     console.log("not a match try again")
     //alert("not a match, keep trying!")
 }
}
    console.log(this.value)
    console.log(array)
})



// let letters = document.getElementsByClassName("letterChoice").value;
// console.log(letters)

// for (let i = 0; i < splitWord.length; i++){
//     splitWord.push(Word[i]);
//    console.log(splitWord);
    
//    console.log(splitWord)
//    let wordValue = $(".letterChoice").val()

    //logic for determining correct letter choice within array
    // console.log(splitWord)
    // for (let i=0; i < array.length; i++){
    //     $("#a").on("click", function(){
    //         console.log(array)
            
        // if($("#a").val() == array){
        //    console.log("great guess! Keep it up, you're saving yourself!") 
           
        // }
        //    else if ($("#b") == array){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#c") == array){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#d") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#e") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#f") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#g") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#h") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#i") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#j") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#k") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#l") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#m") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#n") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#o") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#p") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#q") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#r") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#s") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#t") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#u") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#v") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#w") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#x") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        //    else if ($("#y") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
            
        //    }
        //    else if ($("#z") == array[j]){
        //     console.log("great guess! Keep it up, you're saving yourself!") 
        //    }
        // else {
        //     console.log("guess again, time's running out!!");
            
        //     }
       // })
        
    //}

    

    // for( let i =0; i< array.length; i++){
        // console.log(array)
    // }


    // for (let k=0; k < splitWord.length; k++){
    //     $("#b").on("click", function(){
    //     if(document.getElementById("#b") == splitWord[k]){
    //        console.log("great guess! Keep it up, you're saving yourself!") 
    //     } else {
    //         console.log("guess again, time's running out!!");
    //         //console.log(splitWord[k]);
    //         }
    //     })
    // }
//}
