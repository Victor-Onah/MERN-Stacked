import Header from "./components/header";
import "../shared/globals.css";

export const metadata = {
  title: "Admin | Sign In",
  description: "Sign in to your account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-color-mode="light">
      <body style={{ overflowX: "hidden" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
