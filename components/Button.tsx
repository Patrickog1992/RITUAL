import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  subtext?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", subtext }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <button 
        onClick={onClick}
        className={`w-full max-w-md bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.6)] transform transition hover:scale-[1.02] active:scale-[0.98] text-lg uppercase tracking-wider flex items-center justify-center gap-2 border-b-4 border-green-800 animate-pulse ${className}`}
      >
        <span>{children}</span>
        <ArrowRight className="w-6 h-6 animate-pulse" />
      </button>
      {subtext && (
        <p className="mt-2 text-xs text-gray-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          {subtext}
        </p>
      )}
    </div>
  );
};