import {Group, Button} from '@mantine/core'
import {MdFilter, MdTextRotationAngledown, MdMore} from 'react-icons/md'

const Filter = function() {
    return(
        <Group position='center'>
          <Button variant='subtle' leftIcon={<MdFilter />}>Group by</Button>
          <Button variant='subtle' leftIcon={<MdTextRotationAngledown />}>Filter</Button>
          <Button variant='subtle' leftIcon={<MdMore />}>More</Button>
        </Group>
    )
}

export default Filter