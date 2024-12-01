import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Profile from "./components/Profile";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store"; // Ensure this import is correct
import { setUser, UserInfo } from "../../../redux/userSlice"; // Adjust the path as necessary
import Navbar from "../navbar/navbar";
import post from "../../../assets/img/dashboards/AlgeriePoste.svg 1.svg";
import documents from "../../../assets/img/dashboards/CardMedia.svg";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const user = useSelector((state: any) => state.user) as UserInfo;
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.token.token); // Assuming you store the token in Redux
  console.log("user token: ", token);
  const navigate = useNavigate();
  // fetching lands data:
  // const fetchLands = async () => {
  //   try {
  //     // Directly call apiCall and get the parsed data
  //     const lands = await apiCall(
  //       "/land/get-all-lands",
  //       {
  //         method: "GET",
  //         requireAuth: true,
  //       },
  //       token
  //     );

  //     console.log("API Response:", lands); // Log the response to confirm it's an array

  //     //! comment when using dummy data
  //     // dispatch(setInitialLands(mappedLands));
  //     // console.log("Initial lands set successfully", mappedLands);
  //   } catch (error) {
  //     console.error("Failed to fetch lands:", error);
  //   }
  // };

  //! comment when using dummy data
  // useEffect(() => {
  //   fetchLands();
  // }, []);

  // fetching user data!
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // const profile = await apiCall(
        //   "/profile/get-profile",
        //   {
        //     method: "GET",
        //     requireAuth: true,
        //   },
        //   token
        // );

        dispatch(
          // setUser({
          //   firstName: profile.first_name,
          //   lastName: profile.last_name,
          //   email: profile.email,
          //   phoneNumber: profile.phone_number,
          //   country: profile.country,
          //   userId: profile.user_id,
          //   profilePicture: profile.profile_picture,
          //   currentPlan:
          //     profile.subscription_type === "Basic" ? "Basic" : "premium",
          // })
          setUser({
            firstName: "Amel",
            lastName: "FEDDAG",
            email: "amel.feddag@ensia.edu.dz",
            phoneNumber: "+213 555 05 04 96",
            country: "Algeria",
            userId: "",
            profilePicture: "",
            currentPlan: "Basic",
          })
        );
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
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
