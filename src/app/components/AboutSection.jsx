"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from "../lib/i18n/client";
import { usePathname } from "next/navigation";

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
        <li>Backend System Development</li>
        <li>Web Development</li>
        <li>Mobile Apps Development</li>
        <li>AI Engineering</li>
        <li>LangChain</li>
        <li>DevOPS</li>
        <li>DB/SQL</li>
        <li>NoSQL</li>
        <li>Kubernetes</li>
        <li>Docker</li>
        <li>Serverless</li>
        <li>Cloud Services(Azure/AWS/Aliyun)</li>
      </ul>
    ),
  },
  {
    title: "Stacks",
    id: "stacks",
    content: (
      <ul className="list-disc pl-2">
        <li>Django</li>
        <li>FastAPI</li>
        <li>Spring</li>
        <li>Spring Cloud</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
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
        <li>Marketing</li>
        <li>Marketing</li>
        <li>Growth</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const locale = usePathname()?.split("/")[1];
  const { t } = useTranslation(locale);
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
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("about.title")}
          </h2>
          <div className="text-base lg:text-lg">
            {t("about.text1")}
            <br />
            <div className="text-green-500">{t("about.text2")}</div>
            <br />
            {t("about.text3")}
            <br />
            {t("about.text4")}
            <br />
            {t("about.text5")}
            <br />
            <br />
            <b>{t("about.core")}</b>
          </div>
          <ul className="list-disc pl-2">
            <li>{t("about.core1")}</li>
            <li>{t("about.core2")}</li>
            <li>{t("about.core3")}</li>
            <li>{t("about.core4")}</li>
          </ul>
          <div className="flex flex-row justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("stacks")}
              active={tab === "stacks"}
            >
              {" "}
              Stacks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
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
