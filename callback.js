function loadScript(src) {
    let script = document.createElement("script")
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with SRC: " + src)
    }
    document.body.appendChild(script);
}

function hello(){
    alert("Hello World");
}

function goodmorning(){
    alert('Goodmorning')
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

