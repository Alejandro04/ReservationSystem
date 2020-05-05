let button = document.getElementById("icon")
let links = document.getElementById("links")
let svgHero = document.getElementById("svgHero")
let skillsItem = document.getElementById("skillsItem")
let serviceItem = document.getElementById("serviceItem")
let contactItem = document.getElementById("contactItem")
let workItem = document.getElementById("workItem")
let count = 0

button.addEventListener("click", function () {
    if (count === 0) {
        links.className = ("links active")
        if (svgHero) {
            svgHero.classList = ("svgHeroInactive")
        }
        count = 1
    } else {
        links.classList.remove("active")
        links.className = ("links inactive")
        if (svgHero) {
            svgHero.classList.remove("svgHeroInactive")
        }
        count = 0
    }
})

skillsItem.addEventListener("click", function () {
    if (count === 0) {
        links.className = ("links active")
        if (svgHero) {
            svgHero.classList = ("svgHeroInactive")
        }
        count = 1
    } else {
        links.classList.remove("active")
        links.className = ("links inactive")
        if (svgHero) {
            svgHero.classList.remove("svgHeroInactive")
        }
        count = 0
    }
})

serviceItem.addEventListener("click", function () {
    if (count === 0) {
        links.className = ("links active")
        if (svgHero) {
            svgHero.classList = ("svgHeroInactive")
        }
        count = 1
    } else {
        links.classList.remove("active")
        links.className = ("links inactive")
        if (svgHero) {
            svgHero.classList.remove("svgHeroInactive")
        }
        count = 0
    }
})

contactItem.addEventListener("click", function () {
    if (count === 0) {
        links.className = ("links active")
        if (svgHero) {
            svgHero.classList = ("svgHeroInactive")
        }
        count = 1
    } else {
        links.classList.remove("active")
        links.className = ("links inactive")
        if (svgHero) {
            svgHero.classList.remove("svgHeroInactive")
        }
        count = 0
    }
})

workItem.addEventListener("click", function () {
    if (count === 0) {
        links.className = ("links active")
        if (svgHero) {
            svgHero.classList = ("svgHeroInactive")
        }
        count = 1
    } else {
        links.classList.remove("active")
        links.className = ("links inactive")
        if (svgHero) {
            svgHero.classList.remove("svgHeroInactive")
        }
        count = 0
    }
})