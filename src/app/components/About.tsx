"use client";
import React from "react";
import { motion } from "framer-motion";

const timelineItems = [
  { year: "2023年", title: "沖縄高専入学", description: "" },
  { year: "2024年8月", title: "UnityとAIによるサービス開発", description: "SISテクノサービスとの産学連携" },
  { year: "2024年9月", title: "Simpleformハッカソン", description: "人生初ハッカソンに参加" },
  { year: "2025年3月", title: "高専WiCON本選", description: "本選に出場" },
  { year: "2025年3月", title: "基本情報技術者試験", description: "資格取得" },
  { year: "2025年5月", title: "DCON2024", description: "ポスター発表" },
  { year: "2025年5月", title: "WTP2025", description: "登壇発表" },
  { year: "~現在", title: "沖縄高専在学中", description: "" },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* タイトル */}
          <motion.h2
            className="text-5xl font-bold text-center border-b-4 border-blue-500 pb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* 名前と所属・アイコン */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="rounded-full w-40 h-40 bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
                <img
                  src="/images/icon1.jpg"
                  alt="アイコン"
                  className="rounded-full object-cover w-full h-full border-4 border-white shadow-inner"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-4xl font-extrabold tracking-wide text-blue-300 drop-shadow-lg">宮川琉誠</p>
              <p className="text-xl text-gray-300 mt-2">沖縄高等専門学校 情報通信システム工学科</p>
            </div>
          </motion.div>

          {/* 自己紹介 */}
          <motion.div
            className="text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-200 leading-relaxed text-xl">
              機械学習・Unity・Web開発に取り組む学生です。現在はNext.jsを用いたポートフォリオ作成や、
              ドローンによる災害支援技術の研究に関心があります。最先端の研究開発に関わることを目指しています。
            </p>
          </motion.div>

          {/* スクロール促し */}
          <div className="flex justify-center mt-4 animate-bounce text-blue-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* タイムライン */}
          <div className="relative mt-24">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 opacity-30"></div>
            <div className="flex flex-col space-y-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative md:w-1/2 px-6 ${index % 2 === 0 ? "self-start text-left" : "self-end text-right"}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-900/80 p-6 rounded-2xl shadow-xl border-l-4 border-blue-400">
                    <h4 className="text-xl font-bold text-blue-400">{item.year}</h4>
                    <p className="text-white text-lg font-semibold">{item.title}</p>
                    {item.description && <p className="text-gray-400 text-sm mt-1">{item.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;