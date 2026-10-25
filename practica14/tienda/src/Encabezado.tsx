interface EncabezadoProps {
    piezas: number;
}

export function Encabezado({ piezas }: EncabezadoProps) {
    return (
        <header className="encabezado">
            <div className="encabezado__marca">
                <img src="/img/logo.svg" alt="" height="32" />
                Tienda
            </div>
            <span className="encabezado__carrito">
                Carrito: <strong>{piezas == 0 ? "0" : piezas}</strong>
            </span>
        </header>
    );
}