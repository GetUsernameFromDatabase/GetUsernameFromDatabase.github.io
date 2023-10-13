import { BiMailSend, BiSolidPhoneCall } from 'react-icons/bi';

import { personalInfo } from '../info';

const ContactPage = () => {
  return (
    <div className="mt-8 px-12 pt-16">
      <div>
        <h2 className="after:contents[] relative -translate-y-1/2 font-roboto-slab text-4xl font-bold text-slate-900 after:absolute after:left-52 after:right-8 after:top-1/2 after:h-[2px] after:w-36 after:bg-primary dark:text-slate-50">
          Contact
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex items-center gap-4">
          <BiSolidPhoneCall class="h-10 w-10 text-[#144d61]" />
          <div>
            <h3 className="pb-2 text-xl font-semibold dark:text-white">
              Phone
            </h3>
            <p className="inline-flex flex-col gap-1">
              <a
                className="text-gray-lite text-lg dark:text-[#A6A6A6] "
                href={`tel:${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BiMailSend class="h-10 w-10 text-[#ffa403]" />
          <div>
            <h3 className="pb-2 text-xl font-semibold dark:text-white">
              Email
            </h3>
            <p className="inline-flex flex-col gap-1">
              <a
                className="text-gray-lite text-lg dark:text-[#A6A6A6] "
                href={`mailto:${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-6 lg:pt-20">
        <p className="text-2xl text-slate-700 dark:text-slate-100">
          {"I'm always open to discussing product"}
        </p>
        <p className="text-2xl font-medium text-slate-900 dark:text-slate-100">
          design work or partnerships.
        </p>
        <form id="myForm">
          <div className="group relative z-0 mb-8 mt-[40px] w-full">
            <input
              type="text"
              name="name"
              className="text-gray-lite peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm autofill:bg-transparent focus:border-[#FF6464] focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white dark:focus:border-[#FF6464]"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="dark:text-color-910 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464]"
            >
              Name *
            </label>
          </div>
          <div className="group relative z-0 mb-8 w-full">
            <input
              type="email"
              name="user_email"
              className="needed text-gray-lite peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm autofill:text-red-900 focus:border-[#5185D4] focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white dark:focus:border-[#FF6464]"
              placeholder=" "
              id="user_email"
              required
            />
            <label
              htmlFor="user_email"
              className="dark:text-color-910 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464]"
            >
              Email *
            </label>
          </div>
          <div className="group relative z-0 mb-8 w-full">
            <input
              type="text"
              name="message"
              className="text-gray-lite peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm autofill:bg-yellow-200 focus:border-[#CA56F2] focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white dark:focus:border-[#FF6464]"
              placeholder=" "
              id="message"
              required
            />
            <label
              htmlFor="message"
              className="dark:text-color-910 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464]"
            >
              Message *
            </label>
          </div>
          <div className="mt-3 inline-block rounded-lg from-[#FA5252] to-[#DD2476] transition-all duration-300 ease-in-out hover:bg-gradient-to-r">
            <input
              type="submit"
              className="border-color-910 cursor-pointer rounded-lg border-[2px] px-6 py-2 font-semibold transition duration-200 ease-in hover:border-transparent hover:text-white dark:text-white"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
