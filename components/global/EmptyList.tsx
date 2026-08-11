function EmptyList({
    heading = 'No items found.',
    className,
  }: {
    heading?: string;
    className?: string;
  }) {
    return <h2 className={`text-xl ${className}`}>{heading}</h2>;
  }
  
  export default EmptyList;