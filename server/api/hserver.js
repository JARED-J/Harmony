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
