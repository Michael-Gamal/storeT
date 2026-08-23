import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'ghost';
  size?: 'default' | 'icon';
  asChild?: boolean;
  className?: string;
};

export default function Button({
  children,
  variant = 'default',
  size = 'default',
  asChild = false,
  className: customClassName = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md transition-colors';

  const variantStyles =
    variant === 'default'
      ? 'bg-primary text-muted'
      : 'bg-transparent text-gray-700 hover:bg-gray-100';

  const sizeStyles =
    size === 'icon' ? 'h-10 w-10' : 'h-10 px-4 py-2';

  const className = `${baseStyles} ${variantStyles} ${sizeStyles} ${customClassName}`;

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      className?: string;
    }>;

    return React.cloneElement(child, {
      className: `${className} ${child.props.className ?? ''}`,
    });
  }

  return <button className={className}>{children}</button>;
}