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
