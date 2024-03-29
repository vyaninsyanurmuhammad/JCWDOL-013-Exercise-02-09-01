import { Typography } from "@material-tailwind/react";
import Layout from "./components/Layout";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { useEffect } from "react";
import { getUserThunk } from "./redux/feature/register-thunk";

function App() {
  const registerState = useAppSelector((state) => state.registerReducer.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk())
  }, []);

  return (
    <>
      <Layout>
        <div className="flex w-full justify-center">
          <div className="flex flex-col pt-6">
            <table className="border border-blue-gray-100">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Name
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Email
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Password
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {registerState.map(({ name, email, password }, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : "bg-blue-gray-50"}>
                    <td className="px-4 py-2 text-sm">{name} </td>
                    <td className="px-4 py-2 text-sm">{email} </td>
                    <td className="px-4 py-2 text-sm">{password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
