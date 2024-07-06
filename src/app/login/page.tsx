"use client";

import InputField from "@/Components/InputField";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

type UserInfo = {
  username: string;
  password: string;
};

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    password: "",
  });
  const { push } = useRouter();
  const [login] = useLoginMutation();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({
      username: userInfo.username,
      password: userInfo.password,
      expiresInMins: 30,
    });
    push("/checkout");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">Welcome back customer</p>
          <form onSubmit={handleLogin} autoComplete="off">
            <div className="space-y-2">
              <div>
                <label htmlFor="username" className="text-gray-600 mb-2 block">
                  Email address
                </label>
                <InputField
                  type="text"
                  name="username"
                  id="username"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <InputField
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  onChange={handleInputChange}
                  placeholder="*******"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
