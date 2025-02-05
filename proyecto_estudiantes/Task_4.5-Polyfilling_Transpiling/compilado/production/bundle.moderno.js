(()=>{"use strict";class e{#e;#a;#o;constructor(e,a,o){if(!e.match(/[A-Za-zÁÉÍÓÚáéíóú ]+/))throw new Error("El nombre debe contener solo letras y espacios");this.#e=e,this.#a=a,this.#o=o}get nombre(){return this.#e}get edad(){return this.#a}get direccion(){return this.#o}}class a extends e{#t;#s;#n;static contadorId=1;constructor(e,o,t){super(e,o,t),this.#t=a.contadorId++,this.#s=[],this.#n=[]}matricularEstudiante(...e){for(let a of e)this.#s.push(a),this.#n.push([`Matriculación de ${a.nombre}`,new Date])}desmatricularEstudiante(...e){for(let a of e)this.#s=this.#s.filter((e=>e.nombre!==a.nombre)),this.#n.push([`Desmatriculación de ${a.nombre}`,new Date])}calificar(e,a){if(1===arguments.length)throw new Error("Faltan datos para calificar al estudiante");const o=this.#s.find((a=>a.nombre===e.nombre));if(!o)throw new Error("El estudiante no está matriculado en esta asignatura");if(a<0||a>10)throw new Error("La calificación debe estar entre 0 y 10.");o.calificar(a)}get relacion(){return this.#n.map((([e,a])=>`${e} - ${a.toLocaleDateString("es-ES",{weekday:"long",day:"2-digit",month:"long",year:"numeric"})}`))}promedioEstudiante(){let e=0,a=0;for(let o of this.#s){const t=o.calculaPromedio();0!==t&&(e+=t,a++)}return 0===a?0:`El promedio del estudiante es ${(e/a).toFixed(2)}`}get asignaturas(){return this.#s}toString(){return`Estudiante: ${this.nombre}, ID: ${this.#t}, Dirección: ${this.direccion}`}}class o{#e;#i;constructor(e){this.#e=e.match(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/)?e:"Sin nombre",this.#i=[]}calculaPromedio(){let e=this.#i.length;if(e>0){let a=0;for(let o=0;o<e;o++)a+=this.#i[o];return a/e}return console.log("No existen calificaciones"),0}calificar(e){if(!(0<=e&&e<=10))throw new Error("La calificación debe estar entre 0 y 10.");this.#i.push(e)}eliminarCalificacion(e){if(!this.#i.includes(e))throw new Error("La nota no puede ser eliminada ya que no existe");this.#i.splice(this.#i.indexOf(e),1)}get nombre(){return this.#e}get calificaciones(){return this.#i}toString(){return`Asignatura: ${this.nombre}`}}class t{#l;#r;#c;#u;#d;#g;constructor(e,a,o,t,s,n){this.#l=e,this.#r=a,this.#c=o,this.#u=t,this.#g=n,this.#d=s}get calle(){return this.#l}get numero(){return this.#r}get piso(){return this.#c}get cp(){return this.#u}get provincia(){return this.#g}get localidad(){return this.#d}toString(){return`Calle: ${this.#l}, Número: ${this.#r}, Piso: ${this.#c}, Código Postal: ${this.#u}, Localidad: ${this.#d}(${this.#g})`}}class s{#m;constructor(...e){this.#m=[];for(let a of e)this.agregaEstudiante(a)}agregaEstudiante(e){if(this.#m.includes(e))throw new Error("El estudiante ya se encuentra en la lista, no puede haber duplicados");this.#m.push(e)}eliminaEstudiante(e){if(!this.#m.includes(e))throw new Error("El estudiante no se encuentra en el listado");this.#m=this.#m.filter((a=>a!==e)),console.log("Estudiante eliminado con éxito")}promedioEstudiantes(){if(0===this.#m.length)return"No existe ningún estudiante en la lista";let e=0,a=0;for(let o of this.#m){let t=o.promedioEstudiante();"number"==typeof t&&(e+=t,a++)}let o=(e/a).toFixed(2);return Number(o)}reporte(){this.#m.forEach((e=>{console.log(),console.log(`Nombre del estudiante: ${e.nombre}`),console.log("Calificaciones:"),e.asignaturas.forEach((e=>{const a=Number(e[1]);console.log(`${e.nombre}: ${a}`)})),console.log(`Promedio: ${e.promedioEstudiante()}`),console.log("--------------------------------")}))}busquedaEstudiante(e){if("string"!=typeof e)throw new Error("El patrón debe ser una cadena de texto");let a=new RegExp(e,"i");return this.#m.filter((e=>a.test(e.nombre)))}getListadoEstudiantes(){return[...this.#m]}}class n{#p;constructor(...e){this.#p=[];for(let a of e)this.añadeAsignatura(a)}agregaAsignatura(e){this.#p.push(e)}eliminaAsignatura(e){if(!this.#p.includes(e))throw new Error("La asignatura no se encuentra en el listado");this.#p.filter((a=>a!==e)),console.log("Asignatura eliminada con éxito")}busquedaAsignatura(e){if("string"!=typeof e)throw new Error("El patrón debe ser una cadena de texto");let a=new RegExp(e,"i");return this.#p.filter((e=>a.test(e.nombre)))}get listaAsignaturas(){return this.#p}}!function(){console.log("-------------Pruebas de interacción con estudiantes y asignaturas-----------------");let e=new s,i=new n;console.log("Listas de estudiantes y asignaturas creadas con éxito");let l=new a("David Rodríguez",25,new t("Dr. Vaca Castro",6,"Quinto A",43242,"Granada","Granada")),r=new a("Marta Sánchez",22,new t("Azorín",32,"Bajo B",53242,"Maracena","Granada")),c=new a("Marc Casadó",21,new t("Náyades",107,"",12952,"Sant Pere de Vilamajor","Barcelona")),u=new a("Julian Carax",22,new t("Abad Moya",66,"Tercero D",12805,"Alcalá la Real","Jaén"));const d=new o("Matemática Discreta"),g=new o("Lógica"),m=new o("Sistemas Digitales"),p=new o("Ingeniería de Computadores");console.log("Estudiantes y asignaturas creados con éxito");try{e.agregaEstudiante(l),e.agregaEstudiante(r),e.agregaEstudiante(c),e.agregaEstudiante(u),i.agregaAsignatura(g),i.agregaAsignatura(m),i.agregaAsignatura(d),i.agregaAsignatura(p)}catch(e){console.log("Ha habido un error al agregar al estudiante/asignatura a la lista"),console.log(e)}console.log("Estudiantes y asignaturas agregados con éxito"),e.eliminaEstudiante(u),i.eliminaAsignatura(p),console.log("Estudiantes y asignaturas eliminados con éxito");try{l.matricularEstudiante(g,m,p),r.matricularEstudiante(d,g),c.matricularEstudiante(g,p),u.matricularEstudiante(m)}catch(e){console.log("Ha habido un error al matricular al estudiante"),console.log(e)}console.log("Estudiantes matriculados con éxito"),l.desmatricularEstudiante(g),r.desmatricularEstudiante(d),console.log("Estudiantes desmatriculados con éxito");try{console.log("CALIFICACIÓN DE ESTUDIANTES"),l.calificarEstudiante(m,9),l.calificarEstudiante(m,7),l.calificarEstudiante(p,9),r.calificarEstudiante(d,5),console.log("\n\n")}catch(e){console.log("Ha habido un error al calificar al estudiante"),console.log(e)}console.log("Estudiantes calificados con éxito")}(),function e(){switch(console.log("Bienvenido a Gestion de Estudiantes y Asignaturas, selecciona con que deseas interactuar:"),console.log("1. Estudiante concreto"),console.log("2. Asignaturas"),console.log("3. Listado de estudiantes"),console.log("4. Deseo salir"),prompt("Selecciona el número de la opción que deseas interactuar")){case"1":switch(console.clear(),console.log("Opciones a realizar con un estudiante:"),console.log("1. Agregar estudiante"),console.log("2. Eliminar estudiante"),console.log("3. Matricular en una asignatura"),console.log("4. Desmatricular de una asignatura"),console.log("5. Mostrar historial matriculación-desmatriculación"),console.log("6. Calificar estudiante"),console.log("7. Mostrar promedio"),console.log("8. Mostrar reporte completo"),console.log("9. Salir"),prompt("Selecciona el número de la opción deseada:")){case"1":console.clear();try{console.log("Introduce el nombre del estudiante que deseas agregar:");const e=prompt("Nombre del estudiante:");console.log("Introduce la edad del estudiante:");const o=Number(prompt("Edad del estudiante:"));console.log("Introduce la calle del estudiante:");const s=prompt("Calle del estudiante:");console.log("Introduce el número de vivienda:");const n=Number(prompt("Número de vivienda del estudiante:"));console.log("Introduce el piso o pulsa ENTER si no vive en un piso:");const i=prompt("Piso del estudiante:");console.log("Introduce el código postal de la localidad:");const l=Number(prompt("Código postal del estudiante:"));console.log("Introduce la provincia:");const r=prompt("Provincia del estudiante:");console.log("Introduce la localidad:");const c=prompt("Localidad del estudiante:"),u=new t(s,n,i,l,r,c),d=new a(e,o,u);listaEstudiantes.agregaEstudiante(d),console.log("Estudiante agregado con éxito")}catch(e){console.log("Ha habido un error al agregar al estudiante"),console.log(e)}break;case"2":console.clear(),console.log("Introduce el nombre del estudiante que quieras eliminar");let o=prompt("Nombre del estudiante a eliminar:");o=listaEstudiantes.busquedaEstudiante(o),listaEstudiantes.eliminaEstudiante(o);break;case"3":console.clear(),console.log("Introduce el nombre del estudiante que deseas matricular:");let s=prompt("Nombre del estudiante:");try{s=listaEstudiantes.busquedaEstudiante(s),console.log("Introduce el nombre de la asignatura eb la que deseas matricular al estudiante:");let e=prompt("Nombre de la asignatura:");e=listaAsignaturas.busquedaAsignatura(e),s.matricularEstudiante(e)}catch(e){console.log(`No se ha podido matricular a ${s.nombre} en ${asignaturaMatricular.nombre}`),console.log(e)}break;case"4":console.clear(),console.log("Introduce el nombre del estudiante que deseas desmatricular:");let n=prompt("Nombre del estudiante:");try{n=listaEstudiantes.busquedaEstudiante(n),console.log("Introduce el nombre de la asignatura de la que deseas desmatricular al estudiante:");let e=prompt("Nombre de la asignatura:");e=listaAsignaturas.busquedaAsignatura(e),n.desmatricularEstudiante(e)}catch(e){console.log(`No se ha podido desmatricular a ${n.nombre} de ${asignaturaDesmatricular.nombre}`),console.log(e)}break;case"5":console.clear(),console.log("Introduce el nombre del estudiante del que deseas ver el historial:");let i=prompt("Nombre del estudiante:");i=listaEstudiantes.busquedaEstudiante(i),console.log(i.relacion);break;case"6":console.clear();try{console.log("Introduce el nombre del estudiante al que deseas calificar:");let e=prompt("Nombre del estudiante:");e=listaEstudiantes.busquedaEstudiante(e),console.log("Introduce el nombre de la asignatura en la que deseas calificar al estudiante:");let a=prompt("Nombre de la asignatura:");a=listaAsignaturas.busquedaAsignatura(a),console.log("Introduce la calificación que deseas asignar al estudiante:");let o=prompt("Calificación:");e.calificar(a,o)}catch(e){console.log("Ha habido un error al calificar al estudiante"),console.log(e)}break;case"7":console.clear(),console.log("Introduce el nombre del estudiante del que deseas ver el promedio:");let l=prompt("Nombre del estudiante:");l=listaEstudiantes.busquedaEstudiante(l),console.log(l.promedioEstudiante());break;case"8":console.clear(),console.log("Reporte completo de los estudiantes:"),console.log(listaEstudiantes.reporte());break;case"9":console.clear(),console.log("Saliendo del programa...");break;default:console.clear(),console.log("Selecciona un número entre 1 y 9 para elegir una opción"),e()}break;case"2":switch(console.clear(),console.log("Opciones a realizar con una asignatura:"),console.log("1. Agregar asignatura"),console.log("2. Eliminar asignatura"),console.log("3. Calcular promedio de las calificaciones de una asignatura"),console.log("4. Buscar asignatura"),console.log("5. Calificar asignatura"),console.log("6. Salir"),prompt("Selecciona el número de la opción deseada:")){case"1":console.clear();try{console.log("Introduce el nombre de la asignatura que deseas agregar");const e=prompt("Nombre de la asignatura:"),a=new o(e);listaAsignaturas.agregaAsignatura(a),console.log("Asignatura agregada con éxito")}catch(e){console.log("Ha habido un error al agregar la asignatura"),console.log(e)}break;case"2":console.clear(),console.log("Introduce el nombre de la asignatura que deseas eliminar");const a=prompt("Nombre de la asignatura:"),t=listaAsignaturas.busquedaAsignatura(a);listaAsignaturas.eliminaAsignatura(t);break;case"3":console.clear(),console.log("Introduce el nombre de la asignatura de la que deseas calcular el promedio");const s=prompt("Nombre de la asignatura:"),n=listaAsignaturas.busquedaAsignatura(s);console.log(n.calculaPromedio());break;case"4":console.clear(),console.log("Introduce el nombre de la asignatura que deseas buscar");const i=prompt("Nombre de la asignatura:"),l=listaAsignaturas.busquedaAsignatura(i);console.log(l.toString());break;case"5":console.clear(),console.log("Introduce el nombre de la asignatura que deseas calificar");const r=prompt("Nombre de la asignatura:"),c=listaAsignaturas.busquedaAsignatura(r);console.log("Introduce la calificación que deseas asignar a la asignatura");const u=prompt("Calificación:");c.calificar(u);break;case"6":console.clear(),console.log("Saliendo del programa...");break;default:console.clear(),console.log("Selecciona un número entre 1 y 5 para elegir una opción"),e()}break;case"3":switch(console.clear(),console.log("Opciones a realizar con la lista de estudiantes:"),console.log("1. Calcular promedio general de los estudiantes"),console.log("2. Eliminar estudiantes de la lista"),console.log("3. Buscar a un estudiante"),console.log("4. Salir"),prompt("Selecciona el número de la opción deseada:")){case"1":console.clear(),console.log("El promedio general de los estudiantes es: "+listaEstudiantes.promedioEstudiantes());break;case"2":console.clear();try{console.log("Introduce el nombre del estudiante que deseas eliminar de la lista");const e=prompt("Nombre del estudiante:"),a=listaEstudiantes.busquedaEstudiante(e);listaEstudiantes.eliminaEstudiante(a)}catch(e){console.log("Ha habido un error al eliminar al estudiante"),console.log(e)}break;case"3":console.clear(),console.log("Introduce el nombre del estudiante que deseas buscar");const a=prompt("Nombre del estudiante:"),o=listaEstudiantes.busquedaEstudiante(a);console.log(o.toString());break;case"4":console.clear(),console.log("Saliendo del programa...");break;default:console.clear(),console.log("Selecciona un número entre 1 y 4 para elegir una opción"),e()}break;case"4":console.clear(),console.log("Saliendo del programa...");break;default:console.clear(),console.log("Selecciona un número entre 1 y 4 para elegir una opción"),e()}}()})();