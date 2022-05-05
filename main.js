// a função executa direto na janela, previne erros ocasionais por falta de carregamento da página
window.addEventListener('scroll', onScroll)

onScroll() // executa uma primeira vez ao carregar a página

function onScroll() {
  showNavOnScroll()
  showBacktoTopButton()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBacktoTopButton() {
  if (scrollY > 500) {
    backtoTopButton.classList.add('show');
  } else {
    backtoTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}



// ScrollReveal Lib
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home stats, 
#services,
#services header,
#services .card
#about, 
#about header,
#about .content
#contact,
#contact header,
#contact .content
`);