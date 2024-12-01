import React, { useState } from "react";
import {
  Flex,
  Text,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Icon,
  useDisclosure,
  Progress,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Spinner,
  Center
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiUpload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie-player";
import animationData from "../../../../assets/img/dashboards/cropanimated.json";
import erroranimated from "../../../../assets/img/dashboards/erroranimated.json";
import { apiCall } from "../../../../services/api";
import { RootState } from "../../../../redux/store";

interface AddNewCcpProps {
  initialStep?: number;
}

interface FormData {
  idcard: File | null;
  residentCertificate: File | null;
  openRequest: File | null;
}



export default function AddNewCcp({ initialStep = 0 }: AddNewCcpProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [step, setStep] = useState<number>(initialStep);
  const [hasError, setHasError] = useState(false);
  const [loading, setloading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    idcard: null,
    residentCertificate: null,
    openRequest: null,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );


  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.idcard) newErrors.idcard = "Identity card is required.";
    if (!formData.residentCertificate)
      newErrors.residentCertificate = "Resident certificate is required.";
    if (!formData.openRequest)
      newErrors.openRequest = "Open request is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, [field]: e.target.files![0] }));
      setErrors((prev) => ({ ...prev, [field]: undefined })); // Clear error for this field
    }
  };

  const handleAddFiles = async () => {
    if (!validateForm()) return;

    try {
      setloading(true);
      setHasError(true);

      // API call to create Ccp
      const ccpId = 123; // Simulated response
      await apiCall(
        "/model/generate-business-plan",
        { method: "POST", data: { Ccp_id: ccpId }, requireAuth: true },
      );

      await apiCall(
        `/Ccp/get-Ccp/${ccpId}`,
        { method: "GET", requireAuth: true },
      );

      setTimeout(() => {
        setloading(false);
        navigate("/dashboard/yourCcp");
      }, 2000);
    } catch (error) {
      console.error("Error during ccp creation:", error);
      setHasError(true);
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" width="100%" padding={'6'}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddFiles();
        }}
      >
        <Flex direction="column" align="start " gap="8">
          <FormControl isInvalid={!!errors.idcard}>
            <Flex direction="column" align="start" gap="10px">
              <label style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                Identity Card
                <Button
                  as="span" // Prevents button default behavior
                  leftIcon={<HiUpload />}
                  colorScheme="blue"
                  variant="solid"
                >
                  Upload Identity Card
                </Button>
                <input
                  type="file"
                  style={{ display: "none" }} // Hide the native input
                  onChange={(e) => handleFileChange(e, "idcard")}
                />
              </label>
            </Flex>
            <FormErrorMessage>{errors.idcard}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.residentCertificate}>
            <Flex direction="column" align="start" gap="10px">
              <label style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                Resident Certificate
                <Button
                  as="span" // Prevents button default behavior
                  leftIcon={<HiUpload />}
                  colorScheme="blue"
                  variant="solid"
                >
                  Upload resident Certificate
                </Button>
                <input
                  type="file"
                  style={{ display: "none" }} // Hide the native input
                  onChange={(e) => handleFileChange(e, "residentCertificate")}
                />
              </label>
            </Flex>
            <FormErrorMessage>{errors.residentCertificate}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.openRequest}>
            <Flex direction="row" align="center" gap="10px" flexWrap={'wrap'}>
              <label style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                Request of opening a CCP account {"<< CH1 >>"} filled and signed
                <Button
                  as="span" // Prevents button default behavior
                  leftIcon={<HiUpload />}
                  colorScheme="blue"
                  variant="solid"
                >
                  Upload open Request
                </Button>
                <input
                  type="file"
                  style={{ display: "none" }} // Hide the native input
                  onChange={(e) => handleFileChange(e, "openRequest")}
                />
              </label>
              <Button>
                Download exampler
              </Button>
            </Flex>
            <FormErrorMessage>{errors.openRequest}</FormErrorMessage>
          </FormControl>

          <Flex gap="20px" alignSelf={'end'}>
            <Button type="submit" colorScheme="blue">Save request</Button>
          </Flex>
        </Flex>
      </form>

      {loading && (
        <Box
          pos="absolute"
          inset="0"
          bg="rgba(0,0,0,0.5)"
          backdropBlur="2xl"
          borderRadius="30px"
          animation="fadeIn 0.3s ease-in-out"
        >
          <Center h="full" display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Spinner color="blue" size="xl" />
            <Text color="blue" fontSize="xl" fontWeight="bold">
              Processing...
            </Text>
          </Center>
        </Box>
      )}
      {hasError && (
        <Box
          pos="absolute"
          inset="0"
          bg="rgba(0,0,0,0.5)"
          backdropBlur="2xl"
          borderRadius="30px"
          animation="fadeIn 0.3s ease-in-out"
        >
          <Center h="full" display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Lottie
              loop
              play
              animationData={erroranimated}
              style={{ width: "80%", height: "80%" }}
            />
            <Text color="red" fontSize="xl" fontWeight="bold">
              Error during ccp creation
            </Text>
            <Flex direction={"column"}>
              <p>{errors.idcard}</p>
              <p>{errors.residentCertificate}</p>
              <p>{errors.openRequest}</p>
            </Flex>
          </Center>
        </Box>
      )}
    </Flex>
  );
}
