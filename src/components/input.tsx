import { ComponentProps } from 'react';

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="bg-gray-800 border border-gray-600 data-[error=true]:border-danger flex focus-within:border-gray-100 gap-2 group h-12 items-center px-4 rounded-xl"
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger group-focus-within:text-gray-100 text-gray-400"
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return (
    <input className="flex-1 outline-none placeholder-gray-400" {...props} />
  );
}
