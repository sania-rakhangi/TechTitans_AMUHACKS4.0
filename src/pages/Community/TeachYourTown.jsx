import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Video, Mic, File, BookOpen, Book, GraduationCap } from "lucide-react";

const TeachYourTown = () => {
  const navigate = useNavigate();
  const [uploadType, setUploadType] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetAudience: "",
    file: null
  });
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
    if (errors.file) {
      setErrors({
        ...errors,
        file: ""
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.targetAudience.trim()) newErrors.targetAudience = "Target audience is required";
    if (!formData.file) newErrors.file = "File is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      // Toast functionality would go here
      alert(`Your ${uploadType} has been shared successfully!`);
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        targetAudience: "",
        file: null
      });
      setUploadType(null);
    }, 1500);
  };

  const resetForm = () => {
    setUploadType(null);
    setFormData({
      title: "",
      description: "",
      targetAudience: "",
      file: null
    });
    setErrors({});
  };

  return (
    <div className="animate-fade-in p-4">
      <div className="flex items-center mb-6">
        <button 
          className="flex items-center px-3 py-2 text-sm bg-transparent hover:bg-gray-100 rounded-md mr-2"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Home
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-indigo-900 mb-2 flex items-center">
          <GraduationCap className="mr-2 h-6 w-6 text-orange-500" />
          Share Your Knowledge
        </h1>
        <p className="text-indigo-700">
          Help others learn by sharing your expertise and teaching materials with the community.
        </p>
      </div>

      {!uploadType ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            className="bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer border p-4"
            onClick={() => setUploadType("video")}
          >
            <div className="flex justify-center pb-2">
              <Video className="h-12 w-12 text-blue-500" />
            </div>
            <h3 className="font-bold text-lg text-center mt-4">Video Tutorial</h3>
            <p className="text-center text-gray-500 mt-2">
              Share video lessons to explain concepts visually
            </p>
          </div>

          <div 
            className="bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer border p-4"
            onClick={() => setUploadType("audio")}
          >
            <div className="flex justify-center pb-2">
              <Mic className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="font-bold text-lg text-center mt-4">Audio Lecture</h3>
            <p className="text-center text-gray-500 mt-2">
              Record audio lessons and explanations
            </p>
          </div>

          <div 
            className="bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer border p-4"
            onClick={() => setUploadType("document")}
          >
            <div className="flex justify-center pb-2">
              <Book className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="font-bold text-lg text-center mt-4">Study Materials</h3>
            <p className="text-center text-gray-500 mt-2">
              Share guides, worksheets, and learning resources
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-md border p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold">
              {uploadType === "video" ? "Share Video Tutorial" : 
               uploadType === "audio" ? "Share Audio Lecture" : 
               "Share Study Materials"}
            </h2>
            <p className="text-gray-600">
              Help others learn by sharing your {uploadType === "video" ? "tutorial" : uploadType === "audio" ? "lecture" : "materials"}
            </p>
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="title">
                Title
              </label>
              <input 
                type="text"
                id="title"
                name="title"
                className={`w-full p-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Name your teaching material" 
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="description">
                Description
              </label>
              <textarea 
                id="description"
                name="description"
                className={`w-full p-2 border rounded-md min-h-[100px] ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Explain what you're teaching and why it's valuable" 
                value={formData.description}
                onChange={handleInputChange}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="targetAudience">
                Target Audience
              </label>
              <input 
                type="text"
                id="targetAudience"
                name="targetAudience"
                className={`w-full p-2 border rounded-md ${errors.targetAudience ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Who will benefit from this material? (e.g., beginners, advanced learners)" 
                value={formData.targetAudience}
                onChange={handleInputChange}
              />
              {errors.targetAudience && <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="file">
                Upload {uploadType === "video" ? "Video" : uploadType === "audio" ? "Audio" : "Document"}
              </label>
              <input 
                type="file" 
                id="file"
                className={`w-full p-2 border rounded-md ${errors.file ? 'border-red-500' : 'border-gray-300'}`}
                accept={
                  uploadType === "video" ? "video/*" : 
                  uploadType === "audio" ? "audio/*" : 
                  ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                } 
                onChange={handleFileChange}
              />
              {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
            </div>

            <div className="flex justify-between mt-6">
              <button 
                type="button" 
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={resetForm}
                disabled={isUploading}
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-orange-500 hover:bg-amber-700 text-white rounded-md"
                disabled={isUploading}
              >
                {isUploading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sharing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Share {uploadType === "video" ? "Video" : uploadType === "audio" ? "Audio" : "Document"}
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeachYourTown;