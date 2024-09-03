import React from 'react'
import { useShow } from '@refinedev/core'
import { useDelete } from '@refinedev/core'
import { Box } from '@mui/material';

export const PropertyDetails = () => {

  const {queryResult} = useShow();
  const {data, isLoading, isError} = queryResult;

  const PropertyDetails = data?.data ?? {}

  if(isLoading) return <div>Loading....</div>
  if(isError) return <div>Error</div>
  
  return (
    <Box
    
    >
      
    </Box>
  )
}


