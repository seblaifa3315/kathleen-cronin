"use client";

import { author, book } from "@/data/content";

import {Send, Mail, MessageCircle} from "lucide-react";
import {useState} from "react";
import {toast, Toaster} from "sonner";
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.from_name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }
        console.log("Submitting form:", formData);
        setIsSubmitting(true);
        emailjs
            .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            e.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then((result) => {
                toast.success("Message sent successfully! I'll get back to you soon.");
                setFormData({from_name: "", email: "", message: ""});
                setIsSubmitting(false);
            })
            .catch(() => {
                toast.error("Something went wrong. Please try again later.");
                setIsSubmitting(false);
            });
            
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-bg1">
      {/* Add Toaster here */}
      <Toaster richColors position="top-center" duration={3000} />
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block px-4 py-2 bg-bg4 text-accent1 text-xs tracking-wider uppercase font-light">Get in Touch</div>
                    <h2 className="text-5xl lg:text-6xl font-serif font-light text-primary">Let's Connect</h2>
                    <p className="text-xl text-secondary font-light max-w-2xl mx-auto leading-relaxed">I'd love to hear from you. Whether you have questions about the book, want to discuss a book club visit, or just want to say hello.</p>
                </div>

                {/* Flex layout for info + form */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:px-16">
                    {/* Contact Info */}
                    <div className="flex-1 space-y-6 lg:max-w-md">
                        <div className="p-6 bg-bg4 rounded-lg space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent2 text-white rounded-lg">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-primary mb-1">Email</h3>
                                    <p className="text-sm text-secondary font-light">{author.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-bg4 rounded-lg space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent2 text-white rounded-lg">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-primary mb-1">Response Time</h3>
                                    <p className="text-sm text-secondary font-light">Usually within 48 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="from_name"
                                required
                                placeholder="Your Name"
                                value={formData.from_name}
                                onChange={(e) => setFormData({...formData, from_name: e.target.value})}
                                className="h-12 w-full bg-input-bg border border-transparent rounded-md text-secondary placeholder:text-secondary/40 text-sm placeholder:font-light
              focus:border-accent1/40 focus:ring-0 focus:ring-accent1/40 outline-none transition pl-4"
                            />

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="h-12 w-full bg-input-bg border border-transparent rounded-md text-secondary placeholder:text-secondary/40 text-sm placeholder:font-light
              focus:border-accent1/40 focus:ring-0 focus:ring-accent1/40 outline-none transition pl-4"
                            />

                            <textarea
                                name="message"
                                rows={6}
                                required
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="min-h-45 w-full bg-input-bg border border-transparent rounded-md text-secondary placeholder:text-secondary/40 text-sm placeholder:font-light
              focus:border-accent1/40 focus:ring-0 focus:ring-accent1/40 outline-none transition pl-4 pt-4 resize-none"
                            />

                            <button type="submit" disabled={isSubmitting} className="w-full h-12 bg-accent2 hover:bg-accent3 text-white text-sm tracking-wider uppercase transition-all duration-300 shadow-lg rounded-md hover:shadow-xl cursor-pointer hover:-translate-y-0.5">
                                <span className="inline-flex items-center">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send size={16} className="ml-2" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
