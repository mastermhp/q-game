import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Chrome, Apple } from "lucide-react";

export default function SignupPage() {
  return (
    <section className="min-h-screen w-full bg-[#111827]">
      <div className="container mx-auto flex py-20">
        {/* Left Side - Image */}
        <div className="flex-1 relative py-0 hidden md:block">
          <img
            src="/signupsideimg.jpg"
            alt="signupsideimg"
            className="w-full h-[880px] ml-auto object-cover rounded-3xl"
          />
          {/* Navigation Dots */}
          <div className="absolute left-[48%] bottom-8 flex justify-center gap-2 pt-4">
            <div className="w-6 h-2 bg-[#9D0C0F] rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Right  Side - Form */}
        <div className="flex-1 flex items-center justify-center px-8 md:px-0 md:pl-24 ">
          <div className="w-full">
            {/* Logo */}
            <div className="-mt-9">
              <div className="flex items-center justify-end gap-2">
                <div className="w-[103px] h-[154px] rounded-full flex items-center justify-center">
                  <img src="/logo.png" alt="" />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="h-[80px] -mt-3">
                <h1 className="text-[40px] font-semibold text-white mb-2">
                  Sign up
                </h1>
                <p className="text-white text-[16px] my-text">
                  Let's get you set up so you can access your personal account.
                </p>
              </div>

              <form className="space-y-6 mt-14">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                      First name
                    </label>
                    <Input
                      type="text"
                      placeholder="First name"
                      className="h-[56px] w-full my-text rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                      Last name
                    </label>
                    <Input
                      type="text"
                      placeholder="Last name"
                      className="h-[56px] w-full my-text rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-[56px] w-full rounded-[4px] my-text bg-[#0F0E0E] border-[1px] border-[#79747E] text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                      Phone Number
                    </label>
                    <Input
                      type="text"
                      placeholder="Phone Number"
                      className="h-[56px] w-full my-text rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-[56px] w-full my-text rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="h-[56px] w-full my-text rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] placeholder:text-slate-400"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    className="border-white w-[24px] h-[24px]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-[14px] my-text font-medium text-white"
                  >
                    I agree to all the{" "}
                    <Link href="/terms">
                      <span className="text-[#FF8682] my-text text-[14px] font-medium ml-1">
                        Terms
                      </span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy">
                      <span className="text-[#FF8682] my-text text-[14px] font-medium ml-1">
                        Privacy Policies
                      </span>
                    </Link>
                  </label>
                </div>
               
                  <Button className="w-full p-0  bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer text-white h-[56px] text-base font-semibold rounded-[4px]">
                    <Link href="/" className="w-full h-full flex items-center justify-center">Create account</Link> 
                  </Button>

                <div className="text-center my-text text-[14px] font-medium text-white">
                  Already have an account?
                  <Link href="/login" className="transition-all duration-700 cursor-pointer">
                    <span className="text-[#FF8682] text-[14px] font-medium ml-1">
                      Sign in
                    </span>
                  </Link>
                </div>
              </form>

              <div class="flex items-center justify-center my-6 mt-12">
                <div class="flex-1 border-t border-gray-500"></div>
                <span class="px-4 my-text text-gray-400">Or sign up with</span>
                <div class="flex-1 border-t border-gray-500"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="flex items-center border-[1px] rounded-[4px] border-[#9D0C0F] justify-center py-3">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                    <img src="/fb.svg" className="w-8 h-8" />
                  </button>
                </div>
                <div className="flex items-center border-[1px] rounded-[4px] border-[#9D0C0F] justify-center">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                    <img src="/google.svg" className="w-8 h-8" />
                  </button>
                </div>
                <div className="flex items-center border-[1px] rounded-[4px] border-[#9D0C0F] justify-center">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                    <img src="/apple.svg" className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
