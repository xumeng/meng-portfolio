"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/icon/github.svg";
import LinkedinIcon from "../../../public/icon/linkedin.svg";
import WXIcon from "../../../public/icon/wx.svg";
import MailIcon from "../../../public/icon/email.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../lib/i18n/client";
import { usePathname } from "next/navigation";

const EmailSection = () => {
  const [visible, setVisible] = useState(false);
  const locale = usePathname()?.split("/")[1];
  const { t } = useTranslation(locale);

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          {t("contact.title")}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md"> {t("contact.subtitle")}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/xumeng" target="_blank">
            <Image width={40} height={40} src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/amonxu" target="_blank">
            <Image
              width={40}
              height={40}
              src={LinkedinIcon}
              alt="Linkedin Icon"
            />
          </Link>
          <Link href="mailto:gosuxm@gmail.com" target="_blank">
            <Image width={40} height={40} src={MailIcon} alt="Mail Icon" />
          </Link>
          <Link href="#" target="_blank">
            <div
              onMouseEnter={() => setVisible(true)}
              // onMouseLeave={() => setVisible(false)}
            >
              <Image width={40} height={40} src={WXIcon} alt="WeChat Icon" />
            </div>
            {visible && (
              <div
                style={{ position: "absolute", top: "220px", left: "200px" }}
              >
                <Image
                  width={200}
                  height={200}
                  src="/images/me_qrcode.jpg"
                  alt="Large Mail Icon"
                />
              </div>
            )}
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default EmailSection;
