import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateReverseTimeline() {

  const primaryTextColor = 'var(--gold)';
  const neutralDotColor = 'var(--gold-dim)';

  return (

    <div className="w-[90%] md:w-full max-w-6xl mx-auto px-6 py-12 mt-20  shadow-lg rounded-xl border border-primary/40 bg-background/50 backdrop-blur-sm" id='education'>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* Coluna Educação */}
        <div>
          <div className="flex justify-center mb-8">
            <span className={`text-3xl font-bold font-sans text-foreground`}>Educação</span>
          </div>
          <div className="education information max-w-2xl mx-auto">
            <Timeline position="alternate-reverse">
              {/* Item 1: ADS */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'var(--gold)' }} />
                  <TimelineConnector sx={{ bgcolor: 'var(--gold-dim)' }} />
                </TimelineSeparator>
                <TimelineContent
                  className={`text-foreground pb-8 pl-4 pr-4 font-serif`}
                  sx={{ py: '12px', px: 2 }}
                >
                  <h3 className="text-lg font-bold font-sans">Análise e Desenvolvimento de Sistemas</h3>
                  <p className='text-sm text-gray-500'>Universidade Maurício de Nassau (Cursando)</p>
                </TimelineContent>
              </TimelineItem>

              {/* Item 2: Full-Stack */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'var(--gold)' }} />
                  <TimelineConnector sx={{ bgcolor: 'var(--gold-dim)' }} />
                </TimelineSeparator>
                <TimelineContent
                  className={`text-foreground pb-8 pl-4 pr-4 font-serif`}
                  sx={{ py: '12px', px: 2 }}
                >
                  <h3 className="text-lg font-bold font-sans">Desenvolvimento Full-Stack</h3>
                  <p className='text-sm text-gray-500'>Digital College (Concluído)</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

        {/* Coluna Carreira */}
        <div>
          <div className="flex justify-center mb-8">
            <span className={`text-3xl font-bold font-sans text-foreground`}>Carreira</span>
          </div>
          <div className="career information max-w-2xl mx-auto">
            <Timeline position="alternate-reverse">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'var(--gold)' }} />
                  <TimelineConnector sx={{ bgcolor: 'var(--gold-dim)' }} />
                </TimelineSeparator>
                <TimelineContent
                  className={`text-foreground pb-8 pl-4 pr-4 font-serif`}
                  sx={{ py: '12px', px: 2 }}
                >
                  <h3 className="text-lg font-bold font-sans">Estágio em Front-end</h3>
                  <p className='text-sm text-gray-500 mb-2'>Avanti Desenvolvimento de Sistemas LTDA (Atual)</p>
                  <p className="text-sm/relaxed text-gray-600">
                    Atuação no desenvolvimento e manutenção de interfaces utilizando VTEX, ReactJS, JavaScript e TypeScript, com foco em aplicações front-end modernas. Experiência no consumo e integração de APIs GraphQL, além de contato inicial com Node.js para compreensão do fluxo backend e integração com serviços.
                  </p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>

      </div>
    </div>
  );
}
