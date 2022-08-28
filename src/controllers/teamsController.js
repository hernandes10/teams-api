import teams from "../models/team.js";

class teamController {

    static listarTeams = (req, res) => {
        teams.find((err, teams) => {
          res.status(200).json(teams)
      })
      }
    
      static listarTeamById = (req, res) => {
        const id = req.params.id;
    
        teams.findById(id, (err, teams) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do teams não localizado.`})
          } else {
            res.status(200).send(teams);
          }
        })
      }
    
      static cadastrarTeam = (req, res) => {
        let team = new teams(req.body);
    
        team.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar teams.`})
          } else {
            res.status(201).send(team.toJSON())
          }
        })
      }
    
      static atualizarTeam = (req, res) => {
        const id = req.params.id;
    
       teams.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'teams atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
    
      static excluirTeam = (req, res) => {
        const id = req.params.id;
    
       teams.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'teams removido com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
    
    }

export default teamController