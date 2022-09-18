

function mainGames() {
  document.body.classList.remove('main-musics')
  document.body.classList.remove('main-movies')
  document.body.classList.add('main-games')
  document.body.style.setProperty('--gradient', 'linear-gradient(90deg, #be72fc 0%, #43e7ad 50.52%, #e2d45c 100%)')
}

function mainMovies() {
  document.body.classList.remove('main-games')
  document.body.classList.remove('main-musics')
  document.body.classList.add('main-movies')
  document.body.style.setProperty('--gradient', 'linear-gradient(90deg, #C91842 0%, #5CC2E2 100%)')
}

function mainMusics() {
  document.body.classList.remove('main-movies')
  document.body.classList.remove('main-games')
  document.body.classList.add('main-musics')
  document.body.style.setProperty('--gradient', 'linear-gradient(287.56deg, #1db954 0%, #191414 100%)')
}