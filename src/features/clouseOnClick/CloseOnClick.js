import { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref, outsideHandler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        outsideHandler();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.outsideHandler);
  return <div ref={wrapperRef}>{props.children}</div>;
}
