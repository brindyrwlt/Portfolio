favicon = document.querySelector("#favicon");
baseIcon = "http://127.0.0.1:5500/assets/duck_cursor.png"
reversedIcon = "http://127.0.0.1:5500/assets/duck_cursor_reversed.png"

console.log(favicon.href);

setInterval(function () {
    if (favicon.href == baseIcon)
        favicon.href = reversedIcon
    else
        favicon.href = baseIcon
}, 1000)