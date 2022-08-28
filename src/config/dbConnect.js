import mongoose from "mongoose"

mongoose.connect("mongodb://mongodb:27017/team_api");

let db = mongoose.connection;

export default db;