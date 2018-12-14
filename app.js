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


var allText =[];
	var allTextLines = [];
	var Lines = [];
	var txtFile = new XMLHttpRequest();

txtFile.open("GET", "file://Users/shomaripope/projects/unit1Project/usa.txt", true);
allText = txtFile.responseText;
//allTextLines = allText.split(/\r\n|\n/);
//alert(allTextLines);
txtFile.onreadystatechange = function()
{
	if (txtFile.readyState == 4)
	{

			  // Makes sure it's found the file.
				allText = txtFile.responseText;
				allTextLines = allText.split(/\r\n|\n/);

				document.write(allText);
			} else { //alert("Didn't work"); 
			}

	}
txtFile.send(null)

