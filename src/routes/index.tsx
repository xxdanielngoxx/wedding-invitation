import { createFileRoute, Link } from "@tanstack/react-router";
import { Album, BadgeInfo, Images, SquarePen } from "lucide-react";
import CountDown from "@/components/invitation/Countdown";
import Hero from "@/components/invitation/Hero";
import PartyInfo from "@/components/invitation/PartyInfo";
import RegistrationV2 from "@/components/invitation/RegistrationV2";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center">
			<Hero></Hero>
			<CountDown></CountDown>
			<RegistrationV2></RegistrationV2>
		</div>
	);
}
