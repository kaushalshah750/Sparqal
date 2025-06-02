import React from 'react';
import { 
  Target, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Award,
  TrendingUp,
  Globe,
  Code,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MessageSquare,
  Eye,
  Compass,
  Handshake,
  Mail,
  Phone
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every decision we make is focused on delivering measurable results that drive your business forward."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centered",
      description: "Your success is our success. We build lasting partnerships based on trust, communication, and shared goals."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality First",
      description: "We never compromise on quality. Every project receives our full attention to detail and craftsmanship."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of industry trends and technologies to deliver cutting-edge solutions for our clients."
    }
  ];

  const expertise = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Modern Web Design",
      skills: ["UI/UX Design", "Brand Integration", "Conversion Optimization", "Mobile-First Design"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      skills: ["React & JavaScript", "Responsive Development", "Performance Optimization", "CMS Integration"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Digital Marketing",
      skills: ["SEO Optimization", "Local Search", "Analytics Setup", "Content Strategy"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Success",
      skills: ["Project Management", "Ongoing Support", "Training & Education", "Strategic Consulting"]
    }
  ];

  const visionMission = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To democratize professional web presence for small and local businesses, ensuring every entrepreneur has access to the digital tools they need to compete and thrive in today's marketplace."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Our Mission",
      description: "We bridge the gap between complex web technology and practical business needs, delivering professional, conversion-focused websites that help small businesses grow their online presence and revenue."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Our Commitment",
      description: "We're committed to being more than just a service provider – we're your long-term digital partner, invested in your success and dedicated to helping your business flourish online."
    }
  ];

  const differentiators = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Business Focus",
      description: "Unlike larger agencies, we specialize exclusively in small and local businesses. We understand your unique challenges, budget constraints, and growth aspirations."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication",
      description: "You'll work directly with experienced professionals, not account managers. We believe in clear, honest communication without the corporate bureaucracy."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Expertise",
      description: "Our team brings years of experience from leading tech companies and successful projects. We apply enterprise-level expertise to small business solutions."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Agile & Responsive",
      description: "As a focused team, we can pivot quickly, implement changes fast, and provide the personalized attention that larger agencies simply can't match."
    }
  ];

  const teamValues = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Problem Solving",
      description: "We approach every challenge with fresh thinking and innovative solutions."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Clear Communication",
      description: "We keep you informed every step of the way with transparent, jargon-free updates."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Delivery",
      description: "We meet our commitments and deliver projects on time, every time."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "We stay current with the latest technologies and best practices in web development."
    }
  ];

  const trustIndicators = [
    { 
      icon: <CheckCircle className="w-5 h-5" />,
      text: "100% Project Success Rate"
    },
    { 
      icon: <Shield className="w-5 h-5" />,
      text: "Quality Guarantee on All Work"
    },
    { 
      icon: <Users className="w-5 h-5" />,
      text: "Direct Access to Senior Developers"
    },
    { 
      icon: <Clock className="w-5 h-5" />,
      text: "On-Time Delivery Promise"
    }
  ];

  return (
    <>
        <Helmet>
        <title>About Sparqal – Full-Stack Web Development Agency</title>
        <meta 
            name="description" 
            content="Discover Sparqal, a cutting-edge web development agency delivering modern, scalable digital solutions for businesses of all sizes and industries." 
        />
        </Helmet>

        <div className="min-h-screen bg-white">
        <Navbar />
      
      {/* About Header - Trust-focused, not sales-focused */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-light via-white to-light/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            About <span className="text-primary">Sparqal</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We're a dedicated team of web development professionals who believe every small business 
            deserves a powerful online presence. Get to know the people behind your digital success.
          </p>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm text-primary bg-white rounded-lg px-3 py-2 shadow-sm">
                {indicator.icon}
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-dark">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sparqal was born from a simple observation: small and local businesses deserve the same 
                  level of professional web presence as large corporations, but they need partners who 
                  understand their unique challenges and constraints.
                </p>
                <p>
                  As experienced web professionals, we've seen firsthand how the right digital strategy 
                  can transform a business. We founded Sparqal to bring enterprise-level web development 
                  expertise directly to small business owners who want to grow but don't need the overhead 
                  of working with large agencies.
                </p>
                <p>
                  We believe that fresh perspective, combined with proven expertise, often delivers better 
                  results than legacy approaches. Every business deserves a partner who's genuinely invested 
                  in their success, not just another project number.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-light/30 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-dark mb-2">Fresh Approach</h3>
                  <p className="text-sm text-gray-600">We bring new energy and innovative solutions to every project.</p>
                </div>
                <div className="bg-light/30 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-dark mb-2">Proven Expertise</h3>
                  <p className="text-sm text-gray-600">Our team combines years of experience with cutting-edge knowledge.</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="bg-light/30 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-dark mb-2">Personal Touch</h3>
                  <p className="text-sm text-gray-600">Every client gets our full attention and personalized service.</p>
                </div>
                <div className="bg-primary rounded-xl p-6 text-white">
                  <CheckCircle className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Our Promise</h3>
                  <p className="text-sm opacity-90">Quality work, transparent communication, and measurable results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles and vision that drive everything we do at Sparqal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {visionMission.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <div className="text-primary group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why small and local businesses choose Sparqal as their digital partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-light rounded-lg p-3 flex-shrink-0">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical skills with business insight to deliver comprehensive web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-light/30 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-primary">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines proven methodologies with personalized attention to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-light rounded-lg p-3 flex-shrink-0">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship-building CTA - focused on connection, not hard sell */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-lg mb-8 opacity-90">
            We'd love to learn more about your business and explore how we can help you achieve your digital goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-light hover:text-dark transition-all duration-300 flex items-center justify-center group">
              <MessageSquare className="mr-2 w-5 h-5" />
              Schedule a Chat
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              Send us an Email
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default AboutPage;