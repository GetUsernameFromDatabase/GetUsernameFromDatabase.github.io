interface SidebarNameProffesionProperties {
  avatarSrc: string;
  name: string;
  profession: string;
}

const SidebarNameProffesion = ({
  ...properties
}: SidebarNameProffesionProperties) => {
  return (
    <div>
      <img
        src={properties.avatarSrc}
        alt="Profile"
        className="m-auto -mt-48 h-60 w-60 overflow-hidden rounded-lg text-center"
      />
      <div className="text-center">
        <h2 className="mb-1 mt-6 text-4xl font-semibold dark:text-white">
          {properties.name}
        </h2>
        <h1 className="mb-4 inline-block rounded-lg px-5 py-1.5 text-[#7B7B7B] dark:bg-[#1D1D1D] dark:text-[#A6A6A6]">
          {properties.profession}
        </h1>
      </div>
    </div>
  );
};

export default SidebarNameProffesion;
