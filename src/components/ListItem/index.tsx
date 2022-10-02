import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

type NoteProps = {
  id: string;
  title: string | null;
  date: string;
  text: string;
  onClick: () => void;
};

// Named Item because ListItem already exists.
const Item: React.FC<NoteProps> = ({ id, title, date, text, onClick }) => {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
      }}
    >
      <ListItem
        alignItems="flex-start"
        sx={{
          width: '100%',
          ':hover': {
            backgroundColor: '#D5D8DC',
            borderRadius: '5px',
          },
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
        }}
        onClick={onClick}
      >
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {date}
              </Typography>
              {` - ${text.split(' ')[0]}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default React.memo(Item);
