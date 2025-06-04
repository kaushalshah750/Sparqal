import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Users, 
  Settings, 
  Globe, 
  Bell, 
  Search, 
  ChevronDown,
  LogOut,
  User,
  BarChart3,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBlack from '../assets/sparqal-logo-black.png';

// Mock Components for Routes
const LeadsComponent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-dark">Leads Management</h2>
      <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
        Add New Lead
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">Total Leads</p>
            <p className="text-3xl font-bold text-dark mt-1">248</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">New This Month</p>
            <p className="text-3xl font-bold text-dark mt-1">42</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">Converted</p>
            <p className="text-3xl font-bold text-dark mt-1">86</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-dark text-sm font-medium opacity-70">Pending</p>
            <p className="text-3xl font-bold text-dark mt-1">14</p>
          </div>
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-light">
      <div className="px-6 py-4 border-b border-light">
        <h3 className="text-lg font-semibold text-dark">Recent Leads</h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-light rounded-lg hover:opacity-80 transition-all">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  J{item}
                </div>
                <div>
                  <p className="font-semibold text-dark">John Doe {item}</p>
                  <p className="text-sm text-dark opacity-70">john{item}@example.com</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">Web Development</p>
                <p className="text-xs text-dark opacity-50">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ServicesComponent = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-dark">Services Management</h2>
      <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
        Add New Service
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark">Web Development</h3>
            <p className="text-sm text-primary">Active Service</p>
          </div>
        </div>
        <p className="text-dark opacity-70 text-sm mb-4">Custom websites built with modern technologies</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">$2,500 - $5,000</span>
          <button className="text-primary hover:opacity-80 text-sm font-medium">Edit</button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Settings className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark">SEO Optimization</h3>
            <p className="text-sm text-primary">Active Service</p>
          </div>
        </div>
        <p className="text-dark opacity-70 text-sm mb-4">Search engine optimization for better visibility</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">$500 - $1,500</span>
          <button className="text-primary hover:opacity-80 text-sm font-medium">Edit</button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark">Maintenance</h3>
            <p className="text-sm text-primary">Active Service</p>
          </div>
        </div>
        <p className="text-dark opacity-70 text-sm mb-4">Ongoing website maintenance and support</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">$200 - $800/mo</span>
          <button className="text-primary hover:opacity-80 text-sm font-medium">Edit</button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-light">
      <div className="px-6 py-4 border-b border-light">
        <h3 className="text-lg font-semibold text-dark">Service Analytics</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-medium text-dark">Popular Services</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-dark opacity-70">Web Development</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-light rounded-full">
                    <div className="w-20 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm text-dark opacity-50 w-8">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-dark opacity-70">SEO Services</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-light rounded-full">
                    <div className="w-16 h-2 bg-primary opacity-75 rounded-full"></div>
                  </div>
                  <span className="text-sm text-dark opacity-50 w-8">65%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-dark opacity-70">Maintenance</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-light rounded-full">
                    <div className="w-12 h-2 bg-primary opacity-50 rounded-full"></div>
                  </div>
                  <span className="text-sm text-dark opacity-50 w-8">45%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-dark">Revenue by Service</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-light rounded-lg">
                <span className="text-dark opacity-70">Web Development</span>
                <span className="font-semibold text-dark">$45,200</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-light rounded-lg">
                <span className="text-dark opacity-70">SEO Services</span>
                <span className="font-semibold text-dark">$18,500</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-light rounded-lg">
                <span className="text-dark opacity-70">Maintenance</span>
                <span className="font-semibold text-dark">$12,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SparqalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/dashboard/leads');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const sidebarItems = [
    {
      name: 'Leads',
      icon: <Users className="w-5 h-5" />,
      route: '/dashboard/leads',
      active: activeRoute === '/dashboard/leads'
    },
    {
      name: 'Services',
      icon: <Settings className="w-5 h-5" />,
      route: '/dashboard/services',
      active: activeRoute === '/dashboard/services'
    }
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProfileDropdown = () => setProfileDropdownOpen(!profileDropdownOpen);

  const handleRouteChange = (route) => {
    setActiveRoute(route);
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeRoute) {
      case '/dashboard/leads':
        return <LeadsComponent />;
      case '/dashboard/services':
        return <ServicesComponent />;
      default:
        return <LeadsComponent />;
    }
  };

  return (
    <div className="h-screen bg-light flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:flex lg:flex-col`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light">
        <Link to={"/"} >
              <div className="flex items-center space-x-2">
                  <img src={logoBlack} alt="" className='w-40'/>
              </div>
            </Link>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-dark opacity-50 hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 flex-1">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleRouteChange(item.route)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  item.active
                    ? 'bg-primary text-white shadow-md'
                    : 'text-dark opacity-70 hover:bg-light hover:text-primary'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="mt-auto p-4 border-t border-light bg-white">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-light">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-dark text-sm truncate">Admin User</p>
              <p className="text-xs text-dark opacity-70 truncate">admin@sparqal.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-dark bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-light px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-dark opacity-50 hover:text-primary transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-dark">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark opacity-40" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 border border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-sm"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-dark opacity-50 hover:text-primary transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 text-dark hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    A
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-light z-50">
                    <div className="py-2">
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-dark hover:bg-light transition-colors text-sm">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-dark hover:bg-light transition-colors text-sm">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <hr className="my-2 border-light" />
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-primary hover:bg-light transition-colors text-sm">
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SparqalDashboard;