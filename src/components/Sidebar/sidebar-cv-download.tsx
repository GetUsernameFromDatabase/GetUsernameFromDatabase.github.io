import { AiOutlineDownload } from 'react-icons/ai';

const SidebarCvDownload = () => {
  return (
    <div className="mt-10 text-center">
      <a
        href="/cv-en.pdf"
        className="inline-flex items-center gap-2 rounded-[60px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] px-6 py-3 text-slate-50"
      >
        <AiOutlineDownload />
        Download CV
      </a>
    </div>
  );
};

export default SidebarCvDownload;
