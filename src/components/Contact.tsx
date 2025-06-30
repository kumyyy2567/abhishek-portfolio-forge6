import { Mail, Phone, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kumyyy2567",
      icon: Github,
      color: "hover:text-gray-800"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/abhishek993526",
      icon: ExternalLink,
      color: "hover:text-orange-600"
    },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/abhishekhshv",
      icon: ExternalLink,
      color: "hover:text-green-600"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/abhishek993526",
      icon: ExternalLink,
      color: "hover:text-green-500"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Abhishe68564351",
      icon: ExternalLink,
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30">
              <CardContent className="p-8 text-center">
                <Mail size={48} className="mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a 
                  href="mailto:abhishek993526@gmail.com" 
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  abhishek993526@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-purple-500/30">
              <CardContent className="p-8 text-center">
                <Phone size={48} className="mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a 
                  href="tel:+918924062059" 
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  +91-8924062059
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6">Find Me Online</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all"
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <link.icon size={18} />
                    {link.name}
                    <ExternalLink size={14} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-6">
              <p className="text-white font-medium">
                "Let's build something amazing together!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
