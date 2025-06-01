# StackNotes

StackNotes is a **full stack note-taking application** built using modern technologies like **React**, **Redux Toolkit**, **TailwindCSS**, **Node.js**, **Express**, **MongoDB**, and **Webpack Module Federation**. The application is architected using **microfrontends**, enabling scalable and modular frontend development.

# StackNotes App Demo

[Stack-Notes-Demo.webm](https://github.com/user-attachments/assets/44d1c39c-5a2b-47d9-a056-adcee3b4fe5b)


## Add Environment Variables

1. **Backend:**
   - Go to `backend` folder and add a `.env` file.
   - Paste the following keys and values:
     ```
     PORT=<port_number>
     DB_CONNECTION_STRING=<database_connection_string>
     TOKEN_KEY=<token_key>
     NOTES_APP_SHELL_URL=<host_app_url>
     NOTES_PACKAGE_SHELL_URL=<remote_app_url>
     ```

2. **Frontend:**
   - Go to `frontend` folder and add a `.env` file in both notes-package and stack-notes-shell folder.
   - Paste the following key and value:
     ```
     STACK_NOTES_API_URL=<api_url>
     ```

## Installation

### Backend
1. Navigate to the `backend` folder.
2. Run `npm i` to install dependencies.

### Frontend
1. Navigate to the `frontend` folder.
2. Naviate to notes-package and run `npm i` to install dependencies.
3. Naviate to stack-notes-shell and run `npm i` to install dependencies.

## Start Chat App

### Backend
1. Navigate to the `backend` folder.
2. Run `npm run start`.

### Frontend
1. Navigate to the `frontend` folder.
2. Naviate to notes-package and run `npm run start` to install dependencies.
3. Naviate to stack-notes-shell and run `npm run start` to install dependencies.

Feel free to customize and extend the application as needed! If you encounter any issues, refer to the documentation of the respective libraries or frameworks used.
