### Fleet Management Frontend

### Project Overview

The Fleet Management Frontend is a web-based application designed to provide an intuitive interface for managing vehicle fleets. It connects with the Fleet Management Backend to offer features like vehicle registration, real-time tracking, maintenance history, and usage analytics. Built using React and a modern frontend stack, this application provides an efficient and user-friendly experience for fleet managers.

### Features

- [x] Vehicle Registration: Interface for adding new vehicles
- [x] Real-Time Tracking: Visualize vehicle status and location on interactive maps using Leaflet.
- [x] Maintenance Records: View and log vehicle maintenance history.
- [x] Usage Analytics: Display basic analytics on vehicle usage, helping fleet managers make informed decisions.

### Tech Stack

### Core Technologies

- **React**: A JavaScript library for building user interfaces, offering a component-based architecture.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, providing better tooling and type safety.
- **Vite**: A fast and efficient build tool for modern web applications.
- **Chakra UI**: A simple, modular, and accessible component library for React applications.
- **React Query**: A powerful library for data fetching and caching in React applications.
- **React Hook Form**: A performant, flexible, and extensible form library for React.

### Mapping and Visualization

- **Leaflet**: An open-source JavaScript library for mobile-friendly interactive maps.
- **React Leaflet**: React components for Leaflet maps, making it easy to integrate maps into React applications.

### Form Validation

- **Zod**: A TypeScript-first schema declaration and validation library.
- **React Hook Form Resolvers**: Integrates validation libraries like Zod with React Hook Form.

### Architecture

### Overview

The Fleet Management Frontend is structured in a modular way, utilizing React components to encapsulate UI elements and logic. The application is organized into various components and pages, each responsible for specific features and functionalities.

### Key Components

- **Vehicle Components**: Handle UI and logic for displaying and managing vehicle data, including forms for registration and tables for listing vehicles.
- **Tracking Components**: Render interactive maps showing real-time vehicle locations and statuses using React Leaflet.
- **Maintenance Components**: Manage and display vehicle maintenance records, allowing users to log and view service history.
- **Tracking Report Components**: Provide visualizations and insights into vehicle usage patterns and performance metrics.

### Directory Structure

```plaintext
.
└── fleet-frontend/
    ├── public
    └── src/
        ├── assets
        ├── clients
        ├── components
        ├── hooks/
        │   ├── mutations
        │   └── queries
        ├── pages/
        │   └── vehicles
        ├── types
        └── utils
```

### Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:jskod/fleet-frontend.git
   cd fleet-frontend
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   yarn run dev
   ```

4. **Build for production**:

   ```bash
   yarn run build
   ```

5. **Run the preview server**:

   ```bash
   yarn run preview
   ```

6. **Run linting**:

   ```bash
   yarn run lint
   ```

### Deployment

The frontend can be easily deployed to any static hosting service, such as Vercel, Netlify, or AWS S3. Make sure to build the application using `yarn run build` and then deploy the `dist` folder.

### Features/pages Screenshots

### Vehicle Listing
<img width="1440" alt="Screenshot 2024-08-04 at 3 13 26 AM" src="https://github.com/user-attachments/assets/fa2f01cd-916f-4643-85eb-a8331fe81b0a">


### Vehicle Registration
<img width="1440" alt="Screenshot 2024-08-04 at 3 14 14 AM" src="https://github.com/user-attachments/assets/5bf8c36c-b47d-4fc5-8009-811841646fd6">

### Vehicle Details (Report + Maintenance Logs)
<img width="1440" alt="Screenshot 2024-08-04 at 3 15 09 AM" src="https://github.com/user-attachments/assets/c8da22fc-781c-464f-b3ad-becfe099fa0b">

### Add Maintenance Log
<img width="1440" alt="Screenshot 2024-08-04 at 3 15 53 AM" src="https://github.com/user-attachments/assets/09777344-65ee-4aee-9aad-bf5189c0c4fe">

### Live Tracking Vehicle
<img width="1440" alt="Screenshot 2024-08-04 at 3 16 20 AM" src="https://github.com/user-attachments/assets/9c234cd3-3a30-4eb1-9925-222168b18d36">
