import leaf from './leaf.png'
import eye from './eye.png'

export function GetShape(name) {
  switch (name) {
    case 'leaf':
      return leaf
    case 'eye':
      return eye
    default:
      console.log('non supported image')
  }
}
