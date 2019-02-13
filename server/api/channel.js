const router = require('express').Router()
const {Tchannel} = require('../db/models')
module.exports = router

router.get('/:sId', async (req, res, next) => {
  const sId = +req.params.sId
  try {
    const channelsByServer = await Tchannel.findAll({
      where: {
        hserverId: sId
      }
    })
    res.json(channelsByServer)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Tchannel.create(req.body)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  const {id} = req.body
  try {
    await Tchannel.destroy({
      where: {
        id: id
      }
    })
    res.send('Text Channel successfully deleted.')
  } catch (err) {
    next(err)
  }
})
