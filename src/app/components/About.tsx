"use client";
import React  from "react";
import { motion } from "framer-motion";
// import WAVES from "vanta/dist/vanta.waves.min";
// import * as THREE from "three";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const timelineItems = [
  { year: "2023年", title: "沖縄高専入学", description: "" },
  { year: "2024年8月", title: "UnityとAIによるサービス開発", description: "SISテクノサービスとの産学連携" },
  { year: "2024年9月", title: "Simpleformハッカソン", description: "人生初ハッカソンに参加" },
  { year: "2025年3月", title: "高専WiCON本選", description: "先輩に連れて行かせてもらいました" },
  { year: "2025年3月", title: "基本情報技術者試験", description: "資格取得" },
  { year: "2025年5月", title: "DCON2024", description: "ポスター発表" },
  { year: "2025年5月", title: "WTP2025", description: "登壇発表・パネルディスカッション予定" },
  { year: "~現在", title: "沖縄高専在学中", description: "" },
];

const About = () => {
  // const vantaRef = useRef(null);
  // const [vantaEffect, setVantaEffect] = useState<any>(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       WAVES({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x1e90ff,
  //         shininess: 80.0,
  //         waveSpeed: 0.3,
  //         zoom: 0.9,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section  id="about" className="py-24 px-4 text-white relative overflow-hidden"> 
        {/* ref={vantaRef*/}
        <div className="max-w-6xl mx-auto space-y-20">
          {/* タイトル */}
          {/* <motion.h2
            className="text-5xl font-bold text-center border-b-4 border-blue-500 pb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2> */}

          {/* 名前と所属 */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="rounded-full w-40 h-40 bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
                <Image
                  src="/images/icon1.jpg"
                  alt="アイコン"
                  className="rounded-full object-cover w-full h-full border-4 border-white shadow-inner"
                   width={100}
                   height={100}
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse drop-shadow-lg">
                宮川琉誠
              </p>
              <p className="text-xl text-gray-300 mt-2 flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 7.25 7 13 7 13s7-5.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                沖縄高等専門学校 情報通信システム工学科
              </p>
              <p className="text-l text-gray-200 mt-2 flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V9H3v8a2 2 0 002 2z" />
                </svg>
                2007年 9月28日生まれ
              </p>
            </div>
          </motion.div>

          {/* 動的な一文 */}
          <motion.div
            className="text-center text-xl text-blue-200 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "AI×ハードウェア開発の研究をしています。",
                  "webはフロントエンド中心にやっています。",
                  "インターンしたい。",
                  "卒業後は編入を考えてます。",
                  "SNS繋がりましょう。",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          {/* 自己紹介 */}
          <motion.div
            className="text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-400/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-200 leading-relaxed text-xl">
              AI×Web×ハードウェアを学んでいる高専3年生です。現在は、ドローンによる災害支援技術の研究に関心があり、ハードウェア設計も学んでいます。
              最先端の研究・サービス開発に関わりたいため、高専卒業後は大学編入を考えています。
            </p>
          </motion.div>

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
                  <div className="bg-gray-900/70 p-6 rounded-2xl shadow-xl border-l-4 border-gradient-to-r from-blue-400 to-purple-400 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
