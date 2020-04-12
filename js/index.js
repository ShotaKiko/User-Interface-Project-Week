// ~~~~~~~~~~~~~~~~~~~~~~Menu Bar~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

const hamburgerOpen = document.querySelector('.hamburger-open')
const hamburgerClosed = document.querySelector('.hamburger-closed')
const menuOptions = document.querySelector('.menu-options')
//const serviceMenuOptions = document.querySelector('.serviceMenuOptions')

const navLink = document.querySelector('.home')


hamburgerOpen.addEventListener('click', event => {
    console.log('click is working')
    hamburgerClosed.style.display = "initial"
    hamburgerOpen.style.display = "none"
    menuOptions.style.visibility = "visible"
    //serviceMenuOptions.style.visibility = "visible"
})

hamburgerClosed.addEventListener('click', event => {
    console.log('click is working')
    hamburgerClosed.style.display = "none"
    hamburgerOpen.style.display = "initial"
    menuOptions.style.visibility = "hidden"
    //serviceMenuOptions.style.visibility = "hidden"
})

navLink.addEventListener('click', event => {
    console.log('click work')
    menuOptions.style.visibility = "hidden"
    //serviceMenuOptions.style.visibility = "hidden"
    hamburgerOpen.style.display = "initial"
    hamburgerClosed.style.display = "none"
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
 //Services component~~~~~~~~~~~~~~~~~~~~~~~~~


class TabLink {
    constructor(element) {
      this.element = element
      this.data = this.element.dataset.tab
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click',this.select.bind(this))
      this.element.addEventListener('click', e => console.log(' a tab has been clicked'))
    }
  
    select() {
      const links = document.querySelectorAll('.tabs-link')
      links.forEach(link => link.classList.remove('tabs-link-selected'));
      this.element.classList.add('tabs-link-selected')
      this.tabItem.select()
    }
  }
  
class TabItem {
    constructor(element) {
      this.element = element
    }
  
    select() {
    const items = document.querySelectorAll('.tabs-item')
      items.forEach(element => element.classList.remove("tabs-item-selected"))
      this.element.classList.add('tabs-item-selected')
    }
  }

let links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link))


// let hoverlinks = document.querySelector('.tabs-links')

// hoverlinks.addEventListener('mouseover', event =>{
//   hoverlinks.style.color = "red"
//   console.log('hover mouseover')
// })