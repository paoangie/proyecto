import React from "react";
import TestimoniosCard from "../layouts/TestimoniosCard";

const Testimonios = () => {
  return (
    <div className="bg-[#fdf1e6] py-12 px-6 md:px-16 lg:px-24 border border-brown-200 rounded-lg shadow-lg dark:bg-gray-950">
      <h1 className="font-semibold text-center text-4xl mt-8 text-[#6b4f4f]">
        Testimonios
      </h1>

      <div className="flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-4">
        <TestimoniosCard
          name="Carlos Mamani"
          description="El equipo veterinario fue increíble con mi perrito. Trataron su fractura con mucho cuidado y cariño."
        />
        <TestimoniosCard
          name="Lucía Quispe"
          description="Mi gata recibió atención de calidad en todo momento. Estoy muy agradecida por su paciencia y profesionalismo."
        />
        <TestimoniosCard
          name="Juan Choque"
          description="Excelente servicio. Mis loros recibieron una revisión completa y aprendí mucho sobre su cuidado."
        />
      </div>
    </div>
  );
};

export default Testimonios;
