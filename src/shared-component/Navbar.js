import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assest/main-logo.png";
import HeroBG from "../assest/hero-bg.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="relative w-100">
        <img
          className="absolute top-0 right-0 z-[-1000] w-[50%]"
          src={HeroBG}
        />
      </div>
      <div className="container relative z-50">
        <div className="between">
          <div className="my-auto">
            <div className="flex">
              <div className="d-block d-lg-none">
                {" "}
                <a
                  class="btn text-[25px] my-auto"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <i class="fas fa-bars "></i>
                </a>
              </div>
              <Link to="/">
                <img className="w-[130px] mt-2" src={Logo} />
              </Link>
            </div>

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="text-end p-3">
                <button
                  type="button"
                  class=""
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div class="offcanvas-body">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Chat</li>
                  <li>LOgin</li>
                  <li>Sing In</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block">
            <div className="flex mt-[12px]">
              <div className="my-auto mr-[38px]">
                {" "}
                <a className="font-medium pointer">Home</a>
              </div>
              <div className="my-auto mr-[38px]">
                {" "}
                <a className="font-medium pointer">About Us</a>
              </div>

              <div className="my-auto mr-[38px]">
                <Link to="/chat">
                  <a className="font-medium pointer">Chat</a>
                </Link>
              </div>
              <div className="my-auto mr-[38px]">
                <Link to="/sign-in">
                  <a className="font-medium pointer">Login</a>
                </Link>{" "}
              </div>
              <Link to="/sign-up">
                <button className="btn bg-primary text-light px-[30px] my-[10px]">
                  Sign up
                </button>
              </Link>

              <div class="dropdown mx-[20px] my-auto">
                <a
                  class="btn font dropdown-toggle "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item font-medium pointer" href="#">
                      FR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      UR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
