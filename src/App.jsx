import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQS from './sections/faqs/FAQS';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Modal from './components/Modal';
import Theme from './theme/Theme';

const App = () => {
  return (
	<main>
		<Navbar />
		<Header />
		<About />
		<Services />
		<Portfolio />
		<Testimonials />
		<FAQS />
		<Contact />
		<Footer />
		<Theme />
		{/* <FloatingNav /> */}
		{/* <Modal /> */}
	</main>
  )
}

export default App