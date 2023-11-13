import OpenAI from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const configuraions = {
    organization: "org-065h2MWs6XxsVQPe4ejClnsn",
    apiKey: "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"
};

const openai = new OpenAI(configuraions);

app.post('/', async (req, res) => {

    const { message } = req.body;
    
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: message }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
    res.send(completion.choices[0]);
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });
