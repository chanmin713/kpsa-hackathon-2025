import type { IconListItemProps } from './IconListItem';
import IconListItem from './IconListItem';

interface IconListProps {
  items: IconListItemProps[];
}

export default function IconList({ items }: IconListProps) {
  return (
    <div className="w-full divide-y">
      {items.map((item, idx) => (
        <IconListItem
            key={idx}
            {...item}
        />
      ))}
    </div>
  );
}
