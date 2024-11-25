import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ModoOscuro = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div
            onClick={toggleDarkMode}
            className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-300"
        >
            {isDarkMode ? (
                <MdDarkMode className="text-white text-xl" /> 
            ) : (
                <MdLightMode className="text-CafeColor text-xl" /> 
            )}
        </div>
    );
};

export default ModoOscuro;