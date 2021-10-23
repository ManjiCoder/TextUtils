import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm'
function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" /> */}
      {/* <Navbar title={3} aboutText="About TextUtils"/> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <About aboutText="About TextUtils" />
      {/* <About /> */}
      {/* <TextForm heading="Enter the text here to analyze" /> */}
      {/* <TextForm/>  */}
    </>
  );
}

export default App;
