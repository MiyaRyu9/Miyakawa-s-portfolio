// components/Projects.tsx
'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "オンライン内見アプリ",
    description: "UnityとFirebaseを用いたWebGLベースのバーチャル内見アプリ。",
    image: "/images/homenavi.png",
    tech: ["Unity", "Firebase", "VoiceVox", "WebGL"],
    link: "https://example.com/demo",
    github: "https://github.com/MiyaRyu9/OnlinePreviewApp_Scripts",
  },
  {
    title: "Next.jsポートフォリオサイト",
    description: "自分の実績を紹介するためのダーク系デザインのポートフォリオ。",
    image: "/images/portfolio.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/MiyaRyu9/Miyakawa-s-portfolio",
  },
  // 他にも追加OK
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 pb-4 mb-10">
          Projects
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {projects.map((proj) => (
            <SwiperSlide key={proj.title}>
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{proj.title}</h3>
                  <p className="text-sm text-gray-300">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-blue-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        className="text-blue-400 underline text-sm"
                      >
                        デモ
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        className="text-blue-400 underline text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
