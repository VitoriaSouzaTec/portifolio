"use client";

import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Cor neutra/escura para a barra de progresso (substituindo o azul padrão)
const BAR_COLOR = '#191919'; 

// RECEBENDO 'percentage' como uma prop (sem TARGET_PERCENTAGE fixo)
export function AnimatedLinearProgress({ label, iconUrl, iconAlt, percentage }) {
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);
  
  // O valor final da animação é a prop 'percentage'
  const TARGET_PERCENTAGE = percentage || 0; // Garantir que não seja nulo

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && progress === 0) {
            const timer = setTimeout(() => {
              // Atinge o valor específico (ex: 90)
              setProgress(TARGET_PERCENTAGE);
            }, 300); 
            observer.unobserve(entry.target); 
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [progress, TARGET_PERCENTAGE]); // Adicione TARGET_PERCENTAGE às dependências para segurança

  return (
    <Box sx={{ width: '100%', mb: 2 }} ref={ref}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        {iconUrl && <img src={iconUrl} alt={iconAlt} width={20} style={{ marginRight: 8 }} />}
        <Typography variant="body2" color="text.primary" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {label}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }}>
          {TARGET_PERCENTAGE}% {/* Exibe a porcentagem específica */}
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ 
          height: 8, 
          borderRadius: 5,
          transition: 'width 1.5s ease-out',
          // Cor do fundo da trilha
          '& .MuiLinearProgress-bar': {
            backgroundColor: BAR_COLOR, /* <-- NOVA COR! */
          },
          // Cor de toda a trilha
          backgroundColor: '#EAEAEA',
        }} 
      />
    </Box>
  );
}
