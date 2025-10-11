interface PillProps {
  children: React.ReactNode;
}

export default function Pill({ children }: PillProps) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
      {children}
    </span>
  );
}
