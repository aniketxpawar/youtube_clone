import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from "@mui/material";

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos,setVideos] = useState([]);
  const {id} = useParams();
  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data => setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
    <Box>
      <div style={{
        background: 'linear-gradient(90deg, rgba(68,9,121,0.9459459459459459) 0%, rgba(0,163,255,1) 0%, rgba(255,0,200,0.5320056899004267) 0%, rgba(62,29,254,1) 0%, rgba(203,34,80,1) 100%, rgba(255,0,0,0.5320056899004267) 100%)',
        zIndex: 10,
        height: '300px'
      }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/>
    </Box>
    <Box display="flex" p="2">
      <Box sx={{ mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
    </Box>
    </Box>
  )
}

export default ChannelDetail