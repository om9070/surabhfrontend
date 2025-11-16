// Input.tsx
import React from 'react';
import { cn } from "@/lib/utils"; // Utility for className management

interface InputProps {
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input: React.FC<InputProps> = ({ name, type = 'text', placeholder, value, onChange, onBlur, error }) => {
    return (
        <div className="border-b border-gray-400">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={cn(
                    "md:w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500 placeholder-[#808080] text-sm border-b border-[#ababab]",
                    error ? 'border-red-500' : 'focus:border-none'
                )}
            />
            {error && <div className="text-red-500 text-xs">{error}</div>}
        </div>
    );
};

export default Input;
