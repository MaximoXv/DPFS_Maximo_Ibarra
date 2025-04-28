# Clostore

- Este proyecto va destinado a la venta de ropa para niños, adolecentes y adultos en Argentina.

- Soy Máximo Ibarra, un estudiante de 22 años en mi camino a volverme un desarrollador web profesional.

### Paginas de referencia

- [MercadoLibre](https://www.mercadolibre.com.ar/)
- [eBay](https://www.ebay.com/)
- [depop](https://www.depop.com/)
- [Equus](https://www.equus.com.ar/)
- [BENKA](https://www.benka.com.ar/)

### Colores

.color1 {#42c2d0}
.color2 {#08ae5e}
.color3 {#f3a4a1}
.color4 {#f8f8f9}
.color5 {#ffffff}
.color6 {#ebeef0}

### Fuente

[Fredoka](https://fonts.google.com/specimen/Fredoka)

### Wireframe Miro

[Clostore](https://miro.com/app/board/uXjVLJPWL2s=/?share_link_id=406764577758)

### Trello

[Trello](https://trello.com/b/emik3fvF/dpfsmaximoibarra)

#### Máximo Rubén Ibarra Vargas

# Instrucciones

- Crear la base de datos

```
sequelize db:create
```

- Sincronizar los modelos para que se creen las tablas.

- En `app.js` hay que descomentar `// await db.sequelize.sync({force: true});` y luego correr

```
npm start
```

- Volver a comentar `await db.sequelize.sync({force: true});`
- Para correr los seeds hay que correr el siguiente comando

```
sequelize db:seed:all
```
