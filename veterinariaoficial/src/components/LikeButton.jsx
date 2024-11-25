import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
    const [liked, setLiked] = useState(false); // Estado para controlar si está likeado
    const [likes, setLikes] = useState(0); // Estado para contar los likes

    const toggleLike = () => {
        if (liked) {
            setLikes(likes - 1); // Si ya está likeado, disminuye el contador
        } else {
            setLikes(likes + 1); // Si no está likeado, aumenta el contador
        }
        setLiked(!liked); // Cambia el estado de "liked"
    };

    return (
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleLike}>
            <FaHeart
                size={24}
                color={liked ? "#654321" : "#ccc"} // Cambia el color según el estado
                className="transition duration-300 transform hover:scale-110"
            />
            <span className="text-[#654321] font-medium">{likes}</span>
        </div>
    );
};

export default LikeButton;