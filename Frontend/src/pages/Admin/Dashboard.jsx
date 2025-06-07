import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User,
  Proportions,
} from "lucide-react";
import logoBlack from "../../assets/sparqal-logo-black.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { currentUser } from "../../services/user.service";

const SparqalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const sidebarItems = [
    {
      name: "Leads",
      icon: <Users className="w-5 h-5" />,
      route: "/dashboard/leads",
    },
    {
      name: "Portfolio",
      icon: <Proportions className="w-5 h-5" />,
      route: "/dashboard/portfolio",
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProfileDropdown = () =>
    setProfileDropdownOpen(!profileDropdownOpen);

  const location = useLocation();
  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    navigate(route);
    setSidebarOpen(false);
  };

  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };

  const isActive = (route) => location.pathname === route;

  useEffect(() => {
    currentUser().then((res) => {
      setUserDetail(res);
    });
  }, []);

  return (
    <div className="h-screen bg-light flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light">
          <Link to={"/"}>
            <div className="flex items-center space-x-2">
              <img src={logoBlack} alt="" className="w-40" />
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
                  isActive(item.route)
                    ? "bg-primary text-white shadow-md"
                    : "text-dark opacity-70 hover:bg-light hover:text-primary"
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
              <p className="font-semibold text-dark text-sm truncate">
                {userDetail.name}
              </p>
              <p className="text-xs text-dark opacity-70 truncate">
                {userDetail.email}
              </p>
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
                      <button
                        className="w-full flex items-center space-x-3 px-4 py-2 text-primary hover:bg-light transition-colors text-sm"
                        onClick={() => logOut()}
                      >
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SparqalDashboard;
