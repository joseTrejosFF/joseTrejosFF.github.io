import { useEffect, useState } from "react";

/**
 * useful to mount components when they are fully loaded
 * @returns a boolean
 */
export default function useIsLoading(): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return isLoading;
}
