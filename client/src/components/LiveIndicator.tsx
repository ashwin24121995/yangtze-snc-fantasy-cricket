import { cn } from "@/lib/utils";

interface LiveIndicatorProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function LiveIndicator({ className, size = "md", showText = true }: LiveIndicatorProps) {
  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="relative flex items-center justify-center">
        {/* Pulsing outer ring */}
        <div
          className={cn(
            "absolute rounded-full bg-red-500 animate-ping opacity-75",
            sizeClasses[size]
          )}
        />
        {/* Solid inner dot */}
        <div
          className={cn(
            "relative rounded-full bg-red-500",
            sizeClasses[size]
          )}
        />
      </div>
      {showText && (
        <span className={cn("font-semibold text-red-500", textSizeClasses[size])}>
          LIVE
        </span>
      )}
    </div>
  );
}
