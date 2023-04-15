import React, {useState, useEffect, useCallback} from 'react';
import { MantineReactTable } from 'mantine-react-table';
import { Box, Button, Tooltip, ActionIcon } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ExportToCsv } from 'export-to-csv'; //or use your library of choice here
// import { data } from './makeData';
import axios from 'axios';
import moment from 'moment';

//defining columns outside of the component is fine, is stable
const columns = [
  {
    accessorKey: '_id',
    header: 'ID',
    size: 40,
    enableEditing: true,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    size: 120,
  },
  {
    accessorKey: 'description',
    header: 'description',
    size: 120,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 300,
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    size: 220,
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
            { moment(cell.getValue()).format("ll")}
        </Box>
    )
  },
];

const csvOptions = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

const TableWithExport = () => {
  const [tableData, setTableData] = useState(() => []);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const baseUri = 'http://localhost:5000/task/'
    const req = axios.get(baseUri).then((res) => {
      console.log(res.data)
      setLoading(!loading)
      setTableData(res.data)
    })
  }, [])

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
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

  return (
    <MantineReactTable
      columns={columns}
      data={tableData}
      enableRowSelection
      enableEditing
      positionToolbarAlertBanner="bottom"
      initialState={{ density: 'xs',pagination: {pageSize: 5} }}
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            padding: '8px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            color="lightblue"
            //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
            onClick={handleExportData}
            leftIcon={<IconDownload />}
            variant="filled"
          >
            Export All Data
          </Button>
          <Button
            disabled={table.getPrePaginationRowModel().rows.length === 0}
            //export all rows, including from the next page, (still respects filtering and sorting)
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            leftIcon={<IconDownload />}
            variant="filled"
          >
            Export All Rows
          </Button>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
            onClick={() => handleExportRows(table.getRowModel().rows)}
            leftIcon={<IconDownload />}
            variant="filled"
          >
            Export Page Rows
          </Button>
          <Button
            disabled={
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
            }
            //only export selected rows
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
            leftIcon={<IconDownload />}
            variant="filled"
          >
            Export Selected Rows
          </Button>
        </Box>
      )}
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
    />
  );
};

export default TableWithExport;