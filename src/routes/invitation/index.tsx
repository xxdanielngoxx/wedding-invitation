import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeInfo, Images, SquarePen } from "lucide-react";
import Album from "@/components/invitation/Album";
import CountDown from "@/components/invitation/Countdown";
import Hero from "@/components/invitation/Hero";
import PartyInfo from "@/components/invitation/PartyInfo";
import RegistrationV2 from "@/components/invitation/RegistrationV2";

export const Route = createFileRoute("/invitation/")({
	component: Invitation,
});

function Invitation() {
	return (
		<div className="drawer">
			{/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div className="navbar bg-base-300 w-full">
					<div className="flex-none lg:hidden">
						<label
							htmlFor="my-drawer-2"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block h-6 w-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="text-2xl font-[Allura] mx-2 flex-1 px-2 flex items-center justify-center">
						Save Our Date
					</div>
					<div className="hidden flex-none lg:block">
						<ul className="menu menu-horizontal">
							{/* Navbar menu content here */}
							<li className="font-semibold">
								<Link to="/register">
									<SquarePen size={20}></SquarePen>
									<span>Đăng ký tham dự lễ cưới</span>
								</Link>
							</li>
							<li className="font-semibold">
								<Link to="/party-info">
									<BadgeInfo size={20}></BadgeInfo>
									<span>Thông tin lễ cưới</span>
								</Link>
							</li>
							<li className="font-semibold">
								<Link to="/images">
									<Images size={20}></Images>
									<span>Xem ảnh cưới</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				{/* Page content here */}
				<Hero></Hero>
				<CountDown></CountDown>
				<PartyInfo></PartyInfo>
				<Album></Album>
				{/* <Registration></Registration> */}
				<RegistrationV2></RegistrationV2>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu bg-base-200 min-h-full w-80 p-4">
					{/* Sidebar content here */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
