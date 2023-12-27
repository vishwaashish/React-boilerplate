import { useSelector } from "react-redux";
import { RootState } from "../context/store";

const Loader = () => {
  const globalLoading = useSelector((state: RootState) => state.loading.global);
  return (
    <>
      {!!globalLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
