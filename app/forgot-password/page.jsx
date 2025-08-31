import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-white font-bold text-xl">ESPORTS</span>
            </div>
          </div>

          {/* Back Button */}
          <Link href="/login" className="flex items-center gap-2 text-slate-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Forgot your password?</h1>
              <p className="text-slate-400">
                Don't worry, happens to all of us. Enter your email below to recover your password.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12"
                />
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-semibold">
                Submit
              </Button>

              <div className="text-center">
                <Link href="/login" className="text-slate-400 hover:text-white text-sm">
                  Or login with
                </Link>
              </div>
            </form>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 pt-8">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 relative">
        <img
          src="/esports-gaming-setup-with-rgb-lighting-and-multip.png"
          alt="Gaming Setup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
