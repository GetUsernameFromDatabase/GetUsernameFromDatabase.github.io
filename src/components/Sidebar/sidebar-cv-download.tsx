import { AiOutlineDownload } from 'react-icons/ai';

const SidebarCvDownload = () => {
  return (
    <div className='text-center mt-10'>
      <a
        href='/cv-en.pdf'
        className='rounded-[60px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-3 px-6 text-slate-50 inline-flex items-center gap-2'
      >
        <AiOutlineDownload />
        Download CV
      </a>
    </div>
  );
};

export default SidebarCvDownload;
