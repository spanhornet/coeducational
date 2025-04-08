import { z } from "zod";

export const validGreekClasses = [
  'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 
  'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 
  'Phi', 'Chi', 'Psi', 'Omega'
];

export const UNIVERSITY_DATA = {
  university: "University of Maryland",
  universityId: "university-of-maryland",
  programs: [
    {
      program: "College of Agriculture & Natural Resources",
      undergraduateMajors: [
        "Agricultural & Resource Economics",
        "Agricultural Science & Technology",
        "Animal Science",
        "Environmental Science & Policy",
        "Environmental Science & Technology",
        "Fermentation Science",
        "Landscape Architecture",
        "Nutrition & Food Science",
        "Plant Science"
      ],
      graduateMajors: [
        "Agricultural & Resource Economics",
        "Animal Science",
        "Comparative Biomedical Sciences",
        "Environmental Science & Technology",
        "Extension Education",
        "Food Safety Risk Assessment",
        "Historic Preservation & Landscape Architecture",
        "Landscape Architecture",
        "Landscape Architecture & Community Planning",
        "Nutrition & Food Science",
        "Plant Science",
        "Veterinary Medicine"
      ]
    },
    {
      program: "School of Architecture, Planning, & Preservation",
      undergraduateMajors: [
        "Architecture",
        "Real Estate & the Built Environment"
      ],
      graduateMajors: [
        "Applied Anthropology & Historic Preservation",
        "Architecture",
        "Architecture & Community Planning",
        "Architecture & Historic Preservation",
        "Architecture & Real Estate Development",
        "Business Administration & Real Estate Development",
        "Community Planning",
        "Community Planning & Behavioral/Community Health",
        "Community Planning & Biostatistics",
        "Community Planning & Environmental Health Sciences",
        "Community Planning & Epidemiology",
        "Community Planning & Health Administration",
        "Community Planning & Health Equity",
        "Community Planning & Health Policy Analysis and Evaluation",
        "Community Planning & Historic Preservation",
        "Community Planning & Information Management",
        "Community Planning & Law",
        "Community Planning & Physical Activity",
        "Community Planning & Public Health Practice and Policy",
        "Community Planning & Real Estate Development",
        "Historic Preservation",
        "Historic Preservation & American Studies",
        "Historic Preservation & Landscape Architecture",
        "Historic Preservation & Real Estate Development",
        "History and Historic Preservation",
        "Landscape Architecture & Community Planning",
        "Real Estate Development",
        "Transportation Policy & Planning",
        "Urban and Regional Planning & Design",
        "Urban Design"
      ]
    },
    {
      program: "College of Arts & Humanities",
      undergraduateMajors: [
        "American Studies",
        "Arabic Studies",
        "Art History",
        "Chinese",
        "Cinema & Media Studies",
        "Classics",
        "Communication",
        "Dance",
        "English",
        "French Language & Literature",
        "German Studies",
        "History",
        "Immersive Media Design",
        "Italian Studies",
        "Japanese",
        "Jewish Studies",
        "Linguistics",
        "Music Education",
        "Music: Liberal Arts Program",
        "Music: Professional Program",
        "Persian Studies",
        "Philosophy",
        "Philosophy, Politics, & Economics",
        "Religions of the Ancient Middle East",
        "Romance Languages",
        "Russian Language & Literature",
        "Spanish Language, Literatures, & Culture",
        "Theatre",
        "Women, Gender, & Sexuality Studies"
      ],
      graduateMajors: [
        "American Studies",
        "Art History and Archaeology",
        "Art Studio",
        "Arts Entrepreneurship",
        "Classics",
        "Communication",
        "Communication Management",
        "Comparative Literature",
        "Consecutive Interpreting",
        "Creative Writing",
        "Critical Theory",
        "Dance",
        "Digital Studies",
        "English Language & Literature",
        "Ethnomusicology",
        "French Language & Literature",
        "German Studies",
        "Hebrew Language Pedagogy",
        "Historic Preservation and American Studies",
        "History",
        "History and Historic Preservation",
        "History and Library & Information Science",
        "Interpreting",
        "Jewish Studies",
        "Latin American & Caribbean Studies",
        "Linguistics",
        "Modern French Studies",
        "Museum Scholarship & Material Culture",
        "Music",
        "Music Education",
        "Music: Performance & Composition",
        "Performance",
        "Philosophy",
        "Second Language Acquisition",
        "Spanish Language & Literature",
        "Theatre and Performance Studies",
        "Theatre Design",
        "Translation",
        "Women, Gender, and Sexuality Studies"
      ]
    },
    {
      program: "College of Behavioral Social Sciences",
      undergraduateMajors: [
        "African American Studies",
        "Anthropology",
        "Criminology & Criminal Justice",
        "Economics",
        "Environmental Science & Policy",
        "Geographical Sciences",
        "Government & Politics",
        "Hearing & Speech Sciences",
        "Neuroscience",
        "Psychology",
        "Sociology"
      ],
      graduateMajors: [
        "African American Studies",
        "Anthropology",
        "Applied Anthropology & Historic Preservation",
        "Applied Economics",
        "Applied Political Analytics",
        "Bilingual Speech-Language Pathology",
        "Bilingual Speech-Language Pathology for Practitioners",
        "Clinical Audiology",
        "Clinical Psychological Science",
        "Criminal Justice Administration",
        "Criminology and Criminal Justice",
        "Cultural and Heritage Resource Management",
        "Economic Analysis",
        "Economics",
        "Fundamentals of Survey and Data Science",
        "Fundamentals of Survey Methodology",
        "Fundamentals of Survey Statistics",
        "Geographical Sciences",
        "Geospatial Information Sciences",
        "Geospatial Intelligence",
        "Government & Politics",
        "Hearing & Speech Sciences",
        "Industrial/Organizational Psychology",
        "Insider Risk Management & Mitigation",
        "International Relations",
        "Justice Leadership",
        "Leadership in Diverse Organizations",
        "Neuroscience & Cognitive Science",
        "Population Studies",
        "Psychology",
        "Public Safety Leadership & Administration",
        "Remote Sensing",
        "Security & Terrorism Studies",
        "Sociology",
        "Speech Language Pathology",
        "Survey & Data Science",
        "Terrorism Analysis"
      ]
    },
    {
      program: "Robert H. Smith School of Business",
      undergraduateMajors: [
        "Accounting",
        "Finance",
        "Information Systems",
        "International Business",
        "Management",
        "Marketing",
        "Operations Management & Business Analytics",
        "Supply Chain Management"
      ],
      graduateMajors: [
        "Accounting",
        "Business Administration",
        "Business Administration & Accounting",
        "Business Administration & Business Analytics",
        "Business Administration & Finance",
        "Business Administration & Information Systems",
        "Business Administration & Marketing Analytics",
        "Business Administration & Medicine",
        "Business Administration & Nursing",
        "Business Administration & Pharmacy",
        "Business Administration & Public Policy",
        "Business Administration & Real Estate Development",
        "Business Administration & Social Work",
        "Business Administration & Supply Chain Management",
        "Business Administration, Executive",
        "Business Analytics",
        "Business & Management",
        "Business Management & Law",
        "Climate Finance & Risk Management",
        "Cybersecurity Leadership",
        "Finance",
        "Financial Risk Management",
        "Information Systems",
        "Leading & Managing Healthcare Transformation",
        "Management Studies",
        "Marketing Analytics",
        "Quantitative Finance",
        "Supply Chain Management",
        "Technology Management"
      ]
    },
    {
      program: "College of Computer, Mathematical, & Natural Sciences",
      undergraduateMajors: [
        "Astronomy",
        "Atmospheric and Oceanic Science",
        "Biochemistry",
        "Biological Sciences",
        "Chemistry",
        "Computer Science",
        "Environmental Science",
        "Geology",
        "Immersive Media Design",
        "Mathematics",
        "Neuroscience",
        "Physics"
      ],
      graduateMajors: [
        "Air Quality Science & Technology",
        "Applied Entomology",
        "Applied Machine Learning",
        "Applied Mathematics & Statistics, & Scientific Computation",
        "Astronomy",
        "Atmospheric & Oceanic Science",
        "Atmospheric & Oceanic Science Technology",
        "Beekeeping",
        "Biochemistry",
        "Bioinformatics & Computational Biology",
        "Biological Sciences",
        "Biophysics",
        "Chemical & Life Sciences",
        "Chemical Physics",
        "Chemistry",
        "Computation & Mathematics for Biological Networks",
        "Computational Harmonic Analysis",
        "Computational Methods in Atmospheric & Oceanic Science",
        "Computer Science",
        "Data Science",
        "Data Science & Analytics",
        "Ecological Economics",
        "Ecosystems Restoration",
        "Entomology",
        "Geology",
        "Integrated Pest Management",
        "Machine Learning",
        "Marine, Estuarine, & Environmental Sciences",
        "Mathematical Statistics",
        "Mathematics",
        "Mathematics of Advanced Industrial Technology",
        "Organic & Sustainable Agriculture",
        "Physics",
        "Public Policy & Sustainable Development & Conservation Biology",
        "Quantum Computing",
        "Radar Signal Processing",
        "Scientific Computation",
        "Sustainable Development & Conservation Biology",
        "Urban Agriculture"
      ]
    },
    {
      program: "College of Education",
      undergraduateMajors: [
        "Early Childhood & Early Childhood Special Education",
        "Elementary Education",
        "Elementary Education",
        "Human Development",
        "Middle School Education: Mathematics & Science",
        "Music Education",
        "Secondary Education: English",
        "Secondary Education: Mathematics",
        "Secondary Education: Science",
        "Secondary Education: Social Studies",
        "Secondary Education: World Languages"
      ],
      graduateMajors: [
        "Administration, Supervision & Curriculum",
        "Applied Counseling & Human Services",
        "Community Counseling",
        "Counseling & Personnel Services",
        "Counseling Psychology",
        "Curriculum & Instruction",
        "Dual Language Education",
        "Elementary & Middle School Science Education",
        "Equitable Mathematics Education Leadership",
        "Higher Education",
        "Human Development",
        "Human Development Education",
        "Integrated Technology in Education",
        "International Education Policy",
        "Leadership Education & Development",
        "Literacy Coaching",
        "Quantitative Methodology: Measurement & Statistics",
        "School Counseling",
        "School Improvement Leadership",
        "School Psychology",
        "School System Leadership",
        "Special Education",
        "Special Education for General Education Teachers in Inclusive Classrooms",
        "Student Affairs",
        "Supporting Children with Intensive Behavior Needs",
        "Supporting Immigrant Students for Professional School Counselors",
        "Teaching & Learning, Policy & Leadership",
        "Teaching English to Speakers of Other Languages",
        "World Languages Education"
      ]
    },
    {
      program: "A. James Clark School of Engineering",
      undergraduateMajors: [
        "Aerospace Engineering",
        "Biocomputational Engineering",
        "Bioengineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Cyber-Physical Systems Engineering",
        "Electrical Engineering",
        "Fire Protection Engineering",
        "Materials Science & Engineering",
        "Mechanical Engineering",
        "Mechatronics Engineering"
      ],
      graduateMajors: [
        "Aerospace Engineering",
        "Bioengineering",
        "Biological Resources Engineering",
        "Chemical & Biomolecular Engineering",
        "Chemical Engineering",
        "Civil & Environmental Engineering",
        "Cloud Engineering",
        "Computer Networking",
        "Computing Systems",
        "Cybersecurity Engineering",
        "Electrical & Computer Engineering",
        "Embedded Systems",
        "Energy Systems Engineering",
        "Engineering & Public Policy",
        "Environmental Engineering",
        "Fire Protection Engineering",
        "Hypersonics",
        "Materials Science & Engineering",
        "Mechanical Engineering",
        "Networking Software Development",
        "Product Management",
        "Project Management",
        "Reliability Engineering",
        "Robotics Engineering",
        "Software Engineering",
        "Systems Engineering",
        "Technology Ventures & Innovation",
        "Technology, Entrepreneurship & Corporate Innovation",
        "Telecommunications",
        "Wireless Communications"
      ]
    },
    {
      program: "College of Information",
      undergraduateMajors: [
        "Information Science",
        "Social Data Science",
        "Technology & Information Design"
      ],
      graduateMajors: [
        "Community Planning & Information Management",
        "Curation & Management of Digital Assets",
        "Game, Entertainment, & Media Analytics",
        "History & Library & Information Science",
        "Human-Computer Interaction",
        "Information Management",
        "Information Risk, Privacy, & Security",
        "Information Studies",
        "Library & Information Science",
        "School Librarianship",
        "Youth Experience"
      ]
    },
    {
      program: "Philip Merril College of Journalism",
      undergraduateMajors: [
        "Journalism"
      ],
      graduateMajors: [
        "Data Journalism",
        "Journalism",
        "Journalism Studies",
        "Multimedia Journalism"
      ]
    },
    {
      program: "School of Public Health",
      undergraduateMajors: [
        "Family Science",
        "Global Health",
        "Kinesiology",
        "Public Health Practice",
        "Public Health Science"
      ],
      graduateMajors: [
        "Applied Epidemiology",
        "Behavioral & Community Health",
        "Biostatistics",
        "Community Planning & Behavioral/Community Health",
        "Community Planning & Biostatistics",
        "Community Planning & Environmental Health Sciences",
        "Community Planning & Epidemiology",
        "Community Planning & Health Administration",
        "Community Planning & Health Equity",
        "Community Planning & Health Policy Analysis & Evaluation",
        "Community Planning & Physical Activity",
        "Community Planning & Public Health Practice & Policy",
        "Couple & Family Therapy",
        "Environmental Health Sciences",
        "Epidemiology",
        "Family Science",
        "Gerontology",
        "Global Health",
        "Health Administration",
        "Health Care Management",
        "Health Data Analysis",
        "Health Equity",
        "Health Policy Analysis & Evaluation",
        "Health Services Research",
        "Kinesiology",
        "Maternal & Child Health",
        "Physical Activity",
        "Public Health Informatics",
        "Public Health Practice & Policy"
      ]
    },
    {
      program: "School of Public Policy",
      undergraduateMajors: [
        "Public Policy"
      ],
      graduateMajors: [
        "Business Administration & Public Policy",
        "Climate Policy & Action",
        "Engineering & Public Policy",
        "Environmental Policy",
        "Government & The Private Economy",
        "Housing, Finance & Development",
        "Information Assurance Management",
        "Intelligence Analysis",
        "Methods of Public Analysis",
        "National Security Studies",
        "Nonprofit Management & Leadership",
        "Policy Studies",
        "Program Planning, Monitoring, & Evaluation",
        "Public Administration",
        "Public Financial Management",
        "Public Leadership & Management",
        "Public Management",
        "Public Policy",
        "Public Policy & Law",
        "Public Policy & Social Work",
        "Public Policy & Sustainable Development & Conservation Biology",
        "Public Sector Finance & Acquisition",
        "Science, Technology, & Innovation Policy"
      ]
    }
  ]
} as const;

export const DEGREE_TYPES = [
  "Bachelor of Science (B.S.)",
  "Bachelor of Arts (B.A.)",
  "Master of Science (M.S.)",
  "Master of Arts (M.A.)",
  "Doctor of Philosophy (Ph.D.)",
  "Master of Business Administration (M.B.A.)",
] as const;

export const personalSchema = z.object({
  firstName: z.string().min(1, "First name must be at least 1 character"),
  lastName: z.string().min(1, "Last name must be at least 1 character"),
  class: z.string()
    .min(1, "Class must be at least 1 character")
    .refine(value => validGreekClasses.includes(value), {
      message: "Class must be a valid romanized Greek letter name",
    }),
  chapter: z.string().min(1, "Chapter must be at least 1 character"),
  email: z.string().email("Email address is invalid"),
  phone: z.string()
    .min(1, "Phone must be at least 1 character")
    .refine(value => {
      return value ? /^\+([1-9][0-9]{1,14})$/.test(value) : true;
    }, {
      message: "Phone number must be a valid international phone number in E.164 format",
    }),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .regex(/[0-9]/, "Password must contain at least 1 number")
    .regex(/\W/, "Password must contain at least 1 special character"),
});

export const educationItemSchema = z.object({
  university: z.object({
    id: z.string().min(1, "University must be selected"),
    name: z.string().min(1, "University name is required"),
    location: z.string().min(1, "University location is required"),
  }),
  degreeType: z.enum(DEGREE_TYPES, {
    errorMap: () => ({ message: "Please select a valid degree type" }),
  }),
  program: z.object({
    school: z.string().min(1, "School/College must be selected"),
    major: z.string().min(1, "Major must be selected"),
    level: z.enum(["undergraduate", "graduate"], {
      errorMap: () => ({ message: "Please select a valid program level" }),
    }),
  }),
  startDate: z.object({
    month: z.string().min(1, "Month is required"),
    year: z.string().regex(/^\d{4}$/, "Invalid year"),
  }),
  endDate: z.object({
    month: z.string().min(1, "Month is required"),
    year: z.string().regex(/^\d{4}$/, "Invalid year"),
  }),
});

export const educationSchema = z.object({
  educationList: z.array(educationItemSchema).min(1, "At least one education entry is required"),
});

export const experienceItemSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  startDate: z.object({
    month: z.string().min(1, "Month is required"),
    year: z.string().regex(/^\d{4}$/, "Invalid year"),
  }),
  endDate: z.object({
    month: z.string().min(1, "Month is required"),
    year: z.string().regex(/^\d{4}$/, "Invalid year"),
  }),
});

export const experienceSchema = z.object({
  experienceList: z.array(experienceItemSchema).min(1, "At least one experience entry is required"),
});

export const formSchema = z.object({
  personal: personalSchema,
  education: educationSchema,
  experience: experienceSchema,
});

export const steps = [
  {
    step: 1,
    title: "Step 1",
    description: "Personal",
    schema: personalSchema,
  },
  {
    step: 2,
    title: "Step 2",
    description: "Education",
    schema: educationSchema,
  },
  {
    step: 3,
    title: "Step 3",
    description: "Experience",
    schema: experienceSchema,
  },
  {
    step: 4,
    title: "Step 4",
    description: "Confirmation",
  },
];
