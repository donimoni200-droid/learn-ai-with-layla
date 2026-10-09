"use client";

import { useState } from "react";
import { challengePage as cp } from "@/lib/site-content";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {cp.faq.items.map((item, i) => (
        <div key={i} className="faq-item" data-open={open === i}>
          <button
            type="button"
            className="faq-item__q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <span className="faq-item__caret" aria-hidden="true">▾</span>
          </button>
          <div className="faq-item__a">{item.a}</div>
        </div>
      ))}
    </div>
  );
}
