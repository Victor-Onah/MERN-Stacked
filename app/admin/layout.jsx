import { Archivo, Cutive_Mono } from "next/font/google";
import Header from "./components/header";
import "../shared/globals.css";

const archivo = Archivo({ subsets: ["latin"] });
const cutiveMono = Cutive_Mono({
  subsets: ["latin"],
  variable: "--cutive-mono",
  weight: ["400"],
});

export const metadata = {
  title: "Admin | Sign In",
  description: "Sign in to your account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className} style={{ overflowX: "hidden" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
