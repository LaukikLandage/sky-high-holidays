import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ number, icon: Icon, title, description, image }: ServiceCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#000000]/50 to-[#0E0E0E]/50 rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFC107]/50 transition-all hover:scale-105 duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>

      {/* Background Number */}
      <div className="absolute top-4 right-4 text-8xl font-bold text-white/5 group-hover:text-[#FFC107]/10 transition-colors duration-300 select-none">
        {number}
      </div>

      {/* Content */}
      <div className="relative p-8 space-y-4">
        <div className="w-16 h-16 bg-[#FFC107]/20 rounded-xl flex items-center justify-center group-hover:bg-[#FFC107]/30 transition-colors duration-300">
          <Icon className="w-8 h-8 text-[#FFC107]" />
        </div>

        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        <button className="flex items-center gap-2 text-[#FFC107] font-semibold group-hover:gap-3 transition-all duration-300 outline-none">
          Learn More
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
