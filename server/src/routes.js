const express = require("express");

const FavoriteController = require("./controllers/FavoriteController");
const EmailController = require("./controllers/EmailController");

const routes = express.Router();

EmailController.index({
    time: 2
})

EmailController.index({
    time: 10
})

EmailController.index({
    time: 30
})

routes.post("/addFavorite", FavoriteController.store);
routes.get("/searchFavorite/:email", FavoriteController.show);
routes.get("/deleteFavorite/:email/:id", FavoriteController.delete);
routes.post("/editFavorite/:id", FavoriteController.edit);

routes.get("/searchForTime/:time", FavoriteController.emailList);


module.exports = routes;
