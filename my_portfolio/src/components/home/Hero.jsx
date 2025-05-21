// src/components/home/Hero.jsx
import Button from '../common/Button';
import SocialIcons from '../common/SocialIcons';
import {ChevronDown} from 'lucide-react';

const Hero = () => {
    return (
        <div className="ml-0 md:ml-48 p-4">
            <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <h2 className="text-cyan-400 text-xl md:text-2xl mb-2">HELLO, EVERYONE.</h2>

                <div className="mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold inline">This is </h1>
                    <span className="text-4xl md:text-6xl font-bold text-cyan-400">SOUMYA</span>
                </div>

                <h3 className="text-xl md:text-2xl tracking-widest mb-6">
                    SOUMYA RANJAN PANDA
                </h3>

                <div className="flex justify-center items-center space-x-4 mb-12">
                    <span className="text-gray-400">|</span>
                    <span className="uppercase">Software Development</span>
                    <span className="text-gray-400">|</span>

                </div>

                <button
                    className="border border-gray-600 text-white px-8 py-3 uppercase flex items-center space-x-2 hover:bg-gray-900 transition-colors">
                    <span>More About Me</span>
                    <ChevronDown size={16}/>
                </button>

                <div className="mt-24">
                    <SocialIcons/>
                </div>
            </main>
        </div>
    );
};

export default Hero;


