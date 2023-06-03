import { useMediaQuery } from "../hooks/useMediaQuery";

export const useIsSmall = () => useMediaQuery("(max-width: 480px)");
export const useIsMedium = () => useMediaQuery("(max-width: 768px)");

export const specs = [
  "OS",
  "Processor",
  "Memory",
  "Graphics Card",
  "DirectX",
  "Storage",
  "Sound Card",
];
