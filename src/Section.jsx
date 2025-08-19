import { useEffect, useRef, useState } from "react";

export default function Section({ classe, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={classe + " section-animee " + (visible ? "section-visible" : "")}>
      {children}
    </section>
  );
}
