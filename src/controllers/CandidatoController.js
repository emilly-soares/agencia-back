const Candidato = require("../models/Candidato");
module.exports = {

   async store(req, res) {
      const candidato = await Candidato.create(req.body);
      return res.json(candidato);
   },

   async list(req, res) {
      const candidato = await Candidato.find({});
      return res.json(candidato);
   },

   async index(req, res) {
      const candidato = await Candidato.findOne({ _id: req.params.id });
      return res.json(candidato);
   },

   async update(req, res) {
      const candidato = await Candidato.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(candidato);
   },

   async destroy(req, res) {
      await candidato.deleteOne({ _id: req.params.id });
      return res.json({ message: "Candidato excluído" });
   }
};