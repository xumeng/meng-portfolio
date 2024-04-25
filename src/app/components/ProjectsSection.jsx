"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../lib/i18n/client";
import { usePathname } from "next/navigation";

const ProjectsSection = () => {
  const locale = usePathname()?.split("/")[1];
  const { t } = useTranslation(locale);

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const projectsData = [
    {
      id: 24,
      title: t("projects.poems.title"),
      subtitle: t("projects.poems.subtitle"),
      date: "2024",
      description:
        "Modify and optimize based on open source project AsPoem, and add some custom features. \nTech Stack: React, Next.js, Prisma, TRPC, Supabase, Vercel",
      image: "/images/projects/poems.png",
      tag: ["All", "Backend", "Web"],
      gitUrl: null,
      previewUrl: "https://poems.amonxu.com",
    },
    {
      id: 23,
      title: t("projects.dream.title"),
      subtitle: t("projects.dream.subtitle"),
      date: "2023",
      description:
        "Built the early vision, tech architecture, and MVP product. \nTech Stack: Python, FastAPI, LLM, ChatGPT, HuggingFace transformer, VerctorDB, Redis, MySQL, Next.js, Vercel",
      image: "/images/projects/dream.png",
      tag: ["All", "Backend", "Web"],
      gitUrl: null,
      previewUrl: "https://dreamcrafting.github.io",
    },
    {
      id: 23,
      title: t("projects.aurora.title"),
      subtitle: t("projects.aurora.subtitle"),
      date: "2023",
      description:
        "From 0 to 1, from Backend to Frontend, get everything done. Tech Stack: Python, Django, DRF, Redis, MySQL, React, Next.js, Mantine, LLM, Azure, Vercel",
      image: "/images/projects/aurora.png",
      tag: ["All", "Backend", "Web"],
      gitUrl: null,
      previewUrl: "https://aurora.amonxu.com",
    },
    {
      id: 22,
      title: t("projects.mesh.title"),
      subtitle: t("projects.mesh.subtitle"),
      date: "2022-2023",
      description:
        "Introduced new technologies and refactored existing systems, identified key system issues and bottlenecks, solved core technical challenges, drove system architecture upgrades, and enhanced system performance. Successfully supported a fourfold increase in client project volume. Improved data utilization efficiency and team productivity. bringing more innovation and competitive advantages to the company. \nTech Stack: Python, Node.js, MySQL, CouchDB, RabbitMQ, K8s etc...",
      image: "/images/projects/meshkit.png",
      tag: ["All", "Backend"],
      gitUrl: null,
      previewUrl: "/",
    },
    {
      id: 19,
      title: t("projects.aku.title"),
      subtitle: t("projects.aku.subtitle"),
      date: "2019-2021",
      description:
        "By constructed a financial middle-platform and implementing core modules(like KYC/transactions/overdue/payment), business separation, and data migration, doubled development efficiency and supported the growth and compliance requirements of the enterprise. \nTech Stack: Java, Spring Cloud, Spring Batch, MySQL, Kafka, Redis etc...",
      image: "/images/projects/akulaku.png",
      tag: ["All", "Backend"],
      gitUrl: null,
      previewUrl:
        "https://www.akulaku.com/akulaku-app?pageTitle=Akulaku%20App%20-%20Akulaku",
    },
    {
      id: 18,
      title: t("projects.wmzy.title"),
      subtitle: t("projects.wmzy.subtitle"),
      date: "2015-2019",
      description:
        "Developed and launched the iOS App from scratch, led a major refactoring of the backend system, actively participated in Full-Stack development, and contributed fantastic ideas for the product growth. Taked product growth from 0 to 10, witnessing the user base grow from thousands to tens of millions. The App consistently ranked top 3 on App Store education ranking(China, 2017-2019), establishing a leading position in the market. \nTech Stack: Java, Spring Cloud, Objective-C, Node.js, Go, Docker, MySQL, Redis, Kafka",
      image: "/images/projects/wmzy.png",
      tag: ["All", "Backend", "Mobile", "Web"],
      gitUrl: null,
      previewUrl: "https://www.wmzy.com/",
    },
    {
      id: 15,
      title: t("projects.xmshare.title"),
      subtitle: t("projects.xmshare.subtitle"),
      date: "2015",
      description:
        "Found the difficulty of integrate SNS platforms, set about solving this problem and open source it",
      image: "/images/projects/xmshare.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/xumeng/XMShareModule",
      previewUrl: "https://github.com/xumeng/XMShareModule",
    },
    {
      id: 14,
      title: t("projects.zadu.title"),
      subtitle: t("projects.zadu.subtitle"),
      date: "2014",
      description:
        "Independently built iOS technology stack from scratch to develop and launch an app, implemented functions such as LBS, chat, timeline etc. Deeply involved in product feature design, development, operation and growth etc. \n Tech Stack: Objective-C, chat/feeds framework, LBS",
      image: "/images/projects/zadu.png",
      tag: ["All", "Mobile"],
      gitUrl: null,
      previewUrl: "/",
    },
    {
      id: 13,
      title: t("projects.dongle.title"),
      subtitle: t("projects.dongle.subtitle"),
      date: "2013",
      description:
        "Developing an iOS app from scratch, systematically testing, and continuously iterating to enhance functionality. \n Tech Stack: Objective-C, ffmpeg, CocoaAsyncSocket, Gestures",
      image: "/images/projects/dongle.png",
      tag: ["All", "Mobile"],
      gitUrl: null,
      previewUrl: "https://apkcombo.com/channel-y/com.ever.dongle",
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t("projects.title")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              date={project.date}
              subtitle={project.subtitle}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
