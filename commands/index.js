const _ = require('lodash')

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

module.exports = {
  getRandomCommand
}
