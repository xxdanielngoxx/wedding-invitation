import { HistoryIcon } from "lucide-react";

export default function History() {
	return (
		<div className="w-full flex flex-col justify-center p-8 bg-base-200">
			<h1 className="flex justify-center gap-3 font-[Allura] text-center text-3xl p-6">
				{<HistoryIcon />} Hành trình yêu nhau
			</h1>
			<ul className="timeline timeline-vertical font-mono">
				<li>
					<time className="font-mono italic">01/01/2020</time>
					<div className="timeline-start timeline-box">Lần đầu gặp nhau</div>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<time className="font-mono italic">14/02/2023</time>
					<div className="timeline-end timeline-box">
						Lần đầu tiên vợ về nhà chồng chơi
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<time className="font-mono italic">02/09/2023</time>
					<div className="timeline-start timeline-box">Lần đầu tiên vợ về nhà chồng chơi</div>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end timeline-box">iPhone</div>
					<hr />
				</li>
				<li>
					<hr />
                    <time className="font-mono italic">09/11/2025</time>
					<div className="timeline-start timeline-box">Tụi mình cưới nhau</div>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</li>
			</ul>
		</div>
	);
}
