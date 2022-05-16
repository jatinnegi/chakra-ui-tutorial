import React, { useState } from "react";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const colspan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Second Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Blvd. Broken Dreams 21" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="India">India</option>
              <option value="germany">Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            variant="primary"
            w="full"
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 5000);
            }}
          >
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
