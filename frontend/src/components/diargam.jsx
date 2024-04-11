import DiagInfo from './diagInfo'
import diag from '../img/diag.png'

const Diagram = () => {
	return (
		<>
			<div className='Diagram'>
				<div className='flex flex-col items-center'>
					<img src={diag} className='mb-20' />
					<div className='mb-4 text-3xl text-[#040B25] font-semibold'>
						Lorem Ipsum - <br />
						это текст-"рыба".
					</div>
				</div>
				<div className='Diag_info'>
					<DiagInfo />
					<DiagInfo />
					<DiagInfo />
				</div>
			</div>
		</>
	)
}

export default Diagram
