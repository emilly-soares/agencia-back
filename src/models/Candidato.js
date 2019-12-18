const { Schema, model } = require("mongoose");

const CandidatoSchema = new Schema(


   {
      nome: {
         type: String,
         required: true
      },

      email: {
         type: String,
         unique: true,
         required: true
      },

      escolaridade: {
         type: String,
         required: true
      },

      idade: {
         type: Number,
         required: true
      },

      emprego: {
         type: String,
         required: true
      }

   },


   {
      timestamps: true
   }

);

module.exports = model("Candidato", CandidatoSchema);