import { ActualizarMiembro, NuevoMiembro, Miembro } from "./entidades";

export interface MiembroRepository {
    listar(): Promise<Miembro[]>;
    buscarPorId(id: number): Promise<Miembro | null>;
    crear(datos: NuevoMiembro): Promise<Miembro>;
    actualizar(datos: ActualizarMiembro): Promise<Miembro | null>;
    eliminar(id: number): Promise<Miembro | null>;
}