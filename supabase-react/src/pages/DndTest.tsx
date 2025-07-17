// components/DragAndDropGrid.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

const icons = ["🍎", "🍌", "🍇"];

type GridItem = {
  id: string;
  icon: string;
  x: number;
  y: number;
};

const NUM_COLUMNS = 4;
const NUM_ROWS = 3;
const GRID_SIZE = NUM_COLUMNS * NUM_ROWS;

const DragAndDropGrid = () => {
  const [placedItems, setPlacedItems] = useState<(GridItem | null)[]>(() => {
    const saved = localStorage.getItem("placedItems");
    return saved ? JSON.parse(saved) : Array(GRID_SIZE).fill(null);
  });

  const paletteRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!paletteRef.current) return;

    Array.from(paletteRef.current.children).forEach((el, index) => {
      draggable({
        element: el as HTMLElement,
        getInitialData: () => ({
          type: "icon",
          icon: icons[index],
          id: `icon-${index}`,
        }),
      });
    });
  }, []);

  useEffect(() => {
    cellRefs.current.forEach((cell, index) => {
      if (!cell) return;

      dropTargetForElements({
        element: cell,
        canDrop: () => true,
        onDrop: (args) => {
          const { type, icon, id, index: fromIndex } = args.source.data;

          const x = index % NUM_COLUMNS;
          const y = Math.floor(index / NUM_COLUMNS);

          setPlacedItems((prev) => {
            const newItems = [...prev];

            if (type === "placed-icon" && fromIndex !== undefined) {
              newItems[fromIndex as number] = null;
            }

            if (!newItems[index]) {
              newItems[index] = {
                icon: icon as string,
                id: id as string,
                x,
                y,
              };
            }

            return newItems;
          });
        },
      });
    });

    if (!gridRef.current) return;

    Array.from(gridRef.current.children).forEach((cell, index) => {
      if (placedItems[index]) {
        draggable({
          element: cell as HTMLElement,
          getInitialData: () => ({
            type: "placed-icon",
            icon: placedItems[index]!.icon,
            id: placedItems[index]!.id,
            index,
          }),
        });
      }
    });
  }, [placedItems]);

  useEffect(() => {
    localStorage.setItem("placedItems", JSON.stringify(placedItems));
  }, [placedItems]);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* Palette */}
      <div
        ref={paletteRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid gray",
          width: "100px",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            style={{
              padding: "0.5rem",
              fontSize: "2rem",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
              cursor: "grab",
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gridTemplateRows: "repeat(3, 80px)",
          gap: "10px",
          padding: "1rem",
          border: "1px dashed #888",
          width: "360px",
          height: "260px",
        }}
      >
        {[...Array(GRID_SIZE)].map((_, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null): void => {
              cellRefs.current[index] = el;
            }}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: placedItems[index] ? "#e0ffe0" : "#fff",
            }}
          >
            {placedItems[index]?.icon ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropGrid;
