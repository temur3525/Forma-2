
import './App.css';
import { FaSun } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import img from "./assets/images/1.jpeg"
function App() {
  return (
    <>
      <div className="container">
        <FaSun className='th' />
        <p className="jh">Untitled Ul</p>
        <h1 className="jk">Welcome back, Olivia</h1>
        <p className="ha">Continue with Google or enter your details.</p>
        <button className="btn"><FaGoogle className='icn' /> Login in with details</button>
<p className='p'></p>
<p className="p1">or</p>
<p className='p2'></p>


<form>
  <input type="email"  placeholder='Email' className='email' required/>

</form>
<form>
<input type="password"  placeholder='Password' className='password' required/>
</form>
<input type="checkbox" className="in" />

<p className="ij">Remember for 30 days</p>
<a href="https://kun.uz/" className='a1'>Forgot password</a>
<button className='btn1'>Login</button>
<p className="ka">Don't have an account?</p>
<a href="https://www.apple.com/" className="a">Sing up for free</a>
<img src={img} alt="" className='img' />
      </div>



    </>
  );
}

export default App;
