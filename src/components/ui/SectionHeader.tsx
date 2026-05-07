import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({ title, subtitle, description, className, dark = false }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16 flex flex-col items-center", className)}>
      {subtitle && (
        <div className="flex flex-col items-center mb-6">
          <span className="text-[#FF7A00] font-bold text-sm md:text-base uppercase tracking-[0.3em] mb-3">
            {subtitle}
          </span>
          <div className="w-12 h-[3px] bg-[#FF7A00] rounded-full" />
        </div>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]",
        dark ? "text-white" : "text-[#020617]"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-3 text-lg max-w-3xl mx-auto font-medium leading-relaxed",
          dark ? "text-gray-400" : "text-gray-500"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
