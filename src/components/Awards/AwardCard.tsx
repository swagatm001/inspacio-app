import { Award } from '@/constants/awards';
import React from 'react';

const AwardCard: React.FC<Award> = ({ title, description }) => (
    <div className='min-h-[250px] flex items-center'>
        <div className="flex flex-col justify-center items-center bg-white shadow inset-shadow-xs rounded-lg px-3 py-6 h-48">
            <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    </div>
);

export default AwardCard;