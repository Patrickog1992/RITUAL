import React, { useState, useEffect } from 'react';
import { ArrowLeft, Lock, Check } from 'lucide-react';

interface RitualPageProps {
  onBack: () => void;
}

export const RitualPage: React.FC<RitualPageProps> = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 in seconds
  const [flameIntensity, setFlameIntensity] = useState(false); // false = low, true = high
  const [agreements, setAgreements] = useState({
    faith: false,
    secret: false,
    permanent: false
  });

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const allAgreed = agreements.faith && agreements.secret && agreements.permanent;

  return (
    <div className="min-h-screen bg-[#0f0a0a] text-gray-200 font-poppins flex justify-center pb-20 pt-8">
      
      <div className="w-full max-w-md flex flex-col px-5">
        
        {/* Back Button (In Flow) */}
        <div className="mb-4 flex justify-start">
            <button onClick={onBack} className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full -ml-2">
                <ArrowLeft className="w-6 h-6" />
            </button>
        </div>

        <div className="space-y-8">
            {/* Conditions */}
            <div className="space-y-4">
                <div className="text-center mb-2">
                    <div className="inline-block bg-red-900/20 border border-red-900/50 rounded px-4 py-2">
                        <p className="text-red-500 font-bold animate-pulse text-lg tracking-widest">
                            EXPIRA EM: {formatTime(timeLeft)}
                        </p>
                    </div>
                </div>

                <div className="text-center">
                  <h3 className="text-orange-400 font-bold text-lg leading-tight">Concorde com as condições da Sacerdotisa Azara</h3>
                  <p className="text-xs text-gray-400 mt-1">Marque todas as opções abaixo para liberar o feitiço</p>
                </div>
                
                <div className="space-y-3 bg-gray-900/30 p-4 rounded-xl border border-gray-800">
                    <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center pt-1">
                            <input type="checkbox" className="peer sr-only" checked={agreements.faith} onChange={() => setAgreements(prev => ({...prev, faith: !prev.faith}))} />
                            <div className="w-5 h-5 border-2 border-orange-800 rounded peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-all flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                        </div>
                        <span className={`text-sm transition-colors ${agreements.faith ? 'text-orange-100' : 'text-gray-400 group-hover:text-gray-300'}`}>Eu entendo que é necessária fé para que este feitiço funcione.</span>
                    </label>
                    
                    <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center pt-1">
                            <input type="checkbox" className="peer sr-only" checked={agreements.secret} onChange={() => setAgreements(prev => ({...prev, secret: !prev.secret}))} />
                            <div className="w-5 h-5 border-2 border-orange-800 rounded peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-all flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                        </div>
                        <span className={`text-sm transition-colors ${agreements.secret ? 'text-orange-100' : 'text-gray-400 group-hover:text-gray-300'}`}>Eu não contarei a ninguém sobre o feitiço (isso causará o rompimento do encantamento).</span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center pt-1">
                            <input type="checkbox" className="peer sr-only" checked={agreements.permanent} onChange={() => setAgreements(prev => ({...prev, permanent: !prev.permanent}))} />
                            <div className="w-5 h-5 border-2 border-orange-800 rounded peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-all flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                        </div>
                        <span className={`text-sm transition-colors ${agreements.permanent ? 'text-orange-100' : 'text-gray-400 group-hover:text-gray-300'}`}>Eu entendo que, uma vez lançado, este feitiço não pode ser desfeito.</span>
                    </label>
                </div>
            </div>

            {/* Altar */}
            <div 
                className={`relative border-2 ${flameIntensity ? 'border-orange-500 bg-orange-950/30' : 'border-orange-900/30 bg-orange-950/10'} rounded-xl p-6 text-center cursor-pointer transition-all duration-500 overflow-hidden group select-none`}
                onClick={() => setFlameIntensity(true)}
            >
                 <div className="relative z-10">
                     <p className={`text-xs md:text-sm font-bold mb-6 uppercase tracking-widest transition-colors ${flameIntensity ? 'text-orange-200 animate-pulse' : 'text-orange-400/70'}`}>
                        {flameIntensity ? 'A chama está ardendo...' : 'Clique no altar para a SACERDOTISA chamar o nome dele'}
                     </p>
                     
                     <div className="h-40 flex items-end justify-center pb-2 relative">
                        {/* Altar Graphics */}
                        <div className="w-48 h-8 bg-gradient-to-t from-gray-900 to-gray-800 rounded-sm absolute bottom-0 shadow-2xl border-t border-gray-700"></div>
                        <div className="w-56 h-2 bg-[#0a0505] rounded-full absolute -bottom-1 blur-sm"></div>
                        
                        {/* Flame Container */}
                        <div className={`transition-all duration-1000 ease-in-out transform origin-bottom ${flameIntensity ? 'scale-150 -translate-y-4 filter brightness-125' : 'scale-90 opacity-80'}`}>
                           {/* Outer Glow */}
                           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-500/20 rounded-full blur-xl transition-all duration-1000 ${flameIntensity ? 'opacity-100 scale-150' : 'opacity-0'}`}></div>
                           
                           {/* SVG Flame */}
                           <svg 
                             viewBox="0 0 24 24" 
                             fill="none" 
                             className={`w-20 h-20 text-orange-500 drop-shadow-[0_0_15px_rgba(255,140,0,0.6)] ${flameIntensity ? 'animate-[bounce_0.5s_infinite]' : 'animate-[pulse_3s_infinite]'}`}
                           >
                               <path d="M12 2C12 2 8 8 8 13C8 17 11 19 12 22C13 19 16 17 16 13C16 8 12 2 12 2Z" className="fill-orange-600 animate-[pulse_2s_infinite]" />
                               <path d="M12 5C12 5 9 10 9 13.5C9 16 10.5 17.5 12 19C13.5 17.5 15 16 15 13.5C15 10 12 5 12 5Z" className="fill-orange-400 animate-[pulse_1.5s_infinite]" />
                               <path d="M12 8C12 8 10.5 11 10.5 13C10.5 14.5 11 15 12 16C13 15 13.5 14.5 13.5 13C13.5 11 12 8 12 8Z" className="fill-yellow-200 animate-[pulse_0.8s_infinite]" />
                           </svg>
                        </div>
                     </div>
                 </div>
            </div>

            {/* Form */}
            <div className={`space-y-5 transition-all duration-700 ${flameIntensity ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}`}>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Seu primeiro nome</label>
                    <input 
                        type="text" 
                        placeholder="Digite aqui seu nome" 
                        disabled={!flameIntensity}
                        className="w-full bg-[#1a1111] border border-orange-900/30 rounded-lg p-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Nome da pessoa amada</label>
                    <input 
                        type="text" 
                        placeholder="Digite aqui o nome da pessoa desejada" 
                        disabled={!flameIntensity}
                        className="w-full bg-[#1a1111] border border-orange-900/30 rounded-lg p-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                    />
                </div>
            </div>

            {/* Button */}
            <div className="pt-2">
                <button 
                    disabled={!allAgreed || !flameIntensity}
                    className={`w-full font-bold py-5 px-6 rounded-lg shadow-xl text-lg flex items-center justify-center gap-3 transition-all duration-300
                    ${(allAgreed && flameIntensity) 
                        ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(34,197,94,0.5)] cursor-pointer animate-pulse border-b-4 border-green-800' 
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed grayscale'}`}
                >
                    <span>👉 QUERO O FEITIÇO AGORA</span>
                </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest pb-2">
                <Lock className="w-3 h-3" />
                <span>Dados criptografados e sigilosos</span>
            </div>
        </div>
      </div>
    </div>
  );
};