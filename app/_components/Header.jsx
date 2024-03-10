"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { data } = useSession();

  useEffect(() => {
    // console.log(data);
  }, [data]);
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8 ">
        <Link href={"/"} >
          <Image src="/logo.svg" alt="Hello" width={200} height={100} />
        </Link>
        <div className="md:flex items-center gap-6 hidden">
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer ">
            Home
          </h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer ">
            Service
          </h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer ">
            About Us
          </h2>
        </div>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Image
                src={data?.user?.image}
                alt="user_image"
                width={35}
                height={35}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Bookings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Login / Signup</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
