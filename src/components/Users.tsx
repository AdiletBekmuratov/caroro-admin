import {
  useGetUsersQuery,
  useRegisterCompanyUserMutation,
} from "@/redux/services/user.service";
import { RegisterFormData } from "@/types/register.types";
import { Button } from "@mui/material";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import RegisterCompanyUserModal from "./CompanyUser/RegisterCompanyUserModal";

export type Users = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  status: string;
  passwordResetToken: string;
  createdAt: string;
  updatedAt: string;
  role: string;
};

const Users = () => {
  const { data = [] } = useGetUsersQuery();
  const [registerUser] = useRegisterCompanyUserMutation();
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleSubmit = (values: RegisterFormData) => {
    registerUser(values);
  };

  const columns = useMemo<MRT_ColumnDef<Users>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableSorting: true,
        size: 80,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 140,
      },
      {
        accessorKey: "firstname",
        header: "Firstname",
        size: 140,
      },
      {
        accessorKey: "lastname",
        header: "Lastname",
        size: 140,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 140,
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "createdAt",
        header: "CreatedAt",
        size: 140,
      },
      {
        accessorKey: "updatedAt",
        header: "UpdatedAt",
        size: 140,
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={data}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Company User
          </Button>
        )}
      />
      <RegisterCompanyUserModal
        onClose={() => setCreateModalOpen(false)}
        open={createModalOpen}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Users;
