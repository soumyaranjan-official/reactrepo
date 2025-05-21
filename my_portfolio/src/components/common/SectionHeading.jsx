// src/components/common/SectionHeading.jsx
const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
      <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeading;