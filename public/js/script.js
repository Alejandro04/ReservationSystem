let button = document.getElementById("action")

button.addEventListener("click", function () {
    getData()
 })
 

function getData(){
    let validateName = document.getElementById("validate-name")
    let validateLastName = document.getElementById("validate-lastName")
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value

    validate(name, validateName, lastName, validateLastName)
}

function validate(name, validateName, lastName, validateLastName){

    if (name) {
        validateName.classList.remove("validate-text-active")
        validateName.className = ("validate-text-inactive")
    }else{
        validateName.classList.remove("validate-text-inactive")
        validateName.className = ("validate-text-active")
    }
    if (lastName) {
        validateLastName.classList.remove("validate-text-active")
        validateLastName.className = ("validate-text-inactive")
    }else{
        validateLastName.classList.remove("validate-text-inactive")
        validateLastName.className = ("validate-text-active")
    }

    if(name && lastName){
        reserve()
    }
}

function reserve(){
    console.log("reservando..")
}
