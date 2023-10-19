import { useThree, useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

export function ModelRotationControl() {
  const { camera, mouse, viewport } = useThree();
  const [dragging, setDragging] = useState(false);
  const previousMouse = useRef([0, 0]);

  useFrame(() => {
    if (dragging) {
      const deltaX = mouse.x - previousMouse.current[0];
      const deltaY = mouse.y - previousMouse.current[1];

      // Изменение угла поворота модели в зависимости от движения мыши или касания
      camera.position.x += deltaX * 5;
      camera.position.y -= deltaY * 5;

      previousMouse.current[0] = mouse.x;
      previousMouse.current[1] = mouse.y;
    }
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: viewport.width,
        height: viewport.height,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
    >
		
	 </div>
  );
}
