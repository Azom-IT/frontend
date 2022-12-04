import clsx from 'clsx';

export interface TextareaProps {
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export function Textarea({
  className,
  placeholder,
  required,
  disabled,
}: TextareaProps) {
  const classNames = clsx(
    'inline-block pt-[14px] pb-[12px] px-[16px] text-[14px] text-white placeholder-white leading-[20px]',
    'rounded-[6px] bg-[#252528] outline-none border border-[#252528] resize-none',
    'focus:bg-transparent focus:border-white/50',
    'transition-color duration-150 ease-in',
    className,
  );

  return (
    <textarea
      className={classNames}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    ></textarea>
  );
}
