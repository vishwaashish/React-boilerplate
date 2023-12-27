import { useDispatch } from "react-redux";
import { logout } from "../../context/authSlice";

const Dashboard = () => {

    const dispatch = useDispatch()
  return <div>Dashboard

    <button className="bg-blue-500 text-white p-5" onClick={()=> dispatch(logout())}>Logout</button>
  </div>;
};

export default Dashboard;
