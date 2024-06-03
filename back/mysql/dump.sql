USE MENU;


INSERT INTO PRODUCTO(nombre, foto, descripcion, precio, id_catego)VALUES("prueba", "prueba.jpg", "descripcion producto prueba", 12.4, 1);
INSERT INTO PRODUCTO(nombre, foto, descripcion, precio, id_catego)VALUES("Yakitori", "foto.jpg", "descripcion del Producto 2", 20.49, 1);
INSERT INTO PRODUCTO(nombre, foto, descripcion, precio, id_catego)VALUES("producto 3", "foto3.jpg", "descripcion del producto 3", 3.33, 1);

INSERT INTO VALORACION(id_usuario, id_producto, valor)VALUES(1,2,3);

INSERT INTO VALORACION(id_producto, id_usuario, valor)VALUES(3, 1, 5);