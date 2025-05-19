interface StatsCardProps {
  value: string;
  label: string;
}

export const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="p-4">
      <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};
