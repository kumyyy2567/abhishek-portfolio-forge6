import { Calendar, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Water and Electricity Bill Management System",
      type: "Major Project",
      date: "Dec 2024",
      description: "Developed a comprehensive system to manage and track utility bills, automate payment reminders, and maintain digital records.",
      technologies: ["Python", "Database Management", "Automation"],
      features: [
        "Automated payment reminders",
        "Digital record maintenance",
        "Bill tracking and management",
        "User-friendly interface"
      ]
    },
    {
      title: "Chit Chat",
      type: "Class Project",
      date: "Jan 2022 – May 2022",
      description: "Led the development of Chit Chat, an anonymous real-time chat application built with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "AngularJS"],
      features: [
        "Anonymous real-time chat",
        "Responsive design",
        "Real-time messaging",
        "Clean user interface"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-200 via-orange-200 to-yellow-200" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                    <span className="text-sm text-purple-600 font-medium px-3 py-1 bg-purple-100 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                  <CardDescription className="text-gray-600 mt-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <a 
                        href="https://github.com/kumyyy2567" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={14} />
                        View Code
                        <ExternalLink size={12} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
