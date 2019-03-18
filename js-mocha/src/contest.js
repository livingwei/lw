
var Item = [
  {
    shopName: 'Sulfuras',
    SellIn: 'always',
    Quality: 80
  },
  {
    shopName: 'AgedBrie',
    SellIn: 30,
    Quality: 0
  },
  {
    shopName: 'Backstagepasses',
    SellIn: 'always',
    Quality: 30
  },
  {
    shopName: 'other',
    SellIn: 30,
    Quality: 30
  }
]
class Contest {
  totalWay (nameType, dateLine, cpType) {
    for (var i = 0; i < Item.length; i++) {
      if (Item[i].shopName === nameType) {
        if (nameType === 'Sulfuras') {
          return this.Sulfuras(Item[i], dateLine, cpType)
        }
        if (nameType === 'AgedBrie') {
          return this.AgedBrie(Item[i], dateLine, cpType)
        }
        if (nameType === 'Backstagepasses') {
          return this.Sulfuras(Item[i], dateLine, cpType)
        }
        if (nameType === 'other') {
          return this.Sulfuras(Item[i], dateLine, cpType)
        }
      }
    }
  }
  Sulfuras (ItemOne, dateLine, cpType) {
    if (cpType === 'SellIn') {
      return ItemOne.SellIn
    } else if (cpType === 'Quality') {
      return ItemOne.Quality
    }
  }
  AgedBrie (ItemTwo, dateLine, cpType) {
    if (dateLine > ItemTwo.SellIn) {
      if (cpType === 'SellIn') {
        return ItemTwo.SellIn
      } else if (cpType === 'Quality') {
        return ItemTwo.Quality
      }
    } else if (dateLine > 0) {
      if (cpType === 'SellIn') {
        return dateLine
      } else if (cpType === 'Quality') {
        if (ItemTwo.Quality * 2 - dateLine >= 50) {
          return 50
        } else {
          return ItemTwo.Quality * 2 - dateLine
        }
      }
    } else {
      if (cpType === 'SellIn') {
        return 0
      } else if (cpType === 'Quality') {
        if (ItemTwo.Quality * 2 + 2 * dateLine > 0) {
          return ItemTwo.Quality * 2 + 2 * dateLine
        } else {
          return 0
        }
      }
    }
  }
  BackstagePasses(ItemThree, dateLine, cpType) {
    if (dateLine > 10) {
      if (cpType === 'SellIn') {
        return dateLine
      } else if (cpType === 'Quality') {
        if (ItemThree.Quality * 2 - dateLine >= 50) {
          return 50
        } else {
          return ItemThree.Quality * 2 - dateLine
        }
      }
    } else if (dateLine <= 10) {
      if (cpType === 'SellIn') {
        return dateLine
      } else if (cpType === 'Quality') {
        if (ItemThree.Quality * 2 - 10 + (10 - dateLine) * 2 >= 50) {
          return 50
        } else {
          return ItemThree.Quality * 2 - 10 + (10 - dateLine) * 2
        }
      }
    } else if (dateLine <= 5) {
      if (cpType === 'SellIn') {
        return dateLine
      } else if (cpType === 'Quality') {
        if (ItemThree.Quality * 2 - 10 + (10 - dateLine) * 2 - 5 + (5 - dateLine) * 3>= 50) {
          return 50
        } else {
          return ItemThree.Quality * 2 - 10 + (10 - dateLine) * 2 - 5 + (5 - dateLine) * 3
        }
      }
    } else {
      if (cpType === 'SellIn') {
        return 0
      } else if (cpType === 'Quality') {
        return 0
      }
    }
  }
  alwaysShop (ItemFour, dateLine, cpType) {
    if (dateLine > 0) {
      if (cpType === 'SellIn') {
        return dateLine
      } else if (cpType === 'Quality') {
        if (ItemTwo.Quality * 2 - dateLine >= 50) {
          return 50
        } else {
          return ItemTwo.Quality * 2 - dateLine
        }
      }
    } else {
      if (cpType === 'SellIn') {
        return 0
      } else if (cpType === 'Quality') {
        if (ItemTwo.Quality * 2 + dateLine >= 50) {
          return 50
        } else {
          return ItemTwo.Quality * 2 + dateLine
        }
      }
    }
  }
}

module.exports = {
  Contest
}
