// Dado un array de objetos llamado videojuegos, donde cada objeto representa 
// un videojuego con las propiedades: titulo, año, y genero

const videojuegos = [
    { titulo: "The Legend of Zelda: Breath of the Wild", año: 2017, genero: "Aventura" },
    { titulo: "Super Mario Odyssey", año: 2017, genero: "Plataformas" },
    { titulo: "The Witcher 3", año: 2015, genero: "RPG" },
    { titulo: "Cyberpunk 2077", año: 2020, genero: "RPG" },
    { titulo: "Minecraft", año: 2011, genero: "Sandbox" }
  ];
  

  // Usa un bucle para filtrar y mostrar solo los videojuegos lanzados después de 2015, puedes utilizar
  // un nuevo array donde almacenar solo los videojuegos que coincidan
  
let videojuegosPost2015 = [];

for (let i = 0; i < videojuegos.length; i++){
  if (videojuegos[i].año > 2015){
    videojuegosPost2015.push(videojuegos[i]);
  }
}
 
console.log(videojuegosPost2015.titulo);
  // Imprime el nuevo array por consola
  
  