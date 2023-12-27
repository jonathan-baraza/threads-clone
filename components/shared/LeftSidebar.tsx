"use client";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

const LeftSidebar = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap- px-6">
        {sidebarLinks.map((link, index) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;
          return (
            <Link
              key={index}
              href={link.route}
              className={`flex items-center leftsidebar_link ${
                isActive && "bg-primary-500"
              }`}
            >
              <Image
                src={link.imgURL}
                alt="Image loading"
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden"> {link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="px-6 mt-10">
        <SignedIn>
          <SignOutButton
            signOutCallback={() => {
              router.push("/sign-in");
            }}
          >
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width="24"
                height="24"
              />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
