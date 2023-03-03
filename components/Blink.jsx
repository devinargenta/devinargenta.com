"use client";

import { useEffect, useState } from "react";
export default function Blink({ children }) {
    const [hide, set] = useState(false)
  useEffect(() => {
    const inty = setInterval(() => set(h =>!h), 250);
    return () => clearInterval(inty);
  }, []);
  return <span style={{ opacity: hide ? 0 : 1 }}>{children}</span>;
}
