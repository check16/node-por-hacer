const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('========= Por Hacer ========='.green);
        for (let tarea of listado) {
            console.log(`${tarea.descripcion}`.yellow);
            console.log(tarea.completado ? 'Estado: ' + colors.green(tarea.completado) : 'Estado: ' + colors.red(tarea.completado));
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('El comando no es reconocido');
        break;
}