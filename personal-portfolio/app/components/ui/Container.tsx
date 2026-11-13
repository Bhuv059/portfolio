import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div id={id} className={`container ${className}`}>
      {children}
    </div>
  );
}
