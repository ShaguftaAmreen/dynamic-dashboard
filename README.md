# Dynamic Dashboard Application

This project is a dynamic dashboard built with React and Redux, allowing users to manage multiple dashboards and widgets. Users can add, remove, and search widgets within various categories.

## Features

- **Dynamic Categories and Widgets**: The dashboard is built dynamically from a JSON structure. Categories contain multiple widgets that can be added or removed by the user.
- **Widget Management**: Users can add new widgets by providing a name and text. Widgets can also be removed from any category.
- **Search Functionality**: A search bar allows users to filter widgets by name across all categories.
- **State Management with Redux**: The app uses Redux for managing the state of categories and widgets.

## Project Structure

```plaintext
├── src
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── Category.js
│   │   └── Widget.js
│   ├── redux
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── dashboardData.json
│   ├── styles.css
│   ├── App.js
│   └── index.js
├── public
├── package.json
└── README.md

Getting Started
Follow these steps to set up the project on your local machine.

Prerequisites
Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

git clone https://github.com/ShaguftaAmreen/dynamic-dashboard.git
cd dynamic-dashboard

Install the dependencies:

npm install

Running the Application
To run the application locally:

npm start

This will start the development server and open the application in your default browser. The app will be available at http://localhost:3000
