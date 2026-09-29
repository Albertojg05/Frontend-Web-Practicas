import { Miembro } from "src/dominio/entidades";

export interface MiembroRespuestaDto {
    id: number;
    nombre: string;
    correo: string;
    membresia: string;
    activo: boolean;
}

export function aMiembroDto(m: Miembro): MiembroRespuestaDto {
    return {
        id: m.id,
        nombre: m.nombre,
        correo: m.correo,
        membresia: m.membresia,
        activo: m.activo
    };
}