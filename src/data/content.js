import { GraduationCap, Briefcase, Award, BookOpen, Users, Heart, Stethoscope, Microscope, Globe } from 'lucide-react';

export const personalInfo = {
    name: "Ishan Perera",
    title: "Neurosurgeon & Researcher",
    email: "ishanperera07@gmail.com",
    phone: "(757) 478 1622",
    location: "West Bloomfield, MI",
    bio: "Ishan Perera is a doctoral candidate for Osteopathic Medicine at the Edward Via College of Osteopathic Medicine (VCOM) Virginia Campus, with a focus on Neurosurgery. His career revolves around the pursuit of knowledge and melding Neurological Surgery with Osteopathic principles. He is a co-founder of HOLO Labs and an active researcher.",
    fullBio: [
        "Ishan Perera is a dedicated medical professional currently pursuing his Doctor of Osteopathic Medicine degree at the Edward Via College of Osteopathic Medicine (VCOM), expecting to graduate in May 2025. He has secured a Neurological Surgery Residency at Michigan State University College of Human Medicine / Henry Ford Health Providence Hospital, commencing in 2025.",
        "With a strong foundation in Biology, Chemistry, and Computer Science from Old Dominion University, Ishan combines clinical excellence with a passion for research and innovation. He co-founded HOLO Labs, a student-led research laboratory, and has served as a Deputy Editor for the Cureus Journal.",
        "Beyond his clinical and academic pursuits, Ishan is deeply committed to community service, having volunteered with hospice care, community gardens, and medical outreach programs. His multifaceted skillset ranges from programming and statistical analysis to amateur horticulture and mixology."
    ],
    social: {
        website: "ishanperera.com",
    }
};

export const education = [
    {
        degree: "Neurological Surgery Residency",
        institution: "Michigan State University College of Human Medicine / Henry Ford Health Providence Hospital",
        year: "Expected Graduation July 2032",
        details: "Clinical Instructor, Department of Surgery (2025-Present)"
    },
    {
        degree: "Doctor of Osteopathic Medicine",
        institution: "Edward Via College of Osteopathic Medicine (VCOM), Blacksburg, VA",
        year: "May 2025",
        details: "GPA: 3.84/4.0"
    },
    {
        degree: "B.S. Biology, Minors in Chemistry & Computer Science",
        institution: "Old Dominion University (ODU), Norfolk, VA",
        year: "2020",
        details: "Summa Cum Laude, Honors, GPA: 3.90/4.0"
    }
];

export const experience = [
    {
        role: "Deputy Editor",
        organization: "Cureus Journal (Simulation, Biodesign, & Innovation)",
        period: "2022 - Present",
        description: "Editorial role in medical education and innovation.",
        type: "Academic"
    },
    {
        role: "Co-Founder & Board of Trustees",
        organization: "HOLO Labs",
        period: "2022 - Present",
        description: "First student-led research laboratory adopting a research brokership approach. Focused on providing Osteopathic students research opportunities, product development, grant writing, and professional development.",
        type: "Leadership"
    },
    {
        role: "Owner",
        organization: "Ravana LLC",
        period: "2021 - Present",
        description: "Solutions and development.",
        type: "Entrepreneurial"
    },
    {
        role: "Chair",
        organization: "Medical Student Section, Medical Society of Virginia (MSV)",
        period: "2024 - Present",
        description: "Leading the medical student section of the state medical society.",
        type: "Leadership"
    },
    {
        role: "Community Outreach Vice Chair",
        organization: "Medical Society of Virginia (MSV)",
        period: "2023 - 2024",
        description: "Coordinated community outreach initiatives.",
        type: "Leadership"
    },
    {
        role: "District 9 House of Delegates Voting Delegate",
        organization: "Medical Society of Virginia (MSV)",
        period: "2022 - Present",
        description: "Representative of the VCOM student body to the MSV Board. Voted on policy and represented District 9.",
        type: "Leadership"
    },
    {
        role: "Overdose Prevention Task Force Co-Chair",
        organization: "VCOM",
        period: "2021 - Present",
        description: "Led task force ensuring 100% of Class of 2026 trained in REVIVE! and organized community courses.",
        type: "Leadership"
    },
    {
        role: "Peer Educator",
        organization: "VCOM",
        period: "2021 - 2023",
        description: "Ultrasound Peripheral IV (USPIV) for Physicians. Designed and taught sessions for first and second-year students.",
        type: "Academic"
    },
    {
        role: "Teaching Assistant",
        organization: "VCOM",
        period: "2021 - 2023",
        description: "Served as TA for Anatomy & Neuroscience, OMM Mock Practical Tutor, and Hospital Integrated Clinical Cases.",
        type: "Academic"
    },
    {
        role: "Emergency Department Technician",
        organization: "Sentara Princess Anne Hospital",
        period: "2019 - 2020",
        description: "Provided emergency medical care and support in a high-volume ED.",
        type: "Clinical"
    }
];

export const research = [
    // Publications
    {
        title: "Predicting New York Heart Association (NYHA) heart failure classification from medical student notes",
        authors: "Perera, I.R., Daniels, T., Looney, J. et al.",
        journal: "Sci Rep",
        year: "2025",
        status: "Published",
        link: "https://doi.org/10.1038/s41598-025-10179-",
        type: "Journal Article"
    },
    {
        title: "Geometric morphometric analysis of brainstem and cerebellum in Chiari I malformation",
        authors: "Perera, I. R., Zahed, M., Moriarty, S., et al.",
        journal: "Frontiers in Neuroanatomy",
        year: "2024",
        status: "Published",
        link: "https://doi.org/10.3389/fnana.2024",
        type: "Journal Article"
    },
    {
        title: "Evaluating the Impact of Direct, Direct Video, and Indirect Video Laryngoscopy Training",
        authors: "Moriarty S E, Perera I R, Sabbagh M, et al.",
        journal: "Cureus",
        year: "2024",
        status: "Published",
        link: "doi:10.7759/cureus",
        type: "Journal Article"
    },
    {
        title: "Manual Therapy as an Alternative Treatment Option for Idiopathic Pulmonary Fibrosis",
        authors: "Greenberg S S, Moriarty S E, Perera I, et al.",
        journal: "Cureus",
        year: "2024",
        status: "Published",
        link: "doi:10.7759/cureus",
        type: "Journal Article"
    },
    {
        title: "Case Report: Challenges of insulin and sulfonylurea dosing in an extremely premature infant",
        authors: "Perera I, Jensen B, Patel H and Garganta M",
        journal: "Front. Pediatr.",
        year: "2025",
        status: "Published",
        link: "doi:10.3389/fped.2025",
        type: "Journal Article"
    },
    {
        title: "Perplexing Tubo-Ovarian Abscess Presentation from an Inflammatory Process",
        authors: "Menendez S, Moriarty S E, Perera I, et al.",
        journal: "Cureus",
        year: "2023",
        status: "Published",
        link: "doi:10.7759/cureus",
        type: "Journal Article"
    },
    {
        title: "Lumbar Laminectomy Precedes Positional Headache and MRI-Confirmed Pseudomeningocele",
        authors: "Kasper B E, Perera I R, Moriarty S E, et al.",
        journal: "Cureus",
        year: "2023",
        status: "Published",
        link: "doi:10.7759/cureus",
        type: "Journal Article"
    },
    // Research in Progress
    {
        title: "Improvement of Adult-Onset Post Pump Chorea Following Transcarotid Artery Revascularization",
        authors: "Perera I.R. et al.",
        journal: "Editor Review",
        year: "2025",
        status: "In Progress",
        type: "Research in Progress"
    },
    {
        title: "Retrograde Migration of Gastrojejunostomy Tube Following Rapid Feeding",
        authors: "Perera I.R. et al.",
        journal: "Manuscript in Progress",
        year: "2025",
        status: "In Progress",
        type: "Research in Progress"
    },
    {
        title: "Comparison of Novel Voice Recognition Models in Medical Student Medical Decision-Making",
        authors: "Perera I.R. et al.",
        journal: "Manuscript in Progress",
        year: "2025",
        status: "In Progress",
        type: "Research in Progress"
    },
    // Poster Presentations (Selected)
    {
        title: "Atlas Morphology in Symptomatic Chiari I Malformation: A Statistical Shape Analysis",
        authors: "Perera I.R.",
        journal: "AANS Annual Scientific Meeting",
        year: "2025",
        status: "Accepted",
        type: "Poster/Presentation"
    },
    {
        title: "Skeletal Deformities in Chiari I Malformation Extend into the Cervical Spine",
        authors: "Perera I.R.",
        journal: "VCOM-VA Research Day",
        year: "2025",
        status: "Presented",
        type: "Poster/Presentation"
    },
    {
        title: "Investigation of Suboccipital Release... Effect on Carotid Artery Blood Flow",
        authors: "Perera I.R.",
        journal: "Osteopathic Medical Education Conference (2nd Place)",
        year: "2024",
        status: "Awarded",
        type: "Poster/Presentation"
    },
    {
        title: "Novel Geometric Morphometric Analysis for Application in Evaluating Chiari I Malformations",
        authors: "Perera I.R.",
        journal: "AANS Scientific Meeting / VCOM Research Day (1st Prize)",
        year: "2023",
        status: "Awarded",
        type: "Poster/Presentation"
    },
    // Professional Presentations
    {
        title: "Acing Your Interviews",
        authors: "Perera I.R.",
        journal: "American College of Osteopathic Surgeons (ACOS)",
        year: "Sept 2025",
        status: "Upcoming",
        type: "Poster/Presentation"
    },
    {
        title: "Post-Match Panel: Neurosurgery",
        authors: "Perera I.R.",
        journal: "ACOS",
        year: "May 2025",
        status: "Upcoming",
        type: "Poster/Presentation"
    }
];

export const awards = [
    { title: "Poster Winner", organization: "Osteopathic Medical Education Conference", year: "2024" },
    { title: "Golden Ticket Scholarship Finalist ($5,000)", organization: "American Osteopathic Foundation", year: "2024" },
    { title: "Student Doctor of the Year", organization: "VCOM Virginia", year: "2024" },
    { title: "Certificate of Recognition", organization: "Virginia Osteopathic Medical Association", year: "2023" },
    { title: "First Place, Medical Student Research - Clinical", organization: "VCOM Research Day", year: "2023" },
    { title: "Third Place, Educational Research - Student", organization: "VCOM Research Day", year: "2023" },
    { title: "Gold Award for Community Service", organization: "Council of Osteopathic Student Government Presidents", year: "2022" },
    { title: "Most Altruistic Student - Block 1", organization: "VCOM", year: "2021" }
];

export const skills = {
    technical: [
        "C++", "Java", "Javascript", "Python", "React", "React Native", "Django", "HTML/CSS", "R (Statistical Analysis)", "3D Slicer", "MorphoJ"
    ],
    languages: [
        "English (Native)", "Spanish (Conversational Beginner)", "Sinhalese (Conversational Beginner)"
    ],
    other: [
        "Investment Model Creation", "Tissue Preservation", "Amateur Distiller/Brewer", "Amateur Horticulturist"
    ]
};

export const community = [
    {
        role: "Direct Care Volunteer",
        organization: "Gentiva Hospice",
        period: "2023 - Present",
        description: "Weekly calls to families/facilities, medication compilation."
    },
    {
        role: "Community Garden Lead",
        organization: "HOLO Labs VCOM Community Garden",
        period: "2023 - Present",
        description: "Soil testing, planting organic vegetables, providing free food to VCOM community."
    },
    {
        role: "Chair",
        organization: "Medical Student Section, Medical Society of Virginia",
        period: "2024 - Present",
        description: "Leadership role in state medical society."
    }
];

export const affiliations = [
    "Gold Humanism Honor Society (GHHS)",
    "North American Spine Society (NASS)",
    "Congress of Neurological Surgeons (CNS)",
    "American College of Surgeons (ACS)",
    "Omega Beta Iota National Osteopathic Political Honor Society (OBI)",
    "American Association of Neurological Surgeons (AANS)",
    "Sigma Sigma Phi Honor Society (SSP)",
    "American Medical Association (AMA)",
    "American Osteopathic Association (AOA)"
];

