export default function Registration() {
	return (
		<section className="bg-base-200">
			<div className="p-4 max-w-7xl">
				<h2 className="text-xl font-bold"> Đăng ký tham dự hôn lễ</h2>
				<div className="w-full flex justify-center">
					<fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4 my-4">
						<legend className="fieldset-legend">Thông tin đăng ký</legend>

						<label className="label mt-2" htmlFor="fullName">
							Họ và tên *
						</label>
						<input
							type="text"
							className="input"
							placeholder="Họ và tên"
							name="fullName"
						/>

						<label className="label mt-2" htmlFor="phoneNumber">
							Số điện thoại *
						</label>
						<input
							type="text"
							className="input"
							placeholder="Số điện thoại"
							name="phoneNumber"
						/>

						<label className="label mt-2" htmlFor="relationship">
							Bạn là gì của cô dâu, chú rể? *
						</label>
						<input
							type="text"
							className="input"
							placeholder="Bạn là gì của cô dâu, chú rể"
							name="relationship"
						/>

						<label className="label mt-2" htmlFor="bookingHotel">
							<input
								name="bookingHotel"
								type="checkbox"
								defaultChecked={false}
								className="checkbox checkbox-accent"
							/>
							Bạn có cần mình đặt phòng khách sạn không?
						</label>

						<label className="label mt-2" htmlFor="isJoinTMidnightParty">
							<input
								name="isJoinTMidnightParty"
								type="checkbox"
								defaultChecked={false}
								className="checkbox checkbox-accent"
							/>
							Tham gia tiệc cháo khuya
						</label>

						<label className="label mt-2" htmlFor="isWeddingParty">
							<input
								name="isWeddingParty"
								type="checkbox"
								defaultChecked={false}
								className="checkbox checkbox-accent"
							/>
							Tham gia hôn lễ
						</label>

						<textarea
							className="textarea h-24 mt-2"
							placeholder="Gửi lời chúc"
						></textarea>

						<button className="btn btn-accent mt-4" type="submit">
							Đăng ký
						</button>
					</fieldset>
				</div>
			</div>
		</section>
	);
}
