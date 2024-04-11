import Map from './map'
const BodyMap = () => {
	return (
		<>
			<div id='map' className='bodyMap flex justify-center px-[128px] gap-[16px]  pt-20'>
				<div className='container flex justify-between w-full'>
					<div className='Map flex flex-col items-center w-[45%]'>
						<div className='title_map uppercase py-[18px] px-[84px] bg-[#465373] font-bold text-[#E4E9EF] flex justify-center items-center mb-[50px]'>
							Карта москвы
						</div>
						<div>
							<Map />
						</div>
					</div>
					<div className='MapInfo flex flex-col items-center w-[45%]'>
						<div className='titleInfo text-[#1C2D4A] text-5xl mb-[50px] font-bold'>
							Lorem Ipsum
						</div>
						<div className='textInfo text-[#040B25] text-4xl text-justify	'>
							Lorem Ipsum - это текст-"рыба", часто используемый в печати и
							вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто используемый в
							печати и вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто
							используемый в печати и вэб-дизайне. Lorem Ipsum - это
							текст-"рыба", часто используемый в печати и вэб-дизайне. и
							вэб-дизайне.{' '}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BodyMap
