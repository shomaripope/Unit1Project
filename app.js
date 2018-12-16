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
splitWord = [];
guessWord = "dynamic";
for ( let i = 0; i < guessWord.length; i ++){
    splitWord.push(guessWord.charAt(i));
    console.log(guessWord.charAt(i));
    console.log(splitWord)
}


