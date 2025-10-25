import { intervalToDuration, isAfter } from "date-fns";
import { useEffect, useState } from "react";

export default function CountDown() {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const weddingDate = new Date("2025-11-09T09:00:00.000+07:00");
	if (isAfter(currentDate, weddingDate)) {
		return <div>Hôn lễ đã hoàn tất!</div>;
	}

	const duration = intervalToDuration({
		start: currentDate,
		end: weddingDate,
	});

	const counterSeconds = duration.seconds ?? 0;
	const counterMinutes = duration.minutes ?? 0;
	const counterHours = duration.hours ?? 0;
	const counterDays = duration.days ?? 0;

	return (
		<section className="bg-white py-8">
			<div className="p-4 max-w-7xl flex items-center justify-center">
				<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
					<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
						<span className="countdown font-mono text-5xl">
							<span
								style={
									{
										"--value": counterDays,
										"--digits": 2,
									} /* as React.CSSProperties */
								}
								aria-live="polite"
								aria-label={counterDays}
							>
								{counterDays}
							</span>
						</span>
						days
					</div>
					<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
						<span className="countdown font-mono text-5xl">
							<span
								style={
									{
										"--value": counterHours,
										"--digits": 2,
									} /* as React.CSSProperties */
								}
								aria-live="polite"
								aria-label={counterHours}
							>
								{counterHours}
							</span>
						</span>
						hours
					</div>
					<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
						<span className="countdown font-mono text-5xl">
							<span
								style={
									{
										"--value": counterMinutes,
										"--digits": 2,
									} /* as React.CSSProperties */
								}
								aria-live="polite"
								aria-label={counterMinutes}
							>
								{counterMinutes}
							</span>
						</span>
						min
					</div>
					<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
						<span className="countdown font-mono text-5xl">
							<span
								style={
									{
										"--value": counterSeconds,
										"--digits": 2,
									} /* as React.CSSProperties */
								}
								aria-live="polite"
								aria-label={counterSeconds}
							>
								{counterSeconds}
							</span>
						</span>
						sec
					</div>
				</div>
			</div>
		</section>
	);
}
