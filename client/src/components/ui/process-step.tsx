interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export const ProcessStep = ({ 
  number,
  title,
  description 
}: ProcessStepProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};
