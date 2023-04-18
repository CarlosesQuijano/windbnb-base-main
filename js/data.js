/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)
   

  return data;
}


const filtrar = (arr, filtro) => {
  
  let filtered = arr.filter( elem => elem.city === filtro)

  return filtered
};

const filterByName = (arr, filtro) => {
  
  let filtered = arr.filter( elem => {
    return elem.city.toLowerCase().includes(filtro.toLowerCase()) || elem.city.toLowerCase().includes(filtro.toLowerCase())
  })

  console.log(filtered);
  return filtered
}

export default {
  getData,
  filtrar,
  filterByName,
  
} 