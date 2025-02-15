export const Badge = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };