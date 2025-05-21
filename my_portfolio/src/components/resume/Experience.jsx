// src/components/resume/Experience.jsx
const Experience = () => {
  const experienceData = [
    {
      title: "Senior DevOps Engineer",
      company: "Example Technologies",
      period: "2021 - Present",
      description: "Leading DevOps initiatives and implementing cloud-native solutions."
    },
    {
      title: "Cloud Infrastructure Engineer",
      company: "Example Systems",
      period: "2019 - 2021",
      description: "Built and maintained cloud infrastructure on AWS and Azure."
    },
    {
      title: "Network Administrator",
      company: "Example Networks",
      period: "2017 - 2019",
      description: "Managed network infrastructure and implemented security protocols."
    }
  ];
  
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-cyan-400">Experience</h3>
      
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <div key={index} className="relative pl-8 border-l border-gray-800">
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyan-400"></div>
            <h4 className="text-xl font-bold">{item.title}</h4>
            <h5 className="text-gray-400 mb-2">{item.company}</h5>
            <p className="text-sm text-cyan-400 mb-3">{item.period}</p>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;