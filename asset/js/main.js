let toggleButton = document.querySelector('.site-header-toggler');

toggleButton.addEventListener('click' , () => {
  document.body.classList.toggle('dark-mode')
})