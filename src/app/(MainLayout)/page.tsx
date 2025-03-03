import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/AuthServices";
import React from "react";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default HomePage;
