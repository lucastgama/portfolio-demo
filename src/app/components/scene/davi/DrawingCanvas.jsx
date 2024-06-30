import React, { useRef, useState } from "react";
import * as THREE from "three";

const DrawingCanvas = ({ texture }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  const startDrawing = (e) => {
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.moveTo(x, y);
  };
  
  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#ffffff"; // Cor do grafite
    ctx.lineWidth = 5;
    ctx.stroke();
    texture.needsUpdate = true; // Atualiza a textura do objeto 3D
  };
  
  const endDrawing = () => {
    setIsDrawing(false);
  };
  
  return (
    <canvas
      ref={canvasRef}
      width={1024}
      height={1024}
      style={{ display: "none" }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
    />
  );
};

export default DrawingCanvas;
