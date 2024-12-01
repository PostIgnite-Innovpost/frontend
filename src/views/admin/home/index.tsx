import React, { useEffect } from "react";
import {
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import Profile from "./components/Profile";
import { useSelector, useDispatch } from "react-redux";
import { setUser, UserInfo } from "../../../redux/userSlice"; // Adjust the path as necessary
import Navbar from "../navbar/navbar";
import post from "../../../assets/img/dashboards/AlgeriePoste.svg 1.svg";
import documents from "../../../assets/img/dashboards/CardMedia.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const user = useSelector((state: any) => state.user) as UserInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await axios.post(`https://c11e-41-106-128-126.ngrok-free.app/auth/profile`, { user_id: localStorage.getItem("userId") },
        );

        console.log(profile.data)

        dispatch(
          setUser({
            fullName: profile.data.fullName,
            email: profile.data.email,
            phoneNumber: profile.data.phoneNumber,
            userId: profile.data.id,
            isActive: profile.data.isActive,
            ccp: profile.data.ccp,
            cle: profile.data.cle,
          })
        );
      } catch (e: any) {
        console.error(
          "Failed to fetch user profile:",
          e.response?.data?.detail || e.message
        );
      }
    };
    //! Comment when using dummy data
    fetchUserProfile();
  }, []);

  //
  return (
    <Flex direction="column" height="100vh" mt={16}>
      <Navbar /> {/* Add className */}
      <Flex
        direction={"column"}
        align="center"
        justify="center"
        width="100%"
        height="100%"
        padding="20px"
        boxSizing="border-box"
        gap="50px"
      >
        <div className="profile-section">
          {" "}
          <Profile />
        </div>
        <Flex direction="row" gap={10} flexWrap={'wrap'}>
          <Flex
            width={"350px"}
            direction="column"
            wrap="wrap"
            gap="40px"
            padding=""
            className="other-lands"
            justify={"center"}
            align={"center"}
            background="#fff"
            borderRadius={"20px"}
            paddingTop={'20px'}
          >
            <Image src={post} height={'170px'} objectFit="cover" ></Image>
            <Button
              className="add-new-land"
              onClick={() => navigate('/dashboard/create-ccp')}
              fontSize="25px"
              width={"100%"}
              fontWeight={"bold"}
              bg={'#FBE281'}
              borderRadius={'0px 0px 20px 20px'}
              padding={'10'}
            >
              Create a new CCP account
            </Button>
          </Flex>
          <Flex
            width={"350px"}
            direction="column"
            gap="40px"
            padding=""
            className="other-lands"
            justify={"space-between"}
            align={"center"}
            background="#fff"
            borderRadius={"20px"}
            paddingTop={'20px'}
          >
            <Image src={documents} height={'170px'} objectFit="cover" />
            <Button
              className="add-new-land"
              fontSize="25px"
              width={"100%"}
              fontWeight={"bold"}
              bg={'#FBE281'}
              borderRadius={'0px 0px 20px 20px'}
              padding={'10'}
              onClick={() => navigate('/dashboard/upload-document')}
            >
              Scan a document
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
