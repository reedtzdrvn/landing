import './header.css'

const Header = () => {
	return (
		<>
			<div className='Header mb-40'>
				<div className='NavBar flex  h-[65px] bg-[#465373]'>
					<div className='container text-[#E4E9EF] flex justify-start gap-10 px-[64px]'>
						<button className=''>Карта</button>
						<button className=''>Диаграммы</button>
						<button className=''>Форма</button>
					</div>
				</div>
				<div className='Header_body flex justify-center items-center px-[128px]'>
					<div className='container text-[#E4E9EF] relative'>
						<div className='title_text font-bold text-3xl mb-10 text-justify'>
							Lorem Ipsum - это текст-"рыба", часто используемый в печати и
							вэб-дизайне.
						</div>
						<div className='flex justify-between items-end'>
							<div className='w-[50%]'>
								Lorem Ipsum - это текст-"рыба", часто используемый в печати и
								вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто используемый
								в печати и вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто
								используемый в печати и вэб-дизайне. Lorem Ipsum - это
								текст-"рыба", часто используемый в печати и вэб-дизайне.{' '}
							</div>
							<div>
								<button className='h-[65px] w-[200px] bg-[#465373] font-bold'>
									Подробнее
								</button>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
