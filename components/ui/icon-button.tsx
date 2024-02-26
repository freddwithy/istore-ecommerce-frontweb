import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}

const IconButton: React.FC<IconButtonProps> = ({ 
    onClick, 
    icon, 
    className 
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full flex items-center justify-center bg-white p-2 shadow-md transition ease-in-out transform hover:scale-110",
                className
            )}
        >
            {icon}
        </button>
    )
}

export default IconButton