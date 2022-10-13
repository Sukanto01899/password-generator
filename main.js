const passLength = document.querySelector(".pass-length div input"),
option = document.querySelectorAll('.pass-condition li input'),
screen = document.querySelector('#screen'),
passBtn = document.querySelector('.container button');

const updateLength = ()=>{
    document.querySelector('.pass-length div span').innerText = passLength.value
}
updateLength()

const word = {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    specialChar: '!@#$%^&*(){};><?/~',
    number: '1234567890'
}
const showPass = ()=>{
    let staticPassword = '';
    let length = passLength.value;
    let password = ''
    option.forEach(option => {
        if(option.checked){
            staticPassword += word[option.id]
        }
    })
    for(let i=0;i<length;i++){
        const random = Math.floor(Math.random() * staticPassword.length)
        password += staticPassword[random]
    }
    screen.value = password
}
showPass()

passBtn.addEventListener('click', showPass)
passLength.addEventListener('input', updateLength)