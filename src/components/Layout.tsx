import { Badge, Navbar } from "@material-tailwind/react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

export default function layout({ children }: { children: ReactNode }) {
  const registerState = useAppSelector((state) => state.registerReducer.users);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <Navbar className="max-w-full">
          <div className="flex w-full justify-center">
            <div className="flex text-black gap-6">
              <Badge content={registerState.length}>
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive
                        ? "text-gray-900 font-bold"
                        : "text-gray-600 font-bold",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Users
                </NavLink>
              </Badge>
              <NavLink
                to="/register"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive
                      ? "text-gray-900 font-bold"
                      : "text-gray-600 font-bold",
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
