import StadiumModel from "./components/StadiumModel";
import "./App.css";

function App() {
  return (
    <div style={{position: 'relative'}}>
		<a href='https://fcelimai.kz/' style={{
			position: 'absolute',
			zIndex: 10,
			top: 10,
			left: 10,
			display: 'block',
			padding: '10px 20px',
			backgroundColor: '#C10E2B',
			color: '#fff',
			textDecoration: 'none',
			fontFamily: "Montserrat, sans-serif",
		}}>Назад</a>
      <StadiumModel />
    </div>
  );
}

export default App;
