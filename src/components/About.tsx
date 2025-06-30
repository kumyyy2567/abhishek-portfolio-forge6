const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Computer Science student at the Institute of Engineering and Rural Technology, 
                Prayagraj, with a strong foundation in programming and web development. With over 3 years of 
                experience in Python and C/C++, I love solving complex problems and building innovative solutions.
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a former GFG Content Writer, I've honed my ability to explain complex technical concepts 
                in simple terms. I'm always eager to learn new technologies and contribute to meaningful projects.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Quick Learner
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-gray-800">B.Tech in Computer Science</h4>
                  <p className="text-purple-600 font-medium">Institute of Engineering and Rural Technology</p>
                  <p className="text-gray-600">Prayagraj • CGPA: 7.4/10 (till 7th semester)</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Intermediate (12th Grade)</h4>
                  <p className="text-purple-600 font-medium">Shanadilya Public School</p>
                  <p className="text-gray-600">Varanasi • Percentage: 74%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
