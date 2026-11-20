import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-[#0b0d10] border-t border-[#252830]'>
        <footer className='flex justify-between items-center container mx-auto py-5'>

            <div className='flex justify-between items-center gap-4 '>
            <Image
                src={Logo}
                alt="FitLog Logo"
                width={20}
                height={10}
            />
            <h5 className='font-bold'>FITLOG</h5>
            </div>

            <h6 className='text-gray-500 text-[11px]'>
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </h6>

        </footer>
        </div>
    );
};

export default Footer;