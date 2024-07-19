import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiante } from 'src/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {

    constructor( private readonly servicio: EstudiantesService){}

    @Get()
    obtenerEstudiantes(): Estudiante[] {
        return this.servicio.obtenerEstudiantes();
    }

    @Get(':id')
    obtenerEstudiante(@Param('id') id: number): Estudiante{
        return this.servicio.obtenerEstudiantePorId(id);
    }

    @Post()
    crearEstudiante(@Body() estudiante: Estudiante): void{
        this.servicio.crearEstudiante(estudiante);
    }

    @Delete('id')
    eliminarEstudiante(@Param('id') id: number): void{
        this.servicio.eliminarEstudiante(id);
    }
}
