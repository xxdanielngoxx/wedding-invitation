export default function Album() {
	return (
		<section className="w-full flex flex-col justify-center p-8 bg-base-200">
			<div className="relative w-full max-w-4xl mx-auto py-12">
				<img
					src="/images/image1.webp"
					alt="Bottom Left"
					className="rounded-xl shadow-2xl border-4 border-white w-1/2 rotate-350"
				/>

				<img
					src="/images/image3.webp"
					alt="Top Right"
					className="absolute top-0 right-0 rounded-xl shadow-2xl border-4 border-white w-1/2 rotate-10"
				/>
			</div>
		</section>
	);
}
