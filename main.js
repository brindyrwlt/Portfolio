const favicon = document.querySelector("#favicon");
const baseIcon = "http://127.0.0.1:5500/assets/img/duck_cursor.png"
const reversedIcon = "http://127.0.0.1:5500/assets/img/duck_cursor_reversed.png"
const audioFile = new Audio("./assets/audio/quack.mp3")
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

    audioFile.fastSeek(0)
    audioFile.play()
})


const form = document.querySelector('form');
const nomInput = document.querySelector('form #last-name');
const prenomInput = document.querySelector('form #first-name');
const emailInput = document.querySelector('form #mail');
const messageInput = document.querySelector('form #message');
const submitBtn = document.querySelector('form input[type=submit]');

function checkFormValidity() {
    const isValid =
        nomInput.value.trim() !== '' &&
        prenomInput.value.trim() !== '' &&
        emailInput.value.trim() !== '' &&
        messageInput.value.trim() !== '' &&
        emailInput.validity.valid;

    submitBtn.disabled = !isValid;
}

nomInput.addEventListener('input', checkFormValidity);
prenomInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
messageInput.addEventListener('input', checkFormValidity);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = nomInput.value;
    const prenom = prenomInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const destinataire = 'poirier.valentin@proton.me';

    const subject = `Message de ${prenom} ${nom}`;
    const body = `Bonjour,\n\nVous avez reçu un nouveau message de contact :\n\nNom : ${nom}\nPrénom : ${prenom}\nEmail : ${email}\n\nMessage :\n${message}`;

    window.location.href = `mailto:${destinataire}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;;

    form.reset();
    submitBtn.disabled = true;
});