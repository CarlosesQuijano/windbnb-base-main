import data from "./data.js";
import dom from "./dom.js";


const datos = await data.getData();

const rooms = dom.$("#rooms");

console.log(datos);

datos.forEach(element => {
  const card = dom.newCard(element);

   rooms.appendChild(card);
})

