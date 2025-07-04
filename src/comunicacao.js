function linguagemDosGatosECachorros(animal) {
  if (animal == 'cachorro')
    return 'woff woff'
  else if (animal == 'gato')
    return 'miau'
  else 
    return 'Informe gato ou cachorro'
}

module.exports = {
    linguagemDosGatosECachorros
}