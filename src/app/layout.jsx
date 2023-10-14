import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weights: [400, 500, 600, 700, 800, 900] });

// To add a favicon replace the file src/app/favicon.ico
// Replace owner.png in public/owner.png with the image of the owner
// The LandingPage.jsx in components/LandingPage.jsx containtes everything
// Conact me for the rest of the files if there is a need

export const metadata = {
	title: "John Doe Consultancy", // Website Title
	description: "John Doe Consultancy is a consultancy firm that helps you with your consultancy needs.", // Website Description
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable}`}>{children}
			</body>
		</html>
	);
}
