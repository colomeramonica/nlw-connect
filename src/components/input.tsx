import { Mail } from "lucide-react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {}

export function Input(props : InputProps) {
    return (
        <div className="bg-gray-800 border border-gray-600 flex focus-within:border-gray-100 gap-2 group h-12 items-center px-4 rounded-xl">
            <span
            className="group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-focus-within:text-gray-100 text-gray-400">
            <Mail />
            </span>
        <input
        className="flex-1 outline-none placeholder-gray-400"
        {...props}
        />
        </div>
    )
}
