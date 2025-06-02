import React, { useState } from 'react';
import { Menu, X, ArrowRight, Check, Star, Globe, Code, Zap, Users, ChevronDown, Play, TrendingUp, Award, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const SparqalHomepage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web Design",
      description: "Stunning, conversion-focused websites tailored to your brand and business goals."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SEO Fundamentals",
      description: "Essential search engine optimization to help your business get found online."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Reliable maintenance and updates to keep your website running smoothly."
    }
  ];

  const features = [
    "Mobile-First Responsive Design",
    "Fast Loading Speed Optimization",
    "Search Engine Friendly Structure",
    "Professional Brand Integration",
    "Conversion-Focused Layout",
    "Ongoing Technical Support"
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Mitchell's Local Bakery",
      text: "Sparqal transformed our online presence. Our new website has increased our orders by 40% in just three months!",
      rating: 5
    },
    {
      name: "David Chen",
      business: "Chen Physical Therapy",
      text: "Professional, responsive, and delivered exactly what we needed. Our patients love the new booking system.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      business: "Rodriguez Law Firm",
      text: "The team at Sparqal understood our vision perfectly. The website reflects our professionalism beautifully.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most projects are completed within 2-4 weeks, depending on complexity and requirements. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with businesses outside your local area?",
      answer: "Yes! While we specialize in local businesses, we work with clients nationwide through our streamlined remote process."
    },
    {
      question: "What's included in your ongoing support?",
      answer: "Our support includes security updates, content updates, technical maintenance, and priority assistance when you need it most."
    },
    {
      question: "Can you help improve my existing website?",
      answer: "Absolutely! We offer website redesigns, performance optimization, and enhancement services for existing sites."
    }
  ];

  return (
    <>
    <Helmet>
  <title>Sparqal – Full-Service Web Development Agency</title>
  <meta 
    name="description" 
    content="Sparqal is a modern web development agency crafting high-performance websites and digital experiences for businesses of all sizes across industries." 
  />
</Helmet>

    <div className="min-h-screen bg-white text-black">
        <Navbar />

        <section className="pt-20 pb-24 bg-gradient-to-br from-light via-white to-light relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light to-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              {/* Trust Indicator */}
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 w-fit">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-dark">Trusted by 50+ businesses</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-dark rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-light rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-dark">Build</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-dark animate-pulse">
                    Stunning
                  </span>
                  <br />
                  <span className="text-dark">Websites That</span>{' '}
                  <span className="relative">
                    <span className="text-primary">Convert</span>
                    <div className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-to-r from-primary/40 to-light transform -skew-x-12 opacity-60"></div>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Transform your business with modern, high-performance websites that drive real results. 
                  <span className="text-primary font-semibold"> We make digital success simple.</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-primary to-dark text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="group bg-white/80 backdrop-blur-sm border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-dark mb-2 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary mr-2" />
                    40%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Average Revenue Increase</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-dark mb-2 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary mr-2" />
                    2-4
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Weeks to Launch</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-dark mb-2 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary mr-2" />
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Ongoing Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Device Mockup */}
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-700">
                {/* Laptop Frame */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                    {/* Browser Bar */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 ml-4">
                        https://your-awesome-website.com
                      </div>
                    </div>
                    
                    {/* Website Content */}
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="h-8 bg-gradient-to-r from-primary to-dark rounded w-24"></div>
                        <div className="flex space-x-2">
                          <div className="h-6 bg-light rounded w-16"></div>
                          <div className="h-6 bg-light rounded w-16"></div>
                          <div className="h-6 bg-primary rounded w-20"></div>
                        </div>
                      </div>
                      
                      {/* Hero Content */}
                      <div className="space-y-3 py-4">
                        <div className="h-6 bg-light rounded w-4/5"></div>
                        <div className="h-6 bg-light rounded w-3/5"></div>
                        <div className="h-4 bg-light/60 rounded w-full"></div>
                        <div className="h-4 bg-light/60 rounded w-4/5"></div>
                        
                        <div className="flex space-x-3 pt-4">
                          <div className="h-10 bg-gradient-to-r from-primary to-dark rounded w-32"></div>
                          <div className="h-10 bg-light rounded w-24"></div>
                        </div>
                      </div>
                      
                      {/* Cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-light rounded-lg p-3 space-y-2">
                          <div className="w-6 h-6 bg-primary rounded"></div>
                          <div className="h-3 bg-primary/30 rounded w-3/4"></div>
                          <div className="h-2 bg-light/80 rounded w-full"></div>
                        </div>
                        <div className="bg-light rounded-lg p-3 space-y-2">
                          <div className="w-6 h-6 bg-dark rounded"></div>
                          <div className="h-3 bg-dark/30 rounded w-3/4"></div>
                          <div className="h-2 bg-light/80 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Keyboard */}
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-b-2xl h-4 -mt-1"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-dark">Live Website</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-primary to-dark rounded-2xl p-4 shadow-xl text-white animate-pulse">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">+127% Traffic</span>
                </div>
              </div>

              {/* Mobile Device */}
              <div className="absolute -right-12 top-1/2 transform translate-y-1/4 rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl w-20">
                  <div className="bg-white rounded-2xl p-2 space-y-1">
                    <div className="h-1 bg-light rounded w-3/4 mx-auto"></div>
                    <div className="h-1 bg-primary rounded w-1/2"></div>
                    <div className="h-1 bg-light/60 rounded w-full"></div>
                    <div className="h-1 bg-light/60 rounded w-2/3"></div>
                    <div className="grid grid-cols-2 gap-1 mt-2">
                      <div className="h-3 bg-light rounded"></div>
                      <div className="h-3 bg-primary/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch and beyond, we provide everything your business needs to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch and beyond, we provide everything your business needs to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#EDEBFF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Why Choose Sparqal?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with business insight to deliver websites that not only look great but drive real results for your business.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-dark mb-2">Local Focus</h3>
                <p className="text-gray-600">We understand the unique challenges and opportunities facing small and local businesses.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-dark mb-2">Modern Technology</h3>
                <p className="text-gray-600">Built with the latest web technologies for optimal performance and user experience.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-dark mb-2">Ongoing Partnership</h3>
                <p className="text-gray-600">We're here for the long term with continuous support and optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses we've helped grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-light/30 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business grow with a professional website that converts visitors into customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

        <Footer />
    </div>
    </>
  );
};

export default SparqalHomepage;