import React, { useState } from 'react'
import {  Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText,  } from '@mui/material';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = () =>{
  const Pages = ["Home", "About", "Pages", "Property", "Contact"];
  const [open, setOpen] = useState(false);
 

  return(
    <div>
      <Drawer open={open} onClose={()=>setOpen(false)}>
       <List>
        {
          Pages.map((page,index)=>(
            <ListItemButton onClick={()=>setOpen(false)} key={index}>
          <ListItemIcon>
            <ListItemText>
              {page} 
            </ListItemText>
            
          </ListItemIcon>
          
        </ListItemButton>
        
          ))
          
        }
        
      
       </List>
      </Drawer>
      <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon/>
      </IconButton>
    </div>
  )
}
export default DrawerComp;