import Main from "@/app/sections/Main";
import Footer from "./footer";
import Welcome from "./sections/Welcome";
import Highlights from "./sections/Highlights";
import Gallery from "./sections/Gallery";
import Quote from "./sections/Quote";

export default function Page() {
	return (
		<div className="flex flex-col flex-1 overflow-x-hidden bg-background pt-24 md:pt-32 items-center">
			<Main />
			<Welcome />
			<Highlights />
			<Gallery />
			<Quote />
			<Footer />
		</div>
	);
}
