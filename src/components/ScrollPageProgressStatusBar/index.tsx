import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    zIndex: 2,
  },
});

export const ScrollPageProgressStatusBar = (): JSX.Element => {
  const { root: MUIStyles } = useStyles();

  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const progressBarByScrollPage = () => {
      // The scrollTop gives length of window that has been scrolled
      const windowScrolled = document.documentElement.scrollTop;
      // The scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progressVal = (100 * windowScrolled) / scrollLength;

      setProgressBar(progressVal);
    };

    // Adding scroll event listener on mounting
    window.addEventListener('scroll', progressBarByScrollPage);

    // Removing event listener upon unmounting
    return () => window.removeEventListener('scroll', progressBarByScrollPage);
  }, []);

  return (
    progressBar > 2 && (
      <Box sx={{ width: '100%' }} className={MUIStyles}>
        <LinearProgress variant='determinate' value={progressBar} />
      </Box>
    )
  );
};
