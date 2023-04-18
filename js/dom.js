const $ = (selector) => document.querySelector(selector);


const newCard = (obj) => {
  const div = document.createElement('div');
  div.className = 'cards';



  div.innerHTML = `
  <div class="col">
  <img class=" img2  h-100 w-100 rounded-4" src="${obj.photo}" alt="${obj.title}">
  <div class="  caja2 d-flex justify-content-between">
  <span class=" super-host ${!obj.superHost ? 'hide':''}"> Super Host </span>
  <span class="apartment"> ${obj.type} ${obj.beds >=1 ? `. ${obj.beds} beds`:""} </span>
  <span class=" star material-symbols-outlined"><span>star</span><span class="nota">${obj.rating}</span>
  </div>
  <span class="info2 d-flex align-items-center">${obj.title}</span>
</div>

  `
return div;
}

const showCards = (arr) => {

  rooms.innerHTML = '';

  arr.forEach( element => {
    // Creamos el card con la informacion del elemento
    const card = newCard(element);
  
    // Agregamos el card al elemento products
    rooms.appendChild(card);
  })
}


export default {
  newCard,
  $,
  showCards,

 
}