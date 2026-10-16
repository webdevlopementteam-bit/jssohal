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
    q: "Who is the best bakery machine manufacturer in Delhi?",
    a: "J. S. Engineering is one of the most experienced bakery machine manufacturers in Delhi. We've been building bakery machinery since 1948 from Wazirpur Industrial Area, and we supply bakeries across India and abroad.",
  },
  {
    q: "Where can I buy a bread slicing machine in Delhi?",
    a: "You can buy directly from us at J. S. Engineering, C-57, Wazirpur Industrial Area, Delhi 110052. Tell us about your bakery, and we'll suggest the right machine and send you a quotation.",
  },
  {
    q: "What does a bakery machine manufacturer do?",
    a: "A bakery machine manufacturer designs and builds the equipment bakeries use every day, such as slicers, mixers, ovens and dough dividers. At J. S. Engineering, we also customize machines and help new bakeries plan their production lines.",
  },
  {
    q: "What is a bread slicing machine and how does it work?",
    a: "A bread slicing machine cuts a loaf into even slices using precisely set blades. The bread goes in either automatically or by gravity feed, and the blades cut it to a fixed thickness. It saves time, cuts down wastage and keeps every slice uniform.",
  },
  {
    q: "How much does a bread slicing machine cost in India?",
    a: "It depends on the capacity, the model, the blade setup and whether you choose stainless steel. A gravity slicer and a high-speed automatic machine are priced very differently. Share your requirements with us and we'll give you an exact quotation.",
  },
  {
    q: "What is the capacity of a high-speed bread slicer?",
    a: "Our high-speed bread slicers can slice up to 65 breads per minute. The exact output depends on the model, loaf size and configuration, so we recommend a machine based on your daily production target.",
  },
  {
    q: "Which machine is best for slicing toast bread?",
    a: "A high-speed toast slicing machine is the best choice, because it keeps the thickness even on every slice. We make toast slicers, including stainless steel models, and round roll slicers for buns.",
  },
  {
    q: "How do I choose the right bakery machine for my bakery?",
    a: "Start with four questions. How many breads do you produce per minute or per day? What are your loaf size and type? How much floor space do you have? Do you need automatic or gravity feed? Our team can help you decide based on your answers.",
  },
  {
    q: "Can a bakery machine manufacturer in Delhi supply machines outside India?",
    a: "Yes. J. S. Engineering supplies bakery machinery across India and exports to international customers as well. Share your location and requirements, and we'll guide you on the next steps.",
  },
  {
    q: "How can I get a quotation or set up a new bakery plant?",
    a: "Use the Get a Quote button on our website and tell us what you need. We also offer project consultancy, covering machinery selection, layout planning and turnkey support for bread, cake and toast production lines.",
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

export const SITE_URL = "https://bakerymachinemanufacturer.com";

// Web3Forms keys are public by design; submissions go to the email tied to this key.
export const WEB3FORMS_ACCESS_KEY = "c3c42454-5713-4551-a131-34dec2597d6f";
