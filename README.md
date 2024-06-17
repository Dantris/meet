# Meet App

The Meet app is a dynamic application designed to simplify scheduling and managing meetings directly synchronized with Google Calendar. It leverages modern web technologies to provide a seamless user experience from frontend interaction to backend data processing.

## Features

- **Interactive Frontend**: Utilizes React to build a responsive and interactive user interface.
- **Serverless Backend**: Implements Node.js with Express wrapped in AWS Lambda functions for scalable, on-demand backend logic.
- **Integrated Scheduling**: Connects directly with Google Calendar API to manage meeting events effectively.

## Architecture

This project is structured into two main components:

### Frontend

- **Technology**: JavaScript with React
- **Hosting**: GitHub Pages
- **Responsibilities**: Handles user interactions and displays data. Sends requests to the backend services.

### Backend

The backend is divided into two main parts: Server Logic and Database.

#### Server Logic

- **Technology**: Node.js with Express
- **Platform**: AWS Lambda (Function as a Service - FaaS)
- **Responsibilities**: Processes requests from the frontend, handles business logic, interacts with the Google Calendar API to fetch, add, and manage events.

#### Database

- **Technology**: Google Calendar API
- **Responsibilities**: Serves as the primary data store for all meeting events, providing robust features for event management.

## Development

### Prerequisites

- Node.js (v16.20.2 or later)
- npm (v10.8.0 or later)
- Google API credentials for accessing Google Calendar

### Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dantris/meet.git
   cd meet
