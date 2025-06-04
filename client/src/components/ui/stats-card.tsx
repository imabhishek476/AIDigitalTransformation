interface StatsCardProps {
  value: string;
  label: string;
}

export const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="card-premium p-6 rounded-xl text-center">
      <p className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">{value}</p>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};
