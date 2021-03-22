module.exports ={
    mascotas: [
        {tipo: "Perro", nombre: "Snoopy", dueno: "Will"},
        {tipo: "Gato", nombre: "Pikachu", dueno: "Tony"},
        {tipo: "Pez", nombre: "Yoshi", dueno: "Andre"},
        {tipo: "Pez", nombre: "Kirby", dueno: "Dalila"},
        {tipo: "Perro", nombre: "Dk", dueno: "Erick"},
    ],

    veterinarias: [
        {nombre: "Obed", apellido: "Pacheco", documento: "1111"},
        {nombre: "Alfredo", apellido: "Villa", documento: "2222"},
        {nombre: "Adrian", apellido: "Aguilar", documento: "3333"},
        {nombre: "Gaby", apellido: "Astorga", documento: "4444"}
    ],

    duenos: [
        {nombre: "Obed", apellido: "Pacheco", documento: "1111"},
        {nombre: "Alfredo", apellido: "Villa", documento: "2222"},
        {nombre: "Adrian", apellido: "Aguilar", documento: "3333"},
        {nombre: "Gaby", apellido: "Astorga", documento: "4444"}
    ],
    consultas: [
        {
            mascota: 0, 
            veterinaria: 0, 
            enzabezado: '', 
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia: '',
            diagnostico: "",
        },
    ],
};