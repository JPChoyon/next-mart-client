"use client";

import UserProvider from "@/context/UseContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
