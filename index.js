const { log } = console
log(window)

const menu = document.querySelector('.menu')
const menuSidebar = document.querySelector('.menu-sidebar')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const more = document.querySelector('.more')
const moreSidebar = document.querySelector('.more-sidebar')
// log(menuSidebar)
const navSecondary = document.getElementById('nav-secondary')
const logo = document.querySelector('.logo')

let newScrollY = 0
let prevScrollY = 0
window.addEventListener('scroll', () => {
  newScrollY = window.scrollY
  let delta = prevScrollY - newScrollY
  prevScrollY = newScrollY

  if (moreSidebar.classList.contains('show')) {
    if (newScrollY < 560) {
      navSecondary.classList.remove('show')
    } else if (newScrollY < 760) {
      navSecondary.classList.add('show')
    } else if (delta > 10) {
      navSecondary.classList.remove('showDown')
    } else if (delta < -10) {
      navSecondary.classList.add('showDown')
    }
  } else {
    if (newScrollY < 130) {
      navSecondary.classList.remove('show')
    } else if (newScrollY < 330) {
      navSecondary.classList.add('show')
    } else if (delta > 10) {
      navSecondary.classList.remove('showDown')
    } else if (delta < -10) {
      navSecondary.classList.add('showDown')
    }
  }



  log(
    // document.body.scrollHeight,
    // document.body.offsetHeight,
    // document.body.clientHeight,
    // window.innerHeight,
    window.pageYOffset,
    window.scrollY
  )
})

menu.addEventListener('click', () => {
  menu.children[1].classList.toggle('hide')
  menu.children[2].classList.toggle('show')
  menu.children[0].classList.toggle('show')
  logo.classList.toggle('show')
  menuSidebar.classList.toggle('show')
})

more.addEventListener('click', () => {
  minus.classList.toggle('show')
  plus.classList.toggle('hide')
  moreSidebar.classList.toggle('show')
})

menuSidebar.addEventListener('mousedown', (e) => {
  e.preventDefault()
  //  e.stopPropagation()
})
