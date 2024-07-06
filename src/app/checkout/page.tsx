"use client";

import CheckoutSummary from "@/Components/CheckoutSummary";
import InputField from "@/Components/InputField";
import useAuth from "@/hooks/useAuth";
import useAuthCheck from "@/hooks/useAuthChecked";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { push } = useRouter();
  const authcheck = useAuthCheck();

  const isLogin = useAuth();

  if (!authcheck) {
    return <div>auth checking</div>;
  }
  return !isLogin ? (
    push("/login")
  ) : (
    <section className="section pt-14">
      <div className="container pb-16">
        <div className=" flex items-center gap-3">
          <a href="../index.html" className="text-primary text-base">
            <i className="fa-solid fa-house"></i>
          </a>
          <span className="text-sm text-gray-400">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p className="text-gray-600 font-medium">Checkout</p>
        </div>

        <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
          <div className="col-span-8 border border-gray-200 p-4 rounded">
            <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="text-gray-600">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <InputField type="text" name="first-name" id="first-name" />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-gray-600">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <InputField type="text" name="last-name" id="last-name" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="text-gray-600">
                  Company
                </label>
                <InputField type="text" name="company" id="company" />
              </div>
              <div>
                <label htmlFor="region" className="text-gray-600">
                  Country/Region
                </label>
                <InputField type="text" name="region" id="region" />
              </div>
              <div>
                <label htmlFor="address" className="text-gray-600">
                  Street address
                </label>
                <InputField type="text" name="address" id="address" />
              </div>
              <div>
                <label htmlFor="city" className="text-gray-600">
                  City
                </label>
                <InputField type="text" name="city" id="city" />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-600">
                  Phone number
                </label>
                <InputField type="text" name="phone" id="phone" />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600">
                  Email address
                </label>
                <InputField type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="company" className="text-gray-600">
                  Company
                </label>
                <InputField type="text" name="company" id="company" />
              </div>
            </div>
          </div>

          <CheckoutSummary />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
