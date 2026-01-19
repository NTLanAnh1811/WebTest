const nameInput = document.querySelector("#input__name")
const submitBtn = document.querySelector(".form-submit")

submitBtn.onclick = (e) => {
    e.preventDefault()
    checkEmpty(nameInput.value, nameInput)
}

function getMessage(msg, elm) {
    const msgElm = elm.nextElementSibling
    msgElm.textContent = msg
}

function toggleMessage(isValid, elm) {
    if (isValid) {
        elm.parentElement.classList.remove("invalid")
        getMessage("", elm)
    } else {
        elm.parentElement.classList.add("invalid")
    }
}

nameInput.onchange = (e) => {
    checkEmpty(e.target.value, nameInput)
}

function checkEmpty(val, elm) {
    if (val.trim().length <= 0) {
        toggleMessage(false, elm)
        getMessage("Vui lòng không để trống!", elm)
    } else {
        toggleMessage(true, elm)
    }
}
/* Không chỉnh sửa bất kì đoạn code nào ở trên */
/* Code từ đây */
nameInput.addEventListener("mouseenter", () => {
    checkEmpty(nameInput.value, nameInput)
})
nameInput.addEventListener("input", () => { 
    checkEmpty(nameInput.value, nameInput) 
})
const emailInput = document.querySelector("#input__email") 
const passInput = document.querySelector("#input__password") 
const typeagain = document.querySelector("#input__password-again") 
emailInput.addEventListener("mouseenter", () => { 
    checkEmpty(emailInput.value, emailInput)
})
emailInput.addEventListener("input", () => { 
    checkEmpty(emailInput.value, emailInput) 
}) 
passInput.addEventListener("mouseenter", () => { 
    checkEmpty(passInput.value, passInput) 
}) 
passInput.addEventListener("input", () => { 
    checkEmpty(passInput.value, passInput) 
}) 
typeagain.addEventListener("mouseenter", () => { 
    checkEmpty(typeagain.value, typeagain) 
}) 
typeagain.addEventListener("input", () => { 
    checkEmpty(typeagain.value, typeagain) 
})
submitBtn.addEventListener("click", function (e) {
    e.preventDefault() 
    const validates = [nameInput, emailInput, passInput, typeagain]
    let ktra = true
    validates.forEach(input => {
        checkEmpty(input.value, input);
        if (input.value.trim() === "") {
            ktra = false
        }
    })
    if (ktra) {
        alert("Đăng ký thành công!")
    }
})