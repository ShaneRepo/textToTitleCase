document.getElementById("submit").addEventListener("click", titleCase, false);
document.getElementById("result").value = titleCase();
function titleCase() {
    var str = document.getElementById("uString").value;
    var arrayOfStrings = str.split(" ");
    for(var i = 0; i < arrayOfStrings.length; i++){
        var placeholder = arrayOfStrings[i];
        var upLetter = placeholder.charAt[0].toUpperCase();
        placeholder = placeholder.slice(1,placeholder.length).toLowerCase();
        arrayOfStrings[i] = upLetter.concat(placeholder);
    }
    str = arrayOfStrings.join(' ');
    return str;
    
}


