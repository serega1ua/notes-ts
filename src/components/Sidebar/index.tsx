import React from 'react';
import styles from './Sidebar.module.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

const Sidebar: React.FC = () => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    axios
      .get('https://6335cd5d8aa85b7c5d237173.mockapi.io/notes')
      .then((res) => res)
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [data]);

  return (
    <>
      <div className={styles.root}>
        <div className={styles.trash_container}>
          <DeleteForeverIcon />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
