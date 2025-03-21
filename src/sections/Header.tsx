import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg"

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/20">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/20">
            <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#000000] to-[#454545] shadow-[0px_0px_12px_#5d5d5d]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-lg border border-white/20  [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className=" absolute inset-0 rounded-lg border  border-white/40  [mask-image:linear-gradient(to_top,black,transparent)]"></div>                                     
                <div className="absolute inset-0 rounded-lg shadow-[0_0_12px_rgb(93,93,93,.7)_inset]"></div>
                
              </div>
              <span className="">Join Waitilist</span>
              </button>
            <MenuIcon className ="h-8 w-8"/>
          </div>

        </div>
      </div>
    </header>
  );
};
