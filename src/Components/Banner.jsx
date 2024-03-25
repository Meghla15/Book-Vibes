import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 container mx-auto rounded-3xl mt-3">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src='../../src/assets/banner.png'
          className="max-w-sm "
        />
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          
          <Link to='/listedBooks'><button className="btn bg-[#23BE0A] text-white mt-6">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
