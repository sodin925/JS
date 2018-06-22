
var buttons = ['A','B','C','D','E'];
var lastButton = 0;

buttons.forEach(function(button){
    var newButton = document.createElement("button");
    newButton.innerText = button;
    // Click event
    newButton.onclick = function(event) {
        lastButton.disabled = false;
        lastButton = event.target;
        lastButton.disabled = true;
        // console.log(lastButton.innerText);

        htmlBody = document.getElementsByTagName("body");
        text = document.createElement("br")
        // htmlBody[0].append(text);
        // htmlBody[0].append(lastButton.innerText);
    }
    // Append it to body
    htmlBody = document.getElementsByTagName("body");
    htmlBody[0].append(newButton);

})



