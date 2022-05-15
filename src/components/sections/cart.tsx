import React from "react";
import Image from "next/image";
import {
  VStack,
  HStack,
  AspectRatio,
  Heading,
  Text,
  Button,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      borderRadius="md"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack w="full">
        <AspectRatio ratio={1} width={24} borderRadius="md" overflow="hidden">
          <Image
            src="/images/skateboard.jpg"
            alt="skateboard"
            layout="fill"
            objectFit="contain"
          />
        </AspectRatio>
        <HStack justifyContent="space-between" flex={1} h="full">
          <VStack
            h="full"
            spacing={0}
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading size="md">Penny Board</Heading>
            <Text color={secondaryTextColor} fontSize="sm">
              PNYCOMP27541
            </Text>
          </VStack>
          <Heading size="sm">$119.00</Heading>
        </HStack>
      </HStack>
      <VStack w="full" spacing={4} alignItems="flex-start">
        <HStack w="full" justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack w="full" alignItems="flex-end" justifyContent="space-between">
        <Text color={secondaryTextColor}>Total</Text>{" "}
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
