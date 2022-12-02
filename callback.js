function loadScript(src) {
    let script = document.createElement("script")
    script.src = src;
    script.onload = function() {
        
    }
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

