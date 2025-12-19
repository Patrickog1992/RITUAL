import React from 'react';
import { ThumbsUp, Heart } from 'lucide-react';

interface TestimonialProps {
  name: string;
  image: string;
  text: string;
  time: string;
  likes: number;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, image, text, time, likes }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
      <div className="flex items-start gap-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30" />
        <div className="flex-1">
          <h4 className="font-bold text-orange-100 text-sm">{name}</h4>
          <p className="text-gray-300 text-sm mt-1 leading-relaxed">"{text}"</p>
          
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-700/50">
            <span className="text-xs text-gray-500">{time}</span>
            <div className="flex items-center gap-4 text-xs text-gray-400">
               <span className="flex items-center gap-1 text-orange-400">
                 <Heart className="w-3 h-3 fill-orange-400" /> Curtir
               </span>
               <div className="flex items-center gap-1">
                 <div className="flex -space-x-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center"><ThumbsUp className="w-2 h-2 text-white" /></div>
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center"><Heart className="w-2 h-2 text-white fill-white" /></div>
                 </div>
                 <span>{likes}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};