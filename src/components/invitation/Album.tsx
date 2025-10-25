export default function Album() {
	return (
		<section className="w-full flex flex-col justify-center p-8 bg-base-200">
			<div className="photo-gallery">
				<div className="photo-item">
					<img src="/images/album1.webp" alt="Đình Lộc và Lan Tường" />
				</div>
				<div className="photo-item">
					<img src="/images/album2.webp" alt="Ảnh cưới 1" />
				</div>
				<div className="photo-item">
					<img src="/images/album3.webp" alt="Ảnh cưới 2" />
				</div>
			</div>
		</section>
	);
}
