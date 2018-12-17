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

   
   $(document).on("load", $("#keys").hide(),$("#playerImage").hide());
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
let splitWord = [];
let Word = "dynamic";
let convertedWord = Word.toUpperCase();
for (let i = 0; i < convertedWord.length; i++){
    splitWord.push(convertedWord.charAt(i++));
    //console.log(guessWord.charAt(i));

    //logic for determining correct letter choice within array
    console.log(splitWord)
    for (i=0; i < splitWord.length; i++){
        $("#a").on("click", function(){
        if($("#a") !== splitWord[i++]){
            console.log("guess again, time's running out!!");
        } else {
            console.log("great guess! Keep it up, you're saving yourself!")
            console.log(splitWord[i]);
            }
        })
    }

    for (i=0; i < splitWord.length; i++){
        $("#b").on("click", function(){
        if($("#b") !== splitWord[i++]){
            console.log("guess again, time's running out!!");
        } else {
            console.log("great guess! Keep it up, you're saving yourself!")
            console.log(splitWord[i]);
            }
        })
    }
}

//$(".letterChoice").on("click", function(){
 //   if($(".letterChoice"). == $("#"))
//})

//logic for guessing correct letter in array


//or (i < )
