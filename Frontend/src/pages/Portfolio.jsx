import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, Calendar, User, Tag, Globe, Code, Search, Smartphone, Headphones, Eye, Star, Award, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PortfolioPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioProjects = [
    {
      id: 1,
      title: 'Savoré',
      subtitle: 'Fine Dining Restaurant Website',
      category: 'web-design',
      tags: ['Angular', 'TailwindCSS', 'Responsive Design', 'Animations'],
      image: 'https://otiybtgavdvgrjhajnba.supabase.co/storage/v1/object/public/kaushalshah/projects/Savore/savore.webp',
      description: 'A luxurious, interactive single-page website built for a fine dining restaurant.',
      longDescription: 'Savoré is a refined web presence that brings the elegance of a premium restaurant experience to life online. Built with Angular 19 and Tailwind CSS v4, it features fluid scroll-triggered animations, rich visuals, and a layout designed to convert visitors into diners.',
      features: [
        'Angular 19 SPA with scroll animations',
        'Tailwind CSS v4 responsive layout and styling',
        'Dynamic testimonial carousel',
        'Lightbox-enabled photo gallery',
        'Map integration with booking links'
      ],
      results: [
        'Enhanced brand perception as a luxury venue',
        'Increased table reservation inquiries',
        'Positive user feedback on mobile experience'
      ],
      technologies: [
        'Angular',
        'Tailwind CSS',
        'Google Maps',
        'Intersection Observer'
      ],
      timeline: '4 weeks',
      client: 'Savoré Fine Dining',
      liveUrl: 'http://savore.mrkaushalshah.com/',
      githubUrl: 'https://github.com/kaushalshah750/Orien-Savore'
    },
    {
      id: 2,
      title: 'SyncAI',
      subtitle: 'AI-Powered SaaS Landing Page',
      category: 'web-design',
      tags: ['Angular', 'TailwindCSS', 'SaaS', 'SEO'],
      image: 'https://otiybtgavdvgrjhajnba.supabase.co/storage/v1/object/public/kaushalshah/projects/SyncAi/syncai.webp',
      description: 'A modern landing page for AI SaaS products, built to convert and impress.',
      longDescription: 'SyncAI is a high-performance single-page application tailored for showcasing AI products and automation tools. With its sleek UI and conversion-focused layout, it helps SaaS startups quickly establish credibility and attract early users or investors.',
      features: [
        'Angular 19 SPA architecture',
        'Tailwind CSS for atomic styling',
        'Feature highlights with animations',
        'Testimonials carousel and pricing cards',
        'Functional contact form with validation'
      ],
      results: [
        'Strong investor interest via link previews',
        'Improved sign-up conversions on launch',
        'Efficient reusability across other SaaS MVPs'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'Supabase', 'Open Graph'],
      timeline: '3 weeks',
      client: 'SyncAI (Demo Project)',
      liveUrl: 'http://syncai.mrkaushalshah.com/',
      githubUrl: 'https://github.com/kaushalshah750/Orien-SyncAI'
    },
    {
      id: 3,
      title: 'SkillNest',
      subtitle: 'Education & Coaching Institute Website',
      category: 'web-design',
      tags: ['Angular', 'Supabase', 'Education', 'Responsive Design'],
      image: 'https://otiybtgavdvgrjhajnba.supabase.co/storage/v1/object/public/kaushalshah/projects/SkillNest/skillnest.webp',
      description: 'A single-page educational website tailored for coaching institutes and tutoring centers.',
      longDescription: 'SkillNest streamlines the enrollment process for coaching institutes. Its modular Angular design, combined with Supabase-powered forms, delivers a smooth and trustworthy digital experience for students and parents alike.',
      features: [
        'Angular 19 front-end with modular sections',
        'Tailwind CSS with custom color palette',
        'Supabase integration for live form handling',
        'Course structure and schedule sections',
        'SEO and Open Graph optimization'
      ],
      results: [
        'Increased student sign-ups',
        'Simplified offline coordination',
        'Higher trust through transparent layout'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'Supabase'],
      timeline: '4 weeks',
      client: 'SkillNest Academy',
      liveUrl: 'https://skillnest.mrkaushalshah.com/',
      githubUrl: 'https://github.com/kaushalshah750/Orien-SkillNest'
    },
    {
      id: 4,
      title: 'Orien System Solution',
      subtitle: 'Corporate Digital Agency Website',
      category: 'web-design',
      tags: ['Angular', 'TailwindCSS', 'Business Website', 'Corporate'],
      image: 'https://otiybtgavdvgrjhajnba.supabase.co/storage/v1/object/public/kaushalshah/projects/Orien/orien.webp',
      description: 'A professional, multi-page corporate site built for a full-service digital agency.',
      longDescription: 'Orien System Solution positions a growing digital agency as a capable partner for modern businesses. With a detailed service offering, performance focus, and intuitive navigation, it is designed to attract and convert leads.',
      features: ['Multi-page layout with Angular routing',
      'Service-specific sections with CTA flow',
      'Google Maps and structured contact form',
      'SEO-friendly architecture and fast load',
      'Team, stats, and testimonial blocks'],
      results: ['Improved client conversion from website',
      'Enhanced online credibility',
      'Higher retention via clear services layout'],
      technologies: ['Angular', 'Tailwind CSS', 'Google Maps', 'SEO'],
      timeline: '5 weeks',
      client: 'Orien System Solution',
      liveUrl: 'https://www.orien.in/',
      githubUrl: ''
    },
    {
      id: 5,
      title: 'Pay Your Share',
      subtitle: 'Group Expense Management App',
      category: 'web-app',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Expense Tracker'],
      image: 'https://otiybtgavdvgrjhajnba.supabase.co/storage/v1/object/public/kaushalshah/projects/Pay%20Your%20Share/pys.webp',
      description: 'A MEAN-stack web app designed to simplify splitting and tracking group expenses.',
      longDescription: 'Pay Your Share offers a clean interface and practical features for managing group payments. Whether it’s rent with roommates or trip expenses, the app provides secure group creation, customizable splitting, and real-time tracking.',
      features: ['MEAN Stack architecture',
      'Google Sign-In authentication',
      'Custom ratio payment splitting',
      'Live dashboard for tracking dues',
      'Built-in feedback module'],
      results: ['Simplified group finance handling',
      'Real-time tracking reduced disputes',
      'Improved trust with detailed summaries'],
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
      timeline: '6 weeks',
      client: 'Internal Project',
      liveUrl: 'https://payyourshare.mrkaushalshah.com/',
      githubUrl: ''
    },
    {
      id: 6,
      title: 'Mr. Kaushal Shah',
      subtitle: 'Personal Portfolio Website',
      category: 'web-design',
      tags: ['Angular', 'TailwindCSS', 'Personal Branding', 'Portfolio'],
      image: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=800&h=600&fit=crop',
      description: 'A personal portfolio website to showcase my work, skills, and freelance offerings.',
      longDescription: 'Built with Angular and styled using Tailwind CSS, this portfolio site highlights my projects, skills, testimonials, and service offerings in a modern, responsive format — optimized for both clients and hiring managers.',
      features: [
        'Angular SPA with project showcase',
        'Tailwind-based custom design palette',
        'Testimonial section and downloadable CV',
        'Service packages and contact form',
        'SEO and social sharing optimized'
      ],
      results: [
        'Improved personal brand visibility',
        'Increased freelance inquiries',
        'Better conversion from outreach efforts'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'Open Graph', 'SEO'],
      timeline: '2 weeks',
      client: 'Kaushal Shah',
      liveUrl: 'https://www.mrkaushalshah.com/',
      githubUrl: ''
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Projects', count: portfolioProjects.length },
    { key: 'web-design', label: 'Web Design', count: portfolioProjects.filter(p => p.category === 'web-design').length },
    { key: 'web-app', label: 'Web Application', count: portfolioProjects.filter(p => p.category === 'web-app').length },
    { key: 'e-commerce', label: 'E-commerce', count: portfolioProjects.filter(p => p.category === 'e-commerce').length },
    { key: 'seo-optimization', label: 'SEO & Performance', count: portfolioProjects.filter(p => p.category === 'seo-optimization').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedFilter);

  const portfolioStats = [
    { number: "6+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "100%", label: "Mobile Optimized" },
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

  const openUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <>
      <Helmet>
        <title>Our Work – Web Development Portfolio | Sparqal</title>
        <meta name="description" content="View Sparqal’s web development portfolio featuring high-performance websites, SaaS applications, and custom digital solutions delivered for clients across industries." />
      </Helmet>

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
              <Link to="/contact">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300" onClick={() => openUrl('https://calendly.com/kaushalshah750/1-1-discussion')}>
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