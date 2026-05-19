// import Button from "../../Components/Buttons/Button";
// import Input from "../../Components/Inputs/Input";

// const Login = () => {
//   return (
//     <>
//       <div  className="bg-[url('/images/authbg.png')] bg-center bg-cover bg-no-repeat min-h-screen dark:bg-primaryBgDark bg-primaryBg p-5 flex items-center justify-center">
//         <div className=" flex backdrop-blur-sm dark:bg-primaryBgDark bg-primaryBg/30 flex-col gap-4 p-5 shadow-md card border rounded-xl w-full max-w-md">
//           <div className="flex justify-center">
//             <img
//               src="/images/openVerse.png"
//               alt="logo"
//               className="h-20 w-32 object-contain"
//             />
//           </div>
//           <h1 className="text-center text-2xl dark:text-primaryTextDark text-primaryText">
//             <b>Welcome Back!</b>
//           </h1>
//           <h1 className="text-center text-lg dark:text-primaryTextDark text-primaryText">
//             Please sign in to your <b>OpenVerse</b> account.
//           </h1>
//           <div className="flex flex-col gap-2">
//             <Input
//               label="Email Address:"
//               name="email"
//               type="email"
//               value=""
//               onChange={() => {}}
//               placeholder="Enter your email"
//               className=""
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <Input
//               label="Password:"
//               name="password"
//               type="password"
//               value=""
//               onChange={() => {}}
//               placeholder="Enter your password"
//               className=""
//             />
//           </div>
//           <div className="flex items-center justify-center mt-4">
//             <input type="checkbox" className="dark:text-primaryTextDark text-primaryText" />
//             <span className="dark:text-primaryTextDark text-primaryText ml-1" >Remember me</span>
//             <a
//               href="#"
//               className="text-sm dark:text-primaryTextDark text-primaryText hover:underline ml-auto"
//             >
//               Forgot password?
//             </a>
//           </div>
//           <Button
//             to="/login"
//             variant="outline"
//             size="md"
//             className="justify-center"
//           >
//             Login
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Inputs/Input";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Checkbox from "../../Components/Inputs/checkbox";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="relative min-h-screen bg-[url('/images/authbg.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center p-5 overflow-hidden">
      {/* Animated background elements */}

      {/* Glassmorphism card */}
      <motion.div
      initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
       className="relative backdrop-blur-xl bg-white/10 dark:bg-black/30 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-8 transition-all duration-300 hover:shadow-purple-500/10">
        {/* Logo and header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center mb-8 dark:bg-primaryBgDark/30 bg-primaryBgDark rounded-2xl p-4"
        >
          <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            // transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-primaryBgDark/50 to-primaryBgDark/10 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"
          ></motion.div>
          <img
            src="/images/openVerse.png"
            alt="OpenVerse"
            className="relative h-16 w-auto object-contain rounded-full"
          />
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-3xl font-bold dark:text-primaryTextDark text-primaryText"
          >
            Welcome Back!
          </motion.h1>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-gray-300 text-center"
          >
            Sign in to continue your journey with{" "}
            <span className="font-semibold dark:text-primaryTextDark text-primaryText">
              OpenVerse
            </span>
          </motion.p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              icon={<EnvelopeIcon className="w-5 h-5" />}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              icon={<LockClosedIcon className="w-5 h-5" />}
            />
          </motion.div>

          {/* Remember me and forgot password */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between"
          >
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <a
              href="#"
              className="text-sm dark:text-primaryTextDark text-primaryText hover:text-primaryBgDark transition-colors duration-200 hover:underline"
            >
              Forgot password?
            </a>
          </motion.div>

          {/* Login button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              type="submit"
              variant="outline"
              size="md"
              className="w-full justify-center relative overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
            </Button>
          </motion.div>

          {/* Sign up link */}
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center text-sm text-gray-300"
          >
            Don't have an account?{" "}
            <a
              href="/signup"
              className="dark:text-primaryTextDark text-primaryText hover:text-primaryBgDark font-semibold transition-colors duration-200"
            >
              Create account
            </a>
          </motion.p>
        </form>

        {/* Divider */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="relative my-8"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-primaryBgDark/40  backdrop-blur-sm dark:text-primaryTextDark rounded-full">
              Or continue with
            </span>
          </div>
        </motion.div>

        {/* Social login buttons */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-2 gap-2 mt-6"
        >
          <Button variant="outline" size="md" className="justify-center">
            <img src="/images/google.png" alt="Google" className="w-6 h-6" />{" "}
            <span className="ms-1">Google</span>
          </Button>
          <Button variant="outline" size="md" className="justify-center">
            <img
              src="/images/facebook.jpg"
              alt="Facebook"
              className="w-6 h-6 rounded-full"
            />{" "}
            <span className="ms-1">Facebook</span>
          </Button>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;
