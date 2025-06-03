import React, { useState } from 'react';
import { Globe, Code, Search, Headphones, Smartphone, ArrowRight, Check, Star, Clock, Shield, Zap, Users, TrendingUp, Settings, Award, Target, Lightbulb, Rocket, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      icon: <Globe className="w-9 h-9" />,
      title: "Custom Web Design",
      subtitle: "Beautiful, Conversion-Focused Websites",
      description: "We create stunning, professional websites that perfectly represent your brand and convert visitors into customers. Every design is custom-crafted to meet your unique business goals and target audience.",
      features: [
        "Custom visual design tailored to your brand",
        "User experience (UX) optimization",
        "Mobile-first responsive design",
        "Brand integration and consistency",
        "Conversion-focused layouts",
        "Professional photography integration"
      ],
      benefits: [
        "Stand out from competitors with unique design",
        "Increase customer trust and credibility",
        "Improve user engagement and time on site",
        "Higher conversion rates and lead generation"
      ],
      process: [
        "Discovery & brand analysis",
        "Wireframing & layout planning", 
        "Visual design & mockups",
        "Client review & refinements",
        "Final design delivery"
      ]
    },
    {
      icon: <Code className="w-9 h-9" />,
      title: "Web Development",
      subtitle: "Modern, Fast & Secure Websites",
      description: "Our expert developers build robust, scalable websites using the latest technologies. We focus on performance, security, and maintainability to ensure your website serves your business for years to come.",
      features: [
        "Clean, semantic HTML5 & CSS3 code",
        "Responsive design implementation",
        "Fast loading speed optimization",
        "Cross-browser compatibility",
        "Content management system integration",
        "E-commerce functionality"
      ],
      benefits: [
        "Superior website performance and speed",
        "Better search engine rankings",
        "Enhanced user experience across all devices",
        "Easy content management for your team"
      ],
      process: [
        "Technical planning & architecture",
        "Frontend development & styling",
        "Backend integration & functionality",
        "Testing & quality assurance",
        "Launch & deployment"
      ]
    },
    {
      icon: <Search className="w-9 h-9" />,
      title: "SEO Fundamentals",
      subtitle: "Get Found by Your Customers",
      description: "We implement essential search engine optimization strategies to help your business get discovered online. Our SEO approach focuses on sustainable, long-term results that drive qualified traffic to your website.",
      features: [
        "Keyword research & strategy",
        "On-page SEO optimization",
        "Technical SEO implementation",
        "Local SEO for local businesses",
        "Content optimization",
        "Performance monitoring & reporting"
      ],
      benefits: [
        "Increased visibility in search results",
        "More qualified website traffic",
        "Higher conversion rates from organic search",
        "Better return on marketing investment"
      ],
      process: [
        "SEO audit & competitor analysis",
        "Keyword research & strategy",
        "On-page optimization implementation",
        "Technical SEO improvements",
        "Ongoing monitoring & optimization"
      ]
    },
    {
      icon: <Headphones className="w-9 h-9" />,
      title: "Ongoing Support",
      subtitle: "Reliable Maintenance & Updates",
      description: "Your website is an investment that requires ongoing care. We provide comprehensive support services to keep your website secure, updated, and performing at its best, so you can focus on running your business.",
      features: [
        "Regular security updates & monitoring",
        "Content updates & modifications",
        "Performance optimization",
        "Backup & recovery services",
        "Technical support & troubleshooting",
        "Analytics & performance reporting"
      ],
      benefits: [
        "Peace of mind with reliable support",
        "Maintain website security and performance",
        "Quick resolution of technical issues",
        "Keep content fresh and up-to-date"
      ],
      process: [
        "Initial site audit & setup",
        "Regular maintenance schedule",
        "Proactive monitoring & updates",
        "Performance optimization",
        "Monthly reporting & communication"
      ]
    },
    {
      icon: <Smartphone className="w-9 h-9" />,
      title: "Website Optimization",
      subtitle: "Maximize Performance & Conversions",
      description: "Transform your existing website into a high-performing digital asset. We analyze, optimize, and enhance your current site to improve user experience, increase conversions, and boost search engine rankings.",
      features: [
        "Website performance audit",
        "Speed & loading optimization",
        "Conversion rate optimization",
        "Mobile responsiveness improvements",
        "User experience enhancements",
        "Analytics & tracking setup"
      ],
      benefits: [
        "Dramatically improved website speed",
        "Higher conversion rates and sales",
        "Better user experience and engagement",
        "Improved search engine rankings"
      ],
      process: [
        "Comprehensive website audit",
        "Performance & conversion analysis",
        "Optimization strategy development",
        "Implementation & testing",
        "Results monitoring & refinement"
      ]
    }
  ];

  const serviceStats = [
    { number: "100%", label: "Project Success Rate" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "12hr", label: "Average Response Time" },
    { number: "100%", label: "Mobile Optimized" }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals with proven track records"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "We meet deadlines and deliver projects when promised"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Personal attention and ongoing partnership"
    }
  ];

  const ourApproach = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategy First",
      description: "We start every project with deep research and strategic planning to ensure your website aligns with your business goals and target audience needs.",
      features: ["Competitor analysis", "User persona development", "Goal setting & KPIs"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Our design team crafts unique, memorable experiences that capture your brand essence and create lasting impressions on your visitors.",
      features: ["Custom design concepts", "Brand storytelling", "Visual hierarchy optimization"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Driven",
      description: "Every line of code is optimized for speed, security, and scalability. We build websites that not only look great but perform exceptionally.",
      features: ["Lightning-fast loading", "SEO optimization", "Conversion tracking"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Partnership Mindset",
      description: "We don't just build websites – we build lasting relationships. Your success is our success, and we're committed to your long-term growth.",
      features: ["Regular check-ins", "Growth recommendations", "Ongoing optimization"]
    }
  ];

  const openUrl = (url) => {
    window.open(url, '_blank');
  }


  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Services Overview Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-light via-white to-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Complete Web Solutions for 
                <span className="text-primary block">Modern Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From concept to launch and beyond, we provide end-to-end web development services 
                that drive results and help your business thrive in the digital landscape.
              </p>
            </div>

            {/* Services Grid Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-primary font-medium mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <button 
                    onClick={() => setActiveService(index)}
                    className="text-primary font-semibold hover:text-dark transition-colors duration-300 flex items-center group"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {serviceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to build, launch, and grow your online presence with confidence.
              </p>
            </div>

            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {mainServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeService === index
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Service Details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">
                      {mainServices[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark">
                        {mainServices[activeService].title}
                      </h3>
                      <p className="text-primary font-medium">
                        {mainServices[activeService].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {mainServices[activeService].description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-dark mb-4">Key Benefits:</h4>
                    <div className="space-y-2">
                      {mainServices[activeService].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-dark mb-4">What's Included:</h4>
                    <div className="space-y-3">
                      {mainServices[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-dark mb-4">Our Process:</h4>
                    <div className="space-y-3">
                      {mainServices[activeService].process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Why Businesses Choose Sparqal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business insight to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center space-y-4 group">
                  <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Our Unique Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What sets us apart is our holistic approach to web development. We don't just build websites – we create digital experiences that drive business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {ourApproach.map((approach, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-light rounded-lg p-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <div className="text-primary group-hover:text-white transition-colors duration-300">
                        {approach.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark mb-3">{approach.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{approach.description}</p>
                      <div className="space-y-2">
                        {approach.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
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
            <div className="text-center">
              <div className="bg-light/30 rounded-xl p-8 border shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-dark mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project and create a custom solution that perfectly fits your business needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center group" onClick={() => openUrl('https://calendly.com/kaushalshah750/1-1-discussion')}>
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/portfolio">
                    <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                      View Our Work
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        </section>


        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;