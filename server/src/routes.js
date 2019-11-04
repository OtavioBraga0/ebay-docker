const express = require("express");

const FavoriteController = require("./controllers/FavoriteController");

const routes = express.Router();

routes.post("/addFavorite", FavoriteController.store);
routes.get("/searchFavorite/:email", FavoriteController.show);
routes.get("/deleteFavorite/:email/:id", FavoriteController.delete);
routes.post("/editFavorite/:id", FavoriteController.edit);

routes.get("/searchForTime/:time", FavoriteController.emailList);


module.exports = routes;
