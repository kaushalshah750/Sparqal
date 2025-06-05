import React, { useState, useEffect } from "react";
import {
  Users,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  Eye,
  Edit3,
  Trash2,
  Filter,
  Search,
  Plus,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Star,
  MessageSquare,
} from "lucide-react";
import { fetchContactLeads } from "../../services/contact.service";

const LeadsComponent = () => {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      // Replace with your actual API call
      const response = await fetchContactLeads();
      console.log(response);
      // Transform your data to include default CRM fields if they don't exist
      const transformedLeads = response.map((lead) => ({
        ...lead,
        phone: lead.phone || "", // Add if missing
        company: lead.company || "", // Add if missing
        status: lead.status || "new", // Default to 'new' if missing
        priority: lead.priority || "medium", // Default priority
        source: lead.source || "Contact Form", // Default source
        lastContact: lead.lastContact || null,
        notes: lead.notes || lead.project_detail || "", // Use project_detail as initial notes
        assignedTo: lead.assignedTo || "",
      }));

      setLeads(transformedLeads);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  const [filteredLeads, setFilteredLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("view"); // view, edit, add

  const statusOptions = [
    { value: "new", label: "New", color: "bg-primary", icon: Plus },
    {
      value: "contacted",
      label: "Contacted",
      color: "bg-blue-500",
      icon: Phone,
    },
    {
      value: "qualified",
      label: "Qualified",
      color: "bg-green-500",
      icon: CheckCircle,
    },
    {
      value: "proposal",
      label: "Proposal Sent",
      color: "bg-yellow-500",
      icon: Mail,
    },
    {
      value: "negotiation",
      label: "In Negotiation",
      color: "bg-orange-500",
      icon: MessageSquare,
    },
    { value: "won", label: "Won", color: "bg-green-600", icon: Star },
    { value: "lost", label: "Lost", color: "bg-red-500", icon: XCircle },
  ];

  const priorityOptions = [
    { value: "low", label: "Low", color: "text-gray-500" },
    { value: "medium", label: "Medium", color: "text-yellow-500" },
    { value: "high", label: "High", color: "text-red-500" },
  ];

  useEffect(() => {
    fetchLeads();
  }, []);
  useEffect(() => {
    let filtered = leads;

    if (searchTerm) {
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter);
    }

    if (priorityFilter !== "all") {
      filtered = filtered.filter((lead) => lead.priority === priorityFilter);
    }

    setFilteredLeads(filtered);
  }, [leads, searchTerm, statusFilter, priorityFilter]);

  const getStatusInfo = (status) => {
    return (
      statusOptions.find((option) => option.value === status) ||
      statusOptions[0]
    );
  };

  const getPriorityInfo = (priority) => {
    return (
      priorityOptions.find((option) => option.value === priority) ||
      priorityOptions[0]
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const updateLeadStatus = async (leadId, newStatus) => {
    try {
      // Update in your backend
      // await updateContactLead(leadId, { status: newStatus, lastContact: new Date().toISOString() });

      // Update local state
      setLeads(
        leads.map((lead) =>
          lead._id === leadId
            ? {
                ...lead,
                status: newStatus,
                lastContact: new Date().toISOString(),
              }
            : lead
        )
      );
    } catch (error) {
      console.error("Error updating lead status:", error);
    }
  };

  const getStatsData = () => {
    const total = leads.length;
    const newLeads = leads.filter((lead) => lead.status === "new").length;
    const qualified = leads.filter(
      (lead) => lead.status === "qualified"
    ).length;
    const won = leads.filter((lead) => lead.status === "won").length;

    return { total, newLeads, qualified, won };
  };

  const stats = getStatsData();

  const openModal = (type, lead = null) => {
    setModalType(type);
    setSelectedLead(lead);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLead(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-dark">Leads Management</h2>
          <p className="text-dark opacity-70 mt-1">
            Manage and track your sales leads
          </p>
        </div>
        <button
          onClick={() => openModal("add")}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Lead
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark text-sm font-medium opacity-70">
                Total Leads
              </p>
              <p className="text-3xl font-bold text-dark mt-1">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark text-sm font-medium opacity-70">
                New Leads
              </p>
              <p className="text-3xl font-bold text-dark mt-1">
                {stats.newLeads}
              </p>
            </div>
            <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark text-sm font-medium opacity-70">
                Qualified
              </p>
              <p className="text-3xl font-bold text-dark mt-1">
                {stats.qualified}
              </p>
            </div>
            <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-light hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark text-sm font-medium opacity-70">Won</p>
              <p className="text-3xl font-bold text-dark mt-1">{stats.won}</p>
            </div>
            <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-light">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-dark opacity-50" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Status</option>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Priority</option>
              {priorityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 text-dark opacity-70">
            <Filter className="w-4 h-4" />
            <span className="text-sm">{filteredLeads.length} results</span>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-light overflow-hidden">
        <div className="px-6 py-4 border-b border-light">
          <h3 className="text-lg font-semibold text-dark">Leads Overview</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-light">
              {filteredLeads.map((lead) => {
                const statusInfo = getStatusInfo(lead.status);
                const priorityInfo = getPriorityInfo(lead.priority);
                const StatusIcon = statusInfo.icon;

                return (
                  <tr
                    key={lead._id}
                    className="hover:bg-light transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {lead.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-dark">
                            {lead.name}
                          </div>
                          <div className="text-sm text-dark opacity-70">
                            {lead.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-dark">{lead.company}</div>
                      <div className="text-sm text-dark opacity-70">
                        {lead.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateLeadStatus(lead._id, e.target.value)
                          }
                          className="appearance-none bg-primary text-white text-sm rounded-full px-3 py-1 pr-8 font-medium border-0 focus:ring-2 focus:ring-dark focus:outline-none cursor-pointer"
                        >
                          {statusOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-white text-dark"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityInfo.color}`}
                      >
                        {priorityInfo.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dark">
                      {lead.source}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dark opacity-70">
                      {formatDate(lead.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => openModal("view", lead)}
                          className="text-primary hover:text-dark transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openModal("edit", lead)}
                          className="text-primary hover:text-dark transition-colors"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for viewing/editing leads */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-dark">
                {modalType === "add"
                  ? "Add New Lead"
                  : modalType === "edit"
                  ? "Edit Lead"
                  : "Lead Details"}
              </h3>
              <button
                onClick={closeModal}
                className="text-dark opacity-70 hover:opacity-100 transition-opacity"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            {selectedLead && modalType === "view" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-dark opacity-70">
                      Name
                    </label>
                    <p className="text-dark font-semibold">
                      {selectedLead.name}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark opacity-70">
                      Email
                    </label>
                    <p className="text-dark">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark opacity-70">
                      Phone
                    </label>
                    <p className="text-dark">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark opacity-70">
                      Company
                    </label>
                    <p className="text-dark">{selectedLead.company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark opacity-70">
                      Status
                    </label>
                    <p className="text-dark">
                      {getStatusInfo(selectedLead.status).label}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark opacity-70">
                      Priority
                    </label>
                    <p className="text-dark">
                      {getPriorityInfo(selectedLead.priority).label}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-dark opacity-70">
                    Notes
                  </label>
                  <p className="text-dark bg-light p-3 rounded-lg mt-1">
                    {selectedLead.notes}
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-dark border border-light rounded-lg hover:bg-light transition-colors"
              >
                Close
              </button>
              {modalType !== "view" && (
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
                  {modalType === "add" ? "Add Lead" : "Save Changes"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsComponent;
