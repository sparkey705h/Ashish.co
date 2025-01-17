import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface Experience {
  title: string;
  company: string;
  companyInfo?: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string;
  website?: string;
}

// Helper function to calculate duration
function calculateDuration(period: string): string {
  const [start, end] = period.split(" - ");
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  
  // Get difference in months
  const diffYears = endDate.getFullYear() - startDate.getFullYear();
  const diffMonths = endDate.getMonth() - startDate.getMonth();
  
  // Total months accounting for year difference
  let months = diffMonths + diffYears * 12;
  
  // Adjust for partial months
  if (endDate.getDate() < startDate.getDate()) {
    months--;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths}mo`;
  }
  
  return remainingMonths === 0 
    ? `${years}yr`
    : `${years}yr ${remainingMonths}mo`;
}

// Helper function to extract status from title
function extractStatus(title: string): string {
  const match = title.match(/\((.*?)\)/);
  return match ? match[1] : 'Full-time';
}

// Helper function to get status color
function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'intern':
      return 'bg-blue-500/10 text-blue-500';
    case 'contract':
      return 'bg-purple-500/10 text-purple-500';
    case 'freelance':
      return 'bg-green-500/10 text-green-500';
    case 'full-time':
    default:
      return 'bg-primary/10 text-primary';
  }
}

const experiences: Experience[] = [
  {
    company: "JPMorgan Chase",
    website: "https://www.jpmorganchase.com",
    title: "Data Domain Architect - Data Delivery",
    companyInfo: "JPMorgan Chase is the largest bank in the United States and the 5th largest bank in the world. The Consumer & Community Banking (CCB) business has been one of the most aggressive financial institutions in its commitment to leveraging data and analytics to deliver value to its customers and the business.",
    period: "Aug 2023 - Present",
    location: "Plano, Texas · Hybrid",
    description: [
      "Technical Product Associate on the Data Delivery team, working on Data Lens (formerly COBRA) our Data Publishing and Scoring initiative - the enterprise metadata management and data quality scoring application responsible for all JPMC data",
      "Drive continuous data modernization efforts to make the firm's data more Findable, Accessible, Interoperable, and Reusable (FAIR principles)",
      "Design and implement solutions for metadata management across relational and graph databases to enhance data discovery and quality assessment. Leveraged knowledge graphs to create various recomendation engines to increase user efficiency 10x or more",
      "Develop and maintain automated workflows for data quality scoring and reporting using Alteryx, Python, SQL, and Tableau",
      "Doubled our data store from 150k to 280k by onboarding First Republic Bank. Implemented many custom solutions to allow the ingestion and transformation of their data to be done more quickly and efficiently",
    ],
    technologies: ["AWS", "Python", "RDF - Resource Description Framework", "Alteryx", "Tableau", "SQL"],
    logo: "/companies/jpmorganchase_logo.jpeg"
  },
  {
    title: "DevOps Engineer (Freelance)",
    company: "Upwork",
    website: "https://www.upwork.com",
    companyInfo: "Started freelancing after successfully building a serverless application for a relative. Continued taking on projects for fun while completing my final semester of college, helping clients modernize their infrastructure and reduce costs.",
    period: "Jan 2023 - Jun 2023",
    location: "Remote",
    description: [
      "AWS Certified Solution Architect specializing in serverless architecture",
      "Designed and optimized serverless applications using AWS Lambda, integrating with S3, DynamoDB, API Gateway, Snowflake, and Teradata",
      "Developed CI/CD pipeline for automated multi-environment deployments with parameterized configurations",
      "Facilitated 'de-kubernetization' to improve user configuration experience",
    ],
    technologies: ["AWS", "Lambda", "S3", "DynamoDB", "API Gateway", "Snowflake", "Teradata", "JavaScript", "SQL"],
    logo: "/companies/upwork_logo.jpeg"
  },
  {
    title: "Solutions Architect (Contract)",
    company: "Capital One",
    website: "https://www.capitalone.com",
    companyInfo: "Capital One is a Fortune 100 company and one of the largest banks in the United States. As a technology-first financial institution, they are known for their innovative approach to banking and strong emphasis on cloud-native solutions and cybersecurity.",
    period: "Jul 2022 - Dec 2022",
    location: "Dallas, Texas · On-site",
    description: [
      "Designed and implemented centralized event logging infrastructure for corporate security team",
      "Created data warehouse using DynamoDB for security event monitoring and vulnerability detection",
      "Developed serverless solutions using AWS Lambda for event processing and analysis",
    ],
    technologies: ["AWS", "AWS Lambda", "DynamoDB", "Python", "Docker", "REST APIs", "Git", "SQL"],
    logo: "/companies/capital_one_logo.jpeg"
  },
  {
    title: "Network and System Engineer (Full-time)",
    company: "Cisco",
    website: "https://www.cisco.com",
    companyInfo: "Cisco Systems is the global leader in networking technology, powering the internet and enterprise networks worldwide. Their Richardson campus is one of their largest engineering sites, responsible for developing and maintaining critical networking infrastructure used by organizations around the world.",
    period: "Jul 2020 - Feb 2021",
    location: "Richardson, Texas · On-site",
    description: [
      "Managed user requests and conducted root cause analysis to isolate faults and implement timely fixes",
      "Managed CISCO routers including OS upgrades, connection management, and new device setup",
      "Isolated hardware and software faults across network fabric for efficient issue resolution",
      "Led physical migration of 100+ servers across multiple buildings",
    ],
    technologies: ["Cisco Routers", "Networking", "Routing", "DevOps", "SQL"],
    logo: "/companies/cisco_logo.jpeg"
  },
  {
    title: "DevOps Engineer (Intern)",
    company: "EZOPS Inc",
    website: "https://www.ezops.com",
    companyInfo: "EZOPS is a pioneering fintech company that harnesses machine learning and intelligent process automation to revolutionize data control in financial services. As one of the first FinTech firms to offer AI-enabled reconciliation and automation solutions, they serve some of the world's largest financial institutions with their comprehensive data control platform covering reconciliation, research, remediation, and reporting.",
    period: "Dec 2019 - Jan 2020",
    location: "San Francisco, California · On-site",
    description: [
      "Developed a full-stack log aggregation application for monitoring Docker containers",
      "Implemented unified log viewing across microservices on AWS infrastructure",
      "Utilized ELK stack for centralized logging and monitoring solutions",
    ],
    technologies: ["AWS", "Docker", "ELK Stack", "Kibana", "Logstash", "Git", "SQL"],
    logo: "/companies/ezopsinc_logo.jpeg"
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="space-y-12 max-w-6xl mx-auto relative">
          {/* Single Vertical Line */}
          <div className="absolute left-[200px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-border/0 via-border to-border/0"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-[200px_1fr] gap-8 group">
              {/* Left Column - Time, Location, and Logo */}
              <div className="space-y-4">
                <div className="space-y-1 relative">
                  {/* Circle with pulse effect for current position */}
                  <div className="absolute right-[-8px] top-[6px] w-[16px] h-[16px] rounded-full border-2 border-primary/50 bg-background shadow-lg">
                    {index === 0 && (
                      <>
                        <div className="absolute inset-[3px] rounded-full bg-primary animate-pulse" />
                        <div className="absolute -inset-2 rounded-full border border-primary/20 animate-ping" />
                      </>
                    )}
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{exp.period}</p>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${getStatusColor(extractStatus(exp.title))}`}>
                      {extractStatus(exp.title)}
                    </span>
                    <span className="text-xs text-muted-foreground/80 italic">
                      {calculateDuration(exp.period)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                {exp.logo && (
                  <div className="relative w-16 h-16 rounded-md border overflow-hidden group/logo shadow-md hover:shadow-xl transition-shadow">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover transition-transform group-hover/logo:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/logo:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </div>
                      </a>
                    ) : (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Experience Details Card */}
              <div className="relative pl-8 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="space-y-6 p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                  {/* Company and Role */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {exp.website ? (
                        <a 
                          href={exp.website}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-primary transition-colors group/link"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <p className="text-lg font-medium bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {exp.title.replace(/\s*\(.*?\)\s*/, '')}
                    </p>
                    {exp.companyInfo && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.companyInfo}
                      </p>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-base font-medium">Responsibilities</h4>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed hover:text-foreground transition-colors">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-base font-medium">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium bg-secondary/50 shadow-sm hover:shadow hover:bg-secondary/70 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 