"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
      setStatus(data.message);
    } catch {
      setStatus("Something went wrong. Please try again.");
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 px-6 md:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white shadow-[0_20px_50px_rgba(0,31,63,0.15)] rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side: PDF Info */}
          <div className="bg-[#001F3F] text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic text-[#007BFF]">Get in Touch</h2>
              <p className="text-slate-300 mb-10 font-medium leading-relaxed">
                Have a question about our industrial stretch films or need a bulk quote? 
                Our team is ready to provide you with the perfect packaging solution.
              </p>

              <div className="space-y-8 font-bold">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#007BFF] transition-colors">📧</div>
                    <p className="text-sm">
                      <a href="mailto:info.vinayakventure@gmail.com">
                      info.vinayakventure@gmail.com
                      </a>
                    </p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#007BFF] transition-colors">📞</div>
                    <p className="text-lg">
                      <a  href="tel:+916354768985" >
                        +91 63547 68985
                      </a>
                    </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#007BFF] transition-colors shrink-0">📍</div>
                  <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
                     <a  href="https://www.google.com/maps/search/?api=1&query=491-C/19+Chandan+Complex+Opp+Himalaya+Factory+GIDC+Makarpura+Vadodara+390010"
                      target="_blank" rel="noopener noreferrer">       
                 491-C/19, Chandan Complex, <br />
                    Opp. Himalaya Factory, G.I.D.C., <br />
                    Makarpura, Vadodara-390010.
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12 text-[#007BFF] font-black text-xs tracking-[0.4em] uppercase">
              Total Solutions in Packaging
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-12">
            <h3 className="text-2xl font-black text-[#001F3F] mb-8 uppercase tracking-tighter italic">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#007BFF] focus:outline-none transition-all font-bold text-[#001F3F]"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#007BFF] focus:outline-none transition-all font-bold text-[#001F3F]"
                    placeholder="Enter Email ID"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#007BFF] focus:outline-none transition-all font-bold text-[#001F3F]"
                    placeholder="Inquiry or Contact"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message" rows={4} value={formData.message} onChange={handleChange} required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#007BFF] focus:outline-none transition-all font-bold text-[#001F3F] resize-none"
                  placeholder="Enter your message here..."
                />
              </div>

              {status && (
                <div className={`p-4 rounded-xl text-sm font-bold ${success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {status}
                </div>
              )}

              <button
                type="submit" disabled={loading}
                className="w-full bg-[#001F3F] hover:bg-[#007BFF] text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}