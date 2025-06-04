import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Eye,
  Trash2,
  X,
  ExternalLink,
  Github,
} from "lucide-react";
import { addPortfolio } from "../../services/portfolio.service";
import { fetchTechnologies } from "../../services/technology.service";
import {
  fetchPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../../services/portfolio.service";

const PortfolioComponent = () => {
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [currentTag, setCurrentTag] = useState("");
  const [currentFeature, setCurrentFeature] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [availableTechnologies, setAvailableTechnologies] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
    tags: [],
    image: "",
    description: "",
    longDescription: "",
    features: [],
    results: [],
    technologies: [],
    timeline: "",
    client: "",
    liveUrl: "",
    githubUrl: "",
  });

  const categories = [
    "web-design",
    "e-commerce",
    "web-development",
    "seo-optimization",
    "mobile-app",
  ];

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      category: "",
      tags: [],
      image: "",
      description: "",
      longDescription: "",
      features: [],
      results: [],
      technologies: [],
      timeline: "",
      client: "",
      liveUrl: "",
      githubUrl: "",
    });
    setCurrentTag("");
    setCurrentFeature("");
    setCurrentResult("");
    setEditingProject(null);
  };

  const openModal = (project = null) => {
    if (project) {
      setFormData(project);
      setEditingProject(project);
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const addFeature = () => {
    if (
      currentFeature.trim() &&
      !formData.features.includes(currentFeature.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, currentFeature.trim()],
      }));
      setCurrentFeature("");
    }
  };

  const removeFeature = (featureToRemove) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature !== featureToRemove),
    }));
  };

  const addResult = () => {
    if (
      currentResult.trim() &&
      !formData.results.includes(currentResult.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        results: [...prev.results, currentResult.trim()],
      }));
      setCurrentResult("");
    }
  };

  const removeResult = (resultToRemove) => {
    setFormData((prev) => ({
      ...prev,
      results: prev.results.filter((result) => result !== resultToRemove),
    }));
  };

  const toggleTechnology = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProject) {
      updatePortfolio(formData).then((response) => {
        console.log("Project updated:", response);
        fetchPortfolioAPI();
      });
    } else {
      addPortfolio(formData).then((response) => {
        console.log("New project added:", response);
        fetchPortfolioAPI();
      });
    }

    closeModal();
  };

  const fetchTechnologiesAPI = () => {
    fetchTechnologies()
      .then((response) => {
        console.log("Fetched technologies:", response);
        setAvailableTechnologies(response); // Assuming response is an array of technology names
      })
      .catch((error) => {
        console.error("Error fetching technologies:", error);
      });
  };

  const fetchPortfolioAPI = () => {
    fetchPortfolio()
      .then((response) => {
        console.log("Fetched portfolio projects:", response);
        setPortfolioProjects(response); // Assuming response is an array of portfolio projects
      })
      .catch((error) => {
        console.error("Error fetching portfolio projects:", error);
      });
  };

  useEffect(() => {
    fetchTechnologiesAPI();
    fetchPortfolioAPI();
  }, []);

  const deleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deletePortfolio(id).then(() => {
        fetchPortfolioAPI();
      });
    }
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      "web-design": "bg-primary text-white",
      "e-commerce": "bg-light text-primary",
      "web-development": "bg-dark text-white",
      "seo-optimization": "bg-primary text-white",
    };
    return colors[category] || "bg-light text-primary";
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-dark">Portfolio Projects</h1>
          <p className="text-gray-600 mt-2">
            Manage your portfolio projects and showcase your work
          </p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-primary hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-lg"
        >
          <Plus size={20} />
          Add New Portfolio
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryBadgeColor(
                    project.category
                  )}`}
                >
                  {project.category.replace("-", " ")}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-dark mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.subtitle}</p>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-light text-primary px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-primary text-xs font-medium">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-purple-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-purple-600 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(project)}
                    className="text-primary hover:text-purple-600 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-dark">
                {editingProject
                  ? "Edit Portfolio Project"
                  : "Add New Portfolio Project"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        subtitle: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category.replace("-", " ")}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        timeline: e.target.value,
                      }))
                    }
                    placeholder="e.g., 6 weeks"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Client */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Client
                  </label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        client: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">
                  Short Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* Long Description */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">
                  Long Description
                </label>
                <textarea
                  value={formData.longDescription}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      longDescription: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Tags */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                    placeholder="Enter tag and press Enter"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-light text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-primary hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">
                  Technologies
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-4">
                  {availableTechnologies.map((tech) => (
                    <label
                      key={tech._id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.technologies.includes(tech.name)}
                        onChange={() => toggleTechnology(tech.name)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">
                  Features
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addFeature())
                    }
                    placeholder="Enter feature and press Enter"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-light p-3 rounded-lg flex justify-between items-center"
                    >
                      <span className="text-sm">{feature}</span>
                      <button
                        type="button"
                        onClick={() => removeFeature(feature)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-dark mb-2">
                  Results
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={currentResult}
                    onChange={(e) => setCurrentResult(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addResult())
                    }
                    placeholder="Enter result and press Enter"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addResult}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-light p-3 rounded-lg flex justify-between items-center"
                    >
                      <span className="text-sm">{result}</span>
                      <button
                        type="button"
                        onClick={() => removeResult(result)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* URLs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Live URL
                  </label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        liveUrl: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        githubUrl: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {editingProject ? "Update Project" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioComponent;
