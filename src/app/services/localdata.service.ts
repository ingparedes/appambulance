import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ambulancia, Asegurador, CasosCerrados, CierreCaso, Departamento, Diagnostico, Distrito, DNI, Expg, Genero, Hospital, Insumo, Medicamento, Procedimiento, Provincia, Trauma, Triage, Expf, Usuario } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class LocaldataService {
    constructor(private plt: Platform, private http: HttpClient) {
        this.plt.ready().then(() => {

        });
    }
    getCheckexpftraumas() {
        // return this.http.get<Checkbox[]>('../assets/data/expgen/checktraumas.json')
    }
    getAmbulancias() {
        let arrayDatos: Ambulancia[] = []
        this.http.get('../assets/data/ambulancia.json').toPromise().then(data => {
            for (let Ambulancias in data) {
                if (data.hasOwnProperty(Ambulancias)) {
                    let Datos = data[Ambulancias]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getUsuarios() {
        let arrayDatos: Usuario[] = []
        this.http.get('../assets/data/usuarios.json').toPromise().then(data => {
            for (let Usuarios in data) {
                if (data.hasOwnProperty(Usuarios)) {
                    let Datos = data[Usuarios]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getInsumos() {
        let arrayDatos: Insumo[] = []
        this.http.get('../assets/data/insumos.json').toPromise().then(data => {
            for (let Insumos in data) {
                if (data.hasOwnProperty(Insumos)) {
                    let Datos = data[Insumos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getMedicamentos() {
        let arrayDatos: Medicamento[] = []
        this.http.get('../assets/data/medicamentos.json').toPromise().then(data => {
            for (let Medicamentos in data) {
                if (data.hasOwnProperty(Medicamentos)) {
                    let Datos = data[Medicamentos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getDiagnosticos() {
        let arrayDatos: Diagnostico[] = []
        this.http.get('../assets/data/diagnosticos.json').toPromise().then(data => {
            for (let Diagnosticos in data) {
                if (data.hasOwnProperty(Diagnosticos)) {
                    let Datos = data[Diagnosticos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getExploFisica() {
        let arrayDatos: Expf[] = []
        this.http.get('../assets/data/explo_fisica.json').toPromise().then(data => {
            for (let Traumas in data) {
                if (data.hasOwnProperty(Traumas)) {
                    let Datos = data[Traumas]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getProcedimientos() {
        let arrayDatos: Procedimiento[] = []
        this.http.get('../assets/data/procedimiento_tipos.json').toPromise().then(data => {
            for (let Procedimientos in data) {
                if (data.hasOwnProperty(Procedimientos)) {
                    let Datos = data[Procedimientos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getDpto() {
        let arrayDatos: Departamento[] = []
        this.http.get('../assets/data/departamento.json').toPromise().then(data => {
            for (let Departamentos in data) {
                if (data.hasOwnProperty(Departamentos)) {
                    let Datos = data[Departamentos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getProv(Dp: string) {
        let arrayDatos: Provincia[] = []
        this.http.get('../assets/data/provincias.json').toPromise().then(data => {
            for (let Provincias in data) {
                if (data.hasOwnProperty(Provincias)) {
                    let Datos = data[Provincias]
                    Datos.filter(prov => {
                        return prov.cod_departamento.toLowerCase().indexOf(Dp) !== -1
                    }).forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getDist(Dp: string, Pr: string) {
        let arrayDatos: Distrito[] = []
        this.http.get('../assets/data/distritos.json').toPromise().then(data => {
            for (let Distritos in data) {
                if (data.hasOwnProperty(Distritos)) {
                    let Datos = data[Distritos]
                    Datos.filter(Distritos => {
                        return Distritos.cod_dpto.toLocaleLowerCase().indexOf(Dp) !== -1
                    }).filter(Distritos => {
                        return Distritos.cod_provincia.toLocaleLowerCase().indexOf(Pr) !== -1
                    }).forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getDNI() {
        let arrayDatos: DNI[] = []
        this.http.get('../assets/data/tipo_dni.json').toPromise().then(data => {
            for (let Documentos in data) {
                if (data.hasOwnProperty(Documentos)) {
                    let Datos = data[Documentos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getGen() {
        let arrayDatos: Genero[] = []
        this.http.get('../assets/data/genero.json').toPromise().then(data => {
            for (let Genero in data) {
                if (data.hasOwnProperty(Genero)) {
                    let Datos = data[Genero]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getCasos() {
        let arrayDatos: CasosCerrados[] = []
        this.http.get('../assets/data/casos_cerrados.json').toPromise().then(data => {
            for (let Casos in data) {
                if (data.hasOwnProperty(Casos)) {
                    let Datos = data[Casos]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getAseg() {
        let arrayDatos: Asegurador[] = []
        this.http.get('../assets/data/aseguradoras.json').toPromise().then(data => {
            for (let Aseguradoras in data) {
                if (data.hasOwnProperty(Aseguradoras)) {
                    let Datos = data[Aseguradoras]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getTrauma(categoria: string) {
        let arrayDatos: Trauma[] = []
        this.http.get('../assets/data/trauma.json').toPromise().then(data => {
            for (let Traumas in data) {
                if (data.hasOwnProperty(Traumas)) {
                    let Datos = data[Traumas]
                    Datos.filter(Traumas => {
                        return Traumas.causa_trauma_categoria.toLocaleLowerCase().indexOf(categoria) !== -1
                    }).forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getExploGen(categoria: string) {
        let arrayDatos: Expg[] = []
        this.http.get('../assets/data/explo_general.json').toPromise().then(data => {
            for (let Traumas in data) {
                if (data.hasOwnProperty(Traumas)) {
                    let Datos = data[Traumas]
                    Datos.filter(Traumas => {
                        return Traumas.explo_general_cat.toLocaleLowerCase().indexOf(categoria) !== -1
                    }).forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getTriage() {
        let arrayDatos: Triage[] = []
        this.http.get('../assets/data/triage.json').toPromise().then(data => {
            for (let Triage in data) {
                if (data.hasOwnProperty(Triage)) {
                    let Datos = data[Triage]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getCierreCaso() {
        let arrayDatos: CierreCaso[] = []
        this.http.get('../assets/data/tipo_cierre.json').toPromise().then(data => {
            for (let Cierre in data) {
                if (data.hasOwnProperty(Cierre)) {
                    let Datos = data[Cierre]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }
    getHospitales() {
        let arrayDatos: Hospital[] = []
        this.http.get('../assets/data/hospitales.json').toPromise().then(data => {
            for (let Hospitales in data) {
                if (data.hasOwnProperty(Hospitales)) {
                    let Datos = data[Hospitales]
                    Datos.forEach(element => {
                        arrayDatos.push(element);
                    });
                }
            }
        })
        return arrayDatos
    }

    getEncabezadoPDF() {
        var canvas = document.createElement("canvas");
        let context = canvas.getContext('2d');

        make_base();

        function make_base() {
            let base_image = new Image();
            base_image.src = './assets/icon/encabezado_pdf.png';
            base_image.onload = () => {
                context.drawImage(base_image, 0, 0, canvas.width, 448);
              }
        }
        return canvas.toDataURL("image/jpeg")
    }
}