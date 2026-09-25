export type TopProduct = {
  name: string;
  description: string;
  tag: string;
  image: string;
  imageFit?: "cover" | "contain";
};

export const topProducts: TopProduct[] = [
  {
    name: "High Speed Bread Slicer",
    description: "High-throughput slicing for continuous bread production lines.",
    tag: "BEST SELLER",
    image: "/high-speed-bread-slicer.webp",
  },
  {
    name: "High Speed Toast Slicer",
    description: "Uniform toast-thickness slicing built for daily bakery volumes.",
    tag: "POPULAR",
    image: "/high-speed-toast-slicer.webp",
  },
  {
    name: "Gravity Bread Slicer",
    description: "Simple, reliable gravity-feed slicing for compact bakery setups.",
    tag: "COMPACT",
    image: "/gravity-slicer.webp",
  },
  {
    name: "Cake Slicing Machine",
    description: "Precise, gentle cutting for cake bars and slabs at scale.",
    tag: "PRECISION",
    image: "/high-speed-cake-slicer.webp",
  },
  {
    name: "Round Roll Slicing Machine",
    description: "Dedicated configuration for slicing round rolls and buns.",
    tag: "SPECIALIST",
    image: "/High-Speed-Round-Roll-Toast-Slicing-Machine.webp",
  },
  {
    name: "Bakery Projects & Consultancy",
    description: "End-to-end layout, machinery selection and turnkey project support.",
    tag: "CONSULTANCY",
    image: "/consultaion.webp",
    imageFit: "contain",
  },
];

export const faqs = [
  {
    q: "What type of bread slicing machines do you manufacture?",
    a: "We manufacture high-speed single and double bread slicing machines, stainless steel bread slicers, gravity bread slicers and automatic high-speed bread slicing machines, in various capacities and configurations.",
  },
  {
    q: "Do you manufacture automatic bread slicers?",
    a: "Yes, our range includes automatic high-speed bread slicing machines designed for continuous, high-volume production alongside our standard and gravity slicer models.",
  },
  {
    q: "What is the production capacity of your bread slicers?",
    a: "Our current high-speed models are built to slice up to 65 breads of any size per minute, with capacity varying by machine model and configuration.",
  },
  {
    q: "Do you manufacture toast and round roll slicing machines?",
    a: "Yes, we manufacture high-speed toast slicing machines and round roll slicing machines, including stainless steel variants, sized for different bakery volumes.",
  },
  {
    q: "Do you provide customized bakery machinery?",
    a: "Yes, we configure machinery around each customer's product type, capacity requirements and production layout, in addition to our standard machine range.",
  },
  {
    q: "Do you supply machines outside India?",
    a: "Yes, we export bakery machinery to international customers in addition to serving bakery and food-processing businesses across India.",
  },
  {
    q: "Do you provide installation or project consultancy?",
    a: "Yes, we offer bakery project consultancy and turnkey solutions covering machinery selection, layout and support for bread, cake and toast production lines.",
  },
  {
    q: "What materials are used in your machines?",
    a: "We use quality-grade steel, including stainless steel construction on select models, chosen for durability, hygiene and long-term reliability in continuous use.",
  },
  {
    q: "How can I request a quotation?",
    a: "Use the \"Get a Quote\" button, call us at +91 98116 31670, or fill in the contact form below and our team will get back to you.",
  },
  {
    q: "How do I choose the right bread slicing machine?",
    a: "The right machine depends on your required output (breads per minute), loaf size and type, available floor space and whether you need automatic or gravity feed. Our team can help you select based on your production needs.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#why" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const megaMenuLinks = [
  { label: "Bread Slicing Machines", href: "#products" },
  { label: "Toast Slicing Machines", href: "#products" },
  { label: "Gravity Bread Slicers", href: "#products" },
  { label: "Cake Slicing Machines", href: "#products" },
  { label: "Round Roll Slicing Machines", href: "#range" },
  { label: "Small Bakery Equipment", href: "#range" },
  { label: "Bakery Machinery", href: "#range" },
  { label: "Project Consultancy", href: "#expertise" },
];

export const clients = ["Britannia", "Modern Bread", "Harvest Gold", "Bonn", "Kitty Industries"];

export const testimonials = [
  {
    quote:
      "Consistent slicing performance and robust machine construction have made these machines a reliable part of our production process.",
    name: "Rajesh Malhotra",
    role: "Bakery Production Manager, Delhi",
    initial: "R",
  },
  {
    quote:
      "The slicing thickness stays accurate shift after shift, and the blades are straightforward to replace when needed.",
    name: "Suresh Kapoor",
    role: "Operations Head, Industrial Bakery",
    initial: "S",
  },
  {
    quote:
      "Their team helped us plan the full slicing line layout, not just supply a machine. That project support made the difference.",
    name: "Amrit Bakshi",
    role: "Director, Regional Bakery Chain",
    initial: "A",
  },
];

export const COMPANY = {
  name: "J. S. Engineering Company",
  shortName: "J. S. ENGINEERING",
  tagline: "Finest Quality Slicing Solutions Since 1948",
  phone: "+91 9811163270 | +91 9811163217",
  phoneHref: "tel:+919811163270",
  whatsappHref: "https://wa.me/919811163270",
  address: "C-57, Wazirpur Industrial Area, Delhi - 110052, India",
  location: "Delhi, India",
};
