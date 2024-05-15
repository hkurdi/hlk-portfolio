import React from 'react'
import { motion } from 'framer-motion'


const Tile = ({key}) => {

    const colors = [
        "#FFA726", // Orange
        "#66BB6A", // Green
        "#42A5F5", // Blue
        "#EC407A", // Pink
        "#AB47BC", // Purple
        "#EF5350", // Red
        "#FFEE58", // Yellow
        "#29B6F6", // Light Blue
    ];
    
    
        const randomColorIndex = Math.floor(Math.random() * colors.length);


  return (
    <motion.div key={key} id="tile" className="aspect-square bg-gray-950"
    whileHover={{
        zIndex:1,
        backgroundColor: colors[randomColorIndex]
    }}
    transition={{
        duration: 2,
        ease: "easeOut",
    }}
    
    />
  )
}

export default Tile