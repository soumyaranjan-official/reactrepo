// src/components/common/SocialIcons.jsx
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex space-x-8">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
        <Github size={28} />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
        <Linkedin size={28} />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
        <Instagram size={28} />
      </a>
    </div>
  );
};

export default SocialIcons;