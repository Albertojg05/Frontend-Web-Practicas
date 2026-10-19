import { Saludo } from "./Saludo.tsx";
import { TarjetaPerfil } from "./TarjetaPerfil.tsx";

export default function App() {
  return (
    <main className="pagina">
      <Saludo nombre="ISW" />

      <section className="equipo"> 
        <TarjetaPerfil nombre="Alberto Jiménez" carrera="Ingeniería en Software" semestre={6} />
        <TarjetaPerfil nombre="Ramón Valencia" carrera="Ingeniería en Software" semestre={7} />
        <TarjetaPerfil nombre="Sebastian Ceja" carrera="Ingeniería en Mecatronica" semestre={5} />
      </section>
    </main>
  );
}