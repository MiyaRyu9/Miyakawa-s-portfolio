"use client";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

type Skill = {
  name:string;
  logo:string;
  level:number;
}
type SkillCategory = {
  title: string;
  items:Skill[];
}

const skillData: SkillCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', logo: '/images/python.svg', level: 70 },
      { name: 'JavaScript', logo: '/images/javascript.svg', level: 75 },
      { name: 'C#', logo: '/images/csharp.svg', level: 50 },
      { name: 'C', logo: '/images/c.svg', level: 80 },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'YOLO', logo: '/images/yolo.svg', level: 85 },
      { name: 'React', logo: '/images/react.svg', level: 70 },
      { name: 'Next.js', logo: '/images/nextdotjs.svg', level: 70 },
      { name: 'unity', logo: '/images/unity.svg', level: 70 },
    ],
  },
];



const Skills = () => {
  return(
    <section id="skills" className="py-20 px-4 bg-black text-write">
      <div className="max-w-6xl mx-auto apace-y-12">
        <h1 className="text-3xl font-bold border-b-2 border-blue-400 pb-2">Skills</h1>

        {skillData.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition"
                >
                  <div className="w-20 h-20">
                    <CircularProgressbar
                      value={skill.level}
                      text={`${skill.level}%`}
                      styles={buildStyles({
                        pathColor: '#3b82f6',
                        trailColor: '#1f2937',
                        textColor: 'white',
                      })}
                    />
                  </div>
                  <Image src={skill.logo} alt={skill.name} width={32} height={32} />
                  <p className="text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        ))}
      </div>
    </section>
  )
}
export default Skills;