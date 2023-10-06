
function userFunction(){
    return(
        console.log("helloworld")
    )
}

userFunction();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// const { Client, Databases, ID } = require("appwrite");
// const sdk = require("node-appwrite");

// //appwrite configuration
// const client = new sdk.Client()

// client.setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('651ef9776046ee84cb9f')
//     .setKey("91713a6f558fc3a157a99c594d1d935c709a0cc35d124e9d746019d43ea9aa85f95432857e7da1dcf106af1cd6369be0e7f397170e7a35ae8d1e7f61ce593491acb3c1c8ac1cb7db8b6ed0edac6e171b0886248a1c0cf1b80d452708e39e465bb5d56b8f06d0c832cbdc5842779e59c064b6ae524c4d4239625f5c1235e81c35");

// const databases = new sdk.Databases(client);

// //fetching data from rapid api
// const options = {
//     method: 'GET',
//     url: 'https://amazonlive.p.rapidapi.com/product',
//     params: {
//         asin: 'B095JCHDMV',
//         location: 'us'
//     },
//     headers: {
//         'X-RapidAPI-Key': '32e71864fcmsh8ffcf177d10585ep144c8djsn404a4b7e9a5d',
//         'X-RapidAPI-Host': 'amazonlive.p.rapidapi.com'
//     }
// };
// //creating document in collection
// app.post('/api/storeproducts', async (req, res) => {
//     try {
//         const response = await axios.request(options);
//         const dataone = await databases.createDocument(
//             '651ef99ad72cf952fdc4',
//             '651f98c981c19ff7ac94',
//             sdk.ID.unique(),
//             { data: [JSON.stringify(response?.data)] }
//         );

//         res.json(dataone.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to fetch Amazon data' });
//     }
// });

// //fetching data from database
// async function userFunction() {
// app.get('/api/storeproductsdata', async (req, res) => {
//     try {

//         let promise = await databases.listDocuments(
//             "651ef99ad72cf952fdc4",
//             "651f98c981c19ff7ac94",
//             []
//         );

//         console.log("//////////", promise)

//         res.json(promise.documents);
//     } catch (error) {
//         console.error('Error fetching documents:', error);
//         res.status(500).json({ error: 'Failed to fetch data from the collection' });
//     }
// });
// }

// userFunction();
// const port = 3001;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
