//requireds
const argv = require('./configuracion/yargs').argv;
const colors = require(' colors ');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Se ha creado el archivo: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite).then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
// let parametro = argv[2];
// let base = parametro.split('=')[1];