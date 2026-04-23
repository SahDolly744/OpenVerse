import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    to?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    size = 'md', 
    to, 
    className = '', 
    children, 
    ...props 
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";
    
    const variants = {
        primary: "bg-accent text-white shadow-md border border-transparent hover:bg-accentHover hover:shadow-lg hover:-translate-y-0.5",
        outline: "bg-card border border-border text-primaryText hover:bg-primaryBg hover:border-accent hover:shadow-sm",
        ghost: "bg-transparent text-primaryText hover:bg-border"
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
