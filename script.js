iam = ["Software Engineer.", "Web Designer.", "Artist."]
var counter=0;

setInterval(function button(){
    counter++;
    if (counter >= iam.length) {
        counter = 0;
    }
    document.getElementById("Whatami").innerText = iam[counter];
}, 5000)

