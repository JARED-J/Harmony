'use strict'

const db = require('../server/db')
const {
  User,
  Hserver,
  Tchannel,
  Message,
  Hserver_users
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      userName: 'Cody115'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      userName: 'the Murph'
    }),
    User.create({
      email: 'bob@bob.com',
      password: '234',
      userName: 'Bob'
    })
  ])

  const hservers = await Promise.all([
    Hserver.create({
      title: 'Test1'
    }),
    Hserver.create({
      title: 'Bot server'
    }),
    Hserver.create({
      title: 'Harmony!'
    })
  ])

  const tchannels = await Promise.all([
    Tchannel.create({
      title: 'general',
      hserverId: 1
    }),
    Tchannel.create({
      title: 'general',
      hserverId: 2
    }),
    Tchannel.create({
      title: 'general',
      hserverId: 3
    }),
    Tchannel.create({
      title: 'rules',
      hserverId: 1
    }),
    Tchannel.create({
      title: 'rules',
      hserverId: 2
    }),
    Tchannel.create({
      title: 'rules',
      hserverId: 3
    })
  ])

  const messages = await Promise.all([
    Message.create({
      content: 'Hi welcome to the server!',
      tchannelId: 1,
      userId: 1
    }),
    Message.create({
      content: 'Hi welcome to the server!',
      tchannelId: 2,
      userId: 2
    }),
    Message.create({
      content: 'Hi welcome to the server!',
      tchannelId: 3,
      userId: 1
    })
  ])

  const hserverUsers = await Promise.all([
    Hserver_users.create({hserverId: 1, userId: 1}),
    Hserver_users.create({hserverId: 1, userId: 2}),
    Hserver_users.create({hserverId: 2, userId: 1}),
    Hserver_users.create({hserverId: 2, userId: 3}),
    Hserver_users.create({hserverId: 3, userId: 2}),
    Hserver_users.create({hserverId: 3, userId: 1})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${hservers.length} hservers`)
  console.log(`seeded ${tchannels.length} tchannels`)
  console.log(`seeded ${messages.length} messages`)
  console.log(`joined ${hserverUsers.length} users && servers`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
