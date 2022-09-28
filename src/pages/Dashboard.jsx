import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/buscar");
    }
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
