import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetLg from "../../components/widgetlg/WidgetLg";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWY3NDJlNzZmYTFlMzA3ODMyMGZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTY5NDgyMiwiZXhwIjoxNjMwMTI2ODIyfQ.CaXe3vR0RXO2UlHReDo9C0YVkZqVDny4jNfap9j9dZw",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
