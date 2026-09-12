import type { Prestamo, EstadoPrestamo } from '../dominio/prestamo.entity.js';

// Lo que el cliente recibe
export interface PrestamoResponseDto {
    // TODO 3b.1: declarar los campos publicos
    folio: string;
    libroId: string;
    ejemplares: number[];
    socioId: string;
    estado: EstadoPrestamo;
    creadoEn: string;
}

// Lo que el cliente manda
export interface crearPrestamoRequestDto {
    libroId: string,
    socioId: string,
    ejemplares: number[];
}

// La forma de los errores que tambien es parte del contrato
export interface ErrorResponseDto{
    error: string,
    mensaje: string,
    detalles?: string[];
}

// Mapper entidad a DTO

export function aResponseDto(p: Prestamo): PrestamoResponseDto {
    return {
        folio: p.folio,
        libroId: p.libroId,
        ejemplares: p.ejemplares,
        socioId: p.socioId,
        estado: p.estado,
        creadoEn: p.creadoEn.toISOString(),
    }
}