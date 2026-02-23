import { Box } from '@mui/material'
import React from 'react'
import Advertisement from '../components/Advertisement'
import SpecialPost from '../components/SpecialPost'
import LastPost from '../components/LastPost'
import Companies from '../components/Companies'

const ContentLayer = () => {
  return (
    <Box sx={{
        // to overlay the contentlayer on landingpage
        position:"relative",
        zIndex:1
    }}>
        <SpecialPost/>
        <Advertisement/>
        <LastPost/>
        <Companies/>
    </Box>
  )
}

export default ContentLayer