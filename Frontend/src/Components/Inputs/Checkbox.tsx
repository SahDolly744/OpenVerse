import { label } from "framer-motion/client";

interface CheckBoxProps {
  id: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Checkbox = ({ id, label, name, checked, onChange, className }: CheckBoxProps) => {
  return (
    <div className="flex items-center gap-2">
     <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className={`w-4 h-4 border-2 md:w-5 md:h-5 bg-black/30 border-white rounded-md appearance-none checked:after:content-['✓'] checked:after:text-white  flex justify-center items-center checked:bg-primaryBgDark ${className}`}
          
        />
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
