
const SignUp = () => {
  return (
    <form className="my-10 space-y-6">
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-semibold text-gray-700 dark:text-white">
          Sign Up <span className="text-primary-500">!</span>
        </h2>
        <p className="text-sm text-gray-400 dark:text-night-200">
          Let's get started with your 30 day free trial
        </p>
      </div>

      <button
        type="button"
        // routerLink="/dashboard"
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-gray-50 dark:border-night-500 dark:bg-night-700 dark:text-night-200 dark:hover:bg-night-600"
      >
        {/* <svg-icon src="assets/icons/google-logo.svg" [svgClass]="'h-6 w-6 mr-2'"> </svg-icon> */}
        Log in with Google
      </button>

      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300 dark:before:border-night-500 dark:after:border-night-500">
        <p className="mx-4 mb-0 text-center text-sm text-gray-400 dark:text-night-400">
          or
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
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-95 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-2 peer-focus:text-primary-500 dark:bg-night-700 dark:text-night-200"
          >
            Email address
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="peer block"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-95 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-2 peer-focus:text-primary-600 dark:bg-night-700 dark:text-night-200"
          >
            Password
          </label>
          <span className="absolute top-2.5 right-5 cursor-pointer text-gray-400 dark:text-night-300">
            {/* <svg-icon src="assets/icons/heroicons/outline/eye-off.svg" [svgClass]="'h-5 w-5'"> </svg-icon>
          <svg-icon src="assets/icons/heroicons/outline/eye.svg" [svgClass]="'h-5 w-5 hidden'"> </svg-icon> */}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="h-1 rounded-sm bg-gray-200 dark:bg-night-500"></div>
          <div className="h-1 rounded-sm bg-gray-200 dark:bg-night-500"></div>
          <div className="h-1 rounded-sm bg-gray-200 dark:bg-night-500"></div>
          <div className="h-1 rounded-sm bg-gray-200 dark:bg-night-500"></div>
        </div>
        <span className="text-xs text-gray-400 dark:text-night-300">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </span>
        <div className="relative">
          <input
            type="password"
            id="confirm-password"
            className="peer block"
            placeholder=" "
          />
          <label
            htmlFor="confirm-password"
            className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-95 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-95 peer-focus:px-2 peer-focus:text-primary-600 dark:bg-night-700 dark:text-night-200"
          >
            Confirm Password
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3">
        <div className="flex items-center">
          <input id="accept-term" name="accept-term" type="checkbox" />
          <label
            htmlFor="accept-term"
            className="ml-2 block text-sm text-gray-400 dark:text-night-200"
          >
            I Accept the
            <a className="font-medium text-primary-500 hover:text-primary-400">
              {" "}
              Terms{" "}
            </a>
          </label>
        </div>
      </div>

      <button
        type="button"
        // routerLink="/dashboard"
        className="group relative mb-10 flex w-full justify-center rounded-md border border-transparent bg-primary-500 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-400"
      >
        Sign up
      </button>

      <div className="text-sm text-gray-400 dark:text-night-200">
        Already have an Account?{" "}
        <a
          // routerLink="/auth/sign-in"
          className="text-primary-500 hover:text-primary-400"
        >
          Sign in
        </a>
      </div>
    </form>
  );
};

export default SignUp;
