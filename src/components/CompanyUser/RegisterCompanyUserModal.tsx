import { useGetCompaniesQuery } from "@/redux/services/company.service";
import { RegisterFormData, RegisterSchema } from "@/types/register.types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputBaseComponentProps,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ElementType } from "react";
import { Controller, useForm } from "react-hook-form";
import InputMask, { Props } from "react-input-mask";

interface ModalProps {
  onClose: () => void;
  onSubmit: (values: RegisterFormData) => void;
  open: boolean;
}

const TextMaskCustom = (props: Props) => {
  return (
    <InputMask
      {...props}
      mask={"+7 (999) 999 9999"}
      maskChar={"_"}
      alwaysShowMask={false}
    />
  );
};

const RegisterCompanyUserModal = ({ open, onClose, onSubmit }: ModalProps) => {
  const { data: companies } = useGetCompaniesQuery();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onTouched",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirm: "",
      companyId: companies?.data[0]?.id ?? null,
    },
  });

  const handleFormSubmit = handleSubmit((values) => {
    onSubmit(values);
    reset();
    onClose();
  });

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Vehicles</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleFormSubmit} noValidate>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Номер телефона"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  InputProps={{
                    inputComponent:
                      TextMaskCustom as ElementType<InputBaseComponentProps>,
                    ...field,
                  }}
                />
              )}
            />

            <Controller
              name="firstname"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Имя"
                  error={!!errors.firstname}
                  helperText={errors.firstname?.message}
                />
              )}
            />
            <Controller
              name="lastname"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Фамилия"
                  error={!!errors.lastname}
                  helperText={errors.lastname?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Пароль"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Controller
              name="confirm"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="confirm"
                  error={!!errors.confirm}
                  helperText={errors.confirm?.message}
                />
              )}
            />

            <Controller
              name="companyId"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="companyId">Выбери компанию</InputLabel>
                  <Select
                    {...field}
                    label="Выбери компанию"
                    labelId="companyId"
                  >
                    {companies?.data?.map((item) => (
                      <MenuItem key={`companyId-${item.id}`} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Stack>
          <DialogActions sx={{ p: "1.25rem" }}>
            <Button onClick={onClose}>Cancel</Button>
            <Button color="secondary" variant="contained" type="submit">
              Register Company User
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterCompanyUserModal;
