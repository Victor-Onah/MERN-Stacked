import { Archivo, Cutive_Mono } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "../shared/globals.css";

const archivo = Archivo({ subsets: ["latin"] });
const cutiveMono = Cutive_Mono({
  subsets: ["latin"],
  variable: "--cutive-mono",
  weight: ["400"],
});

export const metadata = {
  title: "MERN Stacked - Exploring the MERN Stack and more",
  description:
    "Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
  openGraph: {
    title: "MERN Stacked - Exploring the MERN Stack and more",
    description:
      "Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
  },
  twitter: {
    title: "MERN Stacked - Exploring the MERN Stack and more",
    description:
      "Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
  },
  metadataBase: new URL(process.env.METADATA_BASE || "http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
