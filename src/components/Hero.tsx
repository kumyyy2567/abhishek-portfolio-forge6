import { Github, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              AK
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ABHISHEK KUMAR
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in">
            Frontend Developer & Content Writer
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-300 animate-fade-in">
            <a 
              href="mailto:abhishek993526@gmail.com" 
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Mail size={18} />
              abhishek993526@gmail.com
            </a>
            <span className="hidden sm:block">|</span>
            <a 
              href="tel:+918924062059" 
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Phone size={18} />
              +91-8924062059
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a 
                href="https://github.com/kumyyy2567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
                <ExternalLink size={14} />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              <a 
                href="https://leetcode.com/abhishek993526" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                LeetCode
                <ExternalLink size={14} />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              <a 
                href="https://auth.geeksforgeeks.org/user/abhishekhshv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                GeeksforGeeks
                <ExternalLink size={14} />
              </a>
            </Button>
          </div>
          
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto">
              <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
