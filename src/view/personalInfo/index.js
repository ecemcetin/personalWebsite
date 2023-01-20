import Image from 'next/image';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TbBrandGithub } from 'react-icons/tb';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TbBrandMedium } from 'react-icons/tb';
import React from 'react';
import styles from '../personalInfo/index.module.scss'

function PersaonelInfo() {
    return (
        <>
        <div className='w-full mb-6 lg:mb-0  mx-auto  relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 '>
            <Image
                src="/images/ecemcetin.jpeg"
                alt="me"
                width={767}
                height={724}
                className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
            />            
            <div className='pt-[100px] pb-8'>
                <h1 className='mt-6 mb-1 text-5xl font-semibold  dark:text-white'>ecem</h1>
                <h3 className='mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  '>
                    ecemişko
                </h3>
                <div className='flex justify-center space-x-3'>
                    <a>
                        <span className={`${styles.socialMedias}`}>
                        a
                        </span>
                        <span className={`${styles.socialMedias}`}>
                        a
                        </span>
                        <span className={`${styles.socialMedias}`}>
                        a
                        </span>
                        <span className={`${styles.socialMedias}`}>
                        a
                        </span>
                    </a>
                </div>
                <div className={`${styles.infoBox}`}>
                    <div className='flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5'>
                        <span className='flex-shrink-0 dark:bg-black text-[#E93B81] shadow-md'>
                             <MdOutlineAlternateEmail  />
                        </span>
                       <div className='text-left ml-2.5'>
                        <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>ecem</p>
                        <p className='dark:text-white break-all'>çetin</p>
                       </div>
                    </div>
                    <div className='flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5'>
                        <span className='flex-shrink-0 dark:bg-black text-[#E93B81] shadow-md'>
                        <TbBrandGithub />
                        </span>
                       <div className='text-left ml-2.5'>
                        <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>ecem</p>
                        <p className='dark:text-white break-all'>çetin</p>
                       </div>
                    </div>
                    <div className='flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5'>
                        <span className='flex-shrink-0 dark:bg-black text-[#E93B81] shadow-md'>
                        <TiSocialLinkedin />
                        </span>
                       <div className='text-left ml-2.5'>
                        <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>ecem</p>
                        <p className='dark:text-white break-all'>çetin</p>
                       </div>
                    </div>
                    <div className='flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5'>
                        <span className='flex-shrink-0 dark:bg-black text-[#E93B81] shadow-md'>
                        <TbBrandMedium />
                        </span>
                       <div className='text-left ml-2.5'>
                        <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>ecem</p>
                        <p className='dark:text-white break-all'>çetin</p>
                       </div>
                    </div>
                </div>
                <a className='inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6'>ecem</a>
            </div>
        </div>
        </>

    );
}

export default PersaonelInfo;