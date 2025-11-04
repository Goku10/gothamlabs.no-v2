import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  onItemOpen?: (index: number) => void;
}

export function Accordion({ items, onItemOpen }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    if (newIndex !== null && onItemOpen) {
      onItemOpen(index);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gotham-900 border border-gotham-800 rounded-gotham overflow-hidden"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gotham-850 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium text-gotham-50 pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={`text-gotham-400 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`transition-all duration-200 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-6 pb-4 text-gotham-300">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
