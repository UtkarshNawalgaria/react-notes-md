import Auth from "../components/Auth";
import logo from "../media/logo512.png";
import Image from '../media/Markdown_Notes_Screenshot.png'

const HomePage = () => {
  return (
    <div className="h-screen w-full md:flex">
      <div className="hidden md:w-1/2 px-10 md:bg-red-300 md:flex md:flex-col md:justify-center md:items-center">
        <h1 className="text-center mb-10 text-4xl font-bold">Note down your Markdown</h1>
        <img src={Image} alt="Admin Dashboard"/>
      </div>
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
