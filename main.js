const favicon = document.querySelector("#favicon");
const baseIcon = "http://127.0.0.1:5500/assets/img/duck_cursor.png"
const reversedIcon = "http://127.0.0.1:5500/assets/img/duck_cursor_reversed.png"
const body = document.body

console.log(favicon.href);

setInterval(function () {
    if (favicon.href === baseIcon)
        favicon.href = reversedIcon
    else
        favicon.href = baseIcon
}, 1000)


// Dark mode

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});

const toggleButton = document.querySelector("#duck")

toggleButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})