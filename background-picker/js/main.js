document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('pink').onclick = partyPink
document.getElementById('orange').onclick = partyOrange

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
} 

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgb(214, 154, 164)'
  document.querySelector('body').style.colour = 'white'
}

function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'rgb(26, 19, 7)'
  document.querySelector('body').style.color = 'white'
}

