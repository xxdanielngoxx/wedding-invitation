import { createServerFn, useServerFn } from "@tanstack/react-start";
import { MessageCircleHeart } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { prisma } from "@/db";

type Attendance = "yes" | "no";

const createRegistrationServerFn = createServerFn({
	method: "POST",
})
	.inputValidator(
		(data: { name: string; attendance: boolean; message: string }) => data,
	)
	.handler(async ({ data }) => {
		return await prisma.registration.create({
			data,
		});
	});

export default function RegistrationV2() {
	const createRegistration = useServerFn(createRegistrationServerFn);

	const notifySuccess = () => toast.success("Đăng ký thành công!");
	const notifyError = () => toast.error("Đăng ký thất bại!");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const name = formData.get("name") as string;
		const attendance = formData.get("attendance") as Attendance;
		const message = formData.get("message") as string;

		if (!name || !attendance || !message) return;

		try {
			await createRegistration({
				data: { name, attendance: attendance === "yes", message },
			});

			notifySuccess();
		} catch (error) {
			notifyError();
			console.error("Failed to create registration:", error);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="bg-base-200 py-6 flex flex-col justify-center sm:py-12"
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
										Vui lòng cho chúng tôi biết bạn có thể đến chung vui không
										nhé!
									</p>
								</div>
							</div>
							<div className="divide-y divide-gray-200">
								<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
									<div className="flex flex-col mt-2">
										<label
											className="mb-2 leading-loose font-semibold"
											htmlFor="name"
										>
											Tên của bạn *
										</label>
										<input
											name="name"
											type="text"
											className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
											required
										/>
									</div>
									<div className="flex flex-col mt-6">
										<label className="mb-2 font-semibold" htmlFor="attendance">
											Bạn có thể tham dự không? *
										</label>
										<div className="flex gap-2 mt-1.5">
											<label className="flex items-center gap-1">
												<input
													type="radio"
													name="attendance"
													value="yes"
													required
												/>
												<span>Có, tôi sẽ đến! 🎉</span>
											</label>
											<label className="flex items-center gap-1">
												<input
													type="radio"
													name="attendance"
													value="no"
													required
												/>
												<span>Rất tiếc không thể 😔</span>
											</label>
										</div>
									</div>

									<div className="flex flex-col mt-6">
										<label
											className="mb-2 leading-loose font-semibold"
											htmlFor="message"
										>
											Lời chúc đến cô dâu chú rể *
										</label>
										<textarea
											name="message"
											className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
											required
										></textarea>
									</div>
								</div>
								<div className="pt-4 flex items-center justify-center space-x-4">
									<button
										className="btn btn-lg btn-accent btn-wide"
										type="submit"
									>
										Hoàn thành
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			<Toaster />
		</>
	);
}
