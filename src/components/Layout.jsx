import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export function Layout(props) {
  return (
    <>
      <Navbar global={props.global} />
      <CursorFollower />
      {props.children}
      <Footer global={props.global} />
    </>
  );
}
