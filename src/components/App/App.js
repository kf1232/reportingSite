import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

function App() {
	return (
		<div>
			<Header/>
			<div className='content'>
				<Body/>
				<Footer/>
			</div>
			
		</div>
	);
}

export default App;
