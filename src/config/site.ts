// Site configuration - Safe for public repositories
// Sensitive data should be in environment variables

export const siteConfig = {
  name: "Myca Camacho",
  title: "Myca Camacho - Artist & Creative Professional",
  description: "Artist specializing in paper making, ceramics, woodworking, and photographic processes. UCLA Art graduate with extensive experience in fine arts and creative restoration.",
  
  // These will be overridden by environment variables in production
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "myca.anise@gmail.com",
    phone: process.env.NEXT_PUBLIC_PHONE || "7422549756",
    location: process.env.NEXT_PUBLIC_LOCATION || "Northridge, California",
  },
  
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
    twitter: process.env.NEXT_PUBLIC_TWITTER || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
    github: process.env.NEXT_PUBLIC_GITHUB || "",
  },
  
  // Portfolio categories based on your skills
  portfolioCategories: [
    'All',
    'Paper Making',
    'Ceramics',
    'Woodworking', 
    'Photography',
    'Mixed Media',
    'Restoration'
  ],
  
  // Your skills and services
  skills: [
    'Paper Making',
    'Sewing and Crocheting',
    'Casting/Mold Making',
    'Coil and Slab Built Ceramics',
    'Woodworking',
    'Extensive Adhesive Knowledge',
    'Silver Gelatin Prints',
    'Anthotypes and Photo Transfers',
    'Adobe Suite Applications'
  ],
  
  // Professional experience
  experience: [
    {
      title: "Associate",
      company: "Pinacoteca Picture Props",
      location: "North Hollywood, CA",
      period: "2024 - Present",
      description: "Mended fragile, damaged paintings and everyday objects, mastered color matching, cut moulding, used air compression tools to make frames, and sized plexiglass on a weekly basis for incoming art pieces."
    },
    {
      title: "Artist Assistant",
      company: "Rodrigo Valenzuela",
      location: "West Adams, CA", 
      period: "2022, 2024",
      description: "Collaborated on large scale fine art pieces including ceramics, paintings, photographs, and screen prints in a high-paced environment."
    },
    {
      title: "Stylist",
      company: "English Rabbit",
      location: "Beverly Hills, CA",
      period: "2024",
      description: "Maintained beautiful store presentation through remerchandising projects and organized inventory, ensured personalized styling experience."
    },
    {
      title: "Bookbinding Assistant",
      company: "Gibbs Bookbinding",
      location: "Hollywood, CA",
      period: "2022 - 2023", 
      description: "Created precise reproductions for clients of books, photo albums, and cards using complex hand work and technical systems."
    }
  ],
  
  // Education
  education: {
    degree: "Bachelor's Degree in Art",
    school: "University of California, Los Angeles",
    year: "2022"
  },
  
  // Accomplishments
  accomplishments: [
    "UCLA Undergraduate Senior Exhibition, June 2022",
    "lift you up, hand me down - solo show, June 2, 2022", 
    "Hillel Juried Exhibition - placed third in photography contest, May 2022",
    "UCLA Undergraduate Juried Exhibition, February 10, 2022",
    "UCLA Undergraduate Scholarship Award Exhibition, November 18, 2021"
  ],
  
  // Artistic mentors
  mentors: [
    {
      name: "Rodrigo Valenzuela",
      title: "Assistant Professor, UCLA Faculty",
      email: "racultyroanvacut@gmail.com",
      phone: "(360) 292-8390"
    },
    {
      name: "Jennifer Kirchmann", 
      title: "Head of Art Department, Viewpoint School",
      email: "jenkirchmann@gmail.com",
      phone: "(818) 294-5250"
    },
    {
      name: "Alixe Turner",
      title: "Artist",
      email: "alixe@example.com",
      phone: "(202) 580-89XX"
    }
  ]
};
