import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { TiDeleteOutline } from "react-icons/ti";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

interface Goal {
  title: string;
  desc: string;
}

function Goals() {
  const storedData = localStorage.getItem("goals");
  const [goals, setGoals] = React.useState<Goal[]>(
    storedData ? JSON.parse(storedData) : []
  );

  const navigate = useNavigate();

  const handleDelete = (index: number) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1); // Remove the goal at 'index'
    setGoals(updatedGoals); // Update the state with the new goals array
    localStorage.setItem("goals", JSON.stringify(updatedGoals)); // Update local storage
  };

  const handleComplete = () => {};

  return (
    <div className="absolute">
      <Text className="text-white">GOALS</Text>
      <div className="px-2 py-2 mx-2 my-2">
        <SimpleGrid spacing={4} columns={4} className="overflow-scroll">
          {goals.length > 0 ? (
            goals.map((goal, index) => (
              <Box
                key={index}
                borderWidth="1px"
                p={4}
                borderRadius="md"
                className="bg-white"
              >
                <Text fontWeight="bold">{goal.title}</Text>
                <Text>{goal.desc}</Text>
                <Button
                  className="text-0.5rem"
                  onClick={() => handleDelete(index)}
                >
                  <TiDeleteOutline />
                </Button>
                <Button className="text-0.5rem" onClick={handleComplete}>
                  <FaRegCheckCircle />
                </Button>
              </Box>
            ))
          ) : (
            <Box
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            ></Box>
          )}
        </SimpleGrid>
        <Button
          className="absolute bg-opacity-0 hover:bg-white "
          onClick={() => navigate("/AddGoal")}
        >
          <IoAddCircleOutline />
        </Button>
      </div>
    </div>
  );
}

export default Goals;
