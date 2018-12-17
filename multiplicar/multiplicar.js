//requireds

const fs = require('fs');

let data = '';


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return
        } else if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un numero`);
            return
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return
        } else if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un numero`);
            return
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i } \n`;
        }
        resolve(data)
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}