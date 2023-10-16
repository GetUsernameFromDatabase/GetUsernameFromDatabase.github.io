interface SidebarNameProffesionProperties {
  avatarSrc: string;
  name: string;
  profession: string;
}

const SidebarNameProffesion = ({
  ...properties
}: SidebarNameProffesionProperties) => {
  return (
    <>
      <img
        src={properties.avatarSrc}
        alt="Profile"
        className="m-auto -mt-48 h-60 w-60 overflow-hidden rounded-lg text-center"
      />
      <div className="text-center">
        <h2 className="mb-1 mt-6 text-4xl font-semibold text-primary/90">
          {properties.name}
        </h2>
        <h1 className="mb-4 inline-block rounded-lg bg-accent px-5 py-1.5 text-primary">
          {properties.profession}
        </h1>
      </div>
    </>
  );
};

export default SidebarNameProffesion;
