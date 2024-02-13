import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Camera } from "@/types/canvas";

const COLORS = [
  "#FF1001",
  "#FFC501",
  "#00B13F",
  "#4C9AFF",
  "#B503FD",
  "#EE7200"
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
};

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera,
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  }
}