__Technical Design Document: Simple Realtime Chat__
# 1. Introduction

- __Project Title__: Realtime Chat App
- __Document Purpose__: This document outlines the technical design for a simple, web-based chat application platform.
- __Target Audience__: Software Developers
# 2. System Overview

__High-Level Description__: This application will enable users to:

- __Register__ for an account using their email address (optional username).
- __Sign in__ to the chat app using their registered email address.
- __Log out__ of the application.
- __Search__ Users can search for other users by email address (username search is optional).
- __Initiate chats__ with specific users.
- __Send and receive messages__ in real-time, including text messages initially, with images and other attachments planned for future development.
- __Receive notifications__ for incoming messages with a sound and visual indicator (notification button).
- __View a list of online users__.
- __Create new groups__ with a name and selected members (minimum of 3 members).
- __Update their personal information__ and profile picture.(future development)
- __Make voice and video calls__ (future development).

__System Architecture__:

- __Front-end__:
    - Developed using:
        - HTML for structure
        - CSS for styling (consider using TailwindCSS for for pre-built styles and faster development)
        - JavaScript with React.js framework (Vite for bundling)
        - React Context, React Hooks (useState, useEffect) for state management and side effects
    - Additional libraries:
        - react-hot-toast for user notifications
        - react-icons for iconography (consider alternatives like Font Awesome or Material-UI)
- Consider using a task runner like Gulp or Webpack for automating front-end build processes (future development)
- __Back-end__:
    - Implemented with Node.js using Express.js framework.
    - Additional libraries:
        - Axios for making HTTP requests
        - jsonwebtoken for authentication (using JSON Web Tokens)
        - socket.io for real-time communication
        - JOI for data validation
        - bcrypt for password hashing (if storing passwords)
- __Database__:
    - MongoDB will store user data, chat messages, and group information.
- __Cloud Storage__:
    - Cloudinary will be used to store uploaded media (images and attachments).

# 3. User Interface (UI) Design
## UI Mockups
Wireframes or low-fidelity mockups will be created to illustrate the following key user interface:

- Intro page (Landing Page)
- Login and registration page
- Chat page 
## Pages Details
### Intro Page (Landing Page)
This page serves as the landing page for users who haven't registered or logged in yet. It will display:

- __Signup and Login Buttons__: Allow users to access the appropriate functionality. (Minimum Viable Product - MVP)
- __App Description__: A brief but informative description of the chat app's name and core functionalities.
- __Learn More Button (Optional)__: Provides a link or button to a more detailed explanation of the app's features, potentially showcasing upcoming features or functionalities planned for future development.
### Login and Registration Page
This page allows users to:

- __Enter Credentials__: Users can enter their email address and password (for login) or email address, desired username (optional), and password (for registration). (Minimum Viable Product - MVP)
- __Submit Forms__: Users can submit the login or registration form to proceed. (Minimum Viable Product - MVP)
- __Clear Instructions__: Each input field will have clear labels and instructions for user guidance. (Minimum Viable Product - MVP)
- __Visual Feedback__: Users receive visual feedback for successful actions (e.g., confirmation message) or error messages for invalid inputs. (Minimum Viable Product - MVP)
### Chat Page (Main Functionality)

This is the core functionality of the app and is divided into sections:

#### Sidebar:

- __Profile Picture and Username__: Clickable element to access user settings.
- __Navigation Options__: Buttons or icons providing access to different functionalities:
    - __Messages__: Displays a list of recent messages for quick access to ongoing conversations.
    - __Groups__: Shows a list of recent groups the user participates in.
    - __Calls (Optional - Future Development)__: Displays a list of recent calls (both voice and video) for easy access to past communication (relevant when call functionality is implemented).
- __Notification Button__: Displays the number of unread messages.
- __Logout Button__: Allows users to log out of the application.
####  Beside Sidebar:
- __Illustrative Lists (Optional)__: Depending on the selected sidebar option (Messages, Groups, Calls), a dynamic list of recent entries (messages, groups, or calls) might be displayed for quick access.
- __Search Bar (Optional)__: Users can search for other users by email address or username. (Minimum Viable Product - MVP)
- __List of Online Users__: Displays a list of currently online users, allowing users to easily identify who is available for chat. A clear indicator (e.g., green dot) next to usernames visually represents online status. (Minimum Viable Product - MVP)
#### Chat Container:
- Top of Chat Container:

    - __Conversation Settings Button (Future Development)__:
Allows users to mute notifications, clear chat history, or manage other conversation-specific settings.
    - __Group-Specific Features (Applicable to Group Chats)__:
        - __Group Information Panel__: Displays group name and list of members (for group chats).
        - __Group Settings Button (Future Development)__: Allows editing group name or adding/removing members, allowing group management for administrators.
    - __Call and Video Call Buttons (Future Development)__: Initiate calls and video calls (for both individual and group chats).
- Below of chatcontainer (Minimum Viable Product - MVP)
    - __Message History__: Displays messages chronologically, with clear distinction between sender and receiver (using color coding, usernames, or other visual cues).
    - __Profile Pictures__: Shows profile pictures of the sender and receiver for each message.
#### Message Input Area: (Minimum Viable Product - MVP)

- __Text Box__: Allows users to compose messages.
- __Attachment Button__ (Future Development): Enables users to attach images or files.
- __Send Button__: Submits the composed message.
## User Interaction Flow
The UI will guide users through a seamless experience:

### 1.Intro Page: 
Users see the intro page with signup and login options, along with a basic app description. They can choose to register or log in based on their needs.
### 2.Registration/ Login/logout: 
- Users can register with a valid and unique email address and optional unique username.
- Users can sign in using their registered email address. If not registered, they are directed to the registration page.
- Users can log out of the application using the logout button (only visible after successful login).
### 3. Search Users and Create Conversations:
- Upon successful login, users can see a list of online users and search for specific users using the search bar (optional). 
- Selecting a user creates a new conversation or opens an existing conversation window.
### 4. Chat Window Features: 
- The chat window displays message history, profile pictures, and functionalities like accessing conversation settings, or initiating calls/video calls (Future)
### 5. Group Chats: 
- Users can create groups by providing a "group name" and selecting member's email addresses (minimum of 3 members required). Group chats have dedicated settings for managing group information and members. 
### 6. Update Profile: 
- Users can update their profile information and profile picture by clicking their profile picture (accessible from the sidebar).
### 7. Notification: 
A notification sound plays and the notification button displays the number of unread messages.
## Consider in future
- The UI should prioritize a clean, user-friendly layout with intuitive icons and clear visual hierarchy.
- A consistent color palette and typography will enhance the overall user experience.
- Responsive design will ensure optimal viewing and interaction across various screen sizes.
- Add Friend Feature

# 4. Back-end (Server-side) Design
## Server-side Functionality
- User Management:
    - Provides mechanisms for user registration, login, and logout.
    - Stores user data securely, including email address, username (optional), hashed and salted password, and profile information.
- Authentication and Authorization:
    - Implements a JSON Web Token (JWT) based authentication system to verify user identity during requests.
    - Defines user roles and access control mechanisms to restrict unauthorized access to data and functionalities.
- Chat Management:
    - Establish real-time communication channels using Socket.IO for message exchange between users and groups.
    - Implement logic for creating new chats (individual and group), retrieving chat history, and managing message delivery (including handling offline users).
- Group Management:
    - Facilitate group creation with group name and member management functionalities (adding/removing members).
    - Manage group-specific information and settings.
- Notifications:
    - Develop a system for generating notifications for incoming messages using a mechanism like web push notifications.
- Data Persistence:
    - Interact with the MongoDB database to store user data, chat messages, and group information efficiently.
- Cloud Storage Integration:
    - Implement functionalities to interact with Cloudinary for storing and retrieving uploaded media (images and attachments).
- Error Handling:   
    - implemented to gracefully handle situations like invalid username, email, incorrect password, provided information not be fill correctly or fully, or database connection issues, network connection disrupt,...
## API Endpoints
This section defines the application programming interfaces (APIs) that expose functionalities to the client-side.
- AUTH: **api/auth**
    - POST **/signup**: Registers a new user with the provided information.
    - POST **/signin**: Authenticates a user with email and password.
    - POST **/logout**: Ends the user's session.
    - GET **/online**: Retrieves a list of online users for displaying online indicators.
- USER: **api/user**
    - GET **/users**: Retrieves all users (including friend status - future development).
    - GET **/me**: Retrieves the currently logged-in user's information for profile updates.
    - GET **/find/:user_id**: Finds a user by email or username
    - UPDATE **/me/profile_update**: Updates the user's profile information (including profile picture).
- MESSAGES: **api/message**
    - GET **/messages/:user_id**: Retrieves all messages between the logged-in user and the specified user.
    - POST **/send/:user_id**: Creates and sends a message to a specific user.
    - GET **/messages/unread**: Retrieves the number of unread messages for notification purposes.
    - DELETE: **/delete/:message_id**: Deletes a specific message. 
    - UPDATE: **messages/:user_id/delete**: Hides all messages from the specified user since the request time.(future)
- GROUP: **api/group**
    - GET **/groups**: Retrieves all groups the user belongs to for navigation purposes.
    - GET **/:group_id**: Retrieves information about a specific group for displaying in the message container.
    - POST **/new**: Create new group
    - UPDATE **/:group_id/update**: Updates information about a specific group.
    - DELETE **/delete/:group_id/**: Deletes a specific group (authorized action for admins only).
    - DELETE **/delete/:group_id/:group_member_id**: Deletes a member from a group (authorized action for admins only).
    - UPDATE **/:group_id/add/:user_id**: Add a member into a group (authorized action for users who belong to group only).
    - UPDATE **/:group_id/leave/:user_id**: Updates group membership after a user leaves a group.
    - UPDATE **/:group_id/admin**: Renders a form to set an admin for a group (admins can update group admins). On admins leaving the group, redirects to this link to update a new admin.

## Data Model:
This section defines the structure of data objects stored in the database.
### User:
- user_id 
- username (optional)
- email (unique)
- password (hashed and salted)
### Message:
- message_id 
- group_id (FOREIGN KEY REFERENCES Group(group_id))
- sender_id (FOREIGN KEY REFERENCES User(user_id))
- receiver_id (FOREIGN KEY REFERENCES User(user_id))
- content
### Group:
- group_id
- groupname

### Group_Member:
- group_id (FOREIGN KEY REFERENCES Group(group_id))
- user_id (FOREIGN KEY REFERENCES User(user_id))

# 5. Error Handling and Logging
- __Server-Side Error Handling__:
    - Define custom error classes to categorize and handle different types of server-side errors (e.g., authentication errors, database errors).
    - Implement middleware to intercept errors and provide appropriate responses (e.g., HTTP status codes, JSON error messages).
- __Client-Side Error Handling__:
    - Utilize a library like react-hot-toast or similar to display user-friendly error notifications on the client-side.
    - Ensure informative error messages are displayed to guide users in case of issues.
# 6. Scalability and Performance Considerations
- Discuss strategies for handling potential increases in user base, data volume, and traffic.
- Propose approaches for optimizing performance (e.g., caching, database indexing).
- __Future Enhancements__:
    - Implement responsive design for optimal user experience across various screen sizes.
    - Integrate a chatbot functionality (consider using third-party APIs or building a custom solution).
    - Refactor code components and files for improved maintainability and readability.
    - Design database models to accommodate future application expansion.   
# 7. Security Considerations
- Emphasize the importance of secure data storage and handling practices.
- __Data Security__:
    - Reiterate the use of hashing and salting techniques for password storage.
    - Consider implementing additional security measures like encryption for sensitive data at rest.
- __Future Enhancements__:
    - Implement techniques to mitigate common web application vulnerabilities like XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery). 
    Use libraries or frameworks that provide built-in security features or follow best practices for secure coding

# 8. Deployment Strategy

- Specify the chosen deployment platform (e.g., Heroku) and its advantages for scalability and maintenance.
# 9. Testing Strategy

- Outline the testing approach to ensure code quality and application stability:
    - Unit testing of individual components for isolated functionality verification.
    - Integration testing to verify communication and interaction between components.
    - (Optional) End-to-end testing for simulating user flows and overall application behavior.
# 10. Additional Considerations

- Briefly discuss the plan for data storage (e.g., relational database, NoSQL database). The choice can depend on factors like scalability, consistency, and query patterns.
- Mention the use of diagrams, flowcharts, and/or UML models to enhance understanding of complex functionalities.
