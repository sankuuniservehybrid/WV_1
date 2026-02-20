import { NavLink } from "../Nav/NavLink";
import { Home, Stethoscope, Info, MapPin, Mail, User, Settings, LayoutDashboard, Briefcase } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/UI/popover";
import { useState } from "react";

export const Navigation = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MedTourism</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Popover open={isHomeHovered} onOpenChange={setIsHomeHovered}>
              <PopoverTrigger asChild>
                <div
                  onMouseEnter={() => setIsHomeHovered(true)}
                  onMouseLeave={() => setIsHomeHovered(false)}
                >
                  <NavLink
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    activeClassName="text-foreground bg-accent"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </NavLink>
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-48 p-2 bg-popover border border-border"
                align="start"
                sideOffset={5}
                onMouseEnter={() => setIsHomeHovered(true)}
                onMouseLeave={() => setIsHomeHovered(false)}
              >
                <div className="flex flex-col gap-1">
                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-popover-foreground hover:bg-accent transition-colors"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-popover-foreground hover:bg-accent transition-colors"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </NavLink>
                  <NavLink
                    to="/settings"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-popover-foreground hover:bg-accent transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </NavLink>
                </div>
              </PopoverContent>
            </Popover>
            <NavLink
              to="/services"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeClassName="text-foreground bg-accent"
            >
              <Stethoscope className="h-4 w-4" />
              Services
            </NavLink>
            <NavLink
              to="/how-it-works"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeClassName="text-foreground bg-accent"
            >
              <Info className="h-4 w-4" />
              How It Works
            </NavLink>
            <NavLink
              to="/destinations"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeClassName="text-foreground bg-accent"
            >
              <MapPin className="h-4 w-4" />
              Destinations
            </NavLink>
            <NavLink
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeClassName="text-foreground bg-accent"
            >
              <Mail className="h-4 w-4" />
              Contact
            </NavLink>
            <NavLink
              to="/career"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeClassName="text-foreground bg-accent"
            >
              <Briefcase className="h-4 w-4" />
              Career
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
