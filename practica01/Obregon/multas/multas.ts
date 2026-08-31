type Estado = 'activo' | 'devuelto' | 'vencido'

interface Prestamo {
    multa: number;
    ejemplar: number;
    estado: Estado;
    socio: string;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

function generarRecibo(prestamo: Prestamo): string {
    if (prestamo.socio === undefined) {
        return 'Recibo de socio no registrado'
    }
    return `RECIBO DE MULTA
Socio: ${prestamo.socio}
Ejemplar: ${prestamo.ejemplar}
Estado: ${prestamo.estado}`;
}

const prestamo: Prestamo = { multa: 350, ejemplar: 14, estado: 'VENCIDO', socio: 'Alberto' };

console.log(generarRecibo(prestamo));
console.log("total a pagar: " + calcularMulta(prestamo));

