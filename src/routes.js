const express = require("express");

const routes = express.Router();
const UsuarioController = require("./controllers/UsuarioController");
const CandidatoController = require("./controllers/CandidatoController");
//const EmpregoController = require("./controllers/EmpregoController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/usuario", UsuarioController.store);
//routes.get("/emprego", EmpregoController.index);
//routes.get("/emprego", EmpregoController.list);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.get("/usuario", UsuarioController.list);

routes.post("/candidato", CandidatoController.store);
routes.get("/candidato", CandidatoController.list);

//routes.post("/emprego", EmpregoController.store);


routes.get("teste", (req, res) => res.json({ ok: true }));

module.exports = routes;