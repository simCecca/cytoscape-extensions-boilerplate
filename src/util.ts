export const getCanvasDimension = (
  container: HTMLElement
): { width: number; height: number } => {
  const canvas = container.querySelector("canvas");
  if (!canvas) {
    return { width: 0, height: 0 };
  }
  return { width: canvas.width, height: canvas.height };
};
