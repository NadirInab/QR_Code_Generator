// import '/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import QrCode from './components/QrCode';

function App() {

  return (
    <div className="App">
        <Navbar />
        <QrCode />
    </div>
  )
}

export default App
