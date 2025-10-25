import { Link } from "@tanstack/react-router";
import { ChevronsRight } from "lucide-react";

export default function Hero() {
	return (
		<div className="hero bg-base-200 lg:min-h-screen">
			<div className="hero-content flex-col gap-12 lg:flex-row-reverse lg:gap-6">
				<img
					src="/images/hero.webp"
					className="lg:max-w-md rounded-lg shadow-2xl"
					alt="hero"
				/>
				<div>
					<h1 className="font-[Allura] text-6xl text-center">
						We’re Getting Married
					</h1>
					<div className="custom-divider my-2"></div>
					<div className="flex justify-center py-4">
						<div className="font-[Cormorant_Garamond] tracking-widest">
							<h1 className="text-3xl lg:text-5xl text-center">
								Ngô Đình Lộc <br />&<br /> Vũ Lan Tường
							</h1>
						</div>
					</div>
					<div className="custom-divider my-2"></div>

					<div className="flex justify-center py-4">
						<div className="text-center">
							<p className="font-[Cormorant_Garamond] font-semibold">
								Chủ Nhật, 09 tháng 11 năm 2025
							</p>
							<p className="font-[Cormorant_Garamond] font-semibold">
								9 giờ 00
							</p>
							<p className="text-sm font-light py-2">
								Hôn lễ được cử hành tại Tư Gia (xã Vọng Đông, Huyện Thoại Sơn,
								tỉnh An Giang)
							</p>
						</div>
					</div>

					<div className="flex w-full flex-col lg:flex-row">
						<p className="font-light italic py-6 pb-6">
							Sau hành trình dài đầy yêu thương, chúng tôi quyết định cùng nhau
							viết tiếp câu chuyện đời mình. Trong niềm hân hoan và hạnh phúc,
							trân trọng kính mời bạn đến dự lễ cưới — ngày khởi đầu cho một
							chặng đường mới.
						</p>
					</div>

					<div className="flex w-full flex-col lg:flex-row py-6">
						<Link to="/" hash="registration-form" className="text-center">
							<button className="btn btn-lg btn-accent py-4" type="button">
								Đăng ký tham dự hôn lễ{" "}
								<span>
									<ChevronsRight />
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
