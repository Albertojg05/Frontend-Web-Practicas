interface FiltrosProps {
    categoria: string[];
    activa: string;
    onCambiar: (categoria: string) => void;
}

export function Filtros({ categoria, activa, onCambiar }: FiltrosProps) {
    return (
        <nav className="filtros">
            {categoria.map((c) => (
                <button
                    key={c}
                    className={c === activa ? 'filtros__boton' : 'filtros__boton--activo'}
                    onClick={() => onCambiar(c)}
                >
                    {c}
                </button>
            ))}
        </nav>
    );
}
