
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Rocket, MessageSquare, Users, Award } from 'lucide-react';
import Button from '@/components/Button';

// Type for user data
interface UserData {
  name: string;
  email: string;
  role: 'visitor' | 'seeker' | 'builder' | 'ambassador' | 'elder';
  isAuthenticated: boolean;
}

const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  // Get user data from localStorage
  useEffect(() => {
    const authData = localStorage.getItem('auth');
    
    if (authData) {
      const parsedData = JSON.parse(authData) as UserData;
      if (parsedData.isAuthenticated) {
        setUser(parsedData);
      } else {
        navigate('/auth');
      }
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-cosmic-dark">Loading your sacred journey...</div>
      </div>
    );
  }

  // Role-based content access
  const userAccess = {
    seeker: {
      title: "Seeker's Journey",
      description: "You have begun the path of awakening. Explore the foundations of PAX NOVA and prepare for deeper knowledge.",
      sections: [
        { name: "Manifesto Portal", icon: Book, description: "Study the Unified Humanity Manifesto" },
        { name: "Basic Courses", icon: Award, description: "Introduction to ethical civilization building" },
        { name: "Community Map", icon: Users, description: "See where other seekers are located globally" },
      ]
    },
    builder: {
      title: "Builder's Sanctuary",
      description: "As a Builder, you have access to deeper teachings and tools to manifest change in your community.",
      sections: [
        { name: "Advanced Academy", icon: Book, description: "Deep courses on governance, technology, and leadership" },
        { name: "Action Hubs", icon: Rocket, description: "Join projects making real-world impact" },
        { name: "Unity Forums", icon: MessageSquare, description: "Connect with other builders worldwide" },
        { name: "Global Map", icon: Users, description: "Connect with PAX NOVA members worldwide" },
      ]
    },
    ambassador: {
      title: "Ambassador's Command Center",
      description: "As an Ambassador, you lead initiatives and represent PAX NOVA in your region.",
      sections: [
        { name: "All Builder Access", icon: Book, description: "Everything available to Builders" },
        { name: "Project Creation", icon: Rocket, description: "Launch your own initiatives with PAX NOVA support" },
        { name: "Event Organization", icon: Users, description: "Tools to organize gatherings and summits" },
      ]
    },
    elder: {
      title: "Elder's Council Chamber",
      description: "As an Elder, you help guide the evolution of PAX NOVA and Earth's transition.",
      sections: [
        { name: "All Ambassador Access", icon: Book, description: "Everything available to Ambassadors" },
        { name: "Governance Council", icon: Users, description: "Shape the policies and direction of PAX NOVA" },
        { name: "Legacy Vault", icon: Award, description: "Record and preserve wisdom for future generations" },
      ]
    }
  };

  // Default to seeker access if role not found
  const accessLevel = user.role === 'builder' ? userAccess.builder : 
                      user.role === 'ambassador' ? userAccess.ambassador : 
                      user.role === 'elder' ? userAccess.elder : 
                      userAccess.seeker;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-gradient-to-r from-[#190061] to-[#240090] text-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-2xl font-bold">PAX NOVA</h1>
              <p className="text-blue-200">{accessLevel.title}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="mr-4 text-right">
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-blue-200 capitalize">{user.role}</p>
              </div>
              <Button variant="secondary" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold cosmic-text mb-4">Welcome, {user.name}</h2>
          <p className="text-gray-600 max-w-3xl">{accessLevel.description}</p>
        </section>

        {/* Access Sections */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Your Sacred Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessLevel.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <section.icon className="text-cosmic-dark" size={20} />
                  </div>
                  <h4 className="font-medium">{section.name}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <Button variant="outline" className="mt-auto">
                  Access
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Upgrade */}
        {user.role === 'seeker' && (
          <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cosmic">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold text-lg">Elevate Your Journey</h3>
                <p className="text-gray-600">Become a Builder to access deeper teachings and tools.</p>
              </div>
              <Button>
                Upgrade Membership
              </Button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
