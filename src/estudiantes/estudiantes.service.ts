import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/estudiante';

@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[] = [];

    obtenerEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    obtenerEstudiantePorId( id: number): Estudiante {
        for (let i: number = 0; i < this.estudiantes.length; i++){
            if (this.estudiantes[i].id == id ){
                return this.estudiantes[i];
            }
        }
        return null    
    }
    verificarEstudianteExistente(estudiante: Estudiante): boolean{
        for (let i: number = 0; i < this.estudiantes.length; i++){
            if (this.estudiantes[i].email == estudiante.email ){
                return true;
            }
        }return false;
    }

    crearEstudiante( estudiante: Estudiante): void{
        if (!this.verificarEstudianteExistente(estudiante)){
            estudiante.id = this.estudiantes.length + 1;
            this.estudiantes.push(estudiante);
        }
    }

    eliminarEstudiante(id: number): void{
        for (let i: number = 0; i < this.estudiantes.length; i++){
            if (this.estudiantes[i].id == id ){
                this.estudiantes.splice(i-1, 1)
            }
        }
    }


}
