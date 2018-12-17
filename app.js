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
   $("#game").on("click", function(){
       $("#keys").show();
       $("#playerImage").show();
       $("#playerImage").fadeOut(120000);
   })

   var file = "/Users/shomaripope/projects/unit1Project/usa.txt";
   function getFile(){
       $.get(file,function(txt){
           var lines = txt.responseText.split("\n");
           for (var i = 0, len = lines.length; i < len; i++) {
               save(lines[i]);
           }
       }); 
   }

   //split guessword into array for equality logic
//  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let splitWord = [];
let Word = "dynamic";
let convertedWord = Word.toUpperCase();
for (let i = 0; i < convertedWord.length; i++){
    splitWord.push(convertedWord[i]);
    //console.log(convertedWord);

    //logic for determining correct letter choice within array
    console.log(splitWord)
    for (let j=0; j < splitWord.length; j++){
        $("#a").on("click", function(){
        if(document.getElementById("#a") == splitWord[j].value){
           console.log("great guess! Keep it up, you're saving yourself!") 
        } else {
            console.log("guess again, time's running out!!");
            console.log(splitWord[j]);
            }
        })
    }

    for (let k=0; k < splitWord.length; k++){
        $("#b").on("click", function(){
        if(document.getElementById("#b") == splitWord[k]){
           console.log("great guess! Keep it up, you're saving yourself!") 
        } else {
            console.log("guess again, time's running out!!");
            console.log(splitWord[k]);
            }
        })
    }
}

//$(".letterChoice").on("click", function(){
 //   if($(".letterChoice"). == $("#"))
//})

//logic for guessing correct letter in array


//or (i < )
