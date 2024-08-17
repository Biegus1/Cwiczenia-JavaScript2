const boxBend = document.querySelector('div#band')

const p = document.createElement('p')
const link = document.createElement('a')
p.innerText = 'Nowy super Paragraf!!!!!'
link.innerText = 'Przekierowanie do Google.com'

p.classList.add('active')
p.classList.add('active2')
p.classList.remove('active')

link.setAttribute('href', 'https://www.google.pl/') 
//link.removeAttribute('href')
link.id = 'Super-link'

boxBend.appendChild(p)
boxBend.appendChild(link)
