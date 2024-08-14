import { useCallback, useEffect, useState } from "react";

export const useTarget = (eventType: keyof DocumentEventMap = "click") => {
  const [on, setOn] = useState(false);
  const [el, setEl] = useState<HTMLElement | SVGSVGElement>();

  const ref = useCallback((node: keyof typeof el | null) => {
    if (node !== null) {
      setEl(node);
    }
  }, []);

  useEffect(() => {
    if (el) {
      const handleInteraction = (event: Event) => {
        setOn(el.contains(event.target as Node));
      };

      document.addEventListener(eventType, handleInteraction, true);

      return () => {
        document.removeEventListener(eventType, handleInteraction, true);
      };
    }
  }, [el]);

  return { ref, on, setOn: (status: boolean) => setOn(status) };
};
