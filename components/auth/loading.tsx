import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/loader.svg"
        alt="logo"
        width={170}
        height={170}
      />
    </div>
  );
};
