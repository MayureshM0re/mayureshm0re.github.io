import { Download, Code2, Cloud, Eye, Cpu, Wrench } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Programming & Backend',
      icon: Code2,
      color: 'from-green-400 to-emerald-500',
      skills: ['Python', 'FastAPI', 'PostgreSQL'],
    },
    {
      title: 'Computer Vision',
      icon: Eye,
      color: 'from-cyan-400 to-blue-500',
      skills: ['OpenCV', 'NVIDIA DeepStream', 'YOLOv8/YOLO11', 'Object Detection/Tracking', 'Model Training & Quantization', 'Image Super-Resolution'],
    },
    {
      title: 'Cloud & MLOps',
      icon: Cloud,
      color: 'from-purple-400 to-pink-500',
      skills: ['AWS (S3, SQS, Lambda, Batch, ECR)', 'Docker', 'Git'],
    },
    {
      title: 'Robotics & UAVs',
      icon: Cpu,
      color: 'from-orange-400 to-red-500',
      skills: ['ROS 2', 'Gazebo', 'ArduPilot SITL', 'Nav2', 'Cartographer SLAM', 'Isaac Sim', 'Mujoco', 'MAVLink'],
    },
    {
      title: 'ML Frameworks & AI',
      icon: Code2,
      color: 'from-cyan-400 to-green-500',
      skills: ['PyTorch', 'Reinforcement & Imitation Learning', 'VLA Models', 'Hugging Face'],
    },
    {
      title: 'Tools & Hardware',
      icon: Wrench,
      color: 'from-blue-400 to-cyan-500',
      skills: ['VS Code', 'Rviz 2', 'RunPod', 'Raspberry Pi 5', 'Coral USB'],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="relative group sticky top-24">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-green-400 bg-clip-text text-transparent">
                    MM
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mayuresh More</h3>
                <p className="text-cyan-400 text-lg mb-4">
                  AI Engineer specializing in Computer Vision and Robotics
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Passionate about building cutting-edge AI systems that bridge the gap between
                  perception and action. Specialized in computer vision, autonomous systems, and
                  deep learning applications for real-world robotics challenges.
                </p>
                {/* Prefer serving resume.pdf from the repo root (GitHub Pages will serve it).
                    If you prefer an external public link (Google Drive), set externalResumeUrl below. */}
                {/** Replace externalResumeUrl with your public drive link if you prefer that over /resume.pdf */}
                {
                  (() => {
                    const externalResumeUrl = '';
                    if (externalResumeUrl) {
                      return (
                        <a
                          href={externalResumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-2 border-cyan-500/50 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
                        >
                          <Download size={20} className="group-hover:animate-bounce" />
                          <span>Download Resume</span>
                        </a>
                      );
                    }

                    // default: link to /resume.pdf in repo root; add `download` to suggest download
                    return (
                      <a
                        href="/Mayuresh More Resume.pdf"
                        download
                        className="group w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-2 border-cyan-500/50 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
                      >
                        <Download size={20} className="group-hover:animate-bounce" />
                        <span>Download Resume</span>
                      </a>
                    );
                  })()
                }
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>

            <div className="grid gap-6">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h4 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm font-medium bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 hover:bg-gray-700/70 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
