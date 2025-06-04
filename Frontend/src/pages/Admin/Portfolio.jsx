import React, { useState } from 'react';
import { Plus, Edit2, Eye, Trash2, X, ExternalLink, Github } from 'lucide-react';

const PortfolioComponent = () => {
  const [portfolioProjects, setPortfolioProjects] = useState([
    {
      id: 1,
      title: "Savoré",
      subtitle: "A Digital Experience of Fine Dining",
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
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [currentTag, setCurrentTag] = useState('');
  const [currentFeature, setCurrentFeature] = useState('');
  const [currentResult, setCurrentResult] = useState('');
  
  // Available technologies (would come from API)
  const availableTechnologies = [
    "React", "Node.js", "MongoDB", "Tailwind CSS", "Three.js", "Next.js", 
    "Express.js", "PostgreSQL", "Stripe API", "React Native", "MySQL", 
    "Socket.io", "JWT Authentication", "AWS S3", "Video.js", "Vue.js",
    "Angular", "Python", "Django", "Flask", "Redis", "Docker"
  ];

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: '',
    tags: [],
    image: '',
    description: '',
    longDescription: '',
    features: [],
    results: [],
    technologies: [],
    timeline: '',
    client: '',
    liveUrl: '',
    githubUrl: ''
  });

  const categories = ['web-design', 'e-commerce', 'web-development', 'seo-optimization', 'mobile-app'];

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      category: '',
      tags: [],
      image: '',
      description: '',
      longDescription: '',
      features: [],
      results: [],
      technologies: [],
      timeline: '',
      client: '',
      liveUrl: '',
      githubUrl: ''
    });
    setCurrentTag('');
    setCurrentFeature('');
    setCurrentResult('');
    setEditingProject(null);
  };

  const openModal = (project = null) => {
    if (project) {
      setFormData(project);
      setEditingProject(project);
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addFeature = () => {
    if (currentFeature.trim() && !formData.features.includes(currentFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, currentFeature.trim()]
      }));
      setCurrentFeature('');
    }
  };

  const removeFeature = (featureToRemove) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(feature => feature !== featureToRemove)
    }));
  };

  const addResult = () => {
    if (currentResult.trim() && !formData.results.includes(currentResult.trim())) {
      setFormData(prev => ({
        ...prev,
        results: [...prev.results, currentResult.trim()]
      }));
      setCurrentResult('');
    }
  };

  const removeResult = (resultToRemove) => {
    setFormData(prev => ({
      ...prev,
      results: prev.results.filter(result => result !== resultToRemove)
    }));
  };

  const toggleTechnology = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(t => t !== tech)
        : [...prev.technologies, tech]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProject) {
      setPortfolioProjects(prev => 
        prev.map(project => 
          project.id === editingProject.id 
            ? { ...formData, id: editingProject.id }
            : project
        )
      );
    } else {
      const newProject = {
        ...formData,
        id: Math.max(...portfolioProjects.map(p => p.id)) + 1
      };
      setPortfolioProjects(prev => [...prev, newProject]);
    }
    
    closeModal();
  };

  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setPortfolioProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      'web-design': 'bg-primary text-white',
      'e-commerce': 'bg-light text-primary',
      'web-development': 'bg-dark text-white',
      'seo-optimization': 'bg-primary text-white'
    };
    return colors[category] || 'bg-light text-primary';
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-dark">Portfolio Projects</h1>
          <p className="text-gray-600 mt-2">Manage your portfolio projects and showcase your work</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-primary hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-lg"
        >
          <Plus size={20} />
          Add New Portfolio
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects.map((project) => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryBadgeColor(project.category)}`}>
                  {project.category.replace('-', ' ')}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-dark mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.subtitle}</p>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-light text-primary px-2 py-1 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-primary text-xs font-medium">+{project.tags.length - 3} more</span>
                )}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-purple-600 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(project)}
                    className="text-primary hover:text-purple-600 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-dark">
                {editingProject ? 'Edit Portfolio Project' : 'Add New Portfolio Project'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category.replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Timeline</label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                    placeholder="e.g., 6 weeks"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Client */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Client</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">Short Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Long Description */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">Long Description</label>
                <textarea
                  value={formData.longDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, longDescription: e.target.value }))}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Tags */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">Tags</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Enter tag and press Enter"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-light text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-primary hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">Technologies</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-4">
                  {availableTechnologies.map((tech) => (
                    <label key={tech} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.technologies.includes(tech)}
                        onChange={() => toggleTechnology(tech)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">Features</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                    placeholder="Enter feature and press Enter"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-light p-3 rounded-lg flex justify-between items-center"
                    >
                      <span className="text-sm">{feature}</span>
                      <button
                        type="button"
                        onClick={() => removeFeature(feature)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">Results</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={currentResult}
                    onChange={(e) => setCurrentResult(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addResult())}
                    placeholder="Enter result and press Enter"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addResult}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-light p-3 rounded-lg flex justify-between items-center"
                    >
                      <span className="text-sm">{result}</span>
                      <button
                        type="button"
                        onClick={() => removeResult(result)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* URLs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Live URL</label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioComponent;