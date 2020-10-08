import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Componente, checkboxarray, insinsumos, insmedicamento, insexpf, insimagen, nosynchs, insinfobasica, insdiagnostico, insotros, insobste, turno } from '../interfaces/interfaces';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';
import { from, Observable } from 'rxjs';
import { LocaldataService } from './localdata.service';

const apiUrl = environment.apiUrl;
@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient, private plt: Platform, private httn: HTTP, private localData: LocaldataService) { }
    caso: any;
    turno: turno;
    turnoc: boolean = false;
    causa: any;
    narray: checkboxarray[] = [];
    imagenes: insimagen[] = [];
    infobasica: insinfobasica;
    causatrauma: checkboxarray[] = [];
    nosynchcases: nosynchs[] = [];
    explo_fisica: insexpf[] = [];
    explo_general: checkboxarray[] = [];
    procedimientos: checkboxarray[] = [];
    causaobstetrico: insobste;
    diagnostico: insdiagnostico;
    medicamentos: insmedicamento[] = [];
    insumos: insinsumos[] = [];
    otros: insotros;
    hora_i: any;
    hora_e: any;
    hora_h: any;
    hora_b: any;
    public conxion: string = 'true';
    public userToken: string = '';
    public codAmbu: string = '';
    public icodAmbu: string = '';
    public codCaso: string = '';
    public codHospital: string = '';
    public Hospital: string = '';
    public gp: string = '';
    public corlat: string;
    public corlong: string;
    public fhora: string = '';
    public kinicial: string = '';

    //GLOBAL FUNCTIONS
    dateLocale(date): string {
        return date.getFullYear()
            + '-' + this.leftpad(date.getMonth() + 1, 2)
            + '-' + this.leftpad(date.getDate(), 2)
            + ' ' + this.leftpad(date.getHours(), 2)
            + ':' + this.leftpad(date.getMinutes(), 2)
            + ':' + this.leftpad(date.getSeconds(), 2);
    }
    leftpad(val, resultLength = 2, leftpadChar = '0'): string {
        return (String(leftpadChar).repeat(resultLength)
            + String(val)).slice(String(val).length);
    }
    //GET DATA
    private getData(servicio: String, dataToSend: String) {
        servicio = apiUrl + servicio;
        let respuestaDatos = []
        if (this.plt.is('cordova')) {
            try {
                let nativeCall = this.httn.get(servicio + '?' + dataToSend, {}, { 'Content-Type': 'application/x-www-form-urlencoded' })
                from(nativeCall).toPromise().then(data => {
                    let newdata = JSON.parse(data.data)
                    for (let NewDataSet in newdata) {
                        if (newdata.hasOwnProperty(NewDataSet)) {
                            let DataSet = newdata[NewDataSet]
                            for (let Datos in DataSet) {
                                if (DataSet.hasOwnProperty(Datos)) {
                                    let arrayDatos = DataSet[Datos]
                                    if (arrayDatos.length > 1) {
                                        arrayDatos.forEach(element => {
                                            respuestaDatos.push(element)
                                        });
                                    } else {
                                        respuestaDatos.push(arrayDatos)
                                    }
                                }
                            }
                        }
                    }
                }).finally(() => {
                    if (respuestaDatos.length == 0) {
                        console.log("Modo Offline")
                    } else {
                        console.log("Modo Online")
                        this.conxion = 'true'
                    }
                })
            } catch (error) {
                console.log("Hubo un error: ", error)
            }
        } else {
            try {
                this.http.get(servicio + '?' + dataToSend, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).toPromise().then(data => {
                    for (let NewDataSet in data) {
                        if (data.hasOwnProperty(NewDataSet)) {
                            let DataSet = data[NewDataSet]
                            for (let Datos in DataSet) {
                                if (DataSet.hasOwnProperty(Datos)) {
                                    let arrayDatos = DataSet[Datos]
                                    if (arrayDatos.length > 1) {
                                        arrayDatos.forEach(element => {
                                            respuestaDatos.push(element)
                                        });
                                    } else {
                                        respuestaDatos.push(arrayDatos)
                                    }
                                }
                            }
                        }
                    }
                }).finally(() => {
                    if (respuestaDatos.length == 0) {
                        console.log("Modo Offline")
                    } else {
                        console.log("Modo Online")
                        this.conxion = 'true'
                    }
                })
            } catch (error) {
                console.log("Hubo un error: ", error)
            }
        }
        return respuestaDatos
    }
    //SET DATA
    private setData(servicio: String, dataToSend: String) {
        servicio = apiUrl + servicio;
        let respuestaDatos = []
        if (this.plt.is('cordova')) {
            let nativeCall = this.httn.post(servicio + '?' + dataToSend, {}, { 'Content-Type': 'application/json' })
            from(nativeCall).subscribe(data => {
                let newdata = JSON.parse(data.data)
                newdata.forEach(element => {
                    respuestaDatos.push(element)
                });
            })
        } else {
            this.http.post(servicio + '', dataToSend, { headers: { "Content-Type": "application/json" } }).toPromise().then(data => {
                respuestaDatos.push(JSON.stringify(data))
            })
        }
        return respuestaDatos
    }
    //STATIC METHODS        
    getMenuOpts() {
        return this.http.get<Componente[]>('../assets/data/menu.json')
    }
    //DINAMIC METHODS
    //GET METHODS    
    getAmbulancias() {
        let Ambulancias
        var dataToSend = "Token=MAgJKq3LaKxL3pae"
        let url = '/Ambulancias'
        Ambulancias = this.getData(url, dataToSend)
        if (this.conxion == 'false') {
            this.conxion = 'false'
            Ambulancias = this.localData.getAmbulancias()
        } else {
            this.conxion = 'true'
        }
        return Ambulancias
    }
    getCasosAsignados() {
        // let data = { Token: 'MAgJKq3LaKxL3pae', cod_ambu:this.icodAmbu }
        // let jsontext = { JsonParam: data }
        // let dataToSend = JSON.stringify(jsontext)
        var dataToSend = "Token=MAgJKq3LaKxL3pae&cod_ambu=" + this.icodAmbu + ""
        let url = '/CasosAsignados'
        return this.getData(url, dataToSend)
    }
    getUsuarios() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/SismedLogin'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getUsuarios()
        }
        return datos
    }
    getAseg() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Aseguradoras'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getAseg()
        }
        return datos
    }
    getInsumos() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Insumos'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getInsumos()
        }
        return datos
    }
    getMedicamentos() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Medicamentos'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getMedicamentos()
        }
        return datos
    }
    getDiagnosticos() {
        return this.localData.getDiagnosticos()
    }
    getExploFisica() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/ExploFisica'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getExploFisica()
        }
        return datos
    }
    getProcedimientos() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Procedimiento_tipos'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getProcedimientos()
        }
        return datos
    }
    getDpto() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Departamento'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getDpto()
        }
        return datos
    }
    getProv(Dp: string) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&Departamento=" + Dp
            let url = '/Provincias'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getProv(Dp)
        }
        return datos
    }
    getDist(Dp: string, Pr: string) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&Departamento=" + Dp + "&Provincia=" + Pr
            let url = '/Distrito'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getDist(Dp, Pr)
        }
        return datos
    }
    getDNI() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/TipoDNI'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getDNI()
        }
        return datos
    }
    getGen() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Genero'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getGen()
        }
        return datos
    }
    getTrauma(categoria: string) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&Categoria=" + categoria + ""
            let url = '/Traumas'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getTrauma(categoria)
        }
        return datos
    }
    getExploGen(categoria: string) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&Categoria=" + categoria + ""
            let url = '/ExploGen'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getExploGen(categoria)
        }
        return datos
    }
    getTriage() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Triage'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getTriage()
        }
        return datos
    }
    getCierreCaso() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/CierreCaso'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getCierreCaso()
        }
        return datos
    }
    getHospitales() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae"
            let url = '/Hospitales'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getHospitales()
        }
        return datos
    }
    getCasosCerrados() {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&cod_ambu=" + this.icodAmbu + ""
            let url = '/CasosCerrados'
            datos = this.getData(url, dataToSend)
        } else {
            datos = this.localData.getCasos()
        }
        return datos
    }
    getCasoPDF(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&id_caso=" + idcaso + ""
            let url = '/CasosPDF'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoTrauma(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/TraumasCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoExpG(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/ExpGCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoExpF(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/ExpFCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoMedicamentos(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/MedicamentoCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoInsumos(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/InsumosCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoProc(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/ProcCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoDiag(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&codigo_caso=" + idcaso + ""
            let url = '/DiagnosticosCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }
    getCasoObst(idcaso: any) {
        let datos
        if (this.conxion == 'true') {
            var dataToSend = "Token=MAgJKq3LaKxL3pae&cod_caso=" + idcaso + ""
            let url = '/ObstCaso'
            datos = this.getData(url, dataToSend)
        } else {
            console.log("Sin conexion")
        }
        return datos
    }



    //INSERT METHODS
    setTurno(km_actual: String, combustible_actual: String, cantidadtiket: String, observacion: String) {
        if (this.conxion == 'true') {
            this.turnoc = true
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_ambu: this.codAmbu, km_actual: km_actual, combustible_actual: combustible_actual, cantidadtiket: cantidadtiket, observacion: observacion, usuario: this.userToken }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetTurno'
            let arrayx = this.setData(url, dataToSend)
            console.log("Con Conexión")
            return arrayx
        } else {
            console.log("Sin Conexion")
            this.turnoc = false
            this.turno = { Token: 'MAgJKq3LaKxL3pae', cod_ambu: this.codAmbu, km_actual: km_actual, combustible_actual: combustible_actual, cantidadtiket: cantidadtiket, observacion: observacion, usuario: this.userToken }
        }
    }
    setPaciente(num_doc: string, tipo_doc: string, nombre1: string, nombre2: string, apellido1: string, apellido2: string, genero: string, edad: Number, fecha_nacido: string, cod_edad: string, telefono: string, celular: string, direccion: string, asegurador: string, dpto: string, prov: string, dist: string, kinicial: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, num_doc: num_doc, tipo_doc: tipo_doc, nombre1: nombre1, nombre2: nombre2, apellido1: apellido1, apellido2: apellido2, genero: genero, edad: edad, fecha_nacido: fecha_nacido, cod_edad: cod_edad, telefono: telefono, celular: celular, direccion: direccion, asegurador: asegurador, dpto: dpto, prov: prov, dist: dist, k_inicial: kinicial }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetPacientes'
            let arrayx = this.setData(url, dataToSend)
            return arrayx
        } else {
            this.infobasica = { num_doc: num_doc, tipo_doc: tipo_doc, nombre1: nombre1, nombre2: nombre2, apellido1: apellido1, apellido2: apellido2, genero: genero, edad: edad, fecha_nacido: fecha_nacido, cod_edad: cod_edad, telefono: telefono, celular: celular, direccion: direccion, asegurador: asegurador, dpto: dpto, prov: prov, dist: dist }
        }
    }
    setCausa(cod_causa: String) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, cod_causa: cod_causa }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetCausa'
            return this.setData(url, dataToSend)
        } else {
            this.causa = cod_causa
            this.causaobstetrico = undefined
            this.causatrauma = undefined
        }
    }
    setTrauma(cod_trauma: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, cod_trauma: cod_trauma }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetTrauma'
            return this.setData(url, dataToSend)
        } else {
            let data = { id: cod_trauma }
            this.causatrauma.push(data)
            this.causaobstetrico = undefined
        }
    }
    delTrauma(cod_trauma: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, cod_trauma: cod_trauma }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/DelTrauma'
            return this.setData(url, dataToSend)
        } else {
            this.causatrauma.forEach(element => {
                if (element.id !== cod_trauma) {
                    this.narray.push(element)
                }
            });
            this.causatrauma = this.narray
            this.narray = []
        }
    }
    setObstetrico(trab: String, sang: String, g: String, p: String, a: String, n: String, c: String, fuente: String, tgest: String) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, trabajoparto: trab, sangradovaginal: sang, g: g, p: p, a: a, n: n, c: c, fuente: fuente, tiempo: tgest }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetObstetrico'
            return this.setData(url, dataToSend)
        } else {
            let data = { trabajoparto: trab, sangradovaginal: sang, g: g, p: p, a: a, n: n, c: c, fuente: fuente, tiempo: tgest }
            this.causaobstetrico = { trabajoparto: trab, sangradovaginal: sang, g: g, p: p, a: a, n: n, c: c, fuente: fuente, tiempo: tgest }
            this.causatrauma = undefined
        }
    }
    setExpGeneral(cod_trauma: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, cod_trauma: cod_trauma }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetExpG'
            return this.setData(url, dataToSend)
        } else {
            let data = { id: cod_trauma }
            this.explo_general.push(data)
        }
    }
    delExpGeneral(cod_trauma: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, cod_trauma: cod_trauma }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/DelExpG'
            return this.setData(url, dataToSend)
        } else {
            this.explo_general.forEach(element => {
                if (element.id !== cod_trauma) {
                    this.narray.push(element)
                }
            });
            this.explo_general = this.narray
            this.narray = []
        }
    }
    setDiagnostico(fecha_horaevaluacion: String, triage: String, sv_tx: String, sv_fc: String, sv_fr: String, sv_temp: String, sv_satO2: String, sv_gl: String, cod_diag_cie: String, ap_diabetes: String, ap_cardiop: String, ap_convul: String, ap_asma: String, ap_acv: String, ap_has: String, ap_alergia: String, ap_med_paciente: String, ap_otros: String) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, fecha_horaevaluacion: fecha_horaevaluacion, triage: triage, sv_tx: sv_tx, sv_fc: sv_fc, sv_fr: sv_fr, sv_temp: sv_temp, sv_satO2: sv_satO2, sv_gl: sv_gl, cod_diag_cie: cod_diag_cie, ap_diabetes: ap_diabetes, ap_cardiop: ap_cardiop, ap_convul: ap_convul, ap_asma: ap_asma, ap_acv: ap_acv, ap_has: ap_has, ap_alergia: ap_alergia, ap_med_paciente: ap_med_paciente, ap_otros: ap_otros }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetEvaluacionClinica'
            return this.setData(url, dataToSend)
        } else {
            this.diagnostico = { fecha_horaevaluacion: fecha_horaevaluacion, triage: triage, sv_tx: sv_tx, sv_fc: sv_fc, sv_fr: sv_fr, sv_temp: sv_temp, sv_satO2: sv_satO2, sv_gl: sv_gl, cod_diag_cie: cod_diag_cie, ap_diabetes: ap_diabetes, ap_cardiop: ap_cardiop, ap_convul: ap_convul, ap_asma: ap_asma, ap_acv: ap_acv, ap_has: ap_has, ap_alergia: ap_alergia, ap_med_paciente: ap_med_paciente, ap_otros: ap_otros }
        }
    }
    setProc(id_proc: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, id_proc: id_proc }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetProc'
            return this.setData(url, dataToSend)
        } else {
            let data = { id: id_proc }
            this.procedimientos.push(data)
        }
    }
    delProc(id_proc: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, id_proc: id_proc }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/DelProc'
            return this.setData(url, dataToSend)
        } else {
            this.procedimientos.forEach(element => {
                if (element.id !== id_proc) {
                    this.narray.push(element)
                }
            });
            this.procedimientos = this.narray
            this.narray = []
        }
    }
    setMedicamento(id_med: string, cant: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, id_med: id_med, cant: cant }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetMedicamentos'
            return this.setData(url, dataToSend)
        } else {
            let data = { id: id_med, cant: cant }
            this.medicamentos.push(data)
        }
    }
    setInsumos(id_insu: string, cant: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, id_insu: id_insu, cant: cant }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetInsumos'
            return this.setData(url, dataToSend)
        } else {
            let data = { id: id_insu, cant: cant }
            this.insumos.push(data)
        }
    }
    setOthers(desc: String, nombre_confirma: String, telefono_confirma: String, kfinal: String, hospital: String, med: String, obscaso: String, cierre: String) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, desc: desc, nombre_confirma: nombre_confirma, telefono_confirma: telefono_confirma, kfinal: kfinal, hospital: hospital, med: med, obscaso: obscaso, cierre: cierre }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/LUpdateCaso'
            return this.setData(url, dataToSend)
        } else {
            this.otros = { desc: desc, nombre_confirma: nombre_confirma, telefono_confirma: telefono_confirma, kfinal: kfinal, hospital: hospital, med: med, obscaso: obscaso, cierre: cierre }
        }
    }
    setImagen(tipo: string, dataurl: any) {
        if (this.conxion == 'true') {
            let blobBin = atob(dataurl.split(',')[1]);
            let array = [];
            for (let i = 0; i < blobBin.length; i++) {
                array.push(blobBin.charCodeAt(i));
            }
            let file = new Blob([new Uint8Array(array)], { type: 'image/png' });
            let postData = new FormData();
            postData.append("file", file);

            let url = environment.apiUrl + '/SetImagen';            
            let respuestaDatos = []
            if (this.plt.is('cordova')) {
                let nativeCall = this.httn.post(url + postData, {}, { 'Content-Type': 'application/x-www-form-urlencoded' })
                from(nativeCall).subscribe((response) => {
                    console.log(response)
                })
            } else {
                console.log(postData)
                this.http.post(url, postData, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).subscribe((response) => {
                    console.log(response)
                })
            }
            return respuestaDatos
        } else {
            let data = { tipo: tipo, img: dataurl }
            this.imagenes.push(data)
        }
    }
    setTraumaFisico(id_trauma_fisico: number, posx: number, posy: number, pos: number) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, id_trauma_fisico: id_trauma_fisico, posx: posx, posy: posy, pos: pos }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetTraumaFisico'
            return this.setData(url, dataToSend)
        } else {
            let data = { id: id_trauma_fisico, posx: posx, posy: posy, pos: pos }
            this.explo_fisica.push(data)
        }
    }
    setDelTraumaFisico() {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/DelTraumaFisico'
            return this.setData(url, dataToSend)
        } else {
            this.explo_fisica = []
        }
    }
    setHoraI(longitud: string, latitud: string) {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, hora: this.fhora, latitud: latitud, longitud: longitud }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetHoraI'
            return this.setData(url, dataToSend)
        } else {
            this.hora_i = this.fhora
        }
    }
    setHoraE() {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, hora: this.fhora }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetHoraE'
            return this.setData(url, dataToSend)
        } else {
            this.hora_e = this.fhora
        }
    }
    setHoraH() {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, hora: this.fhora }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetHoraH'
            return this.setData(url, dataToSend)
        } else {
            this.hora_h = this.fhora
        }
    }
    setHoraB() {
        if (this.conxion == 'true') {
            let data = { Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, hora: this.fhora }
            let jsontext = { JsonParam: data }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetHoraB'
            return this.setData(url, dataToSend)
        } else {
            this.hora_b = this.fhora
        }
    }
    saveCase() {
        let data = {
            Token: 'MAgJKq3LaKxL3pae', cod_caso: this.codCaso, infobasica: this.infobasica, causa: this.causa, subcausat: this.causatrauma, subcausao: this.causaobstetrico, exporacion_general: this.explo_general, diagnostico: this.diagnostico, procedimientos: this.procedimientos, medicamentos: this.medicamentos, insumos: this.insumos, otros: this.otros, exploracion_fisica: this.explo_fisica, hora_i: this.hora_i, hora_e: this.hora_e, hora_b: this.hora_b, hora_h: this.hora_h, latitud: this.corlat, longitud: this.corlong, kinicial: this.kinicial
        }
        // imgs: this.imagenes,
        this.caso = data
        this.nosynchcases.push(this.caso)
    }
    synchCases() {
        if (this.turnoc == false) {
            let jsontext = { JsonParam: this.turno }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SetTurno'
            let arrayx = this.getData(url, dataToSend)
        }
        this.nosynchcases.forEach(element => {
            let jsontext = { JsonParam: element }
            let dataToSend = JSON.stringify(jsontext)
            let url = '/SynchLocal'
            let anything = this.setData(url, dataToSend)
        });
    }
}