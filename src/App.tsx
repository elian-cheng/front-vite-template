import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <div className="main__container">{/* <Router /> */} New App</div>
      </main>
      {/* <Footer /> */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
