const _ = require('lodash')
const Explorer = require('../explorer')

const COMMANDS = {
  TURN_LEFT: 'turn-left',
  TURN_RIGHT: 'turn-right',
  FORWARD: 'forward',
  REVERSE: 'reverse',
  FIRE: 'fire'
}

function getRandomCommand () {
  return {
    command: _.sample(COMMANDS)
  }
}

function facingAnyWall (explorer, world) {
  return world.walls.some(wall => {
    return explorer.isFacingEntity(wall)
  })
}

function shoot() {
  return {
    command: COMMANDS.FIRE
  }
}

function randomMovement () {
  return {
    command: _.sample([
      COMMANDS.TURN_LEFT,
      COMMANDS.TURN_RIGHT,
      COMMANDS.FORWARD
    ])
  }
}

function runRound (world) {
  if (!world) { throw Error('Missing world data!')}

  const explorer = new Explorer(world)
  const enemy = world.enemies[0]

  if (explorer.isFacingEntity(enemy)) {
    return shoot() // TODO implement
  } else if (facingAnyWall(explorer, world)) {
    return shoot() // TODO implement
  } else {
    return randomMovement()
  }
}

module.exports = {
  getRandomCommand,
  runRound
}
