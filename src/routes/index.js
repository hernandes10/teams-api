import express from "express";
import teams from "./teamsRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Teams -  API"})
  })

  app.use(
    express.json(),
    teams
  )
}

export default routes