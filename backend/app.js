

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { config } = require("dotenv");
config({ path: '.env' })

const app = express();
app.use(cors());
const { Client, Databases, ID } = require("appwrite");
const sdk = require("node-appwrite");

//appwrite configuration
const client = new sdk.Client()

client.setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const databases = new sdk.Databases(client);

//fetching data from rapid api

const options = {
    method: 'GET',
    url: 'https://amazonlive.p.rapidapi.com/product',
    params: {
        asin: 'B095JCHDMV',
        location: 'us'
    },
    headers: {
        'X-RapidAPI-Key': '32e71864fcmsh8ffcf177d10585ep144c8djsn404a4b7e9a5d',
        'X-RapidAPI-Host': 'amazonlive.p.rapidapi.com'
    }
};

//creating document in collection

app.post('/api/storeproducts', async (req, res) => {
    try {
        const response = await axios.request(options);
        const dataone = await databases.createDocument(
            process.env.APPWRITE_DB_DATABASE_ID,
            process.env.APPWRITE_DB_COLLECTION_ID,
            sdk.ID.unique(),
            { data: [JSON.stringify(response?.data)] }
        );

        res.json(dataone.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch Amazon data' });
    }
});

//fetching data from database

app.get('/api/productsdata', async (req, res) => {
    try {

        let promise = await databases.listDocuments(
            "651ef99ad72cf952fdc4",
            "651f98c981c19ff7ac94",
            []
        );

        console.log("//////////", promise)

        res.json(promise.documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: 'Failed to fetch data from the collection' });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
