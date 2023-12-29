import React from "react";
import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

const Onboarding = async () => {
  const user = await currentUser();

  const userInfo: any = {};
  const userData = {
    id: user?.id,
    objecjtId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <div className="text-light-1">Onboarding</div>

      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use threads.
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default Onboarding;
