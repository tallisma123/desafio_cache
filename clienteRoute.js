//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();

//get post put delete

router.get("/cliente", (req, res) => {
    res.send("Chegou aqui, estamos listando todos os cliente...");
});

router.post("/cliente", (req, res) => {
    res.send("Chegou aqui, estamos criando um novo cliente...");

});

router.put("/cliente/:id", (req, res) => {
        const { id } = req.params;
    res.send(`Chegou aqui, estamos atualizando um novo cliente ${id} ...`);

});

router.delete("/cliente/:id", (req, res) => {
        const { id } = req.params;
    res.send(`Chegou aqui, estamos criando um novo cliente ${id} ...`);

});

module.exports = router;
