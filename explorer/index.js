function inBetween(val1, val2, num) {
  return num > val1 && num < val2
}

module.exports = class Explorer {
  constructor(world) {
    this.us = world.you
    this.world = world
  }

  isFacingEntity(entity) {
    if (us.x === entity.x) {
      if (us.direction === 'right') {
        const maxRange = us.x + world.weaponRange
        if (inBetween(us.x, maxRange, entity.x)) {
          return true
        }
        return false
      } else if (us.direction === 'left') {
        const maxRange = us.x - world.weaponRange
        if (inBetween(us.x, maxRange, entity.x)) {
          return true
        }
        return false
      } else {
        return false
      }
    } else if (us.y === entity.y) {
      if (us.direction === 'top') {
        const maxRange = us.y + world.weaponRange
        if (inBetween(us.y, maxRange, entity.y)) {
          return true
        }
        return false
      } else if (us.direction === 'bottom') {
        const maxRange = us.y - world.weaponRange
        if (inBetween(us.y, maxRange, entity.y)) {
          return true
        }
        return false
      } else {
        return false
      }
    } else {
      return false
    }
  }
}