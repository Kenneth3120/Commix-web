import React, { useState, useEffect } from 'react';
import {
  Play,
  ArrowRight,
  Palette,
  Lightbulb,
  Rocket,
  PenTool,
  Eye,
  Brain,
  Share2,
  Target,
  ChevronRight,
  MessageCircle,
  Star,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import TawkToWidget from './TawkToWidget';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/public/images/commix-logo2bg.png" // Ensure this path is correct (e.g., in the public folder)
              alt="Commix Logo"
              className="px-0 h-20"
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </a>
            {/* <a href="#mission" className="text-white hover:text-yellow-400 transition-colors">
              Mission
            </a> */}
            <a href="#services" className="text-white hover:text-yellow-400 transition-colors">
              Services
            </a>
            {/* <a href="#whyus" className="text-white hover:text-yellow-400 transition-colors">
              Why Us
            </a> */}
            <a href="#testimonials" className="text-white hover:text-yellow-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600 border-t-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block text-white hover:text-yellow-400 transition-colors">
              Home
            </a>
            {/* <a href="#mission" className="block text-white hover:text-yellow-400 transition-colors">
              Mission
            </a> */}
            <a href="#services" className="block text-white hover:text-yellow-400 transition-colors">
              Services
            </a>
            {/* <a href="#whyus" className="block text-white hover:text-yellow-400 transition-colors">
              Why Us
            </a> */}
            <a href="#testimonials" className="block text-white hover:text-yellow-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [currentWord, setCurrentWord] = useState('Authenticity');
  const words = ['Authenticity', 'Creativity', 'Culture', 'Impact', 'Evolve'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Inject Tawk.to widget (handled in TawkToWidget.tsx)
  useEffect(() => {
    // TawkToWidget component handles script injection and positioning.
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const { error } = await supabase.from('contact_submissions').insert([formData]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const reviews = [
  //   {
  //     text: "With Commix, it didn't feel like work at all. They got our vibe and personalized the script perfectly—it felt more like a fun weekend with friends.",
  //     author: "Ahmed Bashar",
  //   },
  //   {
  //     text: "I knew Commix would deliver the best, and they totally lived up to my expectations. It was a new experience for me, but we had a great time collaborating with them!",
  //     author: "NABHAN DAMUDI",
  //   },
  //   {
  //     text: "Nice quality, nice branding. If the content game stays strong, it can explode. Keep up the good work",
  //     author: "SHAUN RODRIGUES",
  //   },
  // ];

  const reviews = [
    {
      text: "With Commix, it didn't feel like work at all. They got our vibe and personalized the script perfectly—it felt more like a fun weekend with friends.",
      author: "Ahmed Bashar",
    },
    {
      text: "I knew Commix would deliver the best, and they totally lived up to my expectations. It was a new experience for me, but we had a great time collaborating with them!",
      author: "Nabhan Damudi",
    },
    {
      text: "Nice quality, nice branding. If the content game stays strong, it can explode. Keep up the good work.",
      author: "Shaun Rodrigues",
    },
  ];

  return (
    <div className="w-full min-h-screen relative">
      {/* Inject Tawk.to widget */}
      <TawkToWidget />

      {/* Grid Background with Yellow Background */}
      <div className="fixed inset-0 bg-yellow-400">
        <div className="absolute inset-0 grid-background"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative pt-20">
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div className="bg-white backdrop-blur-sm rounded-3xl p-10 border-2 border-black shadow-lg w-full relative overflow-hidden text-center">
  <div className="absolute -right-8 -top-8 w-32 h-32 bg-purle-600/20 rounded-full blur-xl"></div>
  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-oange-500/20 rounded-full blur-xl"></div>
  <div className="text-5xl sm:text-7xl font-bold mb-4">IMPACTING</div>
  <div className="bg-purple-600 text-white rounded-full px-6 py-3 inline-block text-5xl sm:text-7xl font-bold mb-4 transform hover:scale-105 transition-transform">
    SCROLLING
  </div>
  <div className="text-5xl sm:text-7xl font-bold">CULTURE</div>
</div>

            {/* Right Side */}
            <div className="flex flex-col items-center md:items-end space-y-8">
              <div className="bg-orange-500/90 backdrop-blur-sm text-white rounded-3xl p-8 shadow-lg w-full sm:w-5/6 transform hover:scale-105 transition-transform border-2 border-black">
                <div className="text-3xl sm:text-5xl font-bold h-[60px] flex items-center justify-center">
                  <div className="word-fade">{currentWord}</div>
                </div>
              </div>
              {/* <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg w-full sm:w-5/6 transform hover:scale-105 transition-transform border-2 border-black">
                <div className="text-3xl sm:text-7xl font-bold flex items-center justify-center tracking-wider">
                  <span className="mr-1">C</span>
                  <span className="relative flex items-center justify-center">
                    <div className="bg-[#7C3AED] rounded-full w-12 h-12 flex items-center justify-center">
                      <Play className="text-white ml-1" fill="currentColor" size={20} />
                    </div>
                  </span>
                  <span className="ml-1">MMI</span>
                  <span className="transform -skew-x-12 text-[#7C3AED]">X</span>
                </div>
              </div> */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg w-full sm:w-5/6 transform hover:scale-105 transition-transform border-2 border-black">
  <div className="flex items-center justify-center">
    <img src="/public/images/black-yellow.png" alt="Commix Logo" className="max-w-full h-auto" />
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          id="mission"
          className="relative bg-gradient-to-b from-yellow-300/40 to-yellow-100/40 backdrop-blur-sm py-16 border-y-2 border-black"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
              backgroundSize: 'clamp(20px, 4vw, 50px) clamp(20px, 4vw, 50px)',
              pointerEvents: 'none',
            }}
          ></div>
          <div className="container mx-auto px-4 relative">
            {/* Lightbulb Icon Container */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black shadow-lg">
                <Lightbulb className="w-10 h-10 text-purple-600" />
              </div>
            </div>
            {/* Content */}
            <div className="pt-20">
              <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6">BUILDING CREATIVE COMMUNITY</h2>
              <p className="text-lg sm:text-2xl text-center max-w-3xl mx-auto mb-8">
              We Build Stories through Content 
              Create experience through Branding
              </p>
              {/* Values */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Authenticity', 'Creativity', 'Culture', 'Impact', 'Evolve'].map((value, index) => (
                  <span
                    key={value}
                    className="values-pill bg-purple-600 transform hover:scale-110 transition-transform border-2 border-black"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {value}
                  </span>
                ))}
              </div>
              <div className="relative p-6 sm:p-8 bg-white/60 rounded-3xl shadow-lg mb-12 border-2 border-black">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg text-center max-w-4xl mx-auto">
                  Design a brand experience that connects deeply with your audience's needs and aspirations.
                  Deliver content that educates, inspires, and drives growth establishing trust and positioning
                  you as the expert who truly understands them.
                </p>
              </div>
              {/* Stats */}


              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { number: '7+', label: 'Projects Delivered', icon: <Rocket /> },
    { number: '90+', label: 'Podcast', icon: <MessageCircle /> },
    { number: '15+', label: 'Creative Campaigns', icon: <Target /> },
  ].map((stat, index) => (
    <div
      key={stat.label}
      className="stats-card group hover:bg-purple-600 hover:text-white transition-colors border-2 border-black p-4"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-center justify-center text-purple-600 mb-4 group-hover:text-white">
        {stat.icon}
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:text-white">
        {stat.number}
      </div>
      <div className="text-base sm:text-xl text-center">{stat.label}</div>
    </div>
  ))}
</div>


            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24 bg-gradient-to-tr from-yellow-300/30 to-yellow-100/30 border-b-2 border-black">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6">DEFINE . CREATE . INSPIRE . GROW WITH COMMIX</h2>
        <br></br>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <Palette />,
                  title: 'Brand Strategy & Identity',
                  subheading: 'Define your essence, own your space.',
                  description:
                    'We help you uncover your unique story and build a brand identity that reflects your core values, vision, and purpose—making you unforgettable.',
                },
                {
                  icon: <Share2 />,
                  title: 'Digital & Content Branding',
                  subheading: 'Turn clicks into connections, content into impact.',
                  description:
                    'We craft a digital presence that speaks directly to your audience, creating content that resonates, engages, and drives real results.',
                },
                {
                  icon: <Rocket />,
                  title: 'Experiential & Growth Branding',
                  subheading: 'Create moments that inspire lasting loyalty.',
                  description:
                    'We design immersive experiences that spark emotion, build trust, and fuel long-term growth for your brand.',
                },
                {
                  icon: <PenTool />,
                  title: 'Strategic Content Development',
                  subheading: 'Stories that move, ideas that stick.',
                  description:
                    "We develop content that educates, inspires, and aligns with your audience's journey—turning your message into a movement.",
                },
                {
                  icon: <Eye />,
                  title: 'Visual Storytelling & Design',
                  subheading: "Show, don't tell—your story matters.",
                  description:
                    'We transform your ideas into stunning visuals that captivate, communicate, and leave a lasting impression.',
                },
                {
                  icon: <Brain />,
                  title: 'Thought Leadership & Engagement',
                  subheading: 'Lead with insight, connect with purpose.',
                  description:
                    'We position you as an authority, crafting content that builds trust, fosters connections, and drives meaningful conversations.',
                },
                {
                  icon: <Target />,
                  title: 'Platform-Specific Content Optimization',
                  subheading: 'Right message, right place, right impact.',
                  description:
                    'We tailor your content to each platform, ensuring maximum reach, relevance, and engagement—every single time.',
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="service-card group hover:bg-purple-600 hover:text-white transition-all border-2 border-black"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-purple-600 mb-4 group-hover:text-white">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-base font-semibold mb-3 group-hover:text-yellow-300">{service.subheading}</p>
                  <p className="text-sm sm:text-base text-gray-700 group-hover:text-white/90">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="whyus" className="bg-purple-600 text-white py-16 sm:py-24 relative overflow-hidden border-b-2 border-black">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                 linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                backgroundSize: 'clamp(20px, 4vw, 50px) clamp(20px, 4vw, 50px)',
                pointerEvents: 'none',
              }}
            ></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Why Choose Us?</h2>
            <p className="text-base sm:text-xl text-center max-w-4xl  mx-auto mb-8">
              We don't just create brand we create legacies. By understanding your audience's needs,
              dreams, and aspirations, we craft strategies and content that connect on a deeper level.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-base sm:text-lg flex items-center gap-2 hover:bg-yellow-400 transition-colors group border-2 border-black">
                Let's build your legacy
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>


{/* Testimonial section */}
        <section
      id="testimonials"
      className="py-16 sm:py-24 bg-white flex justify-center items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          WHAT THEY SAY ABOUT COMMIX
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-card relative text-center transform transition-all hover:scale-105 hover:shadow-3xl p-6 flex flex-col min-h-[300px]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quotation Marks */}
              <div className="text-6xl text-gray-300 absolute top-2 left-4 opacity-20">
                “
              </div>

              {/* Content Wrapper */}
              <div className="flex flex-col h-full">
                {/* Testimonial Text */}
                <p className="text-lg text-gray-800 mb-6 leading-relaxed flex-grow">
                  {review.text}
                </p>

                {/* Author Name with Rounded Border */}
                <div className="mt-auto inline-block border border-gray-800 rounded-full px-4 py-2 text-gray-900 font-semibold text-sm">
                  {review.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


        {/* Contact Form Section */}
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-yellow-300/40 to-yellow-100/40 relative border-t-2 border-black">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
              backgroundSize: 'clamp(20px, 4vw, 50px) clamp(20px, 4vw, 50px)',
              pointerEvents: 'none',
            }}
          ></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-black">
              <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:ring focus:ring-purple-200 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:ring focus:ring-purple-200 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:ring focus:ring-purple-200 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors border-2 border-black ${
                    submitStatus === 'loading' ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg border-2 border-green-200">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg border-2 border-red-200">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-purple-600 text-white border-t-2 border-black">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-8 border-b-2 border-white/20">
              {/* Brand Section */}
              <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <img
                    src="/public/images/commix-logo.png" // Ensure this path is correct
                    alt="Commix Logo"
                    className="h-10"
                  />
                </div>
                <p className="text-white/80 text-center md:text-left">
                  Creating impactful brand experiences that resonate and inspire.
                </p>
              </div>
              {/* Contact Info */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-bold">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mail size={18} />
                    <span>hello@thecommix.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone size={18} />
                    <span>+971 52 424 4160</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin size={18} />
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>
              {/* Quick Links */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-bold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#hero" className="hover:text-yellow-400 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-yellow-400 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-400 transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-yellow-400 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* Newsletter */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl font-bold">Newsletter</h3>
                <p className="text-white/80">
                  Stay updated with our latest news and updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-start">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/10 border-2 border-white/20 focus:border-yellow-400 outline-none"
                  />
                  <button className="px-4 py-2 bg-yellow-400 text-purple-600 rounded-lg font-bold hover:bg-yellow-300 transition-colors border-2 border-black">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 text-center text-white/80">
              <p>&copy; {new Date().getFullYear()} Commix. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
