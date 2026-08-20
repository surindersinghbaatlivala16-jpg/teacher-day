/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {

        menuButton.textContent = "✕";

    } else {

        menuButton.textContent = "☰";

    }

});



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("show");

        menuButton.textContent = "☰";

    });

});



/* =====================================================
   ACTIVE NAVIGATION ITEM
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   DARK MODE
===================================================== */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "teacherTheme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "teacherTheme",
            "light"
        );

    }

});



/* =====================================================
   LOAD SAVED THEME
===================================================== */

if (
    localStorage.getItem("teacherTheme")
    === "dark"
) {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}



/* =====================================================
   TRIBUTE MESSAGE SYSTEM
===================================================== */

const tributeMessages = [

    "Thank you for turning questions into curiosity, curiosity into knowledge, and knowledge into possibilities. 🎓",

    "A great teacher does more than teach a subject — they help students discover their potential. 💡",

    "Behind many successful students is a teacher who encouraged them when they needed it most. ❤️",

    "Teachers plant the seeds of knowledge that continue to grow throughout our lives. 🌱",

    "To every teacher: thank you for your patience, guidance, encouragement and belief in your students. 🙏"

];


let messageIndex = 0;


const messageButton =
    document.getElementById("messageButton");


const tributeMessage =
    document.getElementById("tributeMessage");


messageButton.addEventListener("click", function () {

    messageIndex++;

    if (
        messageIndex >= tributeMessages.length
    ) {

        messageIndex = 0;

    }


    tributeMessage.style.opacity = "0";


    setTimeout(function () {

        tributeMessage.textContent =
            tributeMessages[messageIndex];

        tributeMessage.style.opacity = "1";

    }, 200);

});