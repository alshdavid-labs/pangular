import prettier from 'prettier/standalone'
import Babylon from 'prettier/parser-babylon'

declare const window: any

window.process = (v) => prettier.format(v, { 
  parser: 'babel', 
  plugins: [Babylon],
  printWidth: 30,
})

console.log('Prettier Registered')