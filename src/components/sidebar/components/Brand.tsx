import React from 'react';
// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import { AgrisistanceLogo } from '../../Footer/icons/Icons';
import { HSeparator } from '../../../components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	// let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column' >
			<AgrisistanceLogo />
			<HSeparator />
		</Flex>
	);
}

export default SidebarBrand;
