import React from 'react';

type ButtonProps = {
  children: React.ReactElement;
  variant?: 'default' | 'ghost';
  size?: 'default' | 'icon';
  asChild?: boolean;
};

export default function Button({
  children,
  variant = 'default',
  size = 'default',
  asChild = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md transition-colors';

  const variantStyles =
    variant === 'default'
      ? 'bg-black text-white hover:bg-neutral-800'
      : 'hover:bg-gray-100';

  const sizeStyles =
    size === 'icon'
      ? 'h-10 w-10'
      : 'h-10 px-4 py-2';

  const className = `${baseStyles} ${variantStyles} ${sizeStyles}`;

  if (asChild) {
    return React.cloneElement(children, {
      className: `${className} ${children.props.className || ''}`,
    });
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}