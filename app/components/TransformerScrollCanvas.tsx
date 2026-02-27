"use client";
import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
  extension?: string;
}

export default function TransformerScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
  extension = "jpg"
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 1. Preload all images into the browser's memory so it doesn't flicker
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imageFolderPath}/${i}.${extension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) setLoaded(true);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [totalFrames, imageFolderPath, extension]);

  // 2. The drawing logic that scales the image cleanly
  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // High-DPI Canvas scaling (keeps it sharp on MacBooks and nice monitors)
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // 🔥 ADD THESE TWO LINES TO FORCE HIGH QUALITY 🔥
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Object-fit: contain logic...

    // Object-fit: contain logic to keep the robot/truck centered
    const hRatio = rect.width / img.width;
    const vRatio = rect.height / img.height;
    const ratio = Math.min(hRatio, vRatio);
    const centerShift_x = (rect.width - img.width * ratio) / 2;
    const centerShift_y = (rect.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // 3. Draw the very first frame immediately when the page loads
  useEffect(() => {
    if (loaded) drawFrame(0);
  }, [loaded]);

  // 4. The magic: Scrub through the array of images as the user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
    // Map the scroll percentage (0.0 to 1.0) to your frame numbers (0 to 203)
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.floor(latest * totalFrames)
    );
    drawFrame(frameIndex);
  });

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
