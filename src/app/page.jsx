import LandingPage from "@/components/LandingPage";
import Image from "next/image";

export default function Home() {
	return (
		<main className="grid place-content-center place-items-center min-h-screen py-8">
			<Image width={"1919"} height={"1509"} src={"/background.png"} className="background-Image w-screen h-screen" alt="geometrical background image" />
			<LandingPage />
		</main>
	);
}
