import axios from "axios";

// URL base compartida por todos los endpoints
const API_URL = "https://expressapiestudiantes-production.up.railway.app/api/estudiantes";

// 1. GET: Obtener todos los estudiantes
export const obtenerEstudiantes = async () => {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
};

// 2. GET: Obtener estudiante por ID
export const obtenerEstudiantePorId = async (id) => {
    const respuesta = await axios.get(`${API_URL}/${id}`);
    return respuesta.data;
};

// 3. POST: Registrar estudiante
export const registrarEstudiante = async (datosEstudiante) => {
    // datosEstudiante es un objeto: { nombre: "...", edad: 18, correo: "..." }
    const respuesta = await axios.post(API_URL, datosEstudiante);
    return respuesta.data;
};

// 4. PATCH: Actualizar correo del estudiante por ID
export const actualizarCorreoEstudiante = async (id, nuevoCorreo) => {
    // Se envía únicamente el campo correo que se desea modificar
    const respuesta = await axios.patch(`${API_URL}/${id}`, { correo: nuevoCorreo });
    return respuesta.data;
};