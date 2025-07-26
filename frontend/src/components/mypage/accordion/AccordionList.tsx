import React from 'react';
import AccordionItem from './AccordionItem';

interface AccordionDataItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionDataItem[];
}

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <div className="w-full divide-y">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
