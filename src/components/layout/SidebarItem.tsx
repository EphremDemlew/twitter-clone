import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { BsDot } from "react-icons/bs";

interface SidebarItem {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItem> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert,
}) => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [onClick, href, router, auth, currentUser, loginModal]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-500 dark:hover:bg-slate-800 hover:bg-opacity-10 cursor-pointer lg:hidden ">
        <Icon size={28} className="dark:text-white text-black" />
        {alert ? (
          <BsDot className="text-orange-500 absolute -top-4 left-0" size={79} />
        ) : null}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full  hover:bg-slate-500 dark:hover:bg-slate-800  hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} className="dark:text-white text-black" />
        <p className="hidden lg:block text-black dark:text-white  text-xl ">
          {label}
        </p>
        {alert ? (
          <BsDot className="text-orange-500 absolute -top-4 left-0" size={79} />
        ) : null}
      </div>
    </div>
  );
};

export default SidebarItem;
