import React, { useState } from "react";
import {
    Box,
    Flex,
    Spinner,
    Text,
    Center,
    Icon,
    Button,
    Input,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CheckSecours from "./checksecours";
import Check from "./check";
import toast from "react-hot-toast";

interface ResultData {
    id: number;
    accountNum: string;
    key: string;
    amount: number;
    amountInWords: string;
    senderFirstName: string;
    senderLastName: string;
    senderAddress: string;
    senderPhone: string;
    senderEmail: string;
    receiverFirstName: string;
    receiverLastName: string;
    receiverAddress: string;
    receiverPhone: string;
    date: string;
    signature: string;
    type: string;
    path: string;
}

interface Result {
    type: string;
    data: ResultData;
}

export default function ScanDocument() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [response, setResponse] = useState<Result | null>(null);
    const [file, setFile] = useState<File | null>(null);  // Changed type to File

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) {
            setError("No file selected.");
            return;
        }

        setFile(selectedFile);  // Update file state
        setError(null);
        setLoading(true);

        try {
            // Simulated API response
            const simulatedResult: Result = {
                type: "checksecours",
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
                    type: "checksecours",
                    path: "path/to/document"  // Example file path
                }
            };
            setResponse(simulatedResult);
            if (simulatedResult.type === "check") {
                setPage(2);
            } else if (simulatedResult.type === "checksecours") {
                setPage(3);
            } else {
                toast.error("Invalid document type.");
            }
        } catch (err) {
            console.error(err);  // Log the error for debugging
            setError("An error occurred while processing the document.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Flex direction="column" align="center" justify="center" gap="6" p="4" width="100%">
            {page === 1 && (
                <Flex direction="column" align="center" justify="center" gap="6">
                    <Text fontSize="3xl" fontWeight="bold">
                        Scan Document
                    </Text>

                    <Box>
                        <Flex align="center" justify="center" gap="4">
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
                                    gap={4}
                                    cursor="pointer"
                                    isLoading={loading}  // Disable button during loading
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
                            borderRadius="lg"
                            zIndex="overlay"
                        >
                            <Center h="100vh" flexDirection="column" gap="4">
                                <Spinner color="blue.500" size="xl" />
                                <Text color="blue.500" fontSize="lg" fontWeight="bold">
                                    Detecting document type...
                                </Text>
                            </Center>
                        </Box>
                    )}
                </Flex>
            )}

            {page === 2 && response && (
                <Check
                    id={response.data.id}
                    accountNum={response.data.accountNum}
                    key={response.data.key}
                    amount={response.data.amount}
                    amountInWords={response.data.amountInWords}
                    senderFirstName={response.data.senderFirstName}
                    senderLastName={response.data.senderLastName}
                    senderAddress={response.data.senderAddress}
                    senderPhone={response.data.senderPhone}
                    senderEmail={response.data.senderEmail}
                    receiverFirstName={response.data.receiverFirstName}
                    receiverLastName={response.data.receiverLastName}
                    receiverAddress={response.data.receiverAddress}
                    receiverPhone={response.data.receiverPhone}
                    date={response.data.date}
                    signature={response.data.signature}
                />
            )}

            {page === 3 && response && (
                <CheckSecours
                    id={response.data.id}
                    accountNum={response.data.accountNum}
                    key={response.data.key}
                    amount={response.data.amount}
                    amountInWords={response.data.amountInWords}
                    senderFirstName={response.data.senderFirstName}
                    senderLastName={response.data.senderLastName}
                    senderAddress={response.data.senderAddress}
                    senderPhone={response.data.senderPhone}
                    senderEmail={response.data.senderEmail}
                    receiverFirstName={response.data.receiverFirstName}
                    receiverLastName={response.data.receiverLastName}
                    receiverAddress={response.data.receiverAddress}
                    receiverPhone={response.data.receiverPhone}
                    date={response.data.date}
                    signature={response.data.signature}
                    file={response.data.path}
                />
            )}
        </Flex>
    );
}
