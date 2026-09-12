import { error } from "console";
import type { crearPrestamoRequestDto } from "../contratos/prestamo.dto.js";
import { ValidacionError } from "./errores-http.js";

export function validarCrearPrestamo(cuerpo: unknown): crearPrestamoRequestDto{
    const errores: string[] = [];

    if( typeof cuerpo !=='object' || cuerpo === null){
        throw new ValidacionError(['El cuerpo debe ser un objeto JSON']);
    }

    const c = cuerpo as Record<string, unknown>;

    if(typeof c.libroId !== 'string' || c.libroId.trim() === ''){
        errores.push('LibroId debe ser un texto no vacio');
    }

    if(typeof c.socioId !== 'string' || c.socioId.trim() === ''){
        errores.push('SocioId debe ser un texto no vacio');
    }

    if(!Array.isArray(c.ejemplares) || c.ejemplares.length === 0){
        errores.push('ejemplares debe ser un arreglo con almenos un elemento');
    }else if (c.ejemplares.some((e) => typeof e !== 'number' || !Number.isInteger(e) || e <= 0)) {
        errores.push('ejemplares solo admite numeros enteros positivos');
    }

    if (errores.length > 0){
        throw new ValidacionError(errores);
    }

    return c as unknown as crearPrestamoRequestDto;
}