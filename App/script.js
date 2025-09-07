// let darkmode = localStorage.getItem('darkmode')
// const themeSwitch = document.getElementById('theme-switch')

// const enableDarkmode = () => {
//     document.body.classList.add('darkmode')
//     localStorage.setItem('darkmode', 'active')
// }

// const disableDarkmode = () => {
//     document.body.classList.remove('darkmode')
//     localStorage.setItem('darkmode', null) 
// }

// if(darkmode === "active") enableDarkmode()
 
// themeSwitch.addEventListener("click", () =>{
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode()
// })

 const themeSwitch = document.getElementById("theme-switch");

    themeSwitch.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark"); // ✅ fix here
    } else {
        document.documentElement.classList.remove("dark"); // optional: ensure light mode default
    }
    

    // Mobile menu toggle
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll("#mobile-menu .menu-link");

    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
  
    });

    menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // email js auto reply
 (function () {
    emailjs.init("kkv7mKUnTyZCdiQoY"); // 🔑 Replace with your EmailJS Public Key
  })();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_2dcv7sj", "template_lli15wk", this)
      .then(() => {
        status.innerHTML = "✅ Message sent successfully!";
        status.classList.add("text-green-600");
        form.reset();
      }, (err) => {
        status.innerHTML = "❌ Failed to send message. Try again.";
        status.classList.add("text-red-600");
        console.error("EmailJS Error:", err);
      });
  });