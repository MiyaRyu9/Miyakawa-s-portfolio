"use client";
const About = () => {
   return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold border-b-2 border-blue-400 pb-2">About Me</h2>

        {/* 名前・所属 */}
        <div>
          <p className="text-xl font-semibold">宮川琉誠</p>
          <p className="text-gray-300">沖縄高等専門学校 情報通信システム工学科</p>
        </div>

        {/* 自己紹介 */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            機械学習・Unity・Web開発に取り組む学生です。現在はNext.jsを用いたポートフォリオ作成や、ドローンによる災害支援技術の研究に関心があります。最先端の研究開発に関わることを目指しています。
          </p>
        </div>

        {/* 経歴 */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">経歴</h3>
          <ul className="space-y-2 border-l-4 border-blue-400 pl-4">
            <li>
              <span className="font-bold">2023年</span> - 沖縄高専入学
            </li>
            <li>
              <span className="font-bold">~現在</span> - 沖縄高専在学中
            </li>
    
          </ul>
        </div>

        {/* 実績 */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">実績</h3>
          <ul className="space-y-2 border-l-4 border-blue-400 pl-4">
            <li>
              <span className="font-bold">2024年 9月</span> - SISテクノサービスと産学連携でUnityとAI使ったサービス開発
            </li>
            <li>
              <span className="font-bold">2025年 3月</span> - 高専WiCON本選に出場
            </li>
            <li>
              <span className="font-bold">2025年 3月</span> - 基本情報技術者試験取得
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;