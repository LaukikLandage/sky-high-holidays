import CountUp from 'react-countup';

interface CounterProps {
  value: string;
  duration?: number;
  start?: boolean;
}

export function Counter({ value, duration = 2.5, start = false }: CounterProps) {
  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  if (isNaN(target)) {
    return <span className="tabular-nums">{value}</span>;
  }

  return (
    <span className="tabular-nums inline-flex items-center">
      <CountUp 
        end={target} 
        duration={duration} 
        start={start} 
        suffix={suffix}
        useEasing={true}
      />
    </span>
  );
}
