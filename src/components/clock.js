import { useState, useEffect } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer); // cleanup, avoids memory leaks
  }, []);

  const dateStr = now.toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit"
  });

  return { dateStr, timeStr };
}

export default Clock;
