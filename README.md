# coinapi
# MERN CryptoCoin App

Welcome to the MERN CryptoCoin App! This is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js,Typescript) stack. The app fetches data from a cryptocurrency API to display information about various cryptocurrencies.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB installed and running.

### Installation
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/kunal-6421/coinapi.git
   ```

2. Change into the project directory:

   ```bash
   cd coinapi
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```
4. Create a `.env` file in the root directory and set the following environment variables:

   ```plaintext
   MONGO_URI=your_mongodb_connection_uri
   API_KEY=your_crypto_api_key
   CLIENT=your_client_url
   ```
5. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

6. Start the server:

   ```bash
   cd server
   npm start
   ```

7. Start the client:

   ```bash
   cd client
   npm start
   ```

The app should now be running locally. You can access it at [http://localhost:3000](http://localhost:3000).

