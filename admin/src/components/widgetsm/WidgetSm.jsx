import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./widgetsm.css";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWY3NDJlNzZmYTFlMzA3ODMyMGZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTY5NDgyMiwiZXhwIjoxNjMwMTI2ODIyfQ.CaXe3vR0RXO2UlHReDo9C0YVkZqVDny4jNfap9j9dZw",
          },
        });
        setNewUsers(res.data);
      } catch (error) {}
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">new Join members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
