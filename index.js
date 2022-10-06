
const jogador = document.querySelector('.jogador')
const jogador1 = document.getElementById('jogador1')
const jogador2 = document.getElementById('jogador2')
const btnStart = document.getElementById('btn-start')
const tabuleiro1 = document.querySelector('.tabuleiro')
const aside = document.querySelector('aside')
var selected
var player = "X"


var win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]

]

init()


function init() {
  selected = []

  jogador.innerText = `Vez do jogador: ${player}`
  const tabuleiro = document.querySelectorAll('.tabuleiro div').forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  })
}


btnStart.addEventListener('click', e => {

  if (jogador1.value === '' || jogador2.value === '') {

    alert('Digite os nomes do jogadores!!')

  } else {


    jogador1.disabled = true
    jogador2.disabled = true
    tabuleiro1.style.display = 'flex'
    jogador.style.display = 'block'
    aside.style.display = 'none'
  }


})

function newMove(e) {
  const index = e.target.getAttribute("id");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  jogador.innerText = `Vez do jogador: ${player}`
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of win) {
    if (pos.every((item) => items.includes(item))) {
      if (playerLastMove === 'X') {
        alert("O JOGADOR " + jogador1.value + " GANHOU!");

      } else {
        alert("O JOGADOR " + jogador2.value + " GANHOU!");
      }
      jogador1.disabled = false
      jogador2.disabled = false
      jogador1.value = ''
      jogador2.value = ''
      tabuleiro1.style.display = 'none'
      aside.style.display = 'flex'
      jogador.style.display = 'none'
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}

