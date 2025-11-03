import { MapPinHouseIcon } from "lucide-react";

export default function Location() {
	return (
		<div className="py-6 flex flex-col justify-center sm:py-12">
			<div className="py-3 sm:max-w-xl sm:mx-auto">
				<div className="px-10 py-10 bg-white mx-8 md:mx-0 shadow rounded-xl sm:p-10">
					<div className="max-w-md mx-auto">
						<div className="flex items-center justify-center space-x-5">
							<div className="h-14 w-14 bg-pink-200 rounded-full flex flex-shrink-0 justify-center items-center text-pink-500 text-2xl font-mono">
								<MapPinHouseIcon />
							</div>
							<div className="block pl-2 font-semibold text-xl self-start text-gray-700">
								<h2 className="leading-relaxed">Địa điểm tổ chức</h2>
								<p className="text-sm text-gray-500 font-normal leading-relaxed">
									Quét mã QR google map
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="flex items-center justify-center p-6">
								<img src="/images/location.svg" alt="Google map location" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
