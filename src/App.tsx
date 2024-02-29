import { Typography } from "@material-tailwind/react";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <div className="flex w-full justify-center">
          <div className="flex flex-col pt-6">
            <table>
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
                <tr>
                  <td className="px-4 py-2 text-sm">Vyan Insya Nur Muhammad</td>
                  <td className="px-4 py-2 text-sm">vyaninsya.nurmuhamamd@gmail.com</td>
                  <td className="px-4 py-2 text-sm">j313u0n1d8198d</td>
                </tr>
                <tr  className="bg-blue-gray-50">
                  <td className="px-4 py-2 text-sm">Vyan Insya</td>
                  <td className="px-4 py-2 text-sm">vyaninsya@gmail.com</td>
                  <td className="px-4 py-2 text-sm">j313u0n1d8198d</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
