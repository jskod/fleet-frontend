import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTitle from "../../components/PageTitle.tsx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { parseAxiosError } from "../../utils/parseAxiosError.ts";
import { useCreateMaintenanceLog } from "../../hooks/mutations/useCreateMaintenanceLog.ts";

const schema = z.object({
  description: z.string().min(1, "description is required"),
  date: z.string().min(1, "date is required"),
  cost: z
    .string()
    .min(1, "cost is required")
    .transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    })
    .refine((val) => val > 0, { message: "cost must be greater than 0" }),
  performedBy: z.string().min(1, "performed by is required"),
  mileageAtService: z
    .string()
    .min(1, "mileage is required")
    .transform((val) => {
      const num = parseFloat(val);
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    })
    .refine((val) => val > 0, { message: "mileage must be greater than 0" }),
});

type CreateMaintenanceLogFormData = z.infer<typeof schema>;

export default function CreateMaintenanceLog() {
  const navigate = useNavigate();
  const { vehicleId } = useParams<{ vehicleId: string }>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateMaintenanceLogFormData>({
    resolver: zodResolver(schema),
  });

  const [error, setError] = useState("");

  const { mutate: createMaintenanceLog, isPending } = useCreateMaintenanceLog({
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: (error) => {
      setError(parseAxiosError(error));
    },
  });

  const onSubmit: SubmitHandler<CreateMaintenanceLogFormData> = (data) => {
    createMaintenanceLog({
      vehicleId: vehicleId as string,
      ...data,
    });
  };

  return (
    <Box p={4}>
      <PageTitle mb={4}>Create Maintenance Log</PageTitle>

      <Box maxW={"lg"}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onFocus={() => {
            setError("");
          }}
        >
          <Stack gap={4}>
            <FormControl isInvalid={!!errors.description}>
              <FormLabel htmlFor={"description"}>Description</FormLabel>
              <Input
                {...register("description")}
                placeholder={"Write description"}
              />
              <FormErrorMessage>
                {errors.description?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.date}>
              <FormLabel htmlFor={"date"}>Date</FormLabel>
              <Input
                type={"date"}
                {...register("date")}
                placeholder={"Select date"}
              />
              <FormErrorMessage>
                {errors.date?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.cost}>
              <FormLabel htmlFor={"cost"}>Cost</FormLabel>
              <Input
                type={"number"}
                {...register("cost")}
                placeholder={"Cost"}
              />
              <FormErrorMessage>
                {errors.cost?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.performedBy}>
              <FormLabel htmlFor={"performedBy"}>Performed By</FormLabel>
              <Input
                {...register("performedBy")}
                placeholder={"Performed by"}
              />
              <FormErrorMessage>
                {errors.performedBy?.message as string}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.mileageAtService}>
              <FormLabel htmlFor={"mileageAtService"}>
                Mileage At Service
              </FormLabel>
              <Input
                type={"number"}
                {...register("mileageAtService")}
                placeholder={"Mielage"}
              />
              <FormErrorMessage>
                {errors.mileageAtService?.message as string}
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
