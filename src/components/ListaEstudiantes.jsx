import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerEstudiantes } from "../api/estudiantes.js";

export default function ListaEstudiantes() {
    const [estudiantes, setEstudiantes] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        obtenerEstudiantes()
            .then((data) => {
                const lista = Array.isArray(data) ? data : (data.estudiantes || data.data || []);
                setEstudiantes(lista);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error al obtener estudiantes:", error);
                setCargando(false);
            });
    }, []);

    return (
        <section className="pagina">
            <section className="contenido">
                <h1 className="titulo">Listado de Alumnos</h1>
                <p className="subtitulo">Visualiza y administra la base de datos de estudiantes matriculados.</p>
        
                <div className="tarjeta">
                    <div className="buscador">
                        <span className="buscador__icono" aria-hidden="true">🔍</span>
                        <input 
                            type="text" 
                            placeholder="Buscar por nombre, correo o ID..." 
                            className="buscador__input" 
                        />
                    </div>

                    <Link to="/estudiantes/registro" className="boton boton--primario">
                        <span aria-hidden="true">+</span> Agregar Estudiante
                    </Link>
            
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Correo</th>
                                <th className="th-acciones">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cargando ? (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: "center", padding: "1rem" }}>
                                        Cargando estudiantes...
                                    </td>
                                </tr>
                            ) : estudiantes.length === 0 ? (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: "center", padding: "1rem" }}>
                                        No hay estudiantes registrados.
                                    </td>
                                </tr>
                            ) : (
                                estudiantes.map((estudiante, index) => (
                                    <tr key={estudiante.id || estudiante._id || index}>
                                        <td>{estudiante.nombre || estudiante.name || "Sin nombre"}</td>
                                        <td>{estudiante.edad || estudiante.age || "N/A"}</td>
                                        <td className="celda-correo">{estudiante.correo || estudiante.email || "Sin correo"}</td>
                                        <td className="td-acciones">
                                            <Link to="#" className="enlace-detalle">Ver detalle ›</Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
            
                    <div className="pie-tabla">
                        <span className="pie-tabla__info">
                            Mostrando {estudiantes.length} estudiantes
                        </span>
                        <div className="paginacion">
                            <button className="paginacion__boton" aria-label="Página anterior">‹</button>
                            <button className="paginacion__boton" aria-label="Página siguiente">›</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}