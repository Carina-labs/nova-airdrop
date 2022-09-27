import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { LogoIcon } from "./LogoIcon";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export const Header = () => {
  const [hide, setHide] = useState(true);
  const navigation = [
    { name: "Docs", href: "/whitepaper.pdf" },
    {
      name: "Twitter",
      href: "https://twitter.com/Supernovazone",
    },
    {
      name: "Discord",
      href: "https://discord.gg/2gj8fScWqD",
    },
    {
      name: "Medium",
      href: "https://medium.com/supernovazone",
    },
  ];

  return (
    <Disclosure as="nav" className="w-full relative z-20 bg-black">
      {({ open }) => (
        <>
          <div className="max-w-[780px] lg:max-w-[1050px] mx-[1.3rem] md:mx-auto">
            <div className="w-full relative flex items-center h-[50px] md:h-[4.7rem] justify-between">
              <div className=" md:mx-0 md:flex items-center">
                <LogoIcon />
              </div>
              <div className="hidden md:flex">
                <Link href="/whitepaper.pdf">
                  <a
                    target="_blank"
                    className=" md:mb-[0.5rem] mr-2 md:mr-[1.7rem]"
                  >
                    <p className="mt-[0.2rem] md:mt-1 text-white hover:text-yellow-500 text-13 md:text-22">
                      Docs
                    </p>
                  </a>
                </Link>
                <Link href="https://twitter.com/Supernovazone">
                  <a target="_blank">
                    <div className="mt-[0.35rem] md:mt-2 mr-2 md:mr-[1.7rem]">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 fill-white hover:fill-yellow-500"
                        viewBox="0 0 25 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.5 17.9018C3.1329 18 5.47431 17.3283 7.54958 15.703C5.36342 15.421 3.82994 14.3311 3.0125 12.2843L5.04659 12.1766L5.03708 12.0372C2.39151 10.8649 1.11783 9.24902 1.21922 7.18959L3.24696 7.74405L3.33568 7.61098C1.1907 5.767 0.705943 3.57767 1.86873 0.954274C4.64737 4.17649 8.06602 5.94443 12.2926 6.23275C12.2704 5.80819 12.2292 5.44066 12.2324 5.07313C12.2578 2.92182 13.259 1.34398 15.2012 0.479021C17.1212 -0.376434 18.9588 -0.0754401 20.5715 1.29646C20.882 1.55943 21.1418 1.62596 21.4935 1.49289C22.3331 1.1824 23.1727 0.878234 24.0313 0.561399C23.6828 1.59111 22.989 2.38637 22.0987 3.03905L22.1715 3.1943L24.627 2.54796L24.7252 2.64301C24.006 3.34638 23.2773 4.04025 22.5739 4.75946C22.425 4.91155 22.2888 5.16185 22.2919 5.36462C22.3838 11.5936 18.2586 18.2757 10.9461 19.6982C7.37532 20.3921 3.95984 19.9042 0.775647 18.0792C0.680596 18.0254 0.591882 17.962 0.5 17.9018H0.5Z" />
                      </svg>
                    </div>
                  </a>
                </Link>
                <Link href="https://discord.gg/2gj8fScWqD">
                  <a target="_blank">
                    <div className="mt-[0.35rem] md:mt-2 mr-2 md:mr-[1.7rem]">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 fill-white hover:fill-yellow-500"
                        viewBox="0 0 28 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.94101 16.656C7.5432 17.045 8.13044 17.3405 8.74386 17.5724C9.08049 17.6996 9.10668 17.8492 8.93088 18.126C8.58677 18.6646 8.25013 19.207 7.92098 19.7568C7.77885 19.9962 7.62549 20.0485 7.35245 19.9588C5.16807 19.2294 3.14079 18.2045 1.26313 16.873C1.03871 16.7121 1.01253 16.5064 0.990084 16.2745C0.675894 12.796 1.18458 9.43711 2.48623 6.2017C3.08095 4.72425 3.8365 3.3291 4.70053 1.99379C4.85388 1.7544 5.02968 1.58609 5.29525 1.47388C6.77643 0.826792 8.30624 0.359246 9.88467 0.0300938C10.2924 -0.0521943 10.5168 0.0226131 10.629 0.40039C10.8572 1.15594 11.2574 1.39907 12.1027 1.25319C13.6325 0.991368 15.1923 1.07366 16.7333 1.31678C17.0437 1.3654 17.1746 1.25693 17.3018 0.987628C17.803 -0.0596749 17.8143 -0.0671557 18.9364 0.172228C20.3427 0.471457 21.693 0.935262 23.0096 1.51128C23.2191 1.60479 23.35 1.75066 23.4659 1.9302C26.3311 6.28773 27.6402 11.0455 27.2175 16.2633C27.1951 16.5588 27.1091 16.757 26.8585 16.9328C25.0406 18.2158 23.0695 19.1845 20.9749 19.9214C20.627 20.0448 20.4101 20.0037 20.2193 19.667C19.935 19.1621 19.6208 18.6721 19.3067 18.1821C19.1122 17.8754 19.1084 17.6884 19.5124 17.5462C19.9687 17.3891 20.3988 17.161 20.829 16.9403C20.9749 16.8655 21.2965 16.8243 21.1768 16.5924C21.0684 16.3755 20.8439 16.1773 20.5036 16.3381C19.7854 16.6785 19.0373 16.9328 18.2668 17.146C14.7359 18.1222 11.2911 17.8417 7.92472 16.4428C7.58061 16.3007 7.24896 16.373 6.92979 16.6598L6.94101 16.656ZM12.084 10.9894C12.084 9.83359 11.4668 8.85736 10.5168 8.4908C9.61163 8.14295 8.67654 8.39355 8.00327 9.16407C7.09436 10.2076 7.15047 11.9469 8.11922 12.9344C9.17026 14.0041 10.7936 13.8395 11.6127 12.5753C11.9269 12.0928 12.099 11.5654 12.084 10.9856V10.9894ZM16.1348 10.6527C16.1311 12.3247 16.9951 13.4505 18.2145 13.6338C19.2767 13.7946 20.3914 13.0279 20.7317 11.8309C21.0459 10.7238 20.8477 9.71016 19.965 8.91346C19.2693 8.28882 18.4501 8.13173 17.5936 8.54317C16.6099 9.01819 16.1722 9.86352 16.1348 10.649V10.6527Z" />
                      </svg>
                    </div>
                  </a>
                </Link>
                <Link href="https://medium.com/supernovazone">
                  <a target="_blank">
                    <div className="mt-[0.35rem] md:mt-2 md:mr-[1.7rem]">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 fill-white hover:fill-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
                      </svg>
                    </div>
                  </a>
                </Link>
              </div>
              {/* Mobile menu button*/}
              <Disclosure.Button className="md:hidden inline-flex items-center justify-center rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                  <XIcon
                    onClick={() => setHide(true)}
                    className="block h-6 w-6"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuIcon
                    onClick={() => setHide(false)}
                    className="block h-6 w-6"
                    aria-hidden="true"
                  />
                )}
              </Disclosure.Button>
            </div>
            {hide ? null : (
              <div className="absolute top-12 bottom-0 right-[0] items-center justify-center md:hidden">
                {navigation.map((item) => (
                  <div className="flex-col bg-tw-black px-3 py-2 text-sm font-medium">
                    <Link href={item.href}>
                      <a
                        target="_blank"
                        key={item.name}
                        className=" text-white"
                      >
                        {item.name}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </Disclosure>
  );
};
