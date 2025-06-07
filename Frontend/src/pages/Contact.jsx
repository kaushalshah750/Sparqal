import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { sendContactForm } from "../services/contact.service";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    project_detail: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    sendContactForm(formData)
      .then((response) => {
        setIsSubmitted(true);
        setIsLoading(false);
        toast.success("Form sent successfully", {
          className:
            "bg-green-600 text-white w-[90vw] max-w-sm mx-auto px-4 py-3 rounded-xl shadow-lg text-sm sm:text-base",
          icon: <CheckCircle className="text-white w-5 h-5" />,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong.", {
          className:
            "bg-red-600 text-white w-[90vw] max-w-sm mx-auto px-4 py-3 rounded-xl shadow-lg text-sm sm:text-base",
          icon: <AlertCircle className="text-white w-5 h-5" />,
        });
        console.error("Error sending form:", error);
        setIsLoading(false);
      });

    // Reset form after 3 seconds
    // setTimeout(() => {
    //   setIsSubmitted(false);
    // setFormData({
    //   name: '',
    //   email: '',
    //   type: '',
    //   project_detail: ''
    // });
    // }, 3000);
  };

  const isFormValid =
    formData.name && formData.email && formData.type && formData.project_detail;

  return (
    <>
      <Helmet>
        <title>Contact Sparqal – Let’s Build Your Next Digital Project</title>
        <meta
          name="description"
          content="Get in touch with Sparqal to discuss your website or digital product needs. We work with startups, enterprises, and agencies to bring ideas to life with code."
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        <Navbar />
        {/* Focused Page Header */}
        <section className="bg-gradient-to-br from-light via-light/80 to-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                Contact <span className="text-primary">Sparqal</span>
              </h1>
              <p className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto">
                Ready to discuss your project? We're here to help bring your
                vision to life.
              </p>
            </div>

            {/* Contact Methods Quick Access */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="mailto:kaushal@mrkaushalshah.com"
                className="flex items-center gap-3 p-4 bg-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Email Us</p>
                  <p className="text-sm text-dark/60">24hr response</p>
                </div>
              </a>

              <a
                href="tel:+919974442525"
                className="flex items-center gap-3 p-4 bg-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Call Direct</p>
                  <p className="text-sm text-dark/60">Mon-Fri 9AM-6PM</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-white/80 rounded-xl">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Live Chat</p>
                  <p className="text-sm text-dark/60">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - Takes up more space */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-light/40 to-light/20 rounded-2xl p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-dark">
                        Start Your Project
                      </h2>
                      <p className="text-dark/60">Tell us about your vision</p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-dark mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-dark/70">
                        Thank you for reaching out. We'll get back to you within
                        24 hours with next steps.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-dark mb-2"
                          >
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border-2 border-dark/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-dark mb-2"
                          >
                            Email Address{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border-2 border-dark/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="type"
                          className="block text-sm font-semibold text-dark mb-2"
                        >
                          Project Type <span className="text-primary">*</span>
                        </label>
                        <select
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-dark/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                        >
                          <option value="">What can we help you with?</option>
                          <option value="New Website">
                            New Website Design
                          </option>
                          <option value="Website Redesign">
                            Website Redesign
                          </option>
                          <option value="E-commerce">
                            E-commerce Development
                          </option>
                          <option value="SEO Services">
                            SEO & Digital Marketing
                          </option>
                          <option value="Maintenance">
                            Website Maintenance
                          </option>
                          <option value="Consultation">
                            Free Consultation
                          </option>
                          <option value="Other">Something Else</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="project_detail"
                          className="block text-sm font-semibold text-dark mb-2"
                        >
                          Project Details{" "}
                          <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="project_detail"
                          name="project_detail"
                          value={formData.project_detail}
                          onChange={handleInputChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 bg-white border-2 border-dark/10 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 resize-vertical"
                          placeholder="Tell us about your business, goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can help you."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!isFormValid || isLoading}
                        className={`w-full py-4 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-3 transition-all duration-200 ${
                          isFormValid
                            ? "bg-primary hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl"
                            : "bg-dark/20 cursor-not-allowed"
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Send Message
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Sending Message
                          </>
                        )}
                      </button>

                      <p className="text-sm text-dark/60 text-center">
                        <span className="text-primary">*</span> All fields
                        required • We respect your privacy
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="lg:col-span-2">
                <div className="sticky top-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Other Ways to Reach Us
                  </h2>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4 p-6 bg-light/30 rounded-xl hover:bg-light/40 transition-colors duration-200">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Email</h3>
                        <p className="text-dark/70 mb-2">
                          kaushal@mrkaushalshah.com
                        </p>
                        <div className="flex items-center gap-2 text-sm text-dark/60">
                          <Clock className="w-4 h-4" />
                          <span>Response within 24 hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-light/30 rounded-xl hover:bg-light/40 transition-colors duration-200">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Phone</h3>
                        <p className="text-dark/70 mb-2">+91 99744 42525</p>
                        <div className="flex items-center gap-2 text-sm text-dark/60">
                          <Clock className="w-4 h-4" />
                          <span>Mon-Fri, 10AM - 8PM IST</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-light/30 rounded-xl">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">Office</h3>
                        <p className="text-dark/70 mb-2">
                          221, Laxmi Arcade, Kim, Surat
                          <br />
                          Gujarat, India - 394110
                          <br />
                        </p>
                        <p className="text-sm text-dark/60">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-4">
                      What Happens Next?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <p className="text-sm text-dark/80">
                          We'll review your project details and get back to you
                          within 24 hours
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <p className="text-sm text-dark/80">
                          Schedule a free consultation call to discuss your
                          vision
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <p className="text-sm text-dark/80">
                          Receive a custom proposal with timeline and investment
                          details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-light/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">
                  Free Consultation
                </h3>
                <p className="text-sm text-dark/70">
                  No obligation discovery call to understand your needs
                </p>
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">Quick Response</h3>
                <p className="text-sm text-dark/70">
                  We respond to all inquiries within 24 hours
                </p>
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">Local & Remote</h3>
                <p className="text-sm text-dark/70">
                  Serving businesses nationwide with personalized service
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
