// import React from 'react';
// import { Link } from 'react-router-dom';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     variant?: 'primary' | 'outline' | 'ghost';
//     size?: 'sm' | 'md' | 'lg';
//     to?: string;
//     className?: string;
//     children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ 
//     variant = 'primary', 
//     size = 'md', 
//     to, 
//     className = '', 
//     children, 
//     ...props 
// }) => {
//     const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";
    
//     const variants = {
//         primary: "bg-accent text-white shadow-md border border-transparent hover:bg-accentHover hover:shadow-lg hover:-translate-y-0.5",
//         outline: "dark:bg-cardDark bg-card border border-border dark:text-primaryTextDark text-primaryText hover:dark:bg-primaryBgDark bg-primaryBg hover:border-accent hover:shadow-sm",
//         ghost: "bg-transparent dark:text-primaryTextDark text-primaryText hover:bg-border"
//     };

//     const sizes = {
//         sm: "px-5 py-2 text-sm",
//         md: "px-6 py-2.5 text-base",
//         lg: "px-8 py-3.5 text-lg"
//     };

//     const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

//     if (to) {
//         return (
//             <Link to={to} className={combinedClassName}>
//                 {children}
//             </Link>
//         );
//     }

//     return (
//         <button className={combinedClassName} {...props}>
//             {children}
//         </button>
//     );
// };

// export default Button;



import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'gradient';
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
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative overflow-hidden";
    
    const variants = {
        primary: "bg-accent text-white shadow-md border border-transparent hover:bg-accentHover hover:shadow-lg hover:-translate-y-0.5",
        outline: "border border-border dark:text-primaryTextDark text-primaryText hover:dark:bg-primaryBgDark hover:border-accent hover:shadow-sm",
        ghost: "bg-transparent dark:text-primaryTextDark text-primaryText hover:bg-border",
        gradient: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:primaryBgDark/25 hover:-translate-y-0.5 active:translate-y-0 border-0"
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // For gradient variant with hover effect overlay
    if (variant === 'gradient') {
        const gradientContent = (
            <>
                <span className="relative z-10">{children}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
        );

        if (to) {
            return (
                <Link to={to} className={`${combinedClassName} group`}>
                    {gradientContent}
                </Link>
            );
        }

        return (
            <button className={`${combinedClassName} group`} {...props}>
                {gradientContent}
            </button>
        );
    }

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