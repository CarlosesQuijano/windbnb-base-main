const getData = async () => {
    // Obytener los datos del archivo 'stays.json'
    const data = fetch('./stays.json')
      .then(response => response.json())
      .then( json => json)
     
  
    return data;
  }
  
  
  
  
  const $ = (selector) => document.querySelector(selector);
  
  //Traemos el elemeto 
  const viajes = $('#imagenes');
  
  //Crear elemento 
  
  const newE = tag => document.createElement(tag);
  
  const newCard = (obj) => {
      const div = newE('div');
      div.className = 'col';
  
  
      div.innerHTML = `<!-- Aqui van los cards, cada uno debe llevar la clase 'col' -->
      <div class="col">
        <img class="w-100 h-100 rounded-4" src="${obj.photo}" alt="${obj.title}">
        <div class=" caja2 d-flex justify-content-between">
        <span class="super-host">${obj.superHost}</span>
        <span class="apartment">${obj.type}${obj.beds}</span>
        <span class=" star material-symbols-outlined"><span>star</span><span class="nota">${rating}</span>
        </div>
        <span class="info2 d-flex align-items-center">Stylist apartment in center of the city</span>
     </div>
     `
  
     return div
  
  }
  
  const showCards = (arr) => {
  
      viajes.innerHTML = '';
    
      arr.forEach( element => {
        // Creamos el card con la informacion del elemento
        const card = newCard(element);
      
        // Agregamos el card al elemento products
        viajes.appendChild(card);
      })
    }
  
  
   export default{
      newCard,
      $,
   } 