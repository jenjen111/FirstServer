const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
    res.json({
        data: [
            {
                title: '첫번째 게시물',
                id: 1
            },
            {
                title: '두번째 게시물',
                id: 2
            },
            {
                title: '세번째 게시물',
                id: 3
            },
        ],
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});