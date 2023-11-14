"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { registerUserAsync, setUserStatus } from "../../../redux/features/UserSlice";
import { validate } from "./validate";
import Link from "next/link";
import NestPolitic from "./politic";

const Register: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleRegister = async () => {
    setErrors(validate(fields));
    if (Object.keys(errors).length === 0) {
      try {
        const resultAction = await dispatch(registerUserAsync(fields));

        if (registerUserAsync.fulfilled.match(resultAction)) {
          const cookies = resultAction.payload.cookies;
          const responseData = resultAction.payload.responseData;

          console.log(responseData);
          console.log(cookies);

          dispatch(setUserStatus({ isAuthenticated: true, user: responseData }));
        } else if (registerUserAsync.rejected.match(resultAction)) {
          console.error("Error en el registro:", resultAction.error);
        }
      } catch (error) {
        console.error("Error en el registro:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    setFields({ ...fields, [name]: trimmedValue });
    setErrors(validate({ ...fields, [name]: trimmedValue }));
  };

  return (
    <section className="relative bg-white overflow-hidden">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-10 lg:order-last lg:col-span- lg:h-full xl:col-span-6 overflow-y-auto max-h-screen">
  <NestPolitic />
</aside>

      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 relative">
      <div className="absolute inset-0 bg-cover bg-center z-[-1] filter blur-md opacity-50" style={{ backgroundImage: "url('https://img.freepik.com/fotos-premium/ia-generativa-vecindarios-suburbanos_1006147-119.jpg')" }}></div>

  <div className="max-w-xl lg:max-w-3xl">



    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
      Welcome to </h1> <h1 className="font-logo text-6xl">Nest</h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
              dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  value={fields.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-600"
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="lastName"
                  value={fields.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-600"
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName}</p>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-600"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={fields.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-600"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-                5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />
  
                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>
{/*   
                <div className="col-span-6">
  <p className="text-sm text-gray-500">
    By creating an account, you agree to our{' '}
    <Link href="#">
      <span className="text-gray-700 underline cursor-pointer">terms and conditions</span>
    </Link>{' '}
    and{' '}
    <Link href="#">
      <span className="text-gray-700 underline cursor-pointer">privacy policy</span>
    </Link>
    .
  </p>
</div> */}

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
  
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link href="../../Views/Login">
                      <p className="text-gray-700 underline">Log in</p>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    );
  };
  
  export default Register;
  
