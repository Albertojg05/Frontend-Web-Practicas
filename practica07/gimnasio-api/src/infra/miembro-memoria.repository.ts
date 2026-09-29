import { MIEMBROS } from "src/datos/gimnasio.seed";
import { Miembro, NuevoMiembro, ActualizarMiembro } from "src/dominio/entidades";
import { MiembroRepository } from "src/dominio/miembro.repository";

export class MiembroMemoriaRepository implements MiembroRepository {
    private miembros: Miembro[] = MIEMBROS;
    private siguienteId = MIEMBROS.length > 0
        ? Math.max(...MIEMBROS.map(m => m.id)) + 1
        : 1;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
    }

    async buscarPorId(id: number): Promise<Miembro | null> {
        return this.miembros.find((m) => m.id === id) ?? null;
    }

    async crear(datos: NuevoMiembro): Promise<Miembro> {
        const nuevo: Miembro = {
            id: this.siguienteId++,
            nombre: datos.nombre,
            correo: datos.correo,
            membresia: datos.membresia,
            activo: true
        };
        this.miembros.push(nuevo);
        return nuevo;
    }

    async actualizar(datos: ActualizarMiembro): Promise<Miembro | null> {
        const actualizar = this.miembros.find((m) => m.id === datos.id);
        if (!actualizar) return null;
        if (datos.nombre) actualizar.nombre = datos.nombre;
        if (datos.correo) actualizar.correo = datos.correo;
        if (datos.membresia) actualizar.membresia = datos.membresia;
        if (datos.activo) actualizar.activo = datos.activo;

        return actualizar;
    }

    async eliminar(id: number): Promise<Miembro | null> {
        const indice = this.miembros.findIndex((m) => m.id === id);
        if (indice === -1) return null;
        const [eliminado] = this.miembros.splice(indice, 1);
        return eliminado;
    }
}