const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
const PORT = 8000;

const skateboardScenery = {
    0: 'https://images.unsplash.com/photo-1520949201978-45105812d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    1: 'https://images.unsplash.com/photo-1461114309724-295d0a070cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    2: 'https://images.unsplash.com/photo-1575705185519-42a09d73fae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    3: 'https://images.unsplash.com/photo-1514507406477-6b19daae9296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    4: 'https://images.unsplash.com/photo-1607653153251-b66649975df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    5: 'https://images.unsplash.com/photo-1597685048174-143481655e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    6: 'https://images.unsplash.com/photo-1590896616008-2b643490dba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    7: 'https://images.unsplash.com/photo-1626828262854-9fb56e81b83a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    8: 'https://images.unsplash.com/photo-1622893701124-87623e187661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80',
    9: 'https://images.unsplash.com/photo-1590565889512-cdd9bb516030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    10: 'https://images.unsplash.com/photo-1647021048735-f1c22c49f1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80',
}


app.get('/api', (req, res) => {
    res.json(skateboardScenery);
})

app.get('/api:index', (req, res) => {
    const i= req.params.index;
    res.json(skateboardScenery[i])
})

app.listen(process.env.PORT || PORT , ()=> {
    console.log(`server running on ${PORT}`)
})