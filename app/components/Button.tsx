"use client"; 

import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    label: string;
    link: string;
    type?: string;
    float?: string;
    width?: number;
    percentage?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    link,
    type,
    float = "left",
    width = 338,
    percentage = false,
    onClick
}) => {

    const buttonStyle = {
        width: percentage ? `${width}%` : `${width}px`,
    };

    return (
        <Link href={link}>
            <div className={`float-${float}`}>
                <button
                    className={`
                        flex items-center justify-center py-[2px] h-[50px] md:h-[63px] my-2 font-din
                        ${type === "primary" ? 'border-[3px] border-blue bg-transparent text-black' : ''}
                        ${type === "secondary" ? 'border-[3px] border-gray bg-transparent text-black' : ''}
                        ${type === "tertiary" ? 'border-none bg-blue text-white' : ''}

                    `}
                    style={buttonStyle} // Add the style here
                    onClick={onClick}
                >
                    {label}
                </button>
            </div>
        </Link>
    );
}

export default Button