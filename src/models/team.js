import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    flag: {type: String, default:'no_image.jpg'},
    country: {type: String, required: true},
    country_flag: {type: String, default:'no_image.jpg'},
      country_base: {type: String, required: true},
  }
);

const teams = mongoose.model('teams', teamSchema);

export default teams;