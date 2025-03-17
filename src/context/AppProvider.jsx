import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export async function getServerSideProps() {
  const global = await axios.get("api/global?populate=favicon");
  return {
    props: {
      global: global.data?.data,
    },
  };
}

export function AppProvider({ children, global }) {
  console.log(global);
  return (
    <AppContext.Provider value={{ global }}>
      <Navbar />
      <CursorFollower />
      {children}
      <Footer />
    </AppContext.Provider>
  );
}
