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
