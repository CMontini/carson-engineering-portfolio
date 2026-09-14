import c4Hero from "../assets/c4/accum-hvopen.png";
import c5Hero from "../assets/c5/pdu-transparent.png";
import aceHero from "../assets/ace/ace-nearly-assembled-studio.webp";

export const featuredProjects = [
  {
    slug: "charger-4",
    title: "Charger 4",
    kicker: "Formula SAE Electric",
    subtitle: "Designed accumulator packaging and current-carrying hardware, including busbars and supporting calculations, with manufacturability and electrical integration driving the design.",
    image: c4Hero,
    tags: ["SolidWorks", "Battery Packaging", "Busbars", "Manufacturing"]
  },
  {
    slug: "charger-5",
    title: "Charger 5",
    kicker: "Formula SAE Electric",
    subtitle: "Designed and fabricated the Power Distribution Unit enclosure and packaging while contributing to accumulator layout, interfaces, and battery-system integration.",
    image: c5Hero,
    tags: ["PDU", "SolidWorks", "System Integration", "Rules Compliance"]
  },
  {
    slug: "ace",
    title: "ACE",
    kicker: "Automated Court Enhancer",
    subtitle: "Developed a compact autonomous hardwood-court cleaning robot that integrates differential drive, controlled misting, and a rotating cleaning system.",
    image: aceHero,
    tags: ["Robotics", "Arduino", "Electromechanical Design", "Prototyping"]
  }
];
