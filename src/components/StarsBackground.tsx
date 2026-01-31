'use client';

import { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      opacitySpeed: number;
      private c: HTMLCanvasElement;

      constructor(canvasEl: HTMLCanvasElement) {
        this.c = canvasEl;
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
        this.opacity = Math.random();
        this.opacitySpeed = Math.random() * 0.02;
      }

      update() {
        this.y += this.speed;
        this.opacity += this.opacitySpeed;

        if (this.opacity > 1) {
          this.opacitySpeed = -this.opacitySpeed;
        } else if (this.opacity < 0) {
          this.opacitySpeed = -this.opacitySpeed;
        }

        if (this.y > this.c.height) {
          this.y = 0;
          this.x = Math.random() * this.c.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create stars
    const stars = Array.from({ length: 100 }, () => new Star(canvas));

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarsBackground; 