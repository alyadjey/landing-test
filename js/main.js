'use strict'
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#burgerButton').onclick = e => {
        document.querySelector('.navLinks').classList.toggle('burger__menu__position')
    }
    const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    const input = document.querySelector('#requestEmail')
    input.onfocus = () => {
        function isEmailValid(value) {
            return EMAIL_REGEXP.test(value)
        }

        function onInput() {
            if (isEmailValid(input.value)) {
                input.style.borderColor = '#507a36'
            } else {
                input.style.borderColor = '#df4e3c'
            }
        }
        input.addEventListener('input', onInput)
    }

})