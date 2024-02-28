import Image from "next/image";

const Header = ({toggleDarkmode, darkmode}) => {

    const test = () => {
        toggleDarkmode();
    }
  return (
    <header>
      <div className={ darkmode ? "w-screen h-96 relative bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-cover" : "w-screen h-96 relative bg-[url('/images/bg-desktop-light.jpg')] bg-no-repeat bg-cover" }>
        <div className="flex justify-between px-24 py-1">
            <h1 className="text-white text-5xl">TODO</h1>
            <button onClick={test}>
            {darkmode ? (
              <Image src={"/images/icon-sun.svg"} width={30} height={30} alt="" />
            ) : (
              <Image src={"/images/icon-moon.svg"} width={30} height={30} alt="" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
