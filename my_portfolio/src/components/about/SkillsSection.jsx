// src/components/about/SkillsSection.jsx
import SectionHeading from '../common/SectionHeading';
import SkillBadge from '../common/SkillBadge';

const SkillsSection = () => {
  const devopsSkills = ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'CI/CD'];
  const cloudSkills = ['AWS', 'Azure', 'GCP', 'CloudFormation', 'Lambda', 'S3'];
  const networkingSkills = ['TCP/IP', 'VPN', 'Load Balancing', 'DNS', 'Security Groups', 'Firewalls'];
  
  return (
    <div className="max-w-4xl mx-auto px-4 mt-20">
      <SectionHeading title="My Skills" subtitle="What I'm good at" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-900 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-cyan-400">DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {devopsSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-cyan-400">Cloud</h3>
          <div className="flex flex-wrap gap-2">
            {cloudSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4 text-cyan-400">Networking</h3>
          <div className="flex flex-wrap gap-2">
            {networkingSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;