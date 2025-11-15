import React from 'react';
import { descriptiveConstants, DescriptiveConstants } from '../../constants/descriptive';
import clsx from 'clsx';
import { montserrat } from '@/fonts/montserrat';
import { satoshi } from '@/fonts/satoshi';


const DescriptivePara: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-10 mb-24">
            <h2 className={clsx(montserrat.className,"text-3xl font-medium mb-4 text-[#3D3834]")}>{descriptiveConstants.heading}</h2>
            <p className={clsx(satoshi.className,"text-base text-gray-600")}>{descriptiveConstants.content}</p>
        </div>
    );
};

export default DescriptivePara;