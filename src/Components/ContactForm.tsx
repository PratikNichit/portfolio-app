import React from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema
const schema = z.object({
  name: z.string().min(3, "Name is a required field"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is a required field")
    .max(300, "Message should be max 300 characters"),
});

// Define Form Values
type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const [result, setResult] = React.useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setResult(null);

    const formData = new FormData();
    formData.append("access_key", "3f8e53f9-bee8-44f1-8099-96463667ed89");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const Jsondata = await response.json();

      if (Jsondata.success) {
        setResult("Form submitted successfully!");
        reset();
      } else {
        setResult("Error: " + Jsondata.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Box>
            <TextField
              variant="outlined"
              label="Name"
              color="secondary"
              fullWidth
              {...register("name")}
            />
            {errors.name && (
              <Typography color="error" sx={{ fontWeight: 500 }}>
                {errors.name.message}
              </Typography>
            )}
          </Box>
          <Box>
            <TextField
              variant="outlined"
              label="Email Id"
              color="secondary"
              fullWidth
              {...register("email")}
            />
            {errors.email && (
              <Typography color="error" sx={{ fontWeight: 500 }}>
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box>
            <TextField
              variant="outlined"
              label="Message"
              color="secondary"
              multiline
              rows={5}
              fullWidth
              {...register("message")}
            />
            {errors.message && (
              <Typography color="error" sx={{ fontWeight: 500 }}>
                {errors.message.message}
              </Typography>
            )}
          </Box>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            type="submit"
            sx={{ textTransform: "none" }}
          >
            Submit
          </Button>
        </Stack>
      </form>
      {result && (
        <Typography
          color={result.includes("Error") ? "error" : "success"}
          sx={{ marginTop: 2 }}
        >
          {result}
        </Typography>
      )}
    </div>
  );
};
