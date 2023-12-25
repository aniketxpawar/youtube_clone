import React from 'react';
import {Stack,Box} from '@mui/material';
import {VideoCard, ChannelCard} from './';

const Videos = ({videos, direction}) => {
  // console.log(videos)
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" 
    justifyContent="start" alignItems="start" gap={2}>
    {videos?.map((video,index) =>
      (video.id.videoId || video.id.channelId) && (
      <Box sx={{width: {md: '320px', xs:'100%', sm:'358px'}}} key={index}>
      {video.id.videoId && <VideoCard video={video} />}
      {video.id.channelId && <ChannelCard channelDetail={video} />}
      </Box>
    ))}
    </Stack>
  )
}

export default Videos