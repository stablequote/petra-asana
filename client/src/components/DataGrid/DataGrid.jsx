import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { MantineReactTable } from 'mantine-react-table';
import {
  Box,
  Button,
  Dialog,
  Flex,
  Title,
  ActionIcon,
  Menu,
  Stack,
  TextInput,
  Tooltip,
  Skeleton,
} from '@mantine/core';
import { IconTrash, IconEdit } from '@tabler/icons-react';
// import { data, datas, states } from '../../utils/makeData';
import { MdDelete, MdEdit } from 'react-icons/md';
import { DatePicker } from '@mantine/dates';
import axios from 'axios';
import moment from 'moment';
import CreateTaskModal from '../TaskModal/TaskModal';

const DataGrid = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [tableData, setTableData] = useState(() => []);
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUri = 'http://localhost:5000/task/'
    const req = axios.get(baseUri).then((res) => {
      console.log(res.data)
      setLoading(!loading)
      setTableData(res.data)
    })
  }, [])

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('_id')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  const getCommonEditTextInputProps = useCallback(
    (cell) => {
      return {
        error: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 140,
        mantineEditTextInputProps: ({ cell }) => ({
          ...getCommonEditTextInputProps(cell),
        }),
      },
      {
        accessorKey: 'description',
        header: 'description',
        size: 140,
        mantineEditTextInputProps: ({ cell }) => ({
          ...getCommonEditTextInputProps(cell),
        }),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        mantineEditTextInputProps: ({ cell }) => ({
          ...getCommonEditTextInputProps(cell),
          type: 'email',
        }),
         //custom conditional format and styling
         Cell: ({ cell }) => (
          <Box
            sx={(theme) => ({
              backgroundColor:
              cell.getValue() == "pending"
              ? theme.colors.gray[6]
              : cell.getValue() == "done"
              ? theme.colors.green[9]
              : theme.colors.blue[8],

              borderRadius: '4px',
              color: '#fff',
              maxWidth: '9ch',
              padding: '4px',
            })}
          >
            {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
      {
        accessorKey: 'priority',
        header: 'Priority',
        size: 80,
        mantineEditTextInputProps: ({ cell }) => ({
          ...getCommonEditTextInputProps(cell),
        }),
         //custom conditional format and styling
         Cell: ({ cell }) => (
          <Box
            sx={(theme) => ({
              backgroundColor:
              cell.getValue() == "high"
              ? theme.colors.red[6]
              : cell.getValue() == "low"
              ? theme.colors.blue[4]
              : theme.colors.yellow[8],

              borderRadius: '4px',
              color: '#fff',
              maxWidth: '9ch',
              padding: '4px',
            })}
          >
            {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
      {
        accessorKey: 'assignee',
        header: 'Assignee',
        size: 140,
        mantineEditTextInputProps: ({ cell }) => ({
          ...getCommonEditTextInputProps(cell),
        }),
      },
      {
        accessorKey: 'assignedTo',
        header: 'Assigned To',
        size: 140,
        mantineEditTextInputProps: ({ cell }) => ({
          ...getCommonEditTextInputProps(cell),
        }),
      },
      {
        accessorKey: 'createdAt',
        header: 'Due Date',
        // mantineEditTextInputProps: {
        //   select: true, //change to select for a dropdown
        //   children: states.map((state) => (
        //     <Menu.Item key={state} value={state}>
        //       {state}
        //     </Menu.Item>
        //   )),
        // },
         //custom conditional format and styling
         Cell: ({ cell }) => (
          <Box
            sx={(theme) => ({
              backgroundColor:
              cell.getValue() == Date.now()
              ? theme.colors.red[6]
              : theme.colors.white,

              borderRadius: '4px',
              color: '#333',
              maxWidth: '9ch',
              padding: '4px',
            })}
          >
            {/* {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })} */}
            { moment(cell.getValue()).format("ll")}
            {/* {moment(cell.getValue()).format("LLLL")} */}
          </Box>
        ),
      },
    ],
    [getCommonEditTextInputProps],
  );

  return (
    <>
      <Skeleton height={50} radius="xl" visible={false}>
      <MantineReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            mantineTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        state={
          {showSkeletons: false}

        }
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        initialState={{ density: 'xs',pagination: {pageSize: 5} }}
        enableEditing
        withBorder
        // mantineTableBodyCellProps={{
        //   sx: {
        //     backgroundColor: 'red',
        //     ':hover': {
        //       background: "green"
        //     }

        //   }
        // }}
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Tooltip withArrow position="left" label="Edit">
              <ActionIcon onClick={() => table.setEditingRow(row)}>
                <MdEdit color='blue' size={20} />
              </ActionIcon>
            </Tooltip>
            <Tooltip withArrow position="right" label="Delete">
              <ActionIcon color="darkred" onClick={() => handleDeleteRow(row)}>
                <MdDelete  color='red' size={20} />
              </ActionIcon>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="teal"
            onClick={() => setOpened(true)}
            variant="filled"
          >
            Create Task
          </Button>
        )}
      />
      {/* <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      /> */}
      <CreateTaskModal
      opened={opened}
      setOpened={setOpened} 
      onSubmit={handleCreateNewRow}
      defaultValue={Date.now()}
      />
      </Skeleton>
    </>
  );
};

//example of creating a mantine dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] =
    useState(() =>
      columns.reduce((acc, column) => {
        acc[column.accessorKey ?? ''] = '';
        return acc;
    }, {}));

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog opened={open}>
      <Title ta="center">Create Task</Title>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack
          sx={{
            width: '100%',
            gap: '24px',
          }}
        >
          {columns.map((column) => (
            <TextInput
              key={column.accessorKey}
              label={column.header}
              name={column.accessorKey}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          ))}
          <DatePicker label="pick date" placeholder="select date" onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              } />
        </Stack>
      </form>
      <Flex
        sx={{
          padding: '20px',
          width: '100%',
          justifyContent: 'flex-end',
          gap: '16px',
        }}
      >
        <Button onClick={onClose} variant="subtle">
          Cancel
        </Button>
        <Button color="teal" onClick={handleSubmit} variant="filled">
          Create Task
        </Button>
      </Flex>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default DataGrid;