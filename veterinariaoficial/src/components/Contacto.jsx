import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        fecha: "",
        hora: "",
        email: "",
        mascota: "",
        descripcion: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !formData.nombre ||
            !formData.apellido ||
            !formData.fecha ||
            !formData.hora ||
            !formData.email ||
            !formData.mascota ||
            !formData.descripcion
        ) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        setError("");
        alert("Enviado");
        setFormData({
            nombre: "",
            apellido: "",
            fecha: "",
            hora: "",
            email: "",
            mascota: "",
            descripcion: "",
        });
    };

    const handleCancel = () => {
        setFormData({
            nombre: "",
            apellido: "",
            fecha: "",
            hora: "",
            email: "",
            mascota: "",
            descripcion: "",
        });
        setError("");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8 dark:bg-gray-950 dark:text-white duration-200">
            {/* Texto fuera del formulario */}
            <h1 className="text-3xl font-bold italic text-[#6b4f4f] mb-6 dark:text-[#6b4f4f]">
                Reserva tu cita ahora
            </h1>

            <div className="bg-gray-100 py-8 p-8 rounded-lg w-full max-w-2xl border-2 border-[#6b4f4f] dark:bg-gray-950 dark:border-[#6b4f4f]">
                <h2 className="text-2xl font-bold text-center text-[#6b4f4f] mb-6 dark:text-[#6b4f4f]">
                    Datos Personales
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                           border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                                placeholder="Ingrese su nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                           border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                                placeholder="Ingrese su apellido"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                            Fecha de Atención
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                name="fecha"
                                value={formData.fecha}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                           border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                            />
                            {/* Estilo CSS para cambiar el color del ícono del calendario */}
                            <style>
                                {`
                                    input[type="date"]::-webkit-calendar-picker-indicator {
                                    filter: invert(34%) sepia(86%) saturate(1753%) hue-rotate(143deg) brightness(96%) contrast(95%);
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                            Hora
                        </label>
                        <div className="relative">
                            <input
                                type="time"
                                name="hora"
                                value={formData.hora}
                                onChange={handleChange}
                                className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                         border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                            />
                            {/* Estilo CSS para cambiar el color del ícono de la hora */}
                            <style>
                                {`
                                    input[type="time"]::-webkit-calendar-picker-indicator {
                                    filter: invert(47%) sepia(29%) saturate(3550%) hue-rotate(52deg) brightness(92%) contrast(90%);
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                       border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                            placeholder="Ingrese su correo"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                            Nombre de su Mascota
                        </label>
                        <input
                            type="text"
                            name="mascota"
                            value={formData.mascota}
                            onChange={handleChange}
                            className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                       border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                            placeholder="Ingrese el nombre de su mascota"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#6b4f4f] dark:text-[#6b4f4f]">
                            Descripción del Servicio
                        </label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            className="w-full border-2 rounded-lg p-3 text-[#6b4f4f] focus:outline-none focus:border-4 
                                       border-[#6b4f4f] bg-gray-100 dark:border-[#6b4f4f] dark:bg-gray-950 dark:text-white"
                            rows="4"
                            placeholder="Describa el servicio que requiere"
                        ></textarea>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="bg-[#6d452b] text-PrimaryColor rounded-lg px-6 py-2 text-center font-semibold focus:outline-none hover:bg-[#81604d] hover:text-PrimaryColor dark:bg-[#754829] dark:hover:bg-[#a1735a] dark:text-white"
                        >
                            Enviar
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-[#6d452b] text-PrimaryColor rounded-lg px-6 py-2 text-center font-semibold focus:outline-none hover:bg-[#81604d] hover:text-PrimaryColor dark:bg-[#754829] dark:hover:bg-[#a1735a] dark:text-white"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
