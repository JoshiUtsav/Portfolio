import AboutMe from "./AboutMe";
import Work from "./Work";
import GitHubCalendarComponent from "./GitHubCalendar";
import TypeWriterComponent from "./TypeWriterComponent";
import FramerMotionComponent from "./FramerMotionComponent";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="w-[70%] h-screen overflow-y-auto no-scrollbar flex flex-col items-center">
      <div className="p-3 px-5 mt-12 font-bold text-xl text-color">Hi,I'm</div>
      <FramerMotionComponent />
      <TypeWriterComponent />
      <div className=" max-w-[100%] text-slate-200 px-5 p-2 desc-color md:text-[17px] my-4  ">
        A Full-Stack Developer based in Delhi. I always aim for the best code
        quality and smooth coding. I'm excited about using new technologies in
        my projects.
      </div>
      <GitHubCalendarComponent />
      <AboutMe />
      <Work />
      <Footer />
    </div>
  );
};

export default Body;
