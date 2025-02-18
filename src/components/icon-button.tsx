import { ComponentProps } from "react"

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props : IconButtonProps) {
    return (
        <button className="bg-gray-500 cursor-pointer duration-300 hover:bg-blue hover:text-gray-900 p-1.5 rounded-md text-blue transition-colors"
        {...props}
        />
    )
}
