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
      "Doubled our data store from 150k to 280k by onboarding First Republic Bank",
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
        <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>
        <div className="space-y-12 max-w-6xl mx-auto relative">
          {/* Single Vertical Line */}
          <div className="absolute left-[200px] top-0 bottom-0 w-[1px] bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-[200px_1fr] gap-8">
              {/* Left Column - Time, Location, and Logo */}
              <div className="space-y-4">
                <div className="space-y-1 relative">
                  {/* Circle */}
                  <div className="absolute right-[-8px] top-[6px] w-[16px] h-[16px] rounded-full border border-border bg-background">
                    {index === 0 && <div className="absolute inset-[3px] rounded-full bg-border" />}
                  </div>
                  <p className="text-sm font-medium">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                {exp.logo && (
                  <div className="relative w-16 h-16 rounded-md border overflow-hidden group">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full group"
                      >
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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

              {/* Right Column - Experience Details */}
              <div className="space-y-6 pl-8">
                {/* Company and Role */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {exp.website ? (
                      <a 
                        href={exp.website}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground">{exp.title}</p>
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
                      <li key={i} className="leading-relaxed">{item}</li>
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
                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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