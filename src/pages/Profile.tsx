//import { MessageSquare , FileText , Plane , Heart , HeartHandshake , Home as HomeIcon} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/UI/card";
import { Label } from "../components/UI/label";
import { Button } from "../components/UI/button";
import { Input } from "../components/UI/Input";
// import { Textarea } from "../components/UI/textarea";

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
        phone: ""
    });
    const { toast } = useToast();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" , phone: ""});
    };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Download Company Profile</CardTitle>
              <CardDescription>
                Fill out the form to download company profile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type ="tel"
                    placeholder="+91 0001 0001"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone : e.target.value })}
                    required
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div> */}

                <Button type="submit" className="w-full bg-teal-600 text-white">
                  Download
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
