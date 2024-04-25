// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Container, Heading, Text, Button, Input, VStack, HStack, Image } from "@chakra-ui/react";
import { FaSearch, FaSave, FaPlus, FaMagic } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Radiology Template Customizer
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Customize and auto-complete your radiology reports with the power of AI.
        </Text>
        <Image src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjB0ZWNobm9sb2d5fGVufDB8fHx8MTcxNDA4NjMxNXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              Customize Template
            </Heading>
            <Input placeholder="Enter your template here..." size="lg" />
            <HStack spacing={4}>
              <Button leftIcon={<FaMagic />} colorScheme="blue">
                Auto-Complete
              </Button>
              <Button leftIcon={<FaSave />} colorScheme="green">
                Save Template
              </Button>
            </HStack>
          </VStack>
        </Box>

        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Heading as="h2" size="lg">
              RAD Report Generator
            </Heading>
            <Text fontSize="md">Streamline your radiology reports by generating and completing drafts based on existing data.</Text>
            <Button leftIcon={<FaMagic />} colorScheme="purple" size="lg">
              Generate Report
            </Button>
          </VStack>
        </Box>

        <Button rightIcon={<FaPlus />} colorScheme="teal" size="lg">
          Add New Template
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
