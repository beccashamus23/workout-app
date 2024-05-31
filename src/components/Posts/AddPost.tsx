import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Input,
  FormControl,
  Button,
  Text,
  Stack,
  FormLabel,
} from "@chakra-ui/react";

type FieldKey = "title" | "description" | "image"; // Add "image" to FieldKey type

const AddGoal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<File | null>(null); // State to store selected image file
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
    image: { value: "", setter: () => {} }, // Placeholder for image value (not directly used)
  };

  const handleSave = () => {
    const existingGoals = JSON.parse(localStorage.getItem("goals") || "[]");

    const newGoal = { title: title, desc, image: img?.name || "" }; // Include image file name in goal object
    existingGoals.push(newGoal);

    localStorage.setItem("goals", JSON.stringify(existingGoals));
    nav("/Goals");
  };

  const handleCancel = () => {
    nav("/Goals");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file
    if (file) {
      setImg(file);
    }
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
          {/* Input element for image upload */}
          <Input
            className="mb-3"
            type="file"
            onChange={handleImageUpload}
            accept="image/*" // Allow only image file types
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
          <Button onClick={handleCancel}>CANCEL</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddGoal;
