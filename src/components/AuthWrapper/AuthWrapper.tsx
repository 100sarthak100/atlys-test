import { ReactNode } from "react";

const AuthWrapper: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-mainBg">
      {children}
    </div>
  );
};

export default AuthWrapper;
