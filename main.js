function titleCase() {
    var str = document.getElementById("userString").value;
    var answer = document.getElementById("userResult");
    var arrayOfStrings = str.split(" ");
    for(var i = 0; i < arrayOfStrings.length; i++){
        var placeholder = arrayOfStrings[i];
        var upLetter = placeholder.charAt[0].toUpperCase();
        placeholder = placeholder.slice(1,placeholder.length).toLowerCase();
        arrayOfStrings[i] = upLetter.concat(placeholder);
    }
    str = arrayOfStrings.join(' ');
    console.log(str);
    /*answer.value = str.toString();*/
    document.getElementById("userResult").value = str;
    return str;
    /*return document.getElementById("result").value = str;*/
}
document.getElementById("submit").addEventListener("click", titleCase, false);




