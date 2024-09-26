interface ModelFooterProps {
  items: string[];
}

export function ModelFooter({ items }: ModelFooterProps) {
  return (
    <div className="mt-8 flex flex-row gap-4 justify-center items-center">
      {items.map((item: string) => (
        <p className="border border-black px-4 py-2 rounded-full font-medium">{item}</p>
      ))}
    </div>
  );
}
