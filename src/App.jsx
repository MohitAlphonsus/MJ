import { Aside, Main, SvgBlob } from './components';
export default function App() {
	return (
		<div className="app">
			<div className="container">
				<Aside />
				<Main />
			</div>
			<SvgBlob />
		</div>
	);
}
