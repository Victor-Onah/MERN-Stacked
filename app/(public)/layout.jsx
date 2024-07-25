import Footer from "./components/footer";
import Header from "./components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../shared/globals.css";

/**
 * @typedef {import('react')} React
 */

/**
 * Metadata for the entire application.
 */
export const metadata = {
	title: "MERN Stacked - Exploring the MERN Stack and more",
	description:
		"Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
	openGraph: {
		title: "MERN Stacked - Exploring the MERN Stack and more",
		description:
			"Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
		images: ["/images/social-media-banner.png"],
		url: `https://mernstacked.vercel.app/`,
		authors: "Onah Victor",
		siteName: "MERN Stacked"
	},
	twitter: {
		title: "MERN Stacked - Exploring the MERN Stack and more",
		description:
			"Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
		images: ["/images/social-media-banner.png"],
		url: `https://mernstacked.vercel.app/`,
		creator: "@__allAboutJS",
		creatorId: "https://x.com/@__allAboutJS",
		site: `https://mernstacked.vercel.app/`
	},
	metadataBase: new URL(process.env.METADATA_BASE || "http://localhost:3000")
};

/**
 * Root layout for the entire application.
 * @param {React.PropsWithChildren} props
 * @returns {React.JSX.Element}
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
