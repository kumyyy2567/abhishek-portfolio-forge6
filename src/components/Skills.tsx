const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", experience: "3+ years", level: 90 },
        { name: "C/C++", experience: "3+ years", level: 85 },
        { name: "JavaScript", experience: "1+ years", level: 75 },
        { name: "HTML", experience: "1+ years", level: 80 },
        { name: "CSS", experience: "1+ years", level: 75 }
      ]
    },
    {
      title: "Technologies & Tools",
      skills: [
        { name: "Git & GitHub", experience: "2+ years", level: 80 },
        { name: "Linux", experience: "2+ years", level: 75 },
        { name: "Windows", experience: "5+ years", level: 85 },
        { name: "ROS", experience: "1+ years", level: 60 },
        { name: "AI & Automation", experience: "1+ years", level: 70 }
      ]
    }
  ];

  const coursework = [
    "Design & Analysis of Algorithms",
    "Discrete Mathematics",
    "Database Management Systems",
    "Theory of Computation",
    "Web Technologies",
    "Computer Networks",
    "Software Engineering",
    "Data Structures",
    "Operating Systems",
    "Compiler Design",
    "Machine Learning",
    "Artificial Intelligence"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-200 via-green-200 to-emerald-200" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm text-purple-600">{skill.experience}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Coursework & Academic Background</h3>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {coursework.map((course, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
