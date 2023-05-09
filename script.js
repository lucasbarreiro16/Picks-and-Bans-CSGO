const team1 = "1";
const team2 = "2";
let turn = team1;

let mapPool = ["Train", "Mirage", "Cache", "Inferno", "Cobblestone", "Ancient", "Anubis", "Dust 2", "Nuke", "Overpass", "Vertigo"];

const turnText = document.querySelector('#turnText');
turnText.innerText = `É a vez da equipe ${turn} banir o mapa`;

const maps = document.querySelectorAll('.card');

function chooseMap(event) {
  console.log(event.currentTarget);
  if(turn == team1) {
    turn = team2;
  }
  else {
    turn = team1;
  }

  turnText.innerText = `É a vez da equipe ${turn} banir o mapa`;

  event.currentTarget.classList.add('selected');

  event.currentTarget.removeEventListener("click", chooseMap);

  event.currentTarget.querySelector('.confirmation').innerText = "Banido";

  const clickedMap = event.currentTarget.querySelector('.map_name').innerText;

  mapPool = mapPool.filter(map => map != clickedMap);

  if(mapPool.length == 1) {
    const decidedMap = document.querySelector('.card:not(.selected)');
    decidedMap.classList.add('picked');
    decidedMap.classList.add('disable-hover');
    decidedMap.removeEventListener('click', chooseMap);

    turnText.innerText = `O mapa da partida será ${mapPool}`;
  }
}

for(let index = 0; index < maps.length; index++) {
  maps[index].addEventListener("click", chooseMap)
}

