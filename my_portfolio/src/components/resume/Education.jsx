// src/components/resume/Education.jsx
const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "Example University",
      period: "2016 - 2019",
      description: "Specialized in Cloud Computing and Network Security."
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Example College",
      period: "2013 - 2016",
      description: "Focused on Computer Science fundamentals and programming."
    }
  ];
  
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-cyan-400">Education</h3>
      
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="relative pl-8 border-l border-gray-800">
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyan-400"></div>
            <h4 className="text-xl font-bold">{item.degree}</h4>
            <h5 className="text-gray-400 mb-2">{item.institution}</h5>
            <p className="text-sm text-cyan-400 mb-3">{item.period}</p>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;