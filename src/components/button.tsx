import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props : ButtonProps) {
    return (
        <button className="bg-gray-500 cursor-pointer duration-300 flex font-semibold h-12 hover:bg-blue hover:text-gray-900 items-center justify-between px-5 rounded-xl text-blue transition-colors w-full"
        {...props}
        />
    )
}
