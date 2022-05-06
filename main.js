// a função executa direto na janela, previne erros ocasionais por falta de carregamento da página
window.addEventListener('scroll', onScroll)

onScroll() // executa uma primeira vez ao carregar a página

function onScroll() {
  showNavOnScroll()
  showBacktoTopButton()
  
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // Verifica se passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // Verifica se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) // passa o obj seção como string

  // Adiciona e remove a classe active do menu ao passar pela sua seção
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

// Exibe o menu fixo ao rolar a página do topo
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

// Abre e fecha o menu hamburger
function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

// Exibe o botão de voltar ao topo ao rolar até determinada distância do topo
function showBacktoTopButton() {
  if (scrollY > 500) {
    backtoTopButton.classList.add('show');
  } else {
    backtoTopButton.classList.remove('show');
  }
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