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
    <div className="min-h-screen bg-[#0f0a0a] text-gray-200 font-poppins flex justify-center pb-20 pt-8 overflow-hidden relative">
      
      {/* Background ambient glow */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${flameIntensity ? 'opacity-20' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="w-full max-w-md flex flex-col px-5 relative z-10">
        
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
                
                <div className="space-y-3 bg-gray-900/30 p-4 rounded-xl border border-gray-800 backdrop-blur-sm">
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

            {/* Altar Area */}
            <div 
                className={`relative border transition-all duration-700 rounded-xl p-8 text-center cursor-pointer overflow-hidden group select-none
                ${flameIntensity 
                    ? 'border-orange-500/50 bg-[#1a0f0f] shadow-[0_0_30px_rgba(255,80,0,0.15)]' 
                    : 'border-gray-800 bg-[#0f0a0a] hover:border-orange-900/50'}`}
                onClick={() => setFlameIntensity(true)}
            >
                 <div className="relative z-20 flex flex-col items-center">
                     <p className={`text-xs md:text-sm font-bold mb-8 uppercase tracking-[0.2em] transition-all duration-500 
                        ${flameIntensity ? 'text-orange-100 drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]' : 'text-gray-500'}`}>
                        {flameIntensity ? 'A chama sagrada consome o destino' : 'Clique no altar para a sacerdotisa chamar o nome dele'}
                     </p>
                     
                     {/* The Altar Scene */}
                     <div className="h-48 w-full flex items-end justify-center relative perspective-[500px]">
                        
                        {/* Magic Circle on Floor */}
                        <div className={`absolute bottom-0 w-48 h-12 border-2 rounded-[100%] transition-all duration-1000 transform
                            ${flameIntensity 
                                ? 'border-orange-500/40 shadow-[0_0_20px_inset_rgba(255,100,0,0.3)] scale-110' 
                                : 'border-gray-800 scale-90 opacity-30'}`}>
                        </div>

                        {/* Stone Base */}
                        <div className="w-40 h-8 bg-gradient-to-b from-gray-800 to-black rounded-lg absolute bottom-2 shadow-2xl z-10 flex items-center justify-center border-t border-gray-700">
                             {/* Runes */}
                             <div className={`w-full h-[1px] bg-orange-500/50 absolute top-0 blur-[1px] transition-opacity duration-1000 ${flameIntensity ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className="flex gap-4 opacity-20">
                                <span className="text-[8px]">ᚠ</span>
                                <span className="text-[8px]">ᚢ</span>
                                <span className="text-[8px]">ᚦ</span>
                                <span className="text-[8px]">ᚨ</span>
                             </div>
                        </div>

                        {/* FIRE CONTAINER */}
                        <div className={`absolute bottom-8 transition-all duration-1000 ease-in-out z-20 ${flameIntensity ? 'scale-125' : 'scale-50 opacity-60'}`}>
                            
                           {/* Outer Glow (Aura) */}
                           <div className={`absolute -left-10 -top-20 w-20 h-32 bg-orange-600 rounded-full blur-[40px] mix-blend-screen transition-opacity duration-500 ${flameIntensity ? 'opacity-60 animate-pulse' : 'opacity-20'}`}></div>

                           {/* Main Fire Body - Layer 1 (Red/Dark Orange) */}
                           <div className={`absolute left-[-20px] top-[-60px] w-[40px] h-[60px] bg-gradient-to-t from-red-600 to-orange-600 rounded-[50%] rounded-t-none blur-[10px] animate-pulse origin-bottom
                                ${flameIntensity ? 'opacity-80' : 'opacity-40'}`}></div>

                           {/* Inner Fire - Layer 2 (Bright Orange) */}
                           <div className={`absolute left-[-15px] top-[-70px] w-[30px] h-[70px] bg-orange-400 rounded-full rounded-t-none blur-[6px] mix-blend-screen animate-[bounce_1.5s_infinite] origin-bottom
                                ${flameIntensity ? 'opacity-90' : 'opacity-0'}`}></div>

                           {/* Core - Layer 3 (Yellow/White) */}
                           <div className={`absolute left-[-10px] top-[-50px] w-[20px] h-[50px] bg-yellow-200 rounded-full blur-[4px] mix-blend-screen animate-pulse
                                ${flameIntensity ? 'opacity-100' : 'opacity-30'}`}></div>
                           
                           {/* White Hot Center */}
                           <div className={`absolute left-[-5px] top-[-30px] w-[10px] h-[30px] bg-white rounded-full blur-[2px]
                                ${flameIntensity ? 'opacity-100' : 'opacity-0'}`}></div>

                            {/* Sparks / Particles */}
                            {flameIntensity && (
                                <>
                                    <div className="absolute left-0 top-[-40px] w-1 h-1 bg-yellow-200 rounded-full blur-[1px] animate-[ping_1s_infinite]"></div>
                                    <div className="absolute left-2 top-[-60px] w-[2px] h-[2px] bg-orange-200 rounded-full blur-[1px] animate-[ping_1.5s_infinite_0.5s]"></div>
                                    <div className="absolute -left-2 top-[-50px] w-[3px] h-[3px] bg-red-200 rounded-full blur-[1px] animate-[ping_2s_infinite_0.2s]"></div>
                                </>
                            )}
                        </div>

                     </div>
                 </div>
            </div>

            {/* Form - Always Visible */}
            <div className="space-y-5 pt-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Seu primeiro nome</label>
                    <input 
                        type="text" 
                        placeholder="Digite aqui seu nome" 
                        className="w-full bg-[#1a1111] border border-orange-900/30 rounded-lg p-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-700 transition-all" 
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">Nome da pessoa amada</label>
                    <input 
                        type="text" 
                        placeholder="Digite aqui o nome da pessoa desejada" 
                        className="w-full bg-[#1a1111] border border-orange-900/30 rounded-lg p-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-700 transition-all" 
                    />
                </div>
            </div>

            {/* Button */}
            <div className="pt-2">
                <a 
                    href="https://go.perfectpay.com.br/PPU38CQ5LBC"
                    className="w-full font-bold py-5 px-6 rounded-lg shadow-xl text-lg flex items-center justify-center gap-3 transition-all duration-500 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(34,197,94,0.5)] cursor-pointer animate-pulse border-b-4 border-green-800"
                >
                    <span>👉 QUERO O FEITIÇO AGORA</span>
                </a>
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