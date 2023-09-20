require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, 
       pausa,
       leerInput,
       listadoTareasBorrar,
       confirmar,
       mostrarListadoChechkList
    } = require('./helpers/inquirer')

const Tareas = require('./models/tareas');


const main = async () =>{

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        //Cargar las tareas
        tareas.cargarTareasFromArray(tareasDB);

    }
   

    do{
        //Esta función imprime el menú 
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                //Crear la opción
                const desc = await leerInput('Descripcion: ');
                tareas.crearTareas(desc);
            break;

            case '2':
                //Listar tareas
                tareas.listadoCompleto();
            break;

            case '3':
                //Listar completadas
                tareas.listarPendientesCompletadas(true);

            break;

            case '4':
                //Listar Pendientes
                tareas.listarPendientesCompletadas(false);

            break;

            case '5':
                //Tareas completadas -- Pendientes
                const ids = await mostrarListadoChechkList(tareas.listadoArr);
                tareas.toggleCompletadas(ids)

            break;

            case '6':
                //borrar Tareas
                const id =  await listadoTareasBorrar(tareas.listadoArr);
                
                if(id !== '0'){
                    const ok = await confirmar('¿Estas seguro?')
                    if( ok ){
                        tareas.borrarTareas(id);
                        console.log('Tarea Borrada con éxito');
                    }
                }
            break;
        }

        guardarDB( tareas.listadoArr );

        await pausa();

    } while(opt !== '0');



}

main();