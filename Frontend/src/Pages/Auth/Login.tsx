const Login = () => {
  return (
    <>
    <div className="min-h-screen bg-primaryBg p-5 flex items-center justify-center">
      <div className=" flex flex-col gap-4 p-5 rounded-md shadow-md">
        <h1>Login</h1>
     <div>
       <label htmlFor="email" className="text-primaryText">Email:</label>
      <input type="email" id="email" />
     </div>
     <div>
       <label htmlFor="password" className="text-primaryText">Password:</label>
      <input type="password" id="password" />
     </div>
      <button className="bg-white text-primaryText">Login</button>
      </div>
    </div>
    </>
    
  );
}

export default Login;