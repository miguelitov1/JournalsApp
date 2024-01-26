import { IconButton, Typography } from "@mui/material"
import { JournalLayeout } from "../layeout/JournalLayeout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (

    <JournalLayeout>

      {/* <Typography>Irure eu nulla pariatur duis duis aute culpa nisi laboris ut fugiat consectetur deserunt et. Eiusmod Lorem velit ut ea velit enim esse laborum eiusmod. Ea consequat voluptate do est velit sint qui deserunt consequat labore ea. Mollit ut ut veniam dolore ad duis non deserunt nulla duis ipsum amet. Voluptate amet magna irure aliqua qui ea culpa magna aute irure laboris.</Typography> */}
      <NothingSelectedView />
      
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayeout>



  )
}
