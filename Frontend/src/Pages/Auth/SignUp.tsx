import LockClosedIcon from "@heroicons/react/24/solid/esm/LockClosedIcon";
import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Inputs/Input";
import { motion } from "framer-motion";
import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Form } from "react-router-dom";
import Checkbox from "../../Components/Inputs/checkbox";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <div className="relative min-h-screen bg-[url('/images/authbg.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center p-5 overflow-hidden">
        {/* Animated background elements */}

        {/* Glassmorphism card */}
        <motion.div 
        initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        className="relative backdrop-blur-xl bg-white/10 dark:bg-black/30 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md p-8 transition-all duration-300 hover:shadow-purple-500/10">
          <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            layout
             transition={{ duration: 0.2}}
            className="flex flex-col items-center mb-8 dark:bg-primaryBgDark/30 bg-primaryBgDark rounded-2xl p-4"
          >
            <div className="bg-gradient-to-r from-primaryBgDark/50 to-primaryBgDark/10 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              src="/images/openVerse.png"
              alt="OpenVerse"
              className="relative h-16 w-auto object-contain rounded-full"
            />
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-3xl font-bold dark:text-primaryTextDark text-primaryText"
            >
              Create an Account
            </motion.h1>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-gray-300 text-center"
            >
              Sign up to continue your journey with{" "}
              <span className="font-semibold dark:text-primaryTextDark text-primaryText">
                OpenVerse
              </span>
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-2"
              >
                <Input
                  label="First Name:"
                  name="firstName"
                  type="text"
                  value=""
                  onChange={() => {}}
                  placeholder="Enter your first name"
                  className="truncate"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-2"
              >
                <Input
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value=""
                  onChange={() => {}}
                  placeholder="Enter your last name"
                  className="truncate"
                />
              </motion.div>
            </motion.div>

            <form className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
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
                transition={{ delay: 0.9 }}
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0 }}
              >
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Confirm your password"
                  icon={<LockClosedIcon className="w-5 h-5" />}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1 }}
              >
                <Checkbox
                  id="terms"
                  name="terms"
                  label="I agree to the Terms of Service and Privacy Policy"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Button
                  to="/login"
                  variant="outline"
                  size="md"
                  // className="justify-center"
                  className="w-full justify-center relative overflow-hidden group"
                >
                  Create Account
                </Button>
              </motion.div>
            </form>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 }}
              className="text-center text-sm dark:text-primaryTextDark text-primaryText mt-4"
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="dark:text-primaryTextDark text-primaryText hover:underline"
              >
                Sign In
              </a>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
              className="grid grid-cols-2 gap-2 mt-6"
            >
              <Button variant="outline" size="md" className="justify-center">
                <img
                  src="/images/google.png"
                  alt="Google"
                  className="w-6 h-6"
                />{" "}
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
        </motion.div>
      </div>
    </>
  );
};

export default SignUp;
