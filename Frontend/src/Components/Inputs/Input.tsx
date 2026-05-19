// interface InputProps {
//     label?: string;
//     type?: string;
//     name: string;
//     value: string;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     placeholder?: string;
//     error?: string;
//     disabled?: boolean;
//     className?: string;
// }
// const Input = ({
//     label,
//     type = "text",
//     name,
//     // value,
//     onChange,
//     placeholder,
//     error,
//     disabled = false,
//     className = "",
// }: InputProps) => {
//     return (
//         <div className="flex flex-col gap-1">
//             {label && <label htmlFor={name} className="dark:text-primaryTextDark text-primaryText">{label}</label>}
//             <input
//                 type={type}
//                 id={name}
//                 name={name}
//                 // value={value}
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 disabled={disabled}
//                 className={`rounded-lg border dark:bg-primaryBgDark/10 bg-primaryBg/10 backdrop-blur-sm dark:text-primaryTextDark text-primaryText truncate h-10 px-4 ${className} ${error ? "border-red-500" : "border-[1px] dark:"}`}
//             />
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//         </div>
//     );
// }

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { button, div } from "framer-motion/client";
import { useState } from "react";

// export default Input;









interface InputProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  className = "",
  icon,
  rightIcon,
}: InputProps) => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-300 ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative group">
       
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-xl
            bg-primaryBgDark/5 backdrop-blur-sm
            border border-white/20
            text-white placeholder-gray-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:primaryBgDark focus:border-transparent
            hover:parimaryBgDark/10
            disabled:opacity-50 disabled:cursor-not-allowed pl-4
            py-3
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
        />

      {!error && icon && (
  <div className="absolute pr-3 right-0 top-[15px] text-gray-400">
    {type === "password" ? (
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="w-5 h-5"
      >
        {showPassword ? <EyeSlashIcon className="
        w-5 h-5"/> : <EyeIcon  className="w-5 h-5"/>}
      </button>
    ) : icon ? (
      <div className="w-5 h-5">
        {icon}
      </div>
    ):null}
  </div>
)}


        {/* {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )} */}
      </div>
      {error && (
        <p className="text-red-400 text-sm ml-1 animate-fadeIn">{error}</p>
      )}
    </div>
  );
};

export default Input;