import React from 'react'
import _ from 'lodash'
import Board from './src/Screen/Board/Board'

const values = [
  'Algodão',
  'Andador',
  'Babador',
  'Banheira',
  'Bebê',
  'Berço',
  'Body',
  'Bola',
  'Brinquedo',
  'Carrinho',
  'Chocalho',
  'Chupeta',
  'Cotonete',
  'Cueiro',
  'Enxoval',
  'Escova',
  'Fralda',
  'Gorro',
  'Lencinho',
  'Loção',
  'Mamadeira',
  'Mamãe',
  'Manta',
  'Mordedor',
  'Papai',
  'Pente',
  'Pijama',
  'Pomada',
  'Talco',
  'Titia',
  'Titio',
  'Toalha',
  'Trocador',
  'Vovó',
  'Vovô'
]

// const names = [
//   ['Algodão',   'Andador',  'Babador' ],
//   ['Bebê',      'Berço',    'Body',   ],
//   ['Brinquedo', 'Carrinho', 'Chocalho']
// ]

const App = () => {
  const generateNames = values => {
    const num = 4
    const rows = num
    const cols = num
    const names = []

    const shuffledValues = _.shuffle(values)
    const selectedValues = _.sampleSize(shuffledValues, rows * cols)

    for (let i = 0; i < rows; i++) {
      const row = []
      for (let j = 0; j < cols; j++) {
        row.push(selectedValues[i * cols + j])
      }
      names.push(row)
    }

    return names
  }

  const names = generateNames(values)

  return (
    <Board squareNames={names} />
  )
}

export default App
