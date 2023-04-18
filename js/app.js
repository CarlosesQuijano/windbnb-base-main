import data from "./data.js";
import dom from "./dom.js";


const datos = await data.getData();

const rooms = dom.$("#rooms");

console.log(datos);

datos.forEach(element => {
  const card = dom.newCard(element);

   rooms.appendChild(card);
})

const searchProduct = dom.$('#floatingInputGrid');

searchProduct.addEventListener('keyup', () => {
  let filtro = searchProduct.value;

  const filtered = filtro === '' ? datos : data.filterByName(datos, filtro); 

  dom.showCards(filtered);
})

dom.showCards(datos);

