function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with SRC: " + src)
        callback(src);
    }
    document.body.appendChild(script);
}

function hello(src){
    alert('Hello World', + src);
}

function goodmorning(){
    alert('Goodmorning')
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", hello);

