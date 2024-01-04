const ForgotPassword = () => {
  return (
    <form className="my-10 space-y-6">
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-semibold text-gray-700 dark:text-white">
          Forgot Password <span className="text-primary-500">?</span>
        </h2>
        <p className="text-sm text-gray-400 dark:text-night-200">
          Enter your email to reset your password.
        </p>
      </div>

      <div className="space-y-3 text-left">
        <div className="relative">
          <input
            type="text"
            id="email"
            className="peer block"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-95 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-2 peer-focus:text-primary-600 dark:bg-night-700 dark:text-night-200"
          >
            Email address
          </label>
        </div>
      </div>

      <div className="flex justify-between space-x-2">
        <button
          type="button"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-500 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-400"
        >
          Submit
        </button>
        <button
          type="button"
          // routerLink="/auth/sign-in"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-50 py-2 px-4 text-sm font-medium text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-gray-100 dark:bg-night-600 dark:text-night-200 dark:hover:bg-night-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;
