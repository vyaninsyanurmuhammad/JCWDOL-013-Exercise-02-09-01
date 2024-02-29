import React from "react";
import Layout from "../components/Layout";
import { Button, Input } from "@material-tailwind/react";

export default function Register() {
  return (
    <>
      <Layout>
        <div className="flex w-full justify-center">
          <div className="flex flex-col w-96 gap-8">
            <div className="flex flex-col text-black pt-6 gap-6">
              <Input label="Name" />
              <Input label="Email" />
              <Input label="Password" />
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </Layout>
    </>
  );
}
