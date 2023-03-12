import { CopyButton, ActionIcon, Tooltip, Button } from '@mantine/core';
// import { IconCopy, IconCheck } from '@tabler/icons';
import {MdContentCopy, MdOutlineCheck} from 'react-icons/md'
// import { MdContentCopy } from 'react-icons/md';

function CopyBtn() {
  return (
    <CopyButton value="https://asaad.dev" >
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
        {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}

export default CopyBtn