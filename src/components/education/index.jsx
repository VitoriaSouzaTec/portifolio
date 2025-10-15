import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateReverseTimeline() {
  
  const primaryTextColor = '#191919';
  const neutralDotColor = '#EAEAEA'; 

  return (

    <div className="max-w-4xl mx-auto px-6 py-12 mt-20 bg-white shadow-lg rounded-xl border border-gray-200" id='education'>
      
      <div className="flex justify-center mb-10">
        <span className={`text-4xl font-bold font-sans ${primaryTextColor}`}>Educação</span>
      </div>

      <div className="education information max-w-2xl mx-auto">
        
        <Timeline position="alternate-reverse">
          {/* Item 1: ADS */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: primaryTextColor }} />
              <TimelineConnector sx={{ bgcolor: neutralDotColor }} />
            </TimelineSeparator>
            <TimelineContent
              className={`text-foreground pb-8 pl-4 pr-4 font-serif`} 
              sx={{ py: '12px', px: 2 }} 
            >
              {/* Título Educação*/}
              <h3 className="text-lg font-bold font-sans">Análise e Desenvolvimento de Sistemas</h3>
              <p className='text-sm text-gray-500'>Universidade Maurício de Nassau (Cursando)</p>
            </TimelineContent>
          </TimelineItem>
      
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: primaryTextColor }} />
              <TimelineConnector sx={{ bgcolor: neutralDotColor }} />
            </TimelineSeparator>
            <TimelineContent
              className={`text-foreground pb-8 pl-4 pr-4 font-serif`} /* <-- font-serif para a leitura */
              sx={{ py: '12px', px: 2 }} 
            >
         
              <h3 className="text-lg font-bold font-sans">Desenvolvimento Full-Stack</h3>
              <p className='text-sm text-gray-500'>Digital College (Concluído)</p>
            </TimelineContent>
          </TimelineItem>
          
          
        </Timeline>
      </div>
    </div>
  );
}
