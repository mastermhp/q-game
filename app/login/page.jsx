import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Chrome, Apple } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="min-h-screen w-full bg-[#111827]">
      <div className="container mx-auto flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-start justify-center p-10">
          <div className="w-full">
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <div className="w-[103px] h-[154px] rounded-full flex items-center justify-center">
                  <img src="/logo.png" alt="" />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6  md:w-[512px]">
              <div className="h-[100px]">
                <h1 className="text-[40px] font-semibold text-white mb-2">
                  Login
                </h1>
                <p className="text-white text-[16px]">
                  Login to access your tournament account
                </p>
              </div>

              <form className="space-y-8 mt-14">
                <div className="relative">
                  <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-[56px] w-full rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] my-text text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <label className="absolute my-text text-[#FFFFFF] text-[14px] h-[21px] px-2 -top-3 left-3 bg-[#111827]">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-[56px] w-full rounded-[4px] bg-[#0F0E0E] border-[1px] border-[#79747E] my-text placeholder:text-slate-400"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-white w-[24px] h-[24px]"
                    />
                    <label
                      htmlFor="remember"
                      className="text-[14px] my-text font-medium text-white"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-[14px] my-text font-medium text-[#FF8682]"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button className="w-full p-0 bg-[#9D0C0F] hover:bg-[#9D0C0F]/40 hover:border-[1px] hover:border-[#9D0C0F] transition-all duration-500 cursor-pointer text-white h-[56px] text-base font-semibold rounded-[4px]">
                  <Link href="/" className="w-full h-full flex items-center justify-center">Login</Link> 
                </Button>
                <div className="text-center text-[14px] my-text font-medium text-white">
                  Don't have an account?
                  <Link href="/signup" className="transition-all duration-700 cursor-pointer">
                    <span className="text-[#FF8682] text-[14px] font-medium ml-1">
                      Sign up
                    </span>
                  </Link>
                </div>
              </form>

              <div class="flex items-center justify-center my-6 mt-18">
                <div class="flex-1 border-t border-gray-500"></div>
                <span class="px-4 my-text text-gray-400">Or login with</span>
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

        {/* Right Side - Image */}
        <div className="flex-1 relative py-20 hidden md:block">
          <img
            src="/loginsideimg.png"
            alt="loginsideimg"
            className="w-full h-[860px] ml-auto object-cover rounded-3xl"
          />
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 pt-4">
            <div className="w-6 h-2 bg-[#9D0C0F] rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
