const TwoSteps = () => {
  return (
    <form className="my-10 space-y-6">
      <div className="text-center">
        <h2 className="mb-1 text-3xl font-semibold text-gray-700 dark:text-white">
          Two Step Verification
        </h2>
        <p className="text-sm text-gray-400 dark:text-night-200">
          Enter the verification code we sent to
        </p>
        <div className="mt-2 text-lg text-gray-600 dark:text-night-200">
          ******2289
        </div>
      </div>

      <div className="grid grid-cols-6">
        <input
          name="code1"
          placeholder=""
          maxLength={1}
          className="h-10 w-10 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none focus:border-primary-500 dark:border-night-500 dark:bg-night-700 dark:text-night-300 dark:focus:border-primary-500 sm:h-14 sm:w-14"
        />
        <input
          name="code2"
          placeholder=""
          maxLength={1}
          className="h-10 w-10 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none focus:border-primary-500 dark:border-night-500 dark:bg-night-700 dark:text-night-300 dark:focus:border-primary-500 sm:h-14 sm:w-14"
        />
        <input
          name="code3"
          placeholder=""
          maxLength={1}
          className="h-10 w-10 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none focus:border-primary-500 dark:border-night-500 dark:bg-night-700 dark:text-night-300 dark:focus:border-primary-500 sm:h-14 sm:w-14"
        />
        <input
          name="code4"
          placeholder=""
          maxLength={1}
          className="h-10 w-10 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none focus:border-primary-500 dark:border-night-500 dark:bg-night-700 dark:text-night-300 dark:focus:border-primary-500 sm:h-14 sm:w-14"
        />
        <input
          name="code5"
          placeholder=""
          maxLength={1}
          className="h-10 w-10 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none focus:border-primary-500 dark:border-night-500 dark:bg-night-700 dark:text-night-300 dark:focus:border-primary-500 sm:h-14 sm:w-14"
        />
        <input
          name="code6"
          placeholder=""
          maxLength={1}
          className="h-10 w-10 rounded-md border border-gray-300 bg-white text-center text-gray-500 outline-none focus:border-primary-500 dark:border-night-500 dark:bg-night-700 dark:text-night-300 dark:focus:border-primary-500 sm:h-14 sm:w-14"
        />
      </div>

      <button
        // routerLink="/dashboard"
        type="button"
        className="relative flex w-full justify-center rounded-md border border-transparent bg-primary-500 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:bg-primary-400"
      >
        Submit
      </button>
    </form>
  );
};

export default TwoSteps;
