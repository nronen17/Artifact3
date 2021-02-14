function draw() {
    var height = parseInt(document.getElementById("height").value);
    var colorOdd = document.getElementById("colorOdd").value;
    var colorEven = document.getElementById("colorEven").value;
    var Symbol = document.getElementById("Symbol").value;

    var oddHTML = `<span style='color: ${colorOdd};'> ${Symbol} </span>`;
    var evenHTML = `<span style= 'color: ${colorEven};'> ${Symbol} </span>`;
    // Maintains spacing with different symbols.
    var space = `<span style='color: rgba(0, 0, 0, 0);'> ${Symbol} </span>`

    var output = "";
    for(var i = 1; i < height + 1; i++){
        var spaces = height - i;

        

        for(var j = 0; j < spaces; j++){
            output += space;
        }
        for(var j = 0; j < i; j++){
            if(j % 2 == 0){
                var colorHTML = evenHTML;
            }
            else {
                var colorHTML = oddHTML;
            }
            output += colorHTML;
        }
        for(var j = 0; j < i; j++){
            if(j % 2 == 0){
                var colorHTML = evenHTML;
            }
            else {
                var colorHTML = oddHTML;
            }
            output += colorHTML;
        }
        for(var j = 0; j < spaces; j++){
            output += space;
        }
        


        output += "<br>";
    }
    for(var i = 1; i < height + 1; i++){
        var spaces = height - i;

       
        for(var j = 0; j < i; j++){
            output += space;
        }
        for(var j = 0; j < spaces; j++){
            if(j % 2 == 0){
                var colorHTML = evenHTML;
            }
            else {
                var colorHTML = oddHTML;
            }
            output += colorHTML;
        }
        for(var j = 0; j < spaces; j++){
            if(j % 2 == 0){
                var colorHTML = evenHTML;
            }
            else {
                var colorHTML = oddHTML;
            }
            output += colorHTML;
        }
        for(var j = 0; j < i; j++){
            output += space;
        }
      
        


        output += "<br>";
    }

    document.getElementById("output").innerHTML = output;

    console.log(output)
}

document.getElementById("drawButton").addEventListener('click', draw);