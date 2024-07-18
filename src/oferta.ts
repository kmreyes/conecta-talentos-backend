import { Postulacion } from "./postulacion";

export class Oferta{
    constructor(
        id: number,
        fechaCreación: Date,
        descripcion: string,
        cargo: string,
        region: string,
        tipo: string,
        estado: string,
        empresa: string,
        postulaciones: Postulacion
    ){}
}