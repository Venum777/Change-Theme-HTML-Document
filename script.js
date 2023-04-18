const blackTheme = document.querySelector('.black')
const whiteTheme = document.querySelector('.white')
const clientTheme = document.querySelector('.clientTheme')
const color = document.querySelector('.color')

function switchTheme() {
    if (blackTheme.checked) {
        localStorage.setItem('color', `rgb(47, 47, 49)`)
    }
    if (whiteTheme.checked) {
        localStorage.setItem('color', `white`)
    }
    if (clientTheme.checked) {
        localStorage.setItem('color', `${color.value}`)
    }
    document.body.style.backgroundColor = `${localStorage.getItem('color')}`
}

document.body.style.backgroundColor = `${localStorage.getItem('color')}`

blackTheme.addEventListener('click', switchTheme)
whiteTheme.addEventListener('click', switchTheme)
clientTheme.addEventListener('click', switchTheme)