import { Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">GFG Content Writer</h3>
                <p className="text-purple-600 font-medium text-lg">GeeksforGeeks</p>
              </div>
              <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                <Calendar size={18} className="mr-2" />
                <span>Apr 2024 – Jul 2024</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Wrote and published technical articles on data structures, algorithms, and web technologies for GeeksforGeeks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Simplified complex programming concepts for a diverse audience of developers and students
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Contributed to the learning community by creating educational content
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4 text-gray-800">Certifications</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                  <h5 className="font-semibold text-blue-800 mb-2">Responsive Web Design</h5>
                  <p className="text-blue-600 text-sm mb-2">freeCodeCamp</p>
                  <a 
                    href="https://www.freecodecamp.org/certification/abhishek993526/responsive-web-design" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors">
                  <h5 className="font-semibold text-green-800 mb-2">JavaScript Algorithms and Data Structures</h5>
                  <p className="text-green-600 text-sm mb-2">freeCodeCamp</p>
                  <a 
                    href="https://www.freecodecamp.org/certification/abhishek993526/javascript-algorithms-and-data-structures" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 text-sm flex items-center gap-1"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
