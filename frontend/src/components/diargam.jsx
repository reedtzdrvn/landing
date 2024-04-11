import DiagInfo from './diagInfo'
import diag from '../img/diag.png'

const Diagram = () => {
	return (
		<>
			<div className='Diagram'>
				<img src={diag} className='mb-20' />
				<div>Lorem Ipsum - это текст-"рыба".</div>
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
