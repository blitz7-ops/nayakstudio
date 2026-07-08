import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, DollarSign, Calendar, FileText } from 'lucide-react';

export default function ProjectInquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    service: 'Landing Pages',
    budget: '$450-$750',
    timeline: '',
    details: ''
  });

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const services = [
    'Landing Pages',
    'Business Websites',
    'Portfolio Websites',
    'Website Redesign',
    'UI/UX Design',
    'Website Maintenance'
  ];

  const budgets = [
    'Starting at $450',
    '$450-$750',
    '$750-$1500',
    '$1500+'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (b) => {
    setFormData((prev) => ({ ...prev, budget: b }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessName || !formData.email || !formData.details) {
      alert('Please fill out the required fields (Name, Business Name, Email, and Project Details).');
      return;
    }

    const emailTo = 'chokeblitz@gmail.com';
    const subject = `Project Inquiry – ${formData.businessName}`;
    const body = `Hello Nayak Studio,

My Name:
${formData.fullName}

Business:
${formData.businessName}

Email:
${formData.email}

Phone:
${formData.phone || 'N/A'}

Website:
${formData.website || 'N/A'}

Service:
${formData.service}

Budget:
${formData.budget}

Timeline:
${formData.timeline || 'N/A'}

Project Details:
${formData.details}

Thanks.`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');

    // Wait slightly before closing modal & resetting state to allow redirect registration
    setTimeout(() => {
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        website: '',
        service: 'Landing Pages',
        budget: '$450-$750',
        timeline: '',
        details: ''
      });
      onClose();
    }, 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B1220]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#0B1220] rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800/40">
              <h2 className="text-xl md:text-2xl font-bold font-display text-white">
                Let's Build Something Exceptional
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-8" data-lenis-prevent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Grid fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                      placeholder="e.g. Alpha Studio"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                      placeholder="e.g. hello@website.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Current Website <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="https://example.com"
                  />
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-[#0E1726] text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                  >
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Options */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                    <DollarSign size={16} className="text-accent" /> Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {budgets.map((b, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleBudgetSelect(b)}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all ${formData.budget === b
                            ? 'border-accent bg-accent/10 text-accent'
                            : 'border-slate-850 hover:border-slate-700 text-slate-400'
                          }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                    <Calendar size={16} className="text-accent" /> Project Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="e.g. Next 4 weeks, Immediately, Q3"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                    <FileText size={16} className="text-accent" /> Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="details"
                    required
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-850 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                    placeholder="Tell us about your brand, targets, features needed..."
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 pt-4 border-t border-slate-800/40">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:bg-slate-800 hover:text-white transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent/90 transition flex items-center gap-2"
                  >
                    Submit Inquiry <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
