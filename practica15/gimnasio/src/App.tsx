import { Routes, Route, Navigate } from 'react-router';
import { Layout } from './componentes/Layout';
import { NoEncontrado } from './componentes/NoEncontrado';
import PaginaClases  from './componentes/PaginaClases';
import PaginaClase  from './componentes/PaginaClase';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/clases" replace />} />
        <Route path="/clases" element={<PaginaClases />} />
        <Route path="/clases/:id" element={<PaginaClase />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}