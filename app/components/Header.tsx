// import SlideMenu from "@/app/components/SlideMenu";
// import { navLinks } from "@/lib/links";
// import Logo from "./Logo";

type NavigationLinks = {
  name: string;
  href: string;
};

const navigation: NavigationLinks[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="">
      <div className=" max-w-6xl mx-auto px-4  sm:px-6 lg:px-8 py-4 md:pt-6 z-30">
        <nav className="flex items-center justify-between">
          {/* <Logo /> */}
          <h1 className="text-2xl font-semibold ">Synthcreation.</h1>
          <ul className="hidden lg:flex items-center lg:gap-x-12 xl:gap-x-14">
            {navigation.map((link) => {
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="capitalize font-semibold text-lg hover:text-primary transition-all duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <SlideMenu /> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
