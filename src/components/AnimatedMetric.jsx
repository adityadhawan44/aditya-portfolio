import { useEffect, useRef, useState } from 'react';

function AnimatedMetric({ value, label }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(() => {
    const match = String(value).match(/\d+/);
    return match ? '0' : value;
  });

  useEffect(() => {
    const element = ref.current;
    const numericMatch = String(value).match(/\d+/);

    if (!element || !numericMatch) {
      setDisplayValue(value);
      return undefined;
    }

    const target = Number(numericMatch[0]);
    const suffix = String(value).replace(numericMatch[0], '');
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const startedAt = performance.now();
        const duration = 1400;

        const tick = (now) => {
          const progress = Math.min(1, (now - startedAt) / duration);
          const eased = 1 - (1 - progress) ** 3;
          const current = Math.round(target * eased);
          setDisplayValue(`${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <article className="stat-chip reveal-card" ref={ref}>
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </article>
  );
}

export default AnimatedMetric;
