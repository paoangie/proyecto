import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";

// Función para formatear el precio a Bs
const formatPrice = (price) => `Bs ${parseFloat(price).toFixed(2)}`;

const Masvendido = () => {
  const data = [
    {
      id: 0,
      img: "/src/assets/img/chunky.jpg",
      name: "Chunky",
      price: "66",
    },
    {
      id: 1,
      img: "/src/assets/img/dog.jpg",
      name: "Dog Chow",
      price: "50",
    },
    {
      id: 2,
      img: "/src/assets/img/whiskas.jpg",
      name: "Whiskas",
      price: "110",
    },
    {
      id: 3,
      img: "/src/assets/img/golden1.jpg",
      name: "Golden",
      price: "90",
    },
    {
      id: 4,
      img: "/src/assets/img/pedigre.jpg",
      name: "Pedigree",
      price: "159.00",
    },
    {
      id: 5,
      img: "/src/assets/img/royal.jpg",
      name: "Royal Canin",
      price: "189.00",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14 dark:bg-gray-950 dark:text-white">
      {/* heading section */}
      <div>
        <h1 className="font-semibold text-5xl text-center text-ExtraDarkColor mb-10 dark:text-white">
          Los más vendidos
        </h1>
      </div>

      {/* carousel section */}
      <div className="mt-12">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name} // Sin comentario en línea aquí
              price={formatPrice(item.price)} // Sin comentario en línea aquí
            />
          ))}
        </Slider>
      </div>

      {/* Custom styles for dots */}
      <style jsx>{`
        .slick-dots {
          bottom: -60px; /* Mueve los puntos aún más abajo */
        }
        .slick-dots li button:before {
          color: #b6b6b6; /* Color de los puntos */
          font-size: 18px; /* Aumentamos el tamaño de los puntos */
        }
        .slick-dots li.slick-active button:before {
          color: #fff; /* Color de los puntos activos en modo oscuro */
          font-size: 20px; /* Aumentamos el tamaño del punto activo */
        }
      `}</style>
    </div>
  );
};

export default Masvendido;
