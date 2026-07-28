import { Meter as AriaMeter, type MeterProps as AriaMeterProps } from "react-aria-components"
import { tv } from "tailwind-variants"

const root = tv({ base: "flex w-full flex-col gap-1.5" })
const labelRow = tv({ base: "flex items-center justify-between text-sm" })
const label = tv({ base: "font-medium text-charcoal" })
const value = tv({ base: "text-charcoal/60" })
const track = tv({ base: "h-2 w-full overflow-hidden rounded-full bg-sand/50" })

function fillColor(percentage: number) {
    if (percentage < 70) return "bg-success"
    if (percentage < 90) return "bg-warning"
    return "bg-danger"
}

export interface MeterProps extends Omit<AriaMeterProps, "className"> {
    label?: string
    className?: string
}

export function Meter({ label: labelText, className, ...props }: MeterProps) {
    return (
        <AriaMeter className={root({ className })} {...props}>
            {({ percentage, valueText }) => (
                <>
                    <div className={labelRow({})}>
                        {labelText && <span className={label({})}>{labelText}</span>}
                        <span className={value({})}>{valueText}</span>
                    </div>
                    <div className={track({})}>
                        <div
                            className={`h-full rounded-full transition-all duration-300 ${fillColor(percentage)}`}
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </>
            )}
        </AriaMeter>
    )
}