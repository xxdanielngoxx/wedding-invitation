import { MessageCircleHeart } from "lucide-react";

export default function RegistrationV2() {
	return (
		<div
			className=" bg-base-200 py-6 flex flex-col justify-center sm:py-12"
			id="registration-form"
		>
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
					<div className="max-w-md mx-auto">
						<div className="flex items-center space-x-5">
							<div className="h-14 w-14 bg-pink-200 rounded-full flex flex-shrink-0 justify-center items-center text-pink-500 text-2xl font-mono">
								<MessageCircleHeart />
							</div>
							<div className="block pl-2 font-semibold text-xl self-start text-gray-700">
								<h2 className="leading-relaxed">Đi đám cưới thôi</h2>
								<p className="text-sm text-gray-500 font-normal leading-relaxed">
									Để có thể chuẩn bị mọi thứ chu đáo và đúng thời gian, chúng
									tôi rất mong được biết kế hoạch của bạn sớm. Cảm ơn bạn ♡
								</p>
							</div>
						</div>
						<div className="divide-y divide-gray-200">
							<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
								<div className="flex flex-col">
									<label className="leading-loose" htmlFor="fullName">
										Tên của bạn
									</label>
									<input
										name="fullName"
										type="text"
										className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
									/>
								</div>
								<div className="flex flex-col">
									<label className="leading-loose" htmlFor="phoneNumber">
										Số điện thoại
									</label>
									<input
										name="phoneNumber"
										type="text"
										className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
									/>
								</div>
								<div className="flex flex-col">
									<label className="leading-loose" htmlFor="phoneNumber">
										Số lượng người tham dự
									</label>
									<input
										name="phoneNumber"
										type="text"
										className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
									/>
								</div>
							</div>
							<div className="pt-4 flex items-center space-x-4">
								<button
									className="bg-pink-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
									type="submit"
								>
									Đăng ký
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
