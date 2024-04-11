import Map from './map'
const BodyMap = () => {
	return (
		<>
			<div className='bodyMap flex justify-center'>
				<div className='container flex gap-20 max-w-[1400px]'>
					<div className='Map flex flex-col items-center'>
						<div className='title_map uppercase h-[65px] w-[400px] bg-[#465373] font-bold text-[#E4E9EF] flex justify-center items-center mb-[50px]'>
							Карта москвы
						</div>
						<Map />
					</div>
					<div className='MapInfo flex flex-col items-center'>
						<div className='titleInfo text-[#1C2D4A] text-5xl mb-[50px] font-bold'>
							Lorem Ipsum
						</div>
						<div className='textInfo max-w-[560px] text-[#040B25] text-4xl text-justify	'>
							Lorem Ipsum - это текст-"рыба", часто используемый в печати и
							вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто используемый в
							печати и вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто
							используемый в печати и вэб-дизайне. Lorem Ipsum - это
							текст-"рыба", часто используемый в печати и вэб-дизайне. и
							вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто используемый в
							печати и вэб-дизайне. и вэб-дизайне. Lorem Ipsum - это
							текст-"рыба", часто используемый в печати и вэб-дизайне.{' '}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BodyMap
