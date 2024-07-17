import React, { useState } from "react";
import {
  Input,
  Flex,
  Text,
  Button,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const Assistant: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [completion, setCompletion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchResponse = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content:
                  "create an example workout based on input, include number of sets and repetitions, use bullet points to organzie answer",
              },
              {
                role: "assistant",
                content: query,
              },
            ],
            temperature: 0.7,
            max_tokens: 150,
            top_p: 1,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setCompletion(data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
      setError("Failed to fetch response. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Flex direction="column" align="center" w="full" p={4}>
      <Text fontSize="24px" mb={4}>
        AI Workout Evaluator
      </Text>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter workout data"
      />
      <Button
        onClick={fetchResponse}
        fontWeight={600}
        mt={2}
        isDisabled={loading}
      >
        {loading ? <Spinner size="sm" /> : "Generate"}
      </Button>
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {completion && (
        <Text mt={4} p={4} borderWidth="1px" borderRadius="md">
          {completion}
        </Text>
      )}
    </Flex>
  );
};

export default Assistant;
