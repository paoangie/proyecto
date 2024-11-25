import React from 'react'
import Imagen1 from "../assets/img/Imagen1.png"
import Imagen2 from "../assets/img/Imagen2.png"
import Imagen3 from "../assets/img/Imagen3.png"
import Slider from "react-slick"

const ListaImagenes = [
    {
        id: 1,
        img: Imagen1,
        titulo: "Mimos y Patitas, Donde el Amor y el Cuidado Dejan Marca",
        descripcion: "Les brindamos el cuidado y amor que merecen, desde su primer ladrido o ronroneo hasta cada momento especial de sus vidas. Juntos construimos un mundo lleno de huellas felices y corazones contentos.",
    },
    {
        id: 2,
        img: Imagen2,
        titulo: "¡Gran Descuento del 50% en Todos Nuestros Servicios Veterinarios!",
        descripcion: "Aprovecha nuestro descuento del 50% en consultas y tratamientos. ¡Tu mascota merece lo mejor y nosotros te ayudamos a cuidarla de la manera más económica! Oferta válida hasta fin de mes.",
    },
    {
        id: 3,
        img: Imagen3,
        titulo: "Confía en Nosotros, ¡El Cuidado de Tu Mascota es Nuestra Prioridad!",
        descripcion: "Nuestro equipo de expertos veterinarios está listo para brindar el mejor cuidado a tu mascota. ¡Ven y conoce nuestras instalaciones y servicios exclusivos para su bienestar!",
    },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        sliderToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        centerMode: true, 
        centerPadding: "0", 
        slidesToShow: 1, 
    }
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* Triángulo de fondo */}
            <div className='h-[700px] w-[700px] bg-PrimaryColor/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
            <div className='container pb-8 sm:pb-0 mt-20'> {/* Agregado mt-20 solo al contenido */}
                <Slider {...settings}>
                    {ListaImagenes.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* Texto */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.titulo}</h1>
                                    <p className='text-sm'>
                                        {data.descripcion}
                                    </p>
                                    <div>
                                        <button className='bg-gradient-to-r from-PrimaryColor to-SecondaryColor hover:scale-105 diration-200 text-white py-2 px-4 rounded-full'>
                                            Ordená ahora!
                                        </button>
                                    </div>
                                </div>
                                {/* Imagen */}
                                <div className='order-1 sm:order-2 flex justify-center relative'>
                                    <div className='relative z-10 sm:ml-40 lg:ml-50'>
                                        <img 
                                            src={data.img} 
                                            alt="" 
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}


export default Hero;