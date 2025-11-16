import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x);
      y += (mouseY - y);

      cursor.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
}
