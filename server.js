import { OpenAI } from 'openai';
import express from 'express';
import 'dotenv/config'
const app = express();

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
});

app.use(express.json());

async function retrieveRelevantInfo(query) {
  // Implement vector search logic here
}

function combineQueryAndInfo(query, info) {
  // Combine query and retrieved info
}

async function storeFeedback(query, response, feedback) {
  // Store feedback in the database for later use in fine-tuning
}


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const PORT = process.env.PORT || 3001;

  // Default route to check if the server is running
  app.get('/', async (req, res) => {
    console.log('Server Started: Hi there');
    res.send('Server Started: Hi there');  // Use res.send to respond to the client
  });
  
  // Route for processing queries
  app.post('/query', async (req, res) => {
    
    const { query } = req.body;
    generateResponse(query)
    .then(response => res.json(response))
    .catch(error => res.json(error));

  });
  
  // Route for receiving feedback
  app.post('/feedback', async (req, res) => {
    const { query, response, feedback } = req.body;
    
    
    res.sendStatus(200);  // Respond with status 200 to confirm successful feedback storage
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function generateResponse(prompt) {
  try {
    const response = await perplexity.chat.completions.create({
      model: "llama-3.1-sonar-small-128k-chat",
      messages: [
        { role: "system", content: "Be precise and concise." },
        { role: "user", content: prompt }
      ],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error calling Perplexity API:', error);
    throw error;
  }
}

// const prompt = "Who won the recent game between warriors and kings ?";
// generateResponse(prompt)
//   .then(response => console.log(response))
//   .catch(error => console.error(error));