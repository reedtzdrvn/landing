import './header.css'

const Header = () => {
	return (
		<>
			<div className='Header mb-40'>
				<div className='NavBar flex justify-center h-[65px] bg-[#465373]'>
					<div className='container max-w-[1400px] text-[#E4E9EF] flex justify-start gap-10'>
						<button className=''>Карта</button>
						<button className=''>Диаграммы</button>
						<button className=''>Форма</button>
					</div>
				</div>
				<div className='Header_body h-[900px] flex justify-center'>
					<div className='container max-w-[1400px] text-[#E4E9EF] mt-[280px]'>
						<div className='title_text font-bold text-3xl mb-10'>
							Lorem Ipsum - это текст-"рыба", часто используемый в печати и
							вэб-дизайне.
						</div>
						<div className='flex justify-between items-end'>
							<div className='max-w-[480px]'>
								Lorem Ipsum - это текст-"рыба", часто используемый в печати и
								вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто используемый
								в печати и вэб-дизайне. Lorem Ipsum - это текст-"рыба", часто
								используемый в печати и вэб-дизайне. Lorem Ipsum - это
								текст-"рыба", часто используемый в печати и вэб-дизайне.{' '}
							</div>
							<button className='h-[65px] w-[200px] bg-[#465373] font-bold'>
								Подробнее
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
