import { Center, Flex, Img, Text } from "@chakra-ui/react";
import Header from "./Header";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
interface ErrorProps {
    header?: boolean;
}
const Error: React.FC<ErrorProps> = ({ header }) => {
    const navigate = useNavigate();

    return (
        <Flex direction={'column'} width={'100vw'} height={'100vh'}>
            {!header && <Header />}
            <Flex justify={'center'} height={'100%'} align={'center'} direction={'column'} mt={28} background={'#fff'} borderRadius={'lg'}>
                <Text fontSize={'7xl'} color={'#22297C'} fontWeight={'semibold'} textShadow={'-2px 4px 5px rgba(0,0,0,0.25)'}>Oops...</Text>
                <Text fontSize={'6xl'} color={'#22297C'} fontWeight={'semibold'} textShadow={'-2px 4px 5px rgba(0,0,0,0.25)'}>404 Page not found</Text>
                <Button onClick={() => navigate(-1)}>&nbsp; &nbsp; Go back &nbsp; &nbsp;</Button>
                {/* <Img mt={2} height={'450px'} src={}/> */}
            </Flex>
        </Flex>
    );
}

export default Error;
