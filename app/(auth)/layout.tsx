import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-md p-6 bg-white rounded shadow">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
