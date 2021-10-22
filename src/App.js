import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" /> */}
      {/* <Navbar title={3} aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      <TextForm heading="Enter the text here to analyze" />
      {/* <TextForm/>  */}
    </>
  );
}

export default App;
