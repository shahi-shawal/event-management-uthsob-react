import { Link } from "react-router-dom";
import logimg from "../../images/pp.svg";
import Navbar from "../Pages/Shared/Navbar";
import { useContext } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import { AuthContex } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";         
import { FcGoogle  } from 'react-icons/fc';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
  const {login, googlelogin}= useContext(AuthContex)
    const handellogsubmit=e=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        

        console.log(email,password);

        if (password > 6) {
            toast.error("This didn't work.") 
            return
        }
        else if(!/[A-Z][.!@#$%^&*()_+-=]/.test(password)){
           return toast.error("This didn't work.") 
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            return toast.error(" Please provide our Valid email ") 
        }



        login(email,password)
        .then((result)=>{
            console.log(result.user)
            navigate(location?.state? location.state : "/")
            return  toast.success("Log in successfully")
             
         
        })
        .catch((error)=>{
         console.error(error)
        return toast.error("Check your Email and Paaword")
        })
        e.target.reset()
        

  
    }

   const handelgooglelog=()=>{
    googlelogin()
    navigate(location?.state? location.state : "/")
    toast.success("Log in successfully")
     return
   }


  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col-reverse lg:flex-row gap-5">
            <div className="text-center lg:text-left">
              <div>
                <img src={logimg} alt="" className="lg:h-[100vh] w-auto" />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              
              <form onSubmit={handellogsubmit} className="card-body">
              <h1 className="text-center text-xl font-bold">Login Now</h1>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#D3B714] font-bold text-xl">
                    Login
                  </button>
                </div>
                <h1>
                  Don't have an Account?
                  <Link to="/register">
                    <span className="text-bold text-red-400 ml-4 font-bold">
                      REGISTER
                    </span>
                  </Link>
                </h1>
               <button onClick={handelgooglelog} className="text-3xl mx-auto p-4 border bg-yellow-200 rounded-full hover:bg-gray-200"><FcGoogle /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
