import React from 'react';
import {
    Box,
    Flex,
    Text,
    Input,
    Image,
    HStack,
    FormControl,
    FormLabel,
    VStack,
} from '@chakra-ui/react';

interface CheckSecoursProps {
    id?: number;
    accountNum?: string;
    key?: string;
    amount?: number;
    amountInWords?: string;
    senderFirstName?: string;
    senderLastName?: string;
    senderAddress?: string;
    senderPhone?: string;
    senderEmail?: string;
    receiverFirstName?: string;
    receiverLastName?: string;
    receiverAddress?: string;
    receiverPhone?: string;
    date?: string; // Assuming date is a string. If it's a Date object, convert it when rendering.
    signature?: Blob | string; // Assuming signature is a Blob or URL string.
    type?: string;
    image?: string; // Assuming res.image is passed as a prop.
}

export default function Check({
    accountNum,
    key,
    amount,
    amountInWords,
    senderFirstName,
    senderLastName,
    senderAddress,
    senderPhone,
    senderEmail,
    receiverFirstName,
    receiverLastName,
    receiverAddress,
    receiverPhone,
    date,
    signature,
    type,
    image,
}: CheckSecoursProps) {
    const signatureUrl =
        typeof signature === 'string' ? signature : URL.createObjectURL(signature);

    return (
        <Flex direction="column" align="center" p={4} gap={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Your Document is: <span style={{ color: 'green' }}>Check de Secours</span>
            </Text>

            <Flex direction={['column', 'row']} gap={8} width="full">
                {/* Left Section - Form Details */}
                <VStack spacing={4} flex="1" align="stretch">
                    <FormControl>
                        <FormLabel>Account Number</FormLabel>
                        <Input value={accountNum} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Key</FormLabel>
                        <Input value={key} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Input value={amount} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount in Words</FormLabel>
                        <Input value={amountInWords} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender First Name</FormLabel>
                        <Input value={senderFirstName} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Last Name</FormLabel>
                        <Input value={senderLastName} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Address</FormLabel>
                        <Input value={senderAddress} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Phone</FormLabel>
                        <Input value={senderPhone} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Email</FormLabel>
                        <Input value={senderEmail} isReadOnly />
                    </FormControl>
                </VStack>

                {/* Right Section - Receiver Details */}
                <VStack spacing={4} flex="1" align="stretch">
                    <FormControl>
                        <FormLabel>Receiver First Name</FormLabel>
                        <Input value={receiverFirstName} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Receiver Last Name</FormLabel>
                        <Input value={receiverLastName} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Receiver Address</FormLabel>
                        <Input value={receiverAddress} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Receiver Phone</FormLabel>
                        <Input value={receiverPhone} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Input value={new Date(date).toLocaleDateString()} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Type</FormLabel>
                        <Input value={type} isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Signature</FormLabel>
                        <Image src={signatureUrl} alt="Signature" boxSize="100px" objectFit="contain" />
                    </FormControl>
                </VStack>
            </Flex>

            {image && (
                <Box mt={6} borderWidth="1px" borderRadius="md" overflow="hidden">
                    <Image src={image} alt="Document" maxH="300px" objectFit="contain" />
                </Box>
            )}

            <Box mt={6} p={4} borderWidth="1px" borderRadius="md" width="full" textAlign="center">
                <Text fontSize="lg" fontWeight="medium">
                    Document Review:
                </Text>
                <Text>{ }</Text>
            </Box>
        </Flex>
    );
}
