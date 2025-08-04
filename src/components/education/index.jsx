import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AlternateReverseTimeline() {
  return (
    <>
    <div className="flex  justify-center mt-30">
      <span className='text-3xl font-bold'>Educação</span>
        

    </div>
    <div className="education information mt-10">
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
        >
            <h3>Análise e desenvolvimento de sistemas</h3>
            <p className='text-sm'>Universidade Mauricio de Nassau</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Full-Stack 
          <p className='text-sm' >Digital College</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Ciência de dados
          <p className='text-sm'>Capacita UECE</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </>

  );
}