function typeWriter(el) {
  const textArrey = el.innerHTML.split('')
  el.innerHTML = ''

  textArrey.forEach((latter, i) => {
    setTimeout(() => (el.innerHTML += latter), 200 * i)
  })
}

typeWriter(maquinaDeEscrever)
