import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Input,
  FormControl,
  Button,
  Link,
  Text,
  Stack,
  FormLabel,
} from "@chakra-ui/react";

type FieldKey = "title" | "description";

const AddGoal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const nav = useNavigate();
  const loc = useLocation();

  const fields: FieldKey[] = loc.state?.selectedFields || [];

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  const fieldMap: Record<
    FieldKey,
    { value: string; setter: React.Dispatch<React.SetStateAction<string>> }
  > = {
    title: { value: title, setter: setTitle },
    description: { value: desc, setter: setDesc },
  };

  const handleSave = () => {
    const existingGoals = JSON.parse(localStorage.getItem("goals") || "[]");

    const newGoal = { title: title, desc };
    existingGoals.push(newGoal);

    localStorage.setItem("goals", JSON.stringify(existingGoals));
    nav("/Goals");
  };

  const handleCancel = () => {
    nav("/Goals");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "{}");

    setTitle(data.title || "");
    setDesc(data.desc || "");

    localStorage.removeItem("data");
  }, []);

  return (
    <div>
      <Text className="absolute text-white ml-5 mt-12">CREATE A NEW GOAL</Text>
      <Box
        className="w-42 h-60 absolute bg-white/[0.06] border-solid border-2 px-3 py-3"
        style={{
          top: "0%",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        <FormControl isRequired>
          <Input
            className="mb-3 text-center"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="TITLE"
          />
          <Input
            className="mb-3 text-center"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="DESCRIPTION"
          />
        </FormControl>

        {fields.map((f) => (
          <FormControl key={f}>
            <FormLabel>{f}</FormLabel>
            <Input
              type="text"
              value={fieldMap[f].value}
              onChange={(e) => fieldMap[f].setter(e.target.value)}
            />
          </FormControl>
        ))}

        <Stack direction="row" spacing={4} mt={4} justify="center">
          <Button onClick={handleSave}>SAVE</Button>
          <Button onClick={handleCancel}>DISCARD</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddGoal;
