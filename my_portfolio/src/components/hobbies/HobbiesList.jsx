// src/components/hobbies/HobbiesList.jsx
import { Music, BookOpen, Code, Mountain } from 'lucide-react';

const HobbiesList = () => {
  const hobbies = [
    {
      id: 1,
      title: "Music",
      description: "I enjoy playing guitar and listening to various genres of music in my free time.",
      icon: <Music size={40} className="text-cyan-400" />
    },
    {
      id: 2,
      title: "Reading",
      description: "I'm an avid reader of technical books and science fiction novels.",
      icon: <BookOpen size={40} className="text-cyan-400" />
    },
    {
      id: 3,
      title: "Coding",
      description: "I like to explore new programming languages and build personal projects.",
      icon: <Code size={40} className="text-cyan-400" />
    },
    {
      id: 4,
      title: "Hiking",
      description: "I enjoy hiking and exploring nature whenever I get a chance.",
      icon: <Mountain size={40} className="text-cyan-400" />
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {hobbies.map((hobby) => (
        <div key={hobby.id} className="bg-gray-900 p-6 rounded-md flex">
          <div className="mr-6">
            {hobby.icon}
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">{hobby.title}</h4>
            <p className="text-gray-400">{hobby.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HobbiesList;