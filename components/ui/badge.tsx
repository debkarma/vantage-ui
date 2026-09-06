import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-[6px] border border-transparent px-2 py-0.5 text-xs font-mono font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary/12 text-primary",
        get: "bg-[#3b82f6]/12 text-[#3b82f6]",
        post: "bg-[#f97316]/12 text-[#f97316]",
        put: "bg-[#8b5cf6]/12 text-[#8b5cf6]",
        delete: "bg-[#f43f5e]/12 text-[#f43f5e]",
        pass: "bg-[#22c55e]/12 text-[#22c55e]",
        fail: "bg-[#ef4444]/12 text-[#ef4444]",
        warn: "bg-[#f59e0b]/12 text-[#f59e0b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
