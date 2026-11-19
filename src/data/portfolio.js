export const portfolio = {
  location: 'Vijayawada, Andhra Pradesh, India',
  email: 'riyazbaji28@gmail.com',
  // Replace with your current phone number if you want it displayed publicly.
  links: {
    github: 'https://github.com/Riyazbaji',
    linkedin: 'https://www.linkedin.com/in/shaik-riyaz-baji-183106286/',
  },
  projects: [
    {
      name: 'Job Portal',
      type: 'BACKEND APPLICATION',
      description: 'A job portal backend that supports job postings, candidate applications and job discovery through REST APIs.',
      highlights: [
        'Built layered Controller, Service and Repository components.',
        'Modelled Job, Company, Candidate, Skill and Application relationships.',
        'Implemented role/skill search and application eligibility checks.',
      ],
      stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'PostgreSQL'],
      github: 'https://github.com/Riyazbaji/jobportal',
      demo: '',
    },
    {
      name: 'Kafka Booking & Notification System',
      type: 'EVENT-DRIVEN SYSTEM',
      description: 'A multi-application booking workflow using Kafka for asynchronous event communication and Eureka for service discovery.',
      highlights: [
        'Separated booking producer and consumer applications.',
        'Configured Kafka brokers, topics and JSON message handling.',
        'Integrated Eureka service discovery and client-side load balancing.',
      ],
      stack: ['Java', 'Spring Boot', 'Apache Kafka', 'Eureka', 'Spring Cloud'],
      github: 'https://github.com/Riyazbaji/kafka-booking-notification-system',
      demo: '',
    },
    {
      name: 'Revit Tool',
      type: 'CYBERSECURITY CLI',
      description: 'A command-line DNS and reconnaissance utility designed to collect useful domain and network information.',
      highlights: [
        'Supports forward/reverse DNS lookup, enumeration and batch mode.',
        'Exports results to CSV and detects cloud providers.',
        'Includes WHOIS, TLS/SSL, SPF/DMARC, DNSSEC and port checks.',
      ],
      stack: ['Java', 'DNS', 'WHOIS', 'TLS/SSL', 'Networking'],
      github: 'https://github.com/Riyazbaji/Revittool',
      demo: '',
    },
    {
      name: 'MySQL CLI Assistant',
      type: 'JAVA CLI PROJECT',
      description: 'A menu-driven Java command-line tool for learning and practising common SQL database operations.',
      highlights: [
        'Supports database and table creation and data insertion.',
        'Practises SELECT, WHERE and JOIN operations.',
        'Connects Java with MySQL through JDBC.',
      ],
      stack: ['Java', 'JDBC', 'MySQL', 'SQL'],
      github: 'https://github.com/Riyazbaji/mysql-cli-assistant',
      demo: '',
    },
  ],
  internships: [
    {
      title: 'Java Full Stack Developer Virtual Internship',
      organization: 'EduSkills / AICTE',
      period: 'July – September 2025 · 10 weeks',
      description: 'Completed a 10-week virtual internship in Java Full Stack Development.',
    },
    {
      title: 'Cyber Security Virtual Internship',
      organization: 'CodeAlpha',
      period: '1 – 30 July 2024',
      description: 'Participated in the CodeAlpha Virtual Internship Program in Cyber Security.',
    },
  ],
  certifications: [
    {
      title: 'Java Software Developer',
      issuer: 'Infosys Foundation Finishing School for Employability',
      period: 'Feb – Mar 2026 · Grade A+',
      url: 'https://drive.google.com/file/d/1T58Cbn5JgKHnm5e7jVENSZb1EVVWG_MJ/view?usp=drivesdk',
    },
    {
      title: 'Applied Artificial Intelligence: Practical Implementations',
      issuer: 'TechSaksham — Microsoft, SAP & Edunet Foundation',
      period: '2024–25',
      url: 'https://drive.google.com/file/d/1rZNAdYu7DBHR3lPWAX_WN9V9WB6WYTe-/view?usp=drivesdk',
    },
    {
      title: 'Java Full Stack Developer Virtual Internship',
      issuer: 'EduSkills / AICTE',
      period: 'July – September 2025',
      url: 'https://drive.google.com/file/d/1xNHDv2IVKwtXmoR8bFlsTl713sdJsFv6/view?usp=drivesdk',
    },
    {
      title: 'Cyber Security Virtual Internship',
      issuer: 'CodeAlpha',
      period: 'July 2024',
      url: 'https://drive.google.com/file/d/1UJytT8gDsCa_OkTarFTXa-PSM7iYD3oW/view?usp=drivesdk',
    },
  ],
}