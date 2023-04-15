import { Button, Flex, Modal } from '@mantine/core'
import React, { useState } from 'react'
import DataGrid from '../../components/DataGrid/DataGrid'
import TextEditor from '../../components/TextEditor/TextEditor'
import TableWithExport from '../../components/TableWithExport/TableWithExport'

function Reports() {
  const [opened, setOpened] = useState(false)

  const handleEditor = (e) => {
    setOpened(!opened)
  }

  return (
    <div>
      <Flex justify="end">
        <Button variant='filled' onClick={handleEditor}>Create report</Button>
      </Flex>
      {/* <DataGrid /> */}
      <TableWithExport />
      {opened ?
      <Modal 
      opened={opened}
      onClose={() => setOpened(false)}
      size="xl"
      fullScreen
      >
        <TextEditor />
        <Button>Save</Button>
      </Modal>
      : ""
      }
      
    </div>
  )
}

export default Reports