import express from "express";
import TeamController from "../controllers/teamsController.js";

const router = express.Router();

router
  .get("/teams", TeamController.listarTeams)
  .get("/teams/:id", TeamController.listarTeamById)
  .post("/teams", TeamController.cadastrarTeam)
  .put("/teams/:id", TeamController.atualizarTeam)
  .delete("/teams/:id", TeamController.excluirTeam)

export default router;  