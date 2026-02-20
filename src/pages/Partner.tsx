import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/UI/card";
import { Label } from "../components/UI/label";
import { Button } from "../components/UI/button";
import { Input } from "../components/UI/Input";
import { Textarea } from "../components/UI/textarea";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "../hooks/use-toast";
import { useState } from 'react';

export default function AboutPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        whatsapp_number : ""
    });
    const { toast } = useToast();
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        const res = await fetch("http://localhost:8000/partner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed");

        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" , whatsapp_number : ""});

      } catch (err) {
        console.error("Form submit failed:", err);
        toast({
          title: "Error",
          description: "Failed to send message.",
          variant: "destructive",
        });
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-blue-50/30 overflow-hidden">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12" ref={ref}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="max-w-3xl mx-auto shadow-2xl border-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300 rounded-full blur-2xl"></div>
                  </div>
                  <CardTitle className="text-2xl relative z-10">Send us a message</CardTitle>
                  <CardDescription className="text-teal-50 relative z-10">
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </div>
              </motion.div>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Label htmlFor="whatsapp_number">Whatsapp Number*</Label>
                    <Input
                      id="whatsapp_number"
                      placeholder="+91 10000 10000"
                      value={formData.whatsapp_number}
                      onChange={(e) => setFormData({ ...formData, whatsapp_number: e.target.value })}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
          </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
