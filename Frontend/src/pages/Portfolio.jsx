import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, Calendar, User, Tag, Globe, Code, Search, Smartphone, Headphones, Eye, Star, Award, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioProjects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      subtitle: "Sustainable Technology Company",
      category: "web-design",
      tags: ["React", "Node.js", "MongoDB", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "A modern, eco-friendly website for a sustainable technology company focused on renewable energy solutions.",
      longDescription: "EcoTech Solutions needed a website that reflected their commitment to sustainability while showcasing their cutting-edge technology. We created a clean, modern design with interactive elements that highlight their green initiatives and technical expertise.",
      features: [
        "Custom responsive design with eco-friendly color palette",
        "Interactive product showcase with 3D elements",
        "Integrated contact forms and consultation booking",
        "SEO-optimized content structure",
        "Fast loading performance (95+ PageSpeed score)"
      ],
      results: [
        "40% increase in qualified leads",
        "60% improvement in user engagement",
        "35% boost in consultation bookings",
        "Top 3 Google rankings for target keywords"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Three.js"],
      timeline: "6 weeks",
      client: "EcoTech Solutions Inc.",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "FoodieHub Restaurant",
      subtitle: "Local Restaurant Chain",
      category: "e-commerce",
      tags: ["E-commerce", "Payment Integration", "Mobile App", "SEO"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Full-featured restaurant website with online ordering, reservation system, and mobile-responsive design.",
      longDescription: "FoodieHub needed a comprehensive digital solution to handle online orders, table reservations, and showcase their menu across multiple locations. The result was a feature-rich platform that streamlined their operations.",
      features: [
        "Online ordering system with real-time updates",
        "Table reservation management",
        "Multi-location support with different menus",
        "Payment gateway integration (Stripe, PayPal)",
        "Admin dashboard for order and inventory management"
      ],
      results: [
        "300% increase in online orders",
        "50% reduction in phone-based reservations",
        "25% increase in average order value",
        "Improved operational efficiency by 40%"
      ],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Stripe API", "React Native"],
      timeline: "8 weeks",
      client: "FoodieHub Restaurant Group",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "MedCare Clinic",
      subtitle: "Healthcare Practice",
      category: "web-development",
      tags: ["Healthcare", "Appointment System", "HIPAA Compliant", "React"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "HIPAA-compliant healthcare website with patient portal, appointment booking, and secure messaging.",
      longDescription: "MedCare Clinic required a secure, professional website that would allow patients to book appointments, access their records, and communicate with healthcare providers while maintaining strict HIPAA compliance.",
      features: [
        "HIPAA-compliant patient portal",
        "Online appointment scheduling with calendar integration",
        "Secure messaging between patients and providers",
        "Medical records access and document upload",
        "Insurance verification and billing integration"
      ],
      results: [
        "70% reduction in phone-based appointment bookings",
        "45% improvement in patient satisfaction scores",
        "30% increase in appointment show-up rates",
        "Streamlined administrative processes"
      ],
      technologies: ["React", "Node.js", "MySQL", "Socket.io", "JWT Authentication"],
      timeline: "10 weeks",
      client: "MedCare Family Clinic",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "TechStart Portfolio",
      subtitle: "Startup Technology Company",
      category: "seo-optimization",
      tags: ["SEO", "Performance", "Analytics", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      description: "Complete SEO overhaul and performance optimization for a growing tech startup's corporate website.",
      longDescription: "TechStart needed to improve their online visibility and website performance to attract investors and clients. We implemented a comprehensive SEO strategy and performance optimization that dramatically improved their search rankings.",
      features: [
        "Comprehensive SEO audit and strategy implementation",
        "Technical SEO improvements and site speed optimization",
        "Content strategy and keyword optimization",
        "Local SEO setup for multiple office locations",
        "Analytics setup and conversion tracking"
      ],
      results: [
        "400% increase in organic search traffic",
        "Page load speed improved from 4.2s to 1.1s",
        "First page rankings for 15+ target keywords",
        "200% increase in qualified lead generation"
      ],
      technologies: ["Technical SEO", "Google Analytics", "Search Console", "PageSpeed Optimization"],
      timeline: "4 weeks",
      client: "TechStart Innovations",
      liveUrl: "https://example.com",
      githubUrl: null
    },
    {
      id: 5,
      title: "LearningPath Academy",
      subtitle: "Online Education Platform",
      category: "web-development",
      tags: ["EdTech", "LMS", "Video Streaming", "User Management"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description: "Comprehensive learning management system with video streaming, progress tracking, and certification.",
      longDescription: "LearningPath Academy wanted to create an online learning platform that could compete with major EdTech companies. We built a full-featured LMS with video streaming, interactive quizzes, and comprehensive student management.",
      features: [
        "Custom learning management system (LMS)",
        "Video streaming with progress tracking",
        "Interactive quizzes and assessments",
        "Student progress analytics and reporting",
        "Certification system with digital badges"
      ],
      results: [
        "Successfully launched with 500+ enrolled students",
        "95% course completion rate",
        "4.8/5 average student satisfaction rating",
        "Generated $50K+ in first quarter revenue"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Video.js"],
      timeline: "12 weeks",
      client: "LearningPath Academy",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Projects', count: portfolioProjects.length },
    { key: 'web-design', label: 'Web Design', count: portfolioProjects.filter(p => p.category === 'web-design').length },
    { key: 'web-development', label: 'Development', count: portfolioProjects.filter(p => p.category === 'web-development').length },
    { key: 'e-commerce', label: 'E-commerce', count: portfolioProjects.filter(p => p.category === 'e-commerce').length },
    { key: 'seo-optimization', label: 'SEO & Performance', count: portfolioProjects.filter(p => p.category === 'seo-optimization').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedFilter);

  const portfolioStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "200%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web-design': return <Globe className="w-5 h-5" />;
      case 'web-development': return <Code className="w-5 h-5" />;
      case 'e-commerce': return <Smartphone className="w-5 h-5" />;
      case 'seo-optimization': return <Search className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Portfolio Header Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-light via-white to-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Our Creative 
                <span className="text-primary block">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore our recent work and see how we've helped businesses transform their digital presence. 
                Each project represents our commitment to excellence, innovation, and measurable results.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {portfolioStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedFilter(category.key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedFilter === category.key
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-light text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  {getCategoryIcon(category.key)}
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedFilter === category.key 
                      ? 'bg-white/20 text-white' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="text-primary">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-sm font-medium text-primary capitalize">
                        {project.category.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                    <p className="text-primary font-medium mb-3">{project.subtitle}</p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-light text-gray-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-primary font-semibold hover:text-dark transition-colors duration-300 flex items-center group"
                      >
                        View Project 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-light text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-light text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life and create something amazing together. 
              Every great project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-primary">
                    {getCategoryIcon(selectedProject.category)}
                  </div>
                  <span className="text-primary font-medium capitalize">
                    {selectedProject.category.replace('-', ' ')}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-dark mb-2">{selectedProject.title}</h2>
                <p className="text-xl text-primary font-medium mb-6">{selectedProject.subtitle}</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="font-semibold">{selectedProject.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-semibold">{selectedProject.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Tag className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold capitalize">{selectedProject.category.replace('-', ' ')}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8">{selectedProject.longDescription}</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-4">Results Achieved</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-dark mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-light text-gray-700 px-3 py-2 rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live Site</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;