// src/components/projects/ProjectGrid.jsx
import { ArrowUpRight } from 'lucide-react';

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      category: "DevOps",
      description: "Automated cloud infrastructure deployment using Terraform and Ansible.",
      image: "/assets/images/projects/project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Kubernetes Cluster Management",
      category: "Cloud",
      description: "Set up and managed a high-availability Kubernetes cluster.",
      image: "/assets/images/projects/project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Network Security Implementation",
      category: "Networking",
      description: "Implemented advanced security measures for enterprise networks.",
      image: "/assets/images/projects/project3.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "CI/CD Pipeline Optimization",
      category: "DevOps",
      description: "Optimized continuous integration and deployment pipelines.",
      image: "/assets/images/projects/project4.jpg",
      link: "#"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-900 rounded-md overflow-hidden group">
          <div className="h-48 bg-gray-800 relative">
            {/* Project Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              {project.title}
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-cyan-400 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={project.link} className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="p-6">
            <span className="text-sm text-cyan-400">{project.category}</span>
            <h4 className="text-xl font-bold mt-2 mb-3">{project.title}</h4>
            <p className="text-gray-400">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;