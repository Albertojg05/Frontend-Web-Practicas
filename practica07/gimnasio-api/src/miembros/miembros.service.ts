import { Inject, Injectable } from '@nestjs/common';
import type { MiembroRepository } from 'src/dominio/miembro.repository';
import { MIEMBRO_REPOSITORY } from './miembros.token';
import { Miembro } from 'src/dominio/entidades';
import { CrearMiembroDto } from './dto/crear-miembro.dto';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto';
import { MiembroDuplicadoError, MiembroNoEncontradoError } from 'src/dominio/errores';

@Injectable()
export class MiembrosService {
    constructor(
        @Inject(MIEMBRO_REPOSITORY)
        private readonly repo: MiembroRepository
    ) {}

    async listar(): Promise<Miembro[]> {
        return this.repo.listar();
    }

    async buscar(id: number): Promise<Miembro | null> {
        return this.repo.buscarPorId(id);
    }

    async crear(dto: CrearMiembroDto): Promise<Miembro> {
        const miembrosActuales = await this.repo.listar();
        
        // 2. Buscamos si ya existe alguien con ese mismo correo
        const correoExiste = miembrosActuales.some(m => m.correo === dto.correo);
        
        // 3. Si existe, lanzamos el error y detenemos la creación
        if (correoExiste) {
            throw new MiembroDuplicadoError(`El correo ${dto.correo} ya está registrado`);
        }

        return this.repo.crear({
            nombre: dto.nombre,
            correo: dto.correo,
            membresia: dto.membresia
        });
    }

    async actualizar(id: number, dto: ActualizarMiembroDto): Promise<Miembro | null> {
        return this.repo.actualizar({
            id: id,
            nombre: dto.nombre,
            correo: dto.correo,
            membresia: dto.membresia,
            activo: dto.activo
        });
    }

    async eliminar(id: number): Promise<Miembro | null> {
        return this.repo.eliminar(id);
    }
}
