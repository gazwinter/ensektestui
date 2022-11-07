import { List, ListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box'

const AccountsList = () => {
    return(
        <Box sx={{
            width: '100%'
        }}>
            <Typography>
                <h3>Accounts List</h3>
            </Typography>
            <List>
                <ListItem></ListItem>
            </List>
        </Box>
    );
}

export default AccountsList;