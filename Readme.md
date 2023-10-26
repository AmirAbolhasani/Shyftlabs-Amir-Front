# Frontend Project Documentation

This README provides an overview of the backend project assessment done by **Amir Abolhasani** for **Shyftlabs**, including its structure, setup instructions, technology stack.

## Technology Stack
React.js TypeScript

## Project Structure
-  `/public`: This directory contains some files which are supposed to be public.
-  `/src`: This directory contains the source code for the frontend.
-  `/src/assets`: This directory contains fonts and images
-  `/src/components`: This directory contains tsx components which are used globally across the project.
-  `/src/pages`: This directory contains tsx pages files.
-  `/src/rows`: This directory contains data models.
-  `AFRouter.tsx`: This file controls the routing of the project.
-  `AFServer.tsx`: This files contains everything related to the server and the API.
-  `Routes.tsx`: This file contains all URLs.

## Requirement
Please install the following before we get started.
1. Install NodeJS
2. Install TypeScript

## Installation and Setup
  To set up and run this backend project locally, follow these steps:
1.  **Clone the repository:**
```bash
git clone <repository_url>
cd <repository_directory>
```

2. **Install dependencies:**
```bash
npm install		# to install dependencies
```

3. **Environment Variables:**
	Create a .env file and configure environment variables. 
	
	There is a file in the route of the project named '.env.template' having the below content: 
	```yaml
	REACT_APP_URL  =  "http://127.0.0.1:4000/"
	```
	Copy the content into the .env file you created and init the values for backend connection.

4. **Start The Application:**
	```bash
	npm run start
	```

The frontend application will be accessible at http://localhost:3000.