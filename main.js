let result = document.getElementById("result");
const colors = ["red", "yellowgreen", "purple", "orange" , "blue", "yello"]
setInterval(function () {
    let random = Math.floor(Math.random() * 6);
    result.style.color = colors[random];
}, 200)