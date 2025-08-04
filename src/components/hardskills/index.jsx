import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ChevronDown } from 'lucide-react';

export default function AccordionUsage() {
  return (
    <>
      <h2 className='font-bold mt-15 text-3xl flex justify-center' id='hardskills'>Habilidades</h2>

      <div className='mt-10 flex flex-col gap-4 justify-center items-center'>
        
        {/* FRONTEND */}
        <Accordion sx={{ w: "40%", bgcolor: "#fce4ec", color: "#000" }}>
          <AccordionSummary expandIcon={<ChevronDown />} aria-controls="panel1-content" id="frontend">
            <Typography component="span">Frontend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width={20} />
                HTML
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width={20} />
                CSS
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={20} />
                JavaScript
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={20} />
                React
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" width={20} />
                Tailwind CSS
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://seeklogo.com/images/M/microsoft-clarity-logo-16AFEF2C60-seeklogo.com.png" alt="Clarity" width={20} />
                Clarity
              </li>
              <li className='flex items-center gap-2'>
                🧪 Testes de interface
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* BACKEND */}
        <Accordion sx={{ w: "40%", bgcolor: "#fce4ec", color: "#000" }}>
          <AccordionSummary expandIcon={<ChevronDown />} aria-controls="panel2-content" id="backend">
            <Typography component="span">Backend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={20} />
                Node.js
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width={20} />
                Express
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://www.svgrepo.com/show/354202/prisma.svg" alt="Prisma" width={20} />
                Prisma ORM
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={20} />
                MongoDB
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width={20} />
                PostgreSQL
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://static-00.iconduck.com/assets.00/insomnia-icon-2048x2048-lq2ga1n1.png" alt="Insomnia" width={20} />
                Insomnia
              </li>
              <li className='flex items-center gap-2'>
                🧪 Testes de API
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" width={20} />
                Redis
              </li>
              <li className='flex items-center gap-2'>
                👁️ Watchdog
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* CIÊNCIA DE DADOS */}
        <Accordion sx={{ w: "40%", bgcolor: "#fce4ec", color: "#000" }}>
          <AccordionSummary expandIcon={<ChevronDown />} aria-controls="panel3-content" id="datascience">
            <Typography component="span">Ciência de dados</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={20} />
                Python
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" width={20} />
                Pandas
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" width={20} />
                NumPy
              </li>
              <li className='flex items-center gap-2'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" width={20} />
                Jupyter Notebook
              </li>
              <li className='flex items-center gap-2'>
                📊 Análise exploratória de dados
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

      </div>
    </>
  );
}
