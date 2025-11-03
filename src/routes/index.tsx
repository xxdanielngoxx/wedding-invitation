import { createFileRoute, Link } from "@tanstack/react-router";
import Album from "@/components/invitation/Album";
import CountDown from "@/components/invitation/Countdown";
import Hero from "@/components/invitation/Hero";
import Location from "@/components/invitation/Location";
import RegistrationV2 from "@/components/invitation/RegistrationV2";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center">
			<Hero></Hero>
			<CountDown></CountDown>
			<Album></Album>
			<Location></Location>
			{/* <RegistrationV2></RegistrationV2> */}
		</div>
	);
}
