import { ReactNode } from "react";

const AuthWrapper: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-mainBg">
      <div className="mb-[49px]">
        <img src="Logo.svg" />
      </div>

      {children}
    </div>
  );
};

export default AuthWrapper;
