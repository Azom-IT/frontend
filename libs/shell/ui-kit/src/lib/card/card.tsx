import { ReactNode } from 'react';
import clsx from 'clsx';

export interface NewCardProps {
  children: ReactNode;
  className?: string;
}

export function NewCard({ children, className }: NewCardProps) {
  return (
    <div className="border border-[#ffffff3d] hover:border-[#EC5728] hover:cursor-pointer duration-300 rounded-lg p-4 lg:p-7 bg-transparent">
      {children}
    </div>
  );
}

export function NewCardHeading({ children }: { children: ReactNode }) {
  return (
    <div className="whitespace-pre-wrap text-[14px] leading-[22px] lg:text-[18px] lg:leading-[28px] font-sans text-white min-h-[44px] sm:text-[17px] sm:leading-[26px] sm:min-h-[52px] lg:min-h-[56px]">
      {children}
    </div>
  );
}

export function NewCardText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx('font-sans', className)}>{children}</div>;
}

export function NewCardSubText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'text-[11px] lg:text-[12px] leading-[1.5] lg:leading-[17px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TimerText({
  children,
  color = 'grey',
}: {
  children: ReactNode;
  color?: 'white' | 'grey';
}) {
  return (
    <div
      className={clsx(
        'font-serif text-[14px] leading-[18px] lg:text-[20px] lg:leading-[26px]',
        color === 'grey' && 'text-[#8E8E8E]',
        color === 'white' && 'text-white',
      )}
    >
      {children}
    </div>
  );
}

export function ProposalNumber({ children }: { children: ReactNode }) {
  return (
    <div className="text-[14px] leading-[18px] lg:text-[20px] lg:leading-[26px] text-white">
      {children}
    </div>
  );
}
