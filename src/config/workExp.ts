import { WorkExperienceItemProps } from "@/components/about/sections/WorkExperience/WorkExperienceItem";
import Nextbill from "../../public/NextbillIcon.ico";
import IITM from "../../public/IITM.png";

export const WORK_EXPERIENCES: WorkExperienceItemProps[] = [
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Nextbill",
    logo: Nextbill,
    period: "Present",
  },
  {
    id: 1,
    title: "Backend Intern",
    company: "IIT Madras",
    logo: IITM,
    period: "3 months",
  },
];
