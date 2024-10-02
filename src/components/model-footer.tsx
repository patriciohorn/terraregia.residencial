interface ModelFooterProps {
  items: string[];
}

export function ModelFooter({ items }: ModelFooterProps) {
  return (
    <div className="mt-8 flex flex-wrap  sm:flex-rowgap-x-0 gap-y-1 sm:gap-4 justify-between sm:justify-center items-center">
      {items.map((item: string) => (
        <p className="text-xs text-center sm:text-base border border-black px-1 sm:px-4 py-2 rounded-full font-medium w-36 sm:w-auto">
          {item}
        </p>
      ))}
    </div>
  );
}
