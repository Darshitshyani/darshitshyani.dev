import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div
        className="bg-black text-text gradient-div overflow-hidden"
        // style={{ background: "linear-gradient(260deg, #000000, #001f3f)" }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
