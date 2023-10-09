import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import regimg from "../../images/undraw_mobile_content_xvgr.svg"
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const {createUser}= useContext(AuthContex)
    const navigate = useNavigate()
    const handelRegsubmit=e=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        const accepted = e.target.terms.checked

        console.log(email,password);


        if (password > 6) {
            toast.error("This didn't work.") 
            return
        }
        else if(!/[A-Z][.!@#$%^&*()_+-=]/.test(password)){
           return toast.error("This didn't work.") 
        }
        else if (!accepted) {
           return toast.error(" please Accepted our Terms and Condition ") 
            
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            return toast.error(" Please provide our Valid email ") 
        }

         createUser(email, password)
         .then(result=> {
            // const cuser= result.user;
           toast.success("Successfully register")
           updateProfile(result.user, {
            displayName:name,
            photoURL:photo
           })
           .then()
           .catch()
           navigate("/")
           return 
         })
         .catch(error=>{
            console.error(error)
            toast.error("Check your email and password")
            return 
         } )

        
  

         e.target.reset()
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-5">
            <div className="text-center lg:text-left">
              <div>
                <img src={regimg} alt="" className="lg:h-[100vh] w-auto" />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handelRegsubmit} className="card-body">
              <h1 className="text-center text-xl font-bold">Register Now</h1>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <input type="checkbox" name="terms" id="" />
                    <p className="ml-4">Accept All terms anr Condition</p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#D3B714] font-bold text-xl">
                    Register
                  </button>
                </div>
                <h1>
                  Already have an Account?
                  <Link to="/login">
                    <span className="text-bold text-red-400 ml-4 font-bold">
                      Log in
                    </span>
                  </Link>
                </h1>
              </form>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
};

export default Register;