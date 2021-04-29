import Auth from "../components/Auth";
import logo from "../media/logo512.png";

const HomePage = () => {
  return (
    <div className="h-screen w-full md:flex">
      <div className=" hidden md:block md:w-1/2 md:bg-red-300"></div>
      <div className="w-full md:w-1/2">
        <div className="h-screen flex flex-col pt-44 items-center">
          <div className="mb-10">
            <img src={logo} alt="Website Logo" width="100" height="100" />
          </div>
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
