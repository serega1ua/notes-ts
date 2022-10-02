import React, { useCallback } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import Item from '../ListItem';
import Workspace from '../Workspace';
import { Container } from '@mui/material';

export interface INote {
  id: string;
  title: string | null;
  date: string;
  text: string;
}

const Sidebar: React.FC = () => {
  const [data, setData] = React.useState<INote[]>();

  const [selected, setSelected] = React.useState<INote | null>(null);

  const getAllNotes = () => {
    axios
      .get<INote[]>('https://631493a9fa82b738f74a2534.mockapi.io/notes')
      .then((res) => res)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getAllNotes();
  }, []);

  const handleClick = useCallback(
    (obj: INote) => {
      setSelected(obj);
    },
    [setSelected],
  );

  const onDelete = (id: string) => {
    setData((prev) => prev?.filter((res) => res.id !== id));
    setSelected(null);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        padding: '0',
        margin: '0',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        boxShadow="1px 1px 1px #D5D8DC"
        bgcolor="#fff"
        padding="10px"
        height="100vh"
        width="350px"
        sx={{ overflowY: 'scroll' }}
      >
        {data?.map((res: INote, idx: number) => (
          <Item {...res} key={idx} onClick={() => handleClick(res)} />
        ))}
      </Box>
      <Box sx={{ width: '60%' }}>
        {selected !== null && (
          <Workspace obj={selected} onDelete={() => onDelete(selected.id)} />
        )}
      </Box>
    </Container>
  );
};

export default Sidebar;

// todo

// прокидування фунцій з дочірніх в батьківські
