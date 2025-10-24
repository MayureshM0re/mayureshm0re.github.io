import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build form data including honeypot and optional subject
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('message', formData.message);
      // Honeypot field (should be left empty by real users)
      fd.append('_honey', '');
      // Disable built-in captcha on FormSubmit (we'll rely on honeypot)
      fd.append('_captcha', 'false');
      fd.append('_subject', 'Portfolio contact from ' + formData.name);

      const endpoint = 'https://formsubmit.co/ajax/mayureshmore54@gmail.com';
      const res = await fetch(endpoint, {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => null);
        throw new Error((errJson && errJson.message) || 'Failed to send message');
      }

      // Success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // hide success after a short time
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error('Contact send error:', err);
      alert('Sorry — failed to send message. Please try again or email directly to mayureshmore54@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MayureshM0re',
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mayureshmore4/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:mayureshmore54@gmail.com',
      color: 'hover:text-cyan-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
            >
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl z-10">
                  <div className="text-center space-y-4">
                    <CheckCircle2 size={64} className="text-green-400 mx-auto animate-bounce" />
                    <p className="text-xl font-semibold text-white">Message Sent!</p>
                    <p className="text-gray-400">Thank you for reaching out.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-semibold text-black hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-gray-400 ${link.color} transition-colors group`}
                    >
                      <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Open to full-time opportunities</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Available for consulting projects</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Response time: 24-48 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Mayuresh More | Built with ❤️</p>
        </div>
      </footer>
    </section>
  );
}
