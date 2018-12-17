const option = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//requireds
const argv = require('yargs')
    .command('listar', 'Imprimir lista para multiplicar', option)
    .command('crear', 'Se a creado la tabla de multiplicar', option)
    .help()
    .argv;

module.exports = {
    argv
}