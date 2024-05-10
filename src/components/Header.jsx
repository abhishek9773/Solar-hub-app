import logo from "../images/logo.png";

function Header() {
  const head = [
    {
      name: "Home",
      url: "#Home",
    },
    {
      name: "About us",
      url: "#About us",
    },
    {
      name: "solar initiantives",
      url: "#solar_achivement",
    },
    {
      name: "our service",
      url: "#teams",
    },
    {
      name: "community",
      url: "#community",
    },
    {
      name: "Aesfhetics",
      url: "aesfhetics",
    },
  ];
  return (
    <header className=" bg-black py-2   ">
      <nav className="flex  items-center justify-between  h-[120px] text-lg   mx-20 text-white">
        <div>
          <img className="" src={logo} alt="" />
        </div>
        <div className="">
          <ul className="flex items-center gap-10">
            {head.map((item) => (
              <li>
                <a className="hover:text-gray-500 uppercase" href={item.url}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {true ? (
            <div className="flex space-x-2 flex-row ">
              <button className="bg-lime-300  px-5 py-2 rounded-lg hover:bg-lime-400 ">
                Sign in
              </button>
              <button className="bg-lime-300  px-4 py-2 rounded-lg hover:bg-lime-400">
                Sign up
              </button>
            </div>
          ) : (
            <img
              className="w-16 h-16 mx-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaJi_pOyJlnYkplmmQD3kJW7GCWyM6dGhWl2GOsic1Q&s"
              alt=""
            ></img>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
