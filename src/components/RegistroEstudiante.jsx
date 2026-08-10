import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registrarEstudiante } from "../api/estudiantes.js";

export default function RegistroEstudiante() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        edad: "",
        correo: ""
    });
    const [guardando, setGuardando] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGuardando(true);
        try {
            await registrarEstudiante({
                ...formData,
                edad: Number(formData.edad)
            });
            navigate("/"); // Redirige a la lista tras guardar
        } catch (error) {
            console.error("Error al registrar estudiante:", error);
            setGuardando(false);
        }
    };

    return (
        <section className="pagina">
            <section className="contenido">
                <h1 className="titulo">Registrar Estudiante</h1>
                <form onSubmit={handleSubmit} className="tarjeta">
                    <div className="campo">
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="campo">
                        <label>Edad:</label>
                        <input 
                            type="number" 
                            name="edad" 
                            value={formData.edad} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="campo">
                        <label>Correo:</label>
                        <input 
                            type="email" 
                            name="correo" 
                            value={formData.correo} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="boton boton--primario" disabled={guardando}>
                        {guardando ? "Guardando..." : "Guardar Estudiante"}
                    </button>
                    <Link to="/" className="boton">Cancelar</Link>
                </form>
            </section>
        </section>
    );
}