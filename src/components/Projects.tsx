import { useState } from 'react';
import { Play, X } from 'lucide-react';
import edgeDetectionImg from '../assets/edge-detection.svg';
import humanPoseImg from '../assets/human-pose.svg';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  videoUrl: string;
  demoType: 'youtube' | 'vimeo' | 'cloudinary';
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Vehicle Detection & ROI Timer Analysis',
      description: 'End-to-end vehicle detection and tracking system with ROI-based wait-time measurement. Built using YOLOv11n and BoT-SORT tracker, the system records how long each vehicle stays inside a defined polygonal ROI and outputs annotated video with analytics.',
      tags: ['YOLO11', 'BoT-SORT', 'OpenCV', 'Python', 'Docker'],
      thumbnail: 'https://images.pexels.com/photos/34350298/pexels-photo-34350298.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/lw7VPc6RysA',
      demoType: 'youtube',
    },
    {
      id: 2,
      title: 'Human Pose Estimation Keypoints & Detection',
      description: 'Real-time human pose estimation and keypoint detection using deep learning Human Pose models.',
      tags: ['Human Pose Estimation', 'Keypoints', 'Python', 'OpenCV'],
      thumbnail: humanPoseImg,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      demoType: 'youtube',
    },
    {
      id: 3,
      title: 'Real-Time Person Detection & Tracking',
      description: 'High-performance person detection and tracking system using YOLOv8 with DeepSORT, achieving 60+ FPS on edge devices.',
      tags: ['YOLOv8', 'OpenCV', 'Deep Learning'],
      thumbnail: edgeDetectionImg,
      videoUrl: 'https://youtu.be/lw7VPc6RysA?si=67yqxIOEc4kHM5tH',
      demoType: 'youtube',
    },
    {
      id: 4,
      title: 'Jetson-Powered Vision System',
      description: 'Optimized computer vision pipeline for NVIDIA Jetson with TensorRT acceleration, enabling real-time inference for industrial applications.',
      tags: ['Jetson', 'TensorRT', 'OpenCV'],
      thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      demoType: 'youtube',
    },
    {
      id: 5,
      title: 'AI-Powered Gesture Recognition',
      description: 'Deep learning model for real-time hand gesture recognition using CNNs, deployed on edge devices for human-robot interaction.',
      tags: ['Deep Learning', 'Python', 'OpenCV'],
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      demoType: 'youtube',
    },
    {
      id: 6,
      title: 'Agricultural Drone Monitoring',
      description: 'Precision agriculture solution using computer vision and multispectral imaging for crop health monitoring and yield prediction.',
      tags: ['Drone', 'YOLOv8', 'ArduPilot'],
      thumbnail: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      demoType: 'youtube',
    },
  ];

  const openVideoModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeVideoModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my latest work in AI, computer vision, and autonomous systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <button
                  onClick={() => openVideoModal(project)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-cyan-400 ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openVideoModal(project)}
                  className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/20 transition-all duration-300"
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
            >
              <X size={24} />
            </button>

            <div className="aspect-video">
              <iframe
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
