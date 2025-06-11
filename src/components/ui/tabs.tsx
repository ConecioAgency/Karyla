import * as React from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  className?: string;
  children: React.ReactElement<TabProps>[];
}

export function Tabs({ className = "", children }: TabsProps) {
  const [active, setActive] = React.useState(0);
  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className={className}>
      <div className="flex gap-2 border-b border-gold-200 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab.props.label}
            className={`px-4 py-2 font-semibold text-xs rounded-t-md transition-all duration-200 border-b-2 focus:outline-none
              ${i === active ? "border-gold-500 text-gold-700 bg-gold-50" : "border-transparent text-gray-500 hover:text-gold-600 hover:bg-gold-50"}`}
            onClick={() => setActive(i)}
            type="button"
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="pt-2">{tabs[active]}</div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
} 