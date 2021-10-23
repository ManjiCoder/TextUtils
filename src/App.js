import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <TextForm heading="Enter the text here to analyze" />
      <About aboutText="About TextUtils" />
    </>
  );
}

export default App;
