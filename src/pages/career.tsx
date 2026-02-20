//import { MessageSquare , FileText , Plane , Heart , HeartHandshake , Home as HomeIcon} from 'lucide-react';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/UI/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/UI/Select";
import { Label } from "../components/UI/label";
import { Button } from "../components/UI/button";
import { Input } from "../components/UI/Input";
import { Textarea } from "../components/UI/textarea";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "../hooks/use-toast";
import { useState } from 'react';
import { Briefcase , Upload } from "lucide-react";


export default function AboutPage() {

  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (selectedFile) {
      formData.append("resume", selectedFile);
    }

    try {
      const res = await fetch("http://localhost:8000/career", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon.",
        });
        form.reset();
        setSelectedFile(null);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send email",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong!",
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


            <div className="min-h-screen bg-background">
              {/* <Navigation /> */}
      
              <main className="container mx-auto px-4 pt-24 pb-16">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Briefcase className="h-10 w-10 text-primary" />
                      <h1 className="text-4xl font-bold text-foreground">Join Our Team</h1>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Be part of our mission to provide world-class medical tourism services
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input 
                          id="fullName" 
                          name="fullName" 
                          placeholder="John Doe" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          placeholder="+1 (555) 000-0000" 
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="jobRole">Select Job Role *</Label>
                        <Select name="jobRole" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a position" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="medical-coordinator">Medical Coordinator</SelectItem>
                            <SelectItem value="patient-care-manager">Patient Care Manager</SelectItem>
                            <SelectItem value="international-relations">International Relations Officer</SelectItem>
                            <SelectItem value="healthcare-admin">Healthcare Administrator</SelectItem>
                            <SelectItem value="translator">Translator/Interpreter</SelectItem>
                            <SelectItem value="travel-coordinator">Travel Coordinator</SelectItem>
                            <SelectItem value="customer-support">Customer Support Specialist</SelectItem>
                            <SelectItem value="marketing">Marketing & Communications</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input 
                          id="experience" 
                          name="experience" 
                          type="number" 
                          placeholder="5" 
                          min="0"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter</Label>
                        <Textarea 
                          id="coverLetter" 
                          name="coverLetter" 
                          placeholder="Tell us why you'd be a great fit for this role..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume">Upload Resume *</Label>
                        <div className="flex items-center gap-4">
                          <Input
                            id="resume"
                            // name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                            className="cursor-pointer"
                          />
                          {selectedFile && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Upload className="h-4 w-4" />
                              <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>

                      <Button type="submit" className="w-full bg-teal-600 text-white" size="lg">
                        Submit Application
                      </Button>
                    </form>
                  </div>
                </div>
              </main>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


