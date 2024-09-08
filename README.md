# Culinote Frontend - NextJS

Culinote is a smart recipe web application that allows users to generate recipes by uploading images of ingredients or food. Using image recognition technology, Culinote suggests various recipe ideas based on the uploaded content, making cooking simpler and more creative.

## Features

- Upload images of ingredients or dishes to generate recipe suggestions.
- AI-powered image recognition for ingredient detection.
- Explore recipes based on available ingredients.
- Simple and user-friendly interface for easy navigation.
- Supports multiple file formats for images.

## Tech Stack

- **Frontend**: Next.js, React.js, MaterialUI Design
- **Backend**: NodeJS, ExpressJS
- **AI & Image Processing**: ChatGPT
- **API**: OpenAI API

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or Yarn package manager

### Installation

1. Clone the repository:

   ``git clone https://github.com/your-username/culinote.git``


2. Navigate to the project directory:
   
   ```bash
   cd culinote
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

  

### Running the Development Server
Start the development server:
 ```bash
    npm run dev
    # or
    yarn dev
 ```

Open http://localhost:3000 in your browser to view the app.


## Building for Production
To build the application for production:

```bash
   npm run build
   # or
   yarn build
```

This will create an optimized build in the .next folder. You can then serve the app using:

```bash
   npm run start
   # or
   yarn start
```


## Dockerizing the Application
To run Culinote in a Docker container, follow these steps:

1. Build the Docker image:

Run the following command in your terminal to build the Docker image:

```bash
   docker build -t culinote-frontend .
```

2. Run the Docker container:

After building the image, you can run it using the following command:

```bash
   docker run -p 3000:3000 culinote-frontend
```

3. Open http://localhost:3000 in your browser to view the app running in the Docker container.


# Contact
For any inquiries or support, reach out to **storyrowio@gmail.com**



