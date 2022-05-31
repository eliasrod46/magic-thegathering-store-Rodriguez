const items = [
  {
    id: 1,
    title: "llanura",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 123,
    pictureUrl: "/img/productos/mana_llanura.jpg",
    category: "cartas",
    stock: 5,
  },
  {
    id: 2,
    title: "Flor de loto negra",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 35000,
    pictureUrl: "/img/productos/blacklotus.jpg",
    category: "cartas",
    stock: 1,
  },
  {
    id: 3,
    title: "Hecatombe",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 5000,
    pictureUrl: "/img/productos/hecatombre.jpg",
    category: "cartas",
    stock: 0,
  },
  {
    id: 4,
    title: "15 Cartas Kaldheim",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 500,
    pictureUrl: "/img/productos/booster1.jpg",
    category: "sobres",
    stock: 50,
  },
  {
    id: 5,
    title: "15 Cartas Midnight",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 500,
    pictureUrl: "/img/productos/booster2.jpg",
    category: "sobres",
    stock: 50,
  },
  {
    id: 6,
    title: "Rakdos Vampires",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 500,
    pictureUrl: "/img/productos/pack1.jpg",
    category: "pack",
    stock: 50,
  },
  {
    id: 7,
    title: "Mono Red Aggro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 500,
    pictureUrl: "/img/productos/pack2.jpg",
    category: "pack",
    stock: 50,
  },
  {
    id: 8,
    title: "Crimson Vow",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 500,
    pictureUrl: "/img/productos/pack3.jpg",
    category: "pack",
    stock: 50,
  },
];

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items.map((item) => {
        if (item.id == id) {
          resolve(item);
        }
      });
      reject({ mensaje: "Articulo no encontrado" });
    }, 10);
  });
};

export const getItems = (id) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!id){
        //no recibo category envio todo el array
        resolve(items);
      }else{

        //filtro por category
        const categroyitems = items.filter(
          (item) => item.category == id)
        
          resolve(categroyitems);

      }
    }, 10);
  });












};

export default items;
