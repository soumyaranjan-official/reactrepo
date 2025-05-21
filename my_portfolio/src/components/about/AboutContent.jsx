// src/components/about/AboutContent.jsx
import SectionHeading from '../common/SectionHeading';

const AboutContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <SectionHeading title="About Me" subtitle="Get to know me better" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-1">
          <div className="aspect-square bg-gray-800 rounded-md overflow-hidden">
            {/* Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Profile Image
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Subhendu Sekhar Patro</h3>
          <h4 className="text-cyan-400 mb-6">DevOps Engineer</h4>
          
          <p className="text-gray-300 mb-6">
            Hello! I'm a passionate DevOps engineer with expertise in Cloud solutions and Networking. 
            I have experience in building robust infrastructure, automating deployment processes, and
            optimizing system performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-gray-400 mb-1">Name:</p>
              <p className="text-white">Subhendu Sekhar Patro</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Email:</p>
              <p className="text-white">contact@example.com</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Location:</p>
              <p className="text-white">Bengaluru, India</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Available for:</p>
              <p className="text-white">Full-time opportunities</p>
            </div>
          </div>
          
          <button className="bg-cyan-400 text-black font-medium px-6 py-3 hover:bg-cyan-500 transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;