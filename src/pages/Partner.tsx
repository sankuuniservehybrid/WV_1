//import { MessageSquare , FileText , Plane , Heart , HeartHandshake , Home as HomeIcon} from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">

            <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp_number">Whatsapp Number*</Label>
                    <Input
                      id="whatsapp_number"
                      placeholder="+91 10000 10000"
                      value={formData.whatsapp_number}
                      onChange={(e) => setFormData({ ...formData, whatsapp_number: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2"> 
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
