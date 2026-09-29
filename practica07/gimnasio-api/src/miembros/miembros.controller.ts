import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Res } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { aMiembroDto } from './dto/miembro-respuesta.dto';
import type { CrearMiembroDto } from './dto/crear-miembro.dto';
import type { ActualizarMiembroDto } from './dto/actualizar-miembro.dto';
import type { Response } from 'express';

@Controller('miembros')
export class MiembrosController {
    constructor(private readonly servicio: MiembrosService) { }

    @Get()
    async listar() {
        const miembros = await this.servicio.listar();
        return miembros.map((m) => aMiembroDto(m));
    }

    @Get(":id")
    async buscar(@Param("id") id: string) {
        const miembro = await this.servicio.buscar(Number(id));
        if (!miembro) {
            throw new NotFoundException(`No se encontró un miembro con el id ${id}`);
        }
        return aMiembroDto(miembro);
    }

    @Post()
    @HttpCode(201)
    async crear(
        @Body() dto: CrearMiembroDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const nuevo = await this.servicio.crear(dto);
        res.setHeader("Location", `miembros/${nuevo.id}`);
        return aMiembroDto(nuevo);
    }

    @Patch(":id")
    async actualizar(
        @Param("id") id: string,
        @Body() dto: ActualizarMiembroDto
    ) {
        const actualizado = await this.servicio.actualizar(Number(id), dto);
        if (!actualizado) {
            throw new NotFoundException(`No se encontró un miembro con el id ${id}`);
        }
        return aMiembroDto(actualizado);
    }

    @Delete(":id")
    async eliminar(@Param("id") id: string) {
        const eliminado = await this.servicio.eliminar(Number(id));
        if (!eliminado) {
            throw new NotFoundException(`No se encontró un miembro con el id ${id}`);
        }
        return aMiembroDto(eliminado);
    }
}
