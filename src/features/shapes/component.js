import leaf from './leaf.png'
import eye from './eye.png'
import heart from './heart.png'
import rings from './rings.png'
import bigleaf from './bigleaf.png'
import butter from './butter.png'
import moon from './moon.png'
import tree from './tree.png'

export function GetShapes() {
  return ['leaf', 'eye', 'heart', 'rings', 'bigleaf', 'butter', 'moon', 'tree']
}

export function GetShape(name) {
  switch (name) {
    case 'tree':
      return tree
    case 'moon':
      return moon
    case 'butter':
      return butter
    case 'bigleaf':
      return bigleaf
    case 'rings':
      return rings
    case 'leaf':
      return leaf
    case 'eye':
      return eye
    case 'heart':
      return heart
    default:
      console.log('non supported image')
  }
}
