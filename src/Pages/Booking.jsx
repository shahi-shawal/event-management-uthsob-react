import Footer from "./Footer";
import Navbar from "./Shared/Navbar";
import eventbg from "../../images/undraw_events_re_98ue.svg"

const Booking = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-5">
            <div className="text-center lg:text-left">
              <div>
                <img src={eventbg} alt="" className="lg:h-[100vh] w-auto" />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form  className="card-body">
              <h1 className="text-center text-xl font-bold">Booking Now</h1>
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
                    <span className="label-text">Event name</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Event Name"
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
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Phone Number"
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
                    Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;