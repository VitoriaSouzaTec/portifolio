import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ChevronDown } from 'lucide-react';
import { AnimatedLinearProgress } from '@/lib/AnimatedLinearProgress'; 

export default function AccordionUsage() {
  
  // ADICIONADO: Campo 'percentage' com valores variados
  const skillsData = [
    {
      title: "Frontend & UI/UX",
      id: "frontend",
      items: [
        { label: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", iconAlt: "HTML", percentage: 90 },
        { label: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", iconAlt: "CSS", percentage: 85 },
        { label: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", iconAlt: "JavaScript", percentage: 85 },
        { label: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconAlt: "React", percentage: 80 },
        { label: "Next.js", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/nextjs/nextjs-original.svg", iconAlt: "Next.js", percentage: 75 },
        { label: "Tailwind CSS", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg", iconAlt: "Tailwind", percentage: 90 },
        { label: "Testes de Interface", iconUrl: null, iconAlt: "Testes", percentage: 65 },
      ],
    },
    {
      title: "Backend & Banco de Dados",
      id: "backend",
      items: [
        { label: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", iconAlt: "Node.js", percentage: 85 },
        { label: "Express", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", iconAlt: "Express", percentage: 75 },
        { label: "Prisma ORM", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/prisma/prisma-original.svg", iconAlt: "Prisma", percentage: 80 },
        { label: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconAlt: "MongoDB", percentage: 70 },
        { label: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", iconAlt: "PostgreSQL", percentage: 80 },
        { label: "Insomnia", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/insomnia/insomnia-plain.svg", iconAlt: "Insomnia", percentage: 95 },
        { label: "Testes de API", iconUrl: null, iconAlt: "Testes", percentage: 75 },
        { label: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", iconAlt: "Redis", percentage: 60 },
        { label: "Watchdog", iconUrl: null, iconAlt: "Watchdog", percentage: 70 },
      ],
    },
    
  ];

  return (
    <>
      {/* Título: Aplica font-sans */}
      <h2 className='font-bold mt-15 text-3xl flex justify-center text-foreground font-sans' id='hardskills'>Habilidades</h2>

      <div className='mt-10 flex flex-col gap-4 justify-center items-center px-4'>
        
        {skillsData.map((section) => (
          <Accordion 
            key={section.id} 
            sx={{ 
              width: { xs: '100%', sm: '90%', md: '40%' }, 
              maxWidth: '800px',
              bgcolor: "#FFFFFF", 
              color: "#191919", 
              border: '1px solid #EAEAEA', 
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', 
              borderRadius: '8px'
            }}
          >
            <AccordionSummary 
              expandIcon={<ChevronDown className="text-foreground" />} 
              aria-controls={`${section.id}-content`} 
              id={section.id}
            >
              {/* Título do Accordion: Aplica font-sans */}
              <Typography 
                component="span" 
                sx={{ fontWeight: 'bold' }} 
                className="font-sans" /* <-- FONT-SANS AQUI */
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            
            <AccordionDetails className="font-serif"> {/* <-- FONT-SERIF NO CONTAINER DE DETALHES */}
              {section.items.map((skill, index) => (
                <AnimatedLinearProgress 
                  key={index}
                  label={skill.label}
                  iconUrl={skill.iconUrl}
                  iconAlt={skill.iconAlt}
                  percentage={skill.percentage} 
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}
