interface MetricProps {
  label: string;
  value: string;
  description?: string;
}

export default function Metric({ label, value, description }: MetricProps) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 font-medium text-gray-900">{label}</p>
      {description && (
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
}
