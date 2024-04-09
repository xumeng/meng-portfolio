"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Programing Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Objective-C</li>
        <li>Go</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Django</li>
        <li>FastAPI</li>
        <li>Spring</li>
        <li>Spring Cloud</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>DB/SQL</li>
        <li>NoSQL</li>
        <li>Kubernetes</li>
        <li>Docker</li>
        <li>Serverless</li>
        <li>Cloud Services(Azure/AWS/Aliyun)</li>
        <li>LangChain</li>
        <li>AI Engineering</li>
        <li>Backend System Development</li>
        <li>Web Development</li>
        <li>Mobile Apps Development</li>
      </ul>
    ),
  },
  {
    title: "Architecture",
    id: "architecture",
    content: (
      <ul className="list-disc pl-2">
        <li>Microservices</li>
        <li>System Design</li>
        <li>Refactoring</li>
        <li>Data Migration</li>
        <li>Distributed Systems</li>
        <li>Concurrent Programming</li>
        <li>Performance Optimization</li>
        <li>Cache</li>
        <li>Message Queue</li>
        <li>Cloud Native</li>
      </ul>
    ),
  },
  {
    title: "Others",
    id: "others",
    content: (
      <ul className="list-disc pl-2">
        <li>SDLC</li>
        <li>Agile</li>
        <li>Scrum</li>
        <li>OKR</li>
        <li>Documentation</li>
        <li>Starups</li>
        <li>Leadership</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a senior full-stack engineer with a passion for creating interesting products. 
            <br/>
            A creative, curious, and innovative teammate, excited to push boundaries, embrace challenges, and think outside the box.
            <br/>
            <br/>
            I have comprehensive experience with Java, Python, JavaScript, iOS, and with a background in AI, FinTech and Internet business, I am good at building products (0 - N) from scratch and leveraging technology to drive business value.
            <br/>
            In addition to focusing on technology, I bring a wealth of ideas to product development and operational growth.
            <br/>
            <br/>
            <b>My Core strengths:</b>
          </p>
          <ul className="list-disc pl-2">
              <li>Comprehensive technical skills</li>
              <li>Strong business capabilities</li>
              <li>Innovative thinking</li>
              <li>Problem- solving abilities</li>
              </ul>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Programing Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("architecture")}
              active={tab === "architecture"}
            >
              {" "}
              Architecture{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("others")}
              active={tab === "others"}
            >
              {" "}
              Others{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
