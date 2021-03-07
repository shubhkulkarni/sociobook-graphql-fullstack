import React, { useEffect } from "react";
import MainNav from "../../layout/navigation/MainNav";
import "./Home.css";
import Stories from "./components/stories/Stories";
import { Desktop } from "./../../utils/responsiveComponents";
import { useQuery } from "@apollo/client";
import { getAllUsers, getUserInfo } from "../../graphql/queries";
import { NotificationManager } from "react-notifications";
import { setUserProfile } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import SideSection from "../../layout/SideSection/SideSection";
import { setUsersList } from "./../../redux/actions/userActions";
function Home() {
  const userId = useSelector((state) => state.app.userId);
  const { loading, error, data } = useQuery(getUserInfo, {
    variables: { userId },
  });

  const {
    loading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(getAllUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setUserProfile(data.user));
    }
  }, [data, loading]);

  useEffect(() => {
    if (usersData) {
      dispatch(setUsersList(usersData.users));
    }
  }, [usersData, usersLoading]);
  if (error) {
    NotificationManager.error("Please try after sometime");
  }

  return (
    <div className="homeLayout">
      <Desktop>
        <SideSection />
      </Desktop>
      <div className="stories">
        <Stories />
      </div>
      <Desktop>
        <MainNav />
      </Desktop>
    </div>
  );
}

export default Home;
