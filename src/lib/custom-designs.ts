// src/lib/custom-designs.ts
export interface CustomDesign {
  slug: string
  title: string
  description: string
  details: string
  imageUrl: string
}

export const customDesigns: CustomDesign[] = [
  {
    slug: 'carts',
    title: 'Carts',
    description: 'Mobile storage and transport solutions built with AngleLock structural aluminum.',
    details: 'Lightweight and highly configurable, AngleLock carts can be customized for any load requirement. The patented mechanical locking system ensures your cart stays rigid under dynamic loads — no loosening over time.',
    imageUrl: '',
  },
  {
    slug: 'cabinets-enclosures',
    title: 'Cabinets & Enclosures',
    description: 'Industrial storage and protection systems engineered for precision and durability.',
    details: 'AngleLock cabinets and enclosures combine structural integrity with modular flexibility. Compatible with our full door, panel, and hardware system for a complete enclosure solution.',
    imageUrl: '',
  },
  {
    slug: 'machine-bases',
    title: 'Machine Bases',
    description: 'Industrial equipment foundations that eliminate vibration and maintain alignment.',
    details: 'Machine bases built with AngleLock profiles deliver 7x the strength of T-slot alternatives. The mechanical locking system prevents joint loosening under continuous vibration — critical for precision manufacturing.',
    imageUrl: '',
  },
  {
    slug: 'workstations',
    title: 'Workstations',
    description: 'Industrial work surfaces designed for ergonomics, strength, and adaptability.',
    details: 'AngleLock workstations are built to last in demanding industrial environments. Reconfigurable without tools, and strong enough to handle heavy tooling and equipment.',
    imageUrl: '',
  },
  {
    slug: 'studio-applications',
    title: 'Studio Applications',
    description: 'Event and temporary structures that assemble fast and hold tight.',
    details: 'From broadcast studios to trade show displays, AngleLock structures go up quickly and stay rigid under load. Disassemble and reconfigure as your needs change.',
    imageUrl: '',
  },
  {
    slug: 'design-services',
    title: 'Design Services',
    description: 'Professional engineering consultation for custom structural aluminum projects.',
    details: 'Our engineers work with you from concept to production. We design to your specifications, optimize for AngleLock\'s patented system, and deliver ready-to-build drawings.',
    imageUrl: '',
  },
  {
    slug: 'assembly',
    title: 'Project Assembly Assistance',
    description: 'On-site and remote assembly support for complex AngleLock builds.',
    details: 'Whether you need hands-on assembly help or remote guidance, our team ensures your project is built correctly. We also offer pre-assembled substructures for faster integration.',
    imageUrl: '',
  },
]
