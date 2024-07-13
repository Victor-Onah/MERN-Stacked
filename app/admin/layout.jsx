import Header from "./components/header";
import "../shared/globals.css";

/**
 * Metadata for the whole layout
 */
export const metadata = {
	title: "Admin | Sign In",
	description: "Sign in to your account"
};

/**
 *
 * @param {import("react").PropsWithChildren} props
 * @returns {import("react").JSX.Element}
 */
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
