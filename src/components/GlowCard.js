import { cn } from "@/lib/utils"

export function GlowCard({ children, className, glowColor, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border border-border bg-surface p-6",
        "transition-all duration-300",
        "hover:border-accent/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]",
        onClick && "cursor-pointer",
        className
      )}
      style={glowColor ? { '--glow': glowColor } : undefined}
    >
      {children}
    </div>
  )
}
