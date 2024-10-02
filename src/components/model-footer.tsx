interface ModelFooterProps {
  items: string[];
}

export function ModelFooter({ items }: ModelFooterProps) {
  return (
    <div className="mt-8 flex flex-row sm:gap-4 justify-between sm:justify-center items-center">
      {items.map((item: string) => (
        <p className="text-xs sm:text-base border border-black px-2.5 sm:px-4 py-2 rounded-full font-medium">
          {item}
        </p>
      ))}
    </div>
  );
}
