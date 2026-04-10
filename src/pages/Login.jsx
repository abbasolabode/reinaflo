import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* LEFT SIDE */}
      <section className="hidden lg:flex w-1/2 bg-black text-white relative overflow-hidden">

        <div className="flex flex-col justify-center px-20 space-y-8 max-w-xl z-10">
          <h1 className="text-5xl font-light leading-tight">
            Welcome Back to <span className="font-semibold">Reina-Flor</span>
          </h1>

          <p className="text-white/70 leading-relaxed text-lg">
            Continue your journey in leadership, performance, and human transformation.
          </p>

          <div className="space-y-3 text-white/60 text-sm">
            <p>✔ Leadership Development</p>
            <p>✔ High Performance Systems</p>
            <p>✔ Global Learning Experience</p>
          </div>
        </div>

        {/* glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* RIGHT SIDE */}
      <section className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-8 border border-black/5">

          {/* HEADER */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold text-black">
              Sign in
            </h2>
            <p className="text-sm text-black/60">
              Access your account to continue
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-black
                  focus:border-black
                  transition-all duration-200
                "
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-black
                  focus:border-black
                  transition-all duration-200
                "
                required
              />
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-black/70">
                <input type="checkbox" className="accent-black" />
                Remember me
              </label>

              <button
                type="button"
                className="text-black/60 hover:text-black transition"
              >
                Forgot password?
              </button>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-lg bg-black text-white font-medium
                hover:bg-white hover:text-black border border-black
                transition-all duration-300
              "
            >
              Sign In
            </button>

          </form>

          {/* FOOTER */}
          <p className="text-sm text-center text-black/60">
            Don’t have an account?{" "}
            <span className="text-black font-medium cursor-pointer hover:underline">
              Create one
            </span>
          </p>

        </div>

      </section>
    </div>
  );
}