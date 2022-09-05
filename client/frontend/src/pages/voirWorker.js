import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
 
export const VoirWorker = () => {
   
  const navigate = useNavigate(); 
  const { id } = useParams();  
  const [user, setUser] = useState({});
 
  
 
  useEffect(() => {
    loadUser();
  }, []);
 
 
 
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8800/api/services/${id}`);
    setUser(result.data);
    //console.log(result.data.resp._source);
  };
  return (
    <p>jh</p>
  );
};