import Header from './components/header'
import BodyMap from './components/bodyMap'
import Diagrams from './components/diagrams'
import PriceForm from './components/PriceForm'
import Footer from './components/footer'

const App = () => {
	return (
		<div className='bg-[#DBDCDC]'>
			<Header />
			<BodyMap />
			<Diagrams />
			<PriceForm />
			<Footer />
		</div>
	)
}

export default App
