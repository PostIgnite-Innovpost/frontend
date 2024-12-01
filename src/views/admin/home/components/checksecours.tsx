import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Input,
    Image,
    FormControl,
    FormLabel,
    VStack,
    Button
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
    date?: string;
    signature?: Blob | string;
    type?: string;
    file?: string;
}

export default function CheckSecours({
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
    file,
}: CheckSecoursProps) {
    const signatureUrl =
        typeof signature === 'string' ? signature : URL.createObjectURL(signature);

    const [isEditable, setIsEditable] = useState(false);

    // Toggle the read-only state of the inputs
    const toggleEditable = () => setIsEditable(!isEditable);

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
                        <Input value={accountNum} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Key</FormLabel>
                        <Input value={key} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Input value={amount} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount in Words</FormLabel>
                        <Input value={amountInWords} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender First Name</FormLabel>
                        <Input value={senderFirstName} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Last Name</FormLabel>
                        <Input value={senderLastName} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Address</FormLabel>
                        <Input value={senderAddress} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Phone</FormLabel>
                        <Input value={senderPhone} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Sender Email</FormLabel>
                        <Input value={senderEmail} isReadOnly={!isEditable} />
                    </FormControl>
                </VStack>

                {/* Right Section - Receiver Details */}
                <VStack spacing={4} flex="1" align="stretch">
                    <FormControl>
                        <FormLabel>Receiver First Name</FormLabel>
                        <Input value={receiverFirstName} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Receiver Last Name</FormLabel>
                        <Input value={receiverLastName} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Receiver Address</FormLabel>
                        <Input value={receiverAddress} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Receiver Phone</FormLabel>
                        <Input value={receiverPhone} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date</FormLabel>
                        <Input value={new Date(date).toLocaleDateString()} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Type</FormLabel>
                        <Input value={type} isReadOnly={!isEditable} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Signature</FormLabel>
                        <Image src={signatureUrl} alt="Signature" boxSize="100px" objectFit="contain" />
                    </FormControl>
                </VStack>
            </Flex>

            {/* Document Image */}
            <Box mt={6} borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src={file} alt="Document" maxH="300px" objectFit="contain" />
            </Box>

            <Flex gap={4}>
                <Button color='white' width='fit' colorScheme='yellow' onClick={toggleEditable}>
                    {isEditable ? 'Lock Info' : 'Modify Info'}
                </Button>
                <Button color='white' width='fit' colorScheme='blue'>
                    Validate the operation
                </Button>
            </Flex>

            {/* Document Review Section */}
            <Box mt={6} p={4} borderWidth="1px" borderRadius="md" width="full" textAlign="center">
                <Text fontSize="lg" fontWeight="medium">
                    Document Review:
                </Text>
                <Text></Text>
            </Box>
        </Flex>
    );
}
