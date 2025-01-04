import { Service } from "@/types";
import {
  BoxIcon,
  MonitorSmartphoneIcon,
  MonitorSpeakerIcon,
  PenToolIcon,
} from "lucide-react";

const ServicesData: Service[] = [
  {
    icon: MonitorSmartphoneIcon,
    title: "Web app",
    description: "Apps accessible via cloud.",
  },
  {
    icon: MonitorSpeakerIcon,
    title: "Cross platform app",
    description: "Apps installed on system.",
  },
  {
    icon: BoxIcon,
    title: "3D Modelling",
    description: "3D art for story telling.",
  },
  {
    icon: PenToolIcon,
    title: "2D Vector graphics",
    description: "2D art for optimized story telling.",
  },
];

export default ServicesData;
