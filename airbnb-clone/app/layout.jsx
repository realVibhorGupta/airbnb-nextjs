import Navbar from "@/app/components/navbar/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";
import ClientOnly from "@/app/components/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import  getCurrentUser  from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "@/app/components/modals/SearchModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Jost({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className} suppressHydrationWarning={true}>
        <ClientOnly>
          <ToasterProvider />
          {/* {/* <SearchModal/>
          <RentModal />
         
          <RentModal/> */}
          <LoginModal /> 
           <RegisterModal /> 
          <Navbar currentUser={currentUser} />
        </ClientOnly>
       
        <div className="pb-20 pt-28">{children}</div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
