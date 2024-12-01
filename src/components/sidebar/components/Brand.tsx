import React from 'react';
// Chakra imports
import { Flex, Image } from '@chakra-ui/react';

// Custom components
import PostIgnite from '../../../assets/img/dashboards/AlgeriePoste.svg 1.svg';
import { HSeparator } from '../../../components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	// let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column' >
			<Image src={PostIgnite} />
			<HSeparator />
		</Flex>
	);
}

export default SidebarBrand;
