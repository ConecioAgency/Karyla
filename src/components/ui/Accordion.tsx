import * as React from "react";

interface AccordionItemProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function AccordionItem({ title, defaultOpen = false, children }: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm mb-0 overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-gray-900 focus:outline-none select-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2 text-xl font-bold text-gray-400">{open ? '−' : '+'}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out px-4 pb-4 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{ overflow: 'hidden' }}
      >
        {open && children}
      </div>
    </div>
  );
} 