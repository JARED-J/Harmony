const router = require('express').Router()
const {Message} = require('../db/models')
module.exports = router

router.get('/:cId', async (req, res, next) => {
  const cId = +req.params.cId
  try {
    const messagesByChannel = await Message.findAll({
      where: {
        tchannelId: cId
      }
    })
    res.json(messagesByChannel)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Message.create(req.body)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  const {id} = req.body
  try {
    await Message.destroy({
      where: {
        id: id
      }
    })
    res.send('Message successfully deleted.')
  } catch (err) {
    next(err)
  }
})
