import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTitle from "../../components/PageTitle.tsx";
import { useRegisterVehicle } from "../../hooks/mutations/useRegisterVehicle.ts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseAxiosError } from "../../utils/parseAxiosError.ts";

const schema = z.object({
  vin: z.string().min(1, "vin is required"),
  model: z.string().min(1, "model is required"),
  type: z.string().min(1, "type is required"),
  status: z.string().min(1, "status is required"),
});

type RegisterVehicleFormData = z.infer<typeof schema>;

export default function RegisterVehicle() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterVehicleFormData>({
    resolver: zodResolver(schema),
  });

  const [error, setError] = useState("");

  const {
    mutate: registerVehicle,
    data,
    isPending,
  } = useRegisterVehicle({
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: (error) => {
      setError(parseAxiosError(error));
    },
  });

  const onSubmit: SubmitHandler<RegisterVehicleFormData> = (data) => {
    registerVehicle(data);
  };

  useEffect(() => {
    console.log("the data", data);
  }, [data, error]);

  return (
    <Box p={4}>
      <PageTitle mb={4}>Register Vehicle</PageTitle>

      <Box maxW={"lg"}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onFocus={() => {
            setError("");
          }}
        >
          <Stack gap={4}>
            <FormControl isInvalid={!!errors.vin}>
              <FormLabel htmlFor={"vin"}>
                Vehicle Identification Number
              </FormLabel>
              <Input
                {...register("vin")}
                placeholder={"Vehicle Identification Number"}
              />
              <FormErrorMessage>
                {errors.vin?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.model}>
              <FormLabel htmlFor={"model"}>Model</FormLabel>
              <Input {...register("model")} placeholder={"Vehicle Model"} />
              <FormErrorMessage>
                {errors.model?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.type}>
              <FormLabel htmlFor={"type"}>Type</FormLabel>
              <Select {...register("type")} placeholder={"Select Vehicle Type"}>
                <option value="excavator">Excavator</option>
                <option value="bulldozer">Bulldozer</option>
                <option value="dumptruck">Dumptruck</option>
                <option value="crane">Crane</option>
                <option value="concretemixer">Concretemixer</option>
              </Select>
              <FormErrorMessage>
                {errors.type?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.status}>
              <FormLabel htmlFor={"status"}>Status</FormLabel>
              <Select
                {...register("status")}
                placeholder={"Select Vehicle Status"}
              >
                <option value={"active"}>Active</option>
                <option value={"maintenance"}>Maintenance</option>
              </Select>
              <FormErrorMessage>
                {errors.status?.message as string}
              </FormErrorMessage>
            </FormControl>

            {error ? <Text color={"red.500"}>{error}</Text> : null}

            <Flex>
              <Button
                isDisabled={isPending}
                type={"submit"}
                colorScheme={"blue"}
              >
                Create Vehicle
              </Button>
            </Flex>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
