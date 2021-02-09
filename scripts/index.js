alert("Hello World... This is First JavaScript File....")

setTimeout(function() {
    document.getElementsByTagName("h1")[1].style.color = "green";
}, 5000)

setTimeout(function() {
    document.getElementsByTagName("h1")[1].style.color = "yellow";
}, 10000)

setTimeout(function() {
    document.getElementsByTagName("h1")[1].style.color = "brown";
}, 15000)