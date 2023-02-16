import express from 'express';
import {optionsForGetOrders} from './getOrders.js';
import { optionsForGetItems } from './getItems.js';
import { optionsForGetOrderStatus } from './getOrderStatus.js';
const app = express();

const endpoint = "https://discrete-kit-95.hasura.app/v1/graphql";

app.set("view engine","ejs");

app.get("/",(req,res) =>{
    res.render('index')
})

app.get("/getOrders",async (req,res) => {
    const response = await fetch(endpoint, optionsForGetOrders);
    const result = await response.json();

    console.log(result.data); // data
    res.send(result);
    
})

app.get("/getItems",async (req,res) => {
    const response = await fetch(endpoint, optionsForGetItems);
    const result = await response.json();

    console.log(result.data); // data
    res.send(result);
    
})

app.get("/getOrderStatus",async (req,res) => {
    const response = await fetch(endpoint, optionsForGetOrderStatus);
    const result = await response.json();

    console.log(result.data); // data
    res.send(result);
    
})


app.listen(3000,() =>{
    console.log("running on port no 3000");
});
