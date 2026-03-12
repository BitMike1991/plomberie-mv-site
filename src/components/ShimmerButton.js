import { cn } from "@/lib/utils"

export function ShimmerButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden",
        "rounded-xl px-8 py-4 font-semibold text-bg",
        "bg-gradient-to-r from-accent via-accent2 to-accent bg-[length:200%_100%]",
        "animate-[shimmer_3s_ease-in-out_infinite]",
        "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
        "transition-shadow duration-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </button>
  )
}
