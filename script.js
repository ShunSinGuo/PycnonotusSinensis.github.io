const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const menuOpen = document.querySelector(".menu");
const options = document.querySelectorAll(".option");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
    menuOpen.classList.toggle("active");
});

options.forEach((option) => {
    option.addEventListener("click", (event) => {
        if(navigation.classList.contains("active") && menuOpen.classList.contains("active")) {
            navigation.classList.remove("active");
            menuOpen.classList.remove("active");
        }
    })
})
