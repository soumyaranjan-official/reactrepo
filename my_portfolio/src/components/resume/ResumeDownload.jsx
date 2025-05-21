// src/components/resume/ResumeDownload.jsx
import { Download } from 'lucide-react';

const ResumeDownload = () => {
  return (
    <div className="text-center">
      <button className="bg-cyan-400 text-black font-medium px-8 py-3 flex items-center space-x-2 mx-auto hover:bg-cyan-500 transition-colors">
        <Download size={18} />
        <span>Download Full Resume</span>
      </button>
    </div>
  );
};

export default ResumeDownload;