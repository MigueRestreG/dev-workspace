// ! Definicion de Types para el proyecto de gestion de proyectos de software

interface Desarrollador {
    nombre: string;
    rol: Rol;
    seniority: Seniority;
    tecnologias: Tecnologias;
    disponibilidad: boolean;
};

interface Repositorio {
    nombre: string;
    url: string;
    ramaPrincipal: string;
    lenguajePrincipal: string;
};

interface PullRequest {
    id: number;
    titulo: string;
    estado: Estado;
    autor: string;
    reviewers: string[];
    lineasDeCodigo: number;
};

interface Issue {
    id: number;
    titulo: string;
    tipo: TipoDeIssue;
    prioridad: string;
    estado: Estado;
    asignadoA: string;
};

interface Proyecto {
    nombre: string;
    repositorio: string;
    listaDeIssues: Issue[];
    listaDePullRequests: PullRequest[];
    equipoDeDesarrolladores: Desarrollador[];
};

type Rol = "Backend" | "Frontend" | "QA";
type Estado = "Abierto" | "Aprobado" | "Rechazado" | "Mergeado";
type TipoDeIssue = "Bug" | "Mejora";
type Seniority = "Junior" | "Semi-Senior" | "Senior";
type Tecnologias = "Node.js, TypeScript, Express" | "React, JavaScript, CSS" | "Selenium, Cypress, Jest" | "Node.js, TypeScript, MongoDB";

// ! Ejemplo de uso de los Types definidos
// * Creacion de desarrolladores

const desarrollador1: Desarrollador = {
    nombre: "Miguelangel Restrepo Grisales",
    rol: "Backend",
    seniority: "Senior",
    tecnologias: "Node.js, TypeScript, Express",
    disponibilidad: true,
};

const desarrollador2: Desarrollador = {
    nombre: "Sarahi Cruz Aguirre",
    rol: "Frontend",
    seniority: "Junior",
    tecnologias: "React, JavaScript, CSS",
    disponibilidad: true,
};

const desarrollador3: Desarrollador = {
    nombre: "Juan Pablo Velez",
    rol: "QA",
    seniority: "Semi-Senior",
    tecnologias: "Selenium, Cypress, Jest",
    disponibilidad: true,
};

const desarrollador4: Desarrollador = {
    nombre: "Andres Felipe Gomez",
    rol: "Backend",
    seniority: "Semi-Senior",
    tecnologias: "Node.js, TypeScript, MongoDB",
    disponibilidad: true,
};

// * Creacion de un repositorio

const Repositorio1 : Repositorio = {
    nombre: 'Revision1EquipoBeta',
    url: 'https://prueba/Revision1EquipoBeta.com',
    ramaPrincipal: 'main',
    lenguajePrincipal: 'TypeScript'
}

// * Creacion de Pull Requests

const PullRequest1 : PullRequest = {
    id: 1,
    titulo: 'Correccion de bug en autenticacion',
    estado: 'Abierto',
    autor: 'Miguelangel Restrepo Grisales',
    reviewers: ['Sarahi Cruz Aguirre', 'Juan Pablo Velez'],
    lineasDeCodigo: 150
}

const PullRequest2 : PullRequest = {
    id: 2,
    titulo: 'Implementacion de nueva funcionalidad de busqueda',
    estado: 'Aprobado',
    autor: 'Andres Felipe Gomez',
    reviewers: ['Miguelangel Restrepo Grisales', 'Sarahi Cruz Aguirre'],
    lineasDeCodigo: 300
}

const PullRequest3 : PullRequest = {
    id: 3,
    titulo: 'Refactorizacion de codigo para mejorar rendimiento',
    estado: 'Mergeado',
    autor: 'Miguelangel Restrepo Grisales',
    reviewers: ['Andres Felipe Gomez', 'Juan Pablo Velez'],
    lineasDeCodigo: 200
}

const PullRequest4 : PullRequest = {
    id: 4,
    titulo: 'Correccion de bug en interfaz de usuario',
    estado: 'Rechazado',
    autor: 'Sarahi Cruz Aguirre',
    reviewers: ['Miguelangel Restrepo Grisales', 'Juan Pablo Velez'],
    lineasDeCodigo: 50
}

// * Creacion de Issues

const issue1 : Issue={
    id: 1,
    titulo: 'Mal funcionamiento del Login',
    tipo: 'Bug',
    prioridad: 'Alta',
    estado: 'Abierto',
    asignadoA: desarrollador1.nombre
}

const issue2 : Issue={
    id: 1,
    titulo: 'Cambiar color del navbar',
    tipo: 'Mejora',
    prioridad: 'Media',
    estado: 'Abierto',
    asignadoA: desarrollador4.nombre
}

const issue3 : Issue={
    id: 1,
    titulo: 'Cambiar tipo de fuente en el HomePage',
    tipo: 'Mejora',
    prioridad: 'Baja',
    estado: 'Rechazado',
    asignadoA: desarrollador2.nombre
}

const issue4 : Issue={
    id: 1,
    titulo: 'Error en la pasarela de pago',
    tipo: 'Bug',
    prioridad: 'Alta',
    estado: 'Abierto',
    asignadoA: desarrollador4.nombre
}

const issue5 : Issue={
    id: 1,
    titulo: 'Error en la carga de archivos en el perfil',
    tipo: 'Bug',
    prioridad: 'media',
    estado: 'Mergeado',
    asignadoA: desarrollador1.nombre
}

// * Creacion de un proyecto

const Proecyto1 : Proyecto = {
    nombre: "Learning-Swap",
    repositorio: Repositorio1.url,
    listaDeIssues: [issue1,issue2,issue3,issue4,issue5],
    listaDePullRequests: [PullRequest1, PullRequest2, PullRequest3, PullRequest4],
    equipoDeDesarrolladores: [desarrollador1, desarrollador2, desarrollador3, desarrollador4]
};

// ! Impresion de informacion del proyecto
// * Impresion de informacion de los desarrolladores del proyecto

const desarrolladores : Desarrollador[] = [desarrollador1, desarrollador2, desarrollador3, desarrollador4];

for(const d of desarrolladores){
    console.log('Desarrollador#', desarrolladores.indexOf(d) + 1,' nombre:', d.nombre, 'rol:', d.rol, 'seniority:', d.seniority, 'numero de tecnologias:', d.tecnologias.split(',').length);
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------");

// * Impresion de informacion de los Pull Requests del proyecto

const pullRequests : PullRequest[] = [PullRequest1, PullRequest2, PullRequest3, PullRequest4];

for(const pr of pullRequests){

    if (pr.estado === 'Aprobado' || pr.estado === 'Mergeado') {
        console.log('\x1b[31mPull Request#\x1b[0m', pullRequests.indexOf(pr) + 1,' titulo:', pr.titulo, 'estado:', pr.estado, 'autor:', pr.autor, 'número de reviewers:', pr.reviewers.length);
    } else {
        console.log('Pull Request#', pullRequests.indexOf(pr) + 1,' titulo:', pr.titulo, 'estado:', pr.estado, 'autor:', pr.autor, 'número de reviewers:', pr.reviewers.length);
    }
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------");

// * Impresion de informacion de los Issues del proyecto segun el estado y segun la cantidad de bugs vs mejoras

const issues : Issue[] = [issue1, issue2, issue3, issue4, issue5];

for (const i of issues){

    if (i.estado === 'Abierto') {
        console.log('\x1b[32mIssue#\x1b[0m', issues.indexOf(i) + 1,' titulo:', i.titulo, 'tipo:', i.tipo, 'prioridad:', i.prioridad, 'estado:', i.estado, 'asignado a:', i.asignadoA);
    } else {
        console.log('\x1b[31mIssue#\x1b[0m', issues.indexOf(i) + 1,' titulo:', i.titulo, 'tipo:', i.tipo, 'prioridad:', i.prioridad, 'estado:', i.estado, 'asignado a:', i.asignadoA);
    }
}

const cantidadDeBugs = issues.filter(i => i.tipo === 'Bug').length;
const cantidadDeMejoras = issues.filter(i => i.tipo === 'Mejora').length;

console.log("Cantidad de Bugs:", cantidadDeBugs);
console.log("Cantidad de Mejoras:", cantidadDeMejoras);

console.log("--------------------------------------------------------------------------------------------------------------------------------------------");
