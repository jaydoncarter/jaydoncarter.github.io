import { useEffect, useState } from "react";

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    async function measureLatency() {
      const start = performance.now();

      try {
        await fetch(`/latency.txt?${Date.now()}`, {
          cache: "no-store",
        });

        const elapsed = Math.round(performance.now() - start);
        setLatency(elapsed);
      } catch {
        setLatency(null);
      }
    }

    measureLatency();

    const interval = setInterval(measureLatency, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="latency">
      {latency !== null ? `${latency} ms` : "---"}
    </span>
  );
}

export default Latency;