'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SkillIcon from '@/components/SkillIcon'
import MediumArticles from '@/components/MediumArticles'

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const person = {
    name: 'Jason Kam',
    role: 'Full Stack Developer',
    location: 'Asia/Singapore',
    email: 'jason@jasys.xyz',
    social: [
      { name: 'GitHub', url: 'https://github.com/thefiend' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jasonkam' },
    ]
  }

  const experience = [
    {
      company: 'GovTech',
      role: 'Software Engineer',
      period: 'Oct 2022 - Present',
      summary: "Led high-impact grant systems delivering $10.7M+ in citizen disbursements, 60% performance improvements benefitting 2.5M+ users, and 93% security response time reductions across critical government systems.",
      highlights: [
        "Delivered $10.7M in citizen disbursements through high-scale platform serving 2.8K beneficiaries, implementing Spring Boot and Spark architecture with robust eligibility validation and compliance frameworks",
        "Enhanced system performance benefiting 2.5M users by migrating databases from MySQL to PostgreSQL via AWS DMS, achieving ~60% improvement in throughput and reliability through load testing, enabling horizontal scalability for high-complexity workloads.",
        "Reduced development-to-merge cycle time by 75% (4 days → 1 day) by integrating AI into the development workflow and merge request reviews, validated via JIRA burndown metrics and GitLab analytics.",
        "Architected distributed validation pipelines for mission-critical systems, enhancing auditability, fault tolerance, and workflow reliability across government infrastructure",
        "Strengthened security posture across 6 services by implementing real-time CVE monitoring and automated remediation, achieving 93% reduction in vulnerability response time (from 2 weeks to 1 day)"
      ]
    },
    {
      company: 'GovTech',
      role: 'Associate Software Engineer',
      period: 'Mar 2021 - Oct 2022',
      summary: "Selected as one of only 20 candidates for the exclusive Technology Associate Programme (TAP), a highly competitive leadership-trainee programme designed to develop technical expertise and professional skills within Singapore's public sector technology initiatives.",
      highlights: [
        "Spearheaded payment platform integration that expanded disbursement options by 300% and reduced transaction processing time by 50%, processing $1M+ in monthly grant disbursements",
        "Enabled launch of 2 new grant schemes by developing streamlined application system using ReactJS and Ruby on Rails, improving accessibility and user experience for 5,000+ annual applicants",
        "Expanded support for underprivileged communities by building scalable solutions with ReactJS and Go, delivering technology that served 100+ beneficiaries and increased grant schemes accessibility by 60%",
        "Mentored 2 software engineering interns over 6-month cycles, providing technical guidance and professional development support"
      ]
    },
    {
      company: 'CognaLearn',
      role: 'Software Engineer',
      period: 'May 2019 - Aug 2019',
      summary: 'Developed automated team formation web application that reduced teacher workload by 80% and replaced 2-3 hour manual processes with 5-minute automated algorithms for classes of 100+ students.',
      highlights: [
        'Built scalable full-stack solution using ReactJS and Spring Boot, supporting 15+ question types for skill assessment and enabling automated team formation for class sizes ranging from 20-200 students',
        'Implemented comprehensive DevOps pipeline with Travis CI integration, achieving 95% code coverage and reducing deployment time from 4 hours to 15 minutes while cutting post-deployment defects by 75%',
        'Containerised microservices architecture using Docker, reducing environment setup time by 92% and eliminating deployment inconsistencies across development stages',
        'Established secure data infrastructure with MySQL database and JWT authentication, ensuring reliable storage of student profiles and questionnaire responses'
      ]
    }
  ]

  const projects = [
    {
      title: 'MakanGoWhere',
      description: 'A fun and simple voting app that helps groups decide what to eat in seconds. Create a poll, vote with friends, and settle the "where to makan?" debate effortlessly.',
      year: '2023',
      link: 'https://github.com/thefiend/makangowhere',
      preview: '/assets/images/portfolio/MakanGoWhere.png',
      tags: ['React', 'Spring Boot', 'MySQL'],
      highlights: [
        'Built real-time polling system with live vote synchronisation across multiple participants',
        'Designed intuitive UX flow to minimise decision fatigue for group dining scenarios',
        'Implemented RESTful API with Spring Boot backend and MySQL persistence layer',
      ]
    },
    {
      title: 'LuckyDraw.me',
      description: 'Free online random name picker tool that lets you enter a list of names or items and randomly select winners for giveaways, raffles, or contests.',
      year: '2019',
      link: 'https://www.luckydraw.me',
      preview: '/assets/images/portfolio/LuckyDraw.png',
      tags: ['React', 'JavaScript', 'Responsive Design'],
      highlights: [
        'Developed a stateless, client-side randomisation engine ensuring fair and reproducible draws',
        'Designed fully responsive UI optimised for both desktop and mobile usage',
        'Achieved organic growth to thousands of monthly active users with zero marketing spend',
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 pl-20">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <section id="home" className="mb-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-8">
            <img
              src="/assets/images/jason-kam.jpeg"
              alt={person.name}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-top shrink-0 border border-neutral-200 dark:border-neutral-800"
            />
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full mb-6">
                {person.location}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Kam Ming Feng</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                Singapore-based developer building modern, scalable web applications with clean design and frictionless user experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {person.social.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-sm font-medium">
                {link.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
              Get in touch
            </a>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <h3 className="text-2xl font-bold mb-12">Experience</h3>
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={index} className={`pb-12 ${index < experience.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}`}>
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{item.company}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">{item.role}</p>
                  </div>
                  <span className="text-md text-neutral-500 dark:text-neutral-500">{item.period}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {item.summary}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                      <span className="text-neutral-400 dark:text-neutral-600 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="mb-32">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Project</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A curated collection of projects showcasing my growth across web development. Each project reflects deliberate problem-solving, technical refinement, and continuous skill advancement.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`pb-16 ${index < projects.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-800' : ''}`}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                      <span className="text-md text-neutral-500 dark:text-neutral-500">{project.year}</span>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                          <span className="text-neutral-400 dark:text-neutral-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {project.preview && (
                    <div className="w-full md:w-72 shrink-0">
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 object-cover object-top shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity"
                        onClick={() => setLightboxIndex(index)}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="technical-skills" className="mb-32">
          <h3 className="text-2xl font-bold mb-12">Technical Skills</h3>
          <div className="space-y-8">

            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h4 className="font-semibold text-md">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Go', 'Python', 'JavaScript', 'TypeScript', 'Ruby', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 text-md font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full">
                    <SkillIcon name={skill} />{skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <h4 className="font-semibold text-md">Frameworks</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Apache Spark', 'React', 'Next.js', 'Jest', 'Node.js', 'Django', 'Flask', 'FastAPI', 'Ruby on Rails'].map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 text-md font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full">
                    <SkillIcon name={skill} />{skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6M9 15h4" />
                </svg>
                <h4 className="font-semibold text-md">Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Elasticsearch'].map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 text-md font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full">
                    <SkillIcon name={skill} />{skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h4 className="font-semibold text-md">Cloud / Infra</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitLab'].map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 text-md font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full">
                    <SkillIcon name={skill} />{skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <h4 className="font-semibold text-sm">Certifications</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Google Associate Cloud Engineer', url: 'https://www.credly.com/badges/8b1f699f-5726-4f32-99ac-934524f2d917/public_url' },
                  { name: 'PSM I', url: 'https://www.scrum.org/certificates/494495' },
                  { name: 'Certified LeSS Practitioner', url: 'https://less.works/certificates/jason-kam-26277442598.pdf' },
                ].map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-md font-medium bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                    {cert.name}
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Writing Section */}
        <section id="writing" className="mb-32">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Writing</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Thoughts on software engineering, architecture, and lessons from the field.
            </p>
          </div>
          <MediumArticles />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-32 text-center">
          <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity font-medium">
            Send me an email
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
        </footer>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={projects.filter(p => p.preview).map(p => ({ src: p.preview! }))}
      />
    </div>
  )
}
