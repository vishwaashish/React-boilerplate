
const NewPassword = () => {
  return (
    <form className="my-10 space-y-6">
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-semibold text-gray-700 dark:text-white">
          Setup New Password
        </h2>
        <p className="text-sm text-gray-400 dark:text-night-200">
          Have you already reset the password ?{" "}
          <a
            className="text-primary-500"
            // routerLink="/auth/sign-in"
          >
            {" "}
            Sign in
          </a>
        </p>
      </div>

      <div className="space-y-3 text-left">
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

      <button
        type="button"
        className="group relative mb-10 flex w-full justify-center rounded-md border border-transparent bg-primary-500 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-400"
      >
        Submit
      </button>
    </form>
  );
};

export default NewPassword;
