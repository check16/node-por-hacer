const descripcion = {
    demand: 'true',
    desc: 'Descripcion de la tarea por hacer',
    alias: 'd'
};

const completado = {
    desc: 'Indica si la tarea ha sido completada',
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    }).command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}