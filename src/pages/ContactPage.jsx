import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCode, CheckCircle, X, Loader2 } from 'lucide-react';

// =========================================================================
// CONFIGURATION: Paste your Web3Forms Access Key here!
// You can get a free key instantly by entering your email at: https://web3forms.com
// =========================================================================
const WEB3FORMS_ACCESS_KEY = "becb8b45-1c18-4bfd-9ea3-4111b5289582";

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || "General Inquiry - Leo Club of Hopeville",
          message: form.message,
          from_name: "Leo Club of Hopeville Web Visitor"
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setShowSuccess(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Failed to send message: " + (result.message || "Please check your access key."));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Unable to send message due to a network issue. Please email us directly at leoclubhopeville@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Header Banner */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Reach Out</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            Have questions about joining, donating, or supporting our service campaigns? Message us directly.
          </p>
        </div>
      </section>

      {/* Main Content Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Contact Info</span>
                <h2 className="text-2xl font-bold text-leoNavy font-serif mb-6">Leo Club Headquarters</h2>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Get in touch with our Public Relations Officer or President for coordination, sponsorship requests, or volunteer inquiries.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Email Address</h4>
                      <a href="mailto:leoclubhopeville@gmail.com" className="text-sm text-slate-500 hover:text-leoGold mt-1 inline-block transition-colors">
                        leoclubhopeville@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-leoNavy font-serif mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leoTeal/20 focus:border-leoTeal text-sm text-slate-800 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leoTeal/20 focus:border-leoTeal text-sm text-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Sponsorship, Joining, etc. (Optional)"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leoTeal/20 focus:border-leoTeal text-sm text-slate-800 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">Message</label>
                  <textarea
                    required
                    rows="5"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-leoTeal/20 focus:border-leoTeal text-sm text-slate-800 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-leoNavy to-slate-800 hover:from-slate-800 hover:to-leoNavy text-white font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-205 transform hover:-translate-y-0.5 shadow-md shadow-slate-105 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Message...</span>
                      <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[999] bg-leoNavy/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative border border-slate-100 shadow-2xl animate-fade-in">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close success pop-up"
            >
              <X size={16} />
            </button>
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-lg font-bold text-leoNavy font-serif mb-2">Message Sent!</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Thank you for reaching out. Your message has been routed to our email inbox and our PRO team will respond to you shortly!
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-leoNavy hover:bg-leoNavy-light text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-colors shadow-sm"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
