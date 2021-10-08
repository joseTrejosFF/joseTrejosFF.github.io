import { useEffect, useState } from "react";

/**
 * Tracks scroll Y height.
 * @returns Array with
 * @returns `isVisible` boolean, `height` number
 */
export default function useScrollY() {
  const [isVisible, setIsVisible] = useState(false);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToShow = 550;
    const winScroll = document.documentElement.scrollTop;
    setHeight(winScroll);
    winScroll > heightToShow ? setIsVisible(true) : setIsVisible(false);
  };

  return [isVisible, height];
}
