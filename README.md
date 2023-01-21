# This is my solution for the MVP technical assessment. This was created for code4community.

### Features
- A message board that anyone can post to anonymously
- Newest posts are shown first
- Character limits per post are between 1 and 128 characters
- Users can see what others are posting on other their own devices (data stored on server)
- **SQLite database to save post data**

### High-level overview:
Within this repository there are two folders: backend and frontend
- Backend (node.js, Express, SQLite):
  - In charge of managing the post data
  - Stores the post data in the SQLite database and fetches it for the frontend when needed
  - Manages the creation of new posts
- Frontend (React, Axios):
  - In charge of displaying the posts to the user
  - In charge of calling on backend APIs for the creation of new posts
### Key Component Interactions
- Frontend:
  - The frontend structure uses the taxonomy of atoms, molecules, organisms, templates, and pages
    - As a general rule, I never used a component of a larger scope in one of a smaller scope, ie never use a molecule component in an atom component
    - The structure implies that molecules are made from atoms, organisms are made from molecules and perhaps some atoms, and so on
  - I also created a context component that provides post data in the form of state. This ensures that any component that might need post data can just call the context to get the most updated post data
  - For the sake of simplicity, I created an API call to POST directly in the PostInput component. If this were to be fleshed out further than an MVP, I would abstract the call in case it was needed elsewhere, as well as making the PostInput component more reusable.
  - The frontend also takes care of the post sorting by date and the character limitations. I might move this or reinforce this on the backend if the MVP were to be worked on further.
- Backend:
  - I tried to make the backend as simple as possible while also separating it into different modular layers for best practice.
  - All endpoints can be accessed from [URL/api/posts]
    - GET from that route will return a list of posts, which I use to display the posts on the frontend
    - POST from that route will add a new post to the list of all the posts
- Database:
  - The database is just a simple SQLite database with a single 'post' table
  - The table contains a content field and a date field, which is basically all that is needed for the MVP. A user table could be added in the future to keep track of logins and post authors

### Fulfilling the Requirements
- Users should be able to type a message and post it to the message board.
  - On the frontend, src/molecules/PostInput/index.ts handles adding a message to the message board. 
  - It does this by tracking changes in the text field
  - Then when the button is clicked, an POST call is made to the backend server, which takes the content from the text field and the current date, and inserts it into the posts table
- The message must be non-empty, and at most 128 characters long
  - On the frontend, src/molecules/PostInput/index.ts enforces this rule.
    - The button on the component disables when the text input's content length is outside of range 1 to 127
    - An error message also appears when the button is disabled
- Users should be able to see messages on the message board from most to least recent.
  - On the frontend, src/organisms/Posts/index.ts handles the sorting of posts from newest to oldest
  - By using the date field of each post object, a sort function is called to esnure the newest are stored first in the posts array
- Users on different computers should be able to post to the same board and view each other’s messages.
  -  By implementing a backend and API, this will ensure that all users will stay up to date on post data
  -  Additionally, the frontend implements a context (found at src/contexts/postdata.ts) which will fetch the posts whenever a user enters the site, meaning that the most recent posts will appear
-  **Bonus Requirement: Ensure data persists onto disk; data survives a server restart**
  -  By storing post data in an SQLite database, as long as the SQLite file is not lost, the data should persist.

### Some thoughts/where I would improve this given more time
- I think the best improvement from here would be implementing some sort of listener, so that the frontend will constantly update new posts
  - Right now, the posts update on refresh as well as when the user posts, but it would be helpful to continuously listen or fetch the data, especially if many users were to post at the same time
- After focusing on that, I think another interesting feature to implement would be a reply system or a like system. This could be done by expanding the SQLite tables to include a likes field or a reply field

# How to Run:
1. Clone the repository.
2. Start the backend server by navigating to /backend and then calling `npm run start`
3. Start the frontend server by navigating to /frontend and then calling `npm run start` (do this in another window so that both the frontend and backend are running locally)
4. Access the frontend by going to localhost:3000 if you are not already directed there
5. The backend should be on port 8080 (values are harcoded in, so if you want to change the ports you might need to do a find/replace)
6. Everything should be running!
