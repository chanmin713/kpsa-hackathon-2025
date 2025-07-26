import React from 'react';

export interface IconListItemProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    onClick: () => void;
}

export default function IconListItem({ icon: Icon, title, onClick }: IconListItemProps) {

  return (
    <div className="border-b border-secondary">
      <button
        onClick={onClick}
        className="w-full flex items-center px-6 py-3 text-left text-primary gap-1"
      >
        <Icon width={20} height={20} />
        <span className="text-base text-primary">{title}</span>
      </button>
    </div>
  );
}
