window.addEventListener('load', () => {
  setTimeout(() => {
    const fadeComponent = document.getElementById('fadeComponent')
    if (!fadeComponent) return
    fadeComponent.style.transition = 'opacity 7.5s ease-in'
    fadeComponent.style.opacity = '0'
  }, 0)
})