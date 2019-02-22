// ~~~~~~~~~~~~~~~~~~~~~~Menu Bar~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

const hamburgerOpen = document.querySelector('.hamburger-open')
const hamburgerClosed = document.querySelector('.hamburger-closed')
const menuOptions = document.querySelector('.menu-options')
const navLink = document.querySelector('.home')


hamburgerOpen.addEventListener('click', event => {
    console.log('click is working')
    hamburgerClosed.style.display = "initial"
    hamburgerOpen.style.display = "none"
    menuOptions.style.visibility = "visible"
})

hamburgerClosed.addEventListener('click', event => {
    console.log('click is working')
    hamburgerClosed.style.display = "none"
    hamburgerOpen.style.display = "initial"
    menuOptions.style.visibility = "hidden"
})

navLink.addEventListener('click', event => {
    console.log('click work')
    menuOptions.style.visibility = "hidden"
    hamburgerOpen.style.display = "initial"
    hamburgerClosed.style.display = "none"
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
 