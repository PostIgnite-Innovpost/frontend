import React, { useState } from "react";
import { Box, Flex, Spinner, Text, Center, Icon, Button, Input } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Result {
    type: string;
    data: any;
}

export default function ScanDocument() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            setError("No file selected.");
            return;
        }

        if (!file.type.startsWith("image/")) {
            setError("Invalid file type. Please upload an image.");
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const simulatedResult: Result = await new Promise((resolve) =>
                setTimeout(() =>
                    resolve({
                        type: "check",
                        data: {
                            id: 1,
                            accountNum: "1234567890",
                            key: "1234567890",
                            amount: 1000,
                            amountInWords: "One thousand",
                            senderFirstName: "John",
                            senderLastName: "Doe",
                            senderAddress: "123 Main St",
                            senderPhone: "123-456-7890",
                            senderEmail: "example@gmail.com",
                            receiverFirstName: "Jane",
                            receiverLastName: "Doe",
                            receiverAddress: "456 Elm St",
                            receiverPhone: "987-654-3210",
                            date: "2022-01-01",
                            signature: "https://via.placeholder.com/150",
                            type: "check",
                        },
                    }),
                    2000
                )
            );

            if (simulatedResult.type === "check") {
                navigate('/dashboard/check', { state: simulatedResult.data });
            } else if (simulatedResult.type === "checksecours") {
                navigate('/dashboard/checksecours', { state: simulatedResult.data });
            } else {
                setError("Invalid document type.");
            }
        } catch (err) {
            setError("An error occurred while processing the document.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Flex direction="column" align="center" justify="center" gap="20px" p="4" width="100%">
            <Text fontSize="3xl" fontWeight="bold">
                Scan Document
            </Text>
            <Box>
                <Flex align="center" gap="10px">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        display="none"
                        id="file-upload"
                    />
                    <label htmlFor="file-upload">
                        <Button
                            as="span"
                            colorScheme="blue"
                            variant="outline"
                            display="flex"
                            flexDirection="column"
                            width={{ base: "200px", md: "300px" }}
                            height={{ base: "200px", md: "300px" }}
                            fontSize={{ base: "16px", md: "22px" }}
                            gap={5}
                        >
                            <Icon as={FiUpload} fontSize="60px" />
                            Upload Document
                        </Button>
                    </label>
                </Flex>
            </Box>

            {error && (
                <Text color="red.500" fontSize="md" mt="2">
                    {error}
                </Text>
            )}

            {loading && (
                <Box
                    pos="absolute"
                    inset="0"
                    bg="rgba(0,0,0,0.5)"
                    backdropFilter="blur(8px)"
                    borderRadius="30px"
                    zIndex="overlay"
                >
                    <Center h="100vh" flexDirection="column" gap="10px">
                        <Spinner color="blue" size="xl" />
                        <Text color="blue" fontSize="xl" fontWeight="bold">
                            Detecting document type...
                        </Text>
                    </Center>
                </Box>
            )}
        </Flex>
    );
}
