const router = require('express').Router()
const {Hserver, User} = require('../db/models')
module.exports = router

router.get('/:uId', async (req, res, next) => {
  const uId = +req.params.uId
  try {
    const userServers = await Hserver.findAll({
      include: [
        {
          model: User,
          required: true,
          through: {
            where: {
              userId: uId
            }
          }
        }
      ]
    })
    res.json(userServers)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Hserver.create(req.body)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  const {id, userId} = req.body
  try {
    await Hserver.destroy({
      where: {
        id: id,
        adminId: userId
      }
    })
    res.send('Hserver was successfully deleted.')
  } catch (err) {
    next(err)
  }
})
