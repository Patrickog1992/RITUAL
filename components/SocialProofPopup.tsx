import React, { useState, useEffect } from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

const names = [
  "Maria S.", "Ana P.", "Fernanda L.", "Juliana M.", "Larissa C.", 
  "Patrícia B.", "Camila R.", "Bruna T.", "Jéssica O.", "Amanda G.", 
  "Beatriz M.", "Roberta F.", "Carla D.", "Mariana S."
];

const cities = [
  "São Paulo", "Rio de Janeiro", "BH", "Curitiba", "Salvador", 
  "Fortaleza", "Brasília", "Recife", "Porto Alegre", "Manaus", 
  "Goiânia", "Campinas", "Belém", "Florianópolis"
];

export const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "" });

  useEffect(() => {
    const trigger = () => {
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        setData({ name, city });
        setIsVisible(true);
        
        setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Fica visível por 5 segundos
    };

    // Primeiro pop-up aparece rápido (3s)
    const timeout = setTimeout(trigger, 3000);
    
    // Intervalos aleatórios entre 10 e 20 segundos
    const loop = () => {
        const nextTime = Math.random() * (20000 - 10000) + 10000;
        setTimeout(() => {
            trigger();
            loop();
        }, nextTime);
    };
    
    // Inicia o loop após o primeiro
    const loopTimeout = setTimeout(loop, 8000);

    return () => {
        clearTimeout(timeout);
        clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <div 
        className={`fixed top-2 right-2 z-50 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
    >
      <div className="bg-[#0a0505]/95 backdrop-blur-md border border-gray-800 rounded-md p-1.5 shadow-2xl flex items-center gap-2 max-w-[160px] md:max-w-[220px] select-none">
        <div className="bg-orange-500/10 p-1 rounded-full border border-orange-500/20 flex-shrink-0 relative">
            <Flame className="w-2.5 h-2.5 text-orange-500" />
            <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-0.5">
                <p className="text-[7px] uppercase tracking-wider text-gray-500 font-bold leading-none">Verificado</p>
                <CheckCircle2 className="w-2 h-2 text-green-500/70" />
            </div>
            <p className="text-[9px] text-gray-300 leading-tight">
                <span className="font-semibold text-white">{data.name}</span> <span className="opacity-70">de {data.city}</span> recebeu o <span className="font-semibold text-orange-400">RITUAL</span>
            </p>
        </div>
      </div>
    </div>
  );
};