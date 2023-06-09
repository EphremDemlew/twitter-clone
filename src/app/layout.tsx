import { Inter } from "next/font/google";
import "@/styles/global.css";
import Sidebar from "@/components/layout/Sidebar";
import RightSideBar from "@/components/layout/RightSideBar";

import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import ChatterModal from "@/components/modals/ChatterModal";
import EditModal from "@/components/modals/EditModal";

import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";
import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EChatter",
  description: "Get connected with thousands of users.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Theme>
            <Toaster position="top-right" />
            <LoginModal />
            <EditModal />
            <ChatterModal />
            <RegisterModal />
            <div className="h-screen bg-white dark:bg-black overflow-y-scroll scrollbar-hide">
              <div className="container h-full mx-auto xl:px-26 max-w-6xl">
                <div className="grid grid-cols-4 h-full  ">
                  <div className="col-span-1 h-screen pr-4 md:pr-6 flex justify-end">
                    <Sidebar />
                  </div>
                  <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neural-400  dark:border-neutral-800 overflow-visible">
                    {children}
                  </div>
                  <div>
                    <RightSideBar />
                  </div>
                </div>
              </div>
            </div>
          </Theme>
        </Provider>
      </body>
    </html>
  );
}
