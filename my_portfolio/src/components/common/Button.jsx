// src/components/common/Button.jsx

const Button = ({ children, icon, ...props }) => {
  return (
    <button 
      className="border border-gray-600 text-white px-8 py-3 uppercase flex items-center space-x-2 hover:bg-gray-900 transition-colors"
      {...props}
    >
      <span>{children}</span>
      {icon && icon}
    </button>
  );
};

export default Button;