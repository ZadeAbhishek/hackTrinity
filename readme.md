### Installation Guide

1. **Set Up API Keys**:
   - Obtain your API keys.
   - Paste them into a `.env` file in the root directory of the project.

2. **Install Node.js**:
   - Ensure you have Node.js installed on your machine. If not, you can download it from [here](https://nodejs.org).

3. **Install Dependencies**:
   - In your project directory, run the following command to install all required dependencies:
     ```bash
     npm install
     ```

4. **Start the Server**:
   - Run the server using the following command:
     ```bash
     node server.js
     ```



```bash
curl --location 'http://localhost:3001/query' \
--header 'Content-Type: application/json' \
--data '{
    "query": "YOUR_QUERY_HERE"
}'
```

### Explanation:

1. **Endpoint**:  
   `http://localhost:3001/query` — This is the API endpoint where you're sending the request.

2. **Header**:  
   `'Content-Type: application/json'` — Indicates that you're sending JSON data.

3. **Data**:  
   The JSON data you're sending includes a `"query"` key. Replace `"YOUR_QUERY_HERE"` with your actual query string.

### Example Usage:

```bash
curl --location 'http://localhost:3001/query' \
--header 'Content-Type: application/json' \
--data '{
    "query": "What is the weather today?"
}'
```

This sends a query to the `/query` endpoint of your server running on port 3001.