import { Navbar } from "@material-tailwind/react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <Navbar className="max-w-full">
          <div className="flex w-full justify-center">
            <div className="flex text-black gap-6">
              <NavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "text-gray-900 font-bold" : "text-gray-600 font-bold",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                Users
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "text-gray-900 font-bold" : "text-gray-600 font-bold",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                Register
              </NavLink>
            </div>
          </div>
        </Navbar>
        {children}
      </div>
    </>
  );
}
