let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null) 
}

if(darkmode === "active") enableDarkmode()
 
themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


        // moved directly to section everytime a button is clicked

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile menu after click
        document.getElementById('nav-links').classList.remove('show');
    });
});

const toggleBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})