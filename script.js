```javascript
/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navigation =
    document.getElementById("navigation");


menuBtn.addEventListener("click", function () {

    navigation.classList.toggle("active");


    const icon =
        menuBtn.querySelector("i");


    if (navigation.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");


        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =====================================================
   SECRET.TXT
===================================================== */

const secretButton =
    document.getElementById("secretButton");


const secretBox =
    document.getElementById("secretBox");


secretButton.addEventListener("click", function () {

    secretBox.classList.toggle("show");


    if (secretBox.classList.contains("show")) {

        secretButton.textContent =
            "✳ close secret.txt";

    }

    else {

        secretButton.textContent =
            "✳ a little something for the curious";

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(25px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});
```
