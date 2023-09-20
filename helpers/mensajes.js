require("colors");

const mostrarMenu = () => {

    return new Promise(resolve =>{
        console.clear();
        console.log("====================================".rainbow);
        console.log("      Seleccione una opción".cyan);
        console.log("==================================== \n".rainbow);
        console.log(`${"  1.".blue} ${"Crear Tarea".yellow}`);
        console.log(`${"  2.".blue} ${"Listar Tareas".yellow}`);
        console.log(`${"  3.".blue} ${"Listar Tareas Completadas".yellow}`);
        console.log(`${"  4.".blue} ${"Listar Tareas Pendientes".yellow}`);
        console.log(`${"  5.".blue} ${"Completar Tarea(s)".yellow}`);
        console.log(`${"  6.".blue} ${"Borrar Tarea".yellow}`);
        console.log(`${"  0.".blue} ${"Salir".yellow} \n`);
      
        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });
      
        readline.question("Seleccione una opción :".rainbow, (opt) => {
          readline.close();
          resolve(opt);
        });
    });

}

const pausa = () => {

    return new Promise( resolve =>{
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        
          readline.question(`\n Presione ${"ENTER".blue} para continuar \n`, (opt) => {
            readline.close();
            resolve();
          })
    })
  
}

module.exports = {
  mostrarMenu,
  pausa,
};
