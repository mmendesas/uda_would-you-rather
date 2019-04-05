### Step 1 - Draw All of the Views of the App
- Login Page
- Home Page (/)
- LeaderBoard Page (/leaderboard)
- Creating New Question (/add)
- Question Page (/questions/:id)

### Step 2 - Break Each View Into a Hierarchy of Components

- Login
    - App > Navigation > LoginBox

- Home Page (/)
    - App > Navigation > AuthedUser (logout) > AnswerPool

- LeaderBoard Page (/leaderboard)
- Creating New Question (/add)
- Question Page (/questions/:id)
    - Question

 
- NavBar
- New Question
- Leader Board
- UserCard
- Question

- LoginPage
- HomePage

### Step 3 - Determine What Events Happen in the App
 - get all users
 - get all questions
 - answer a question
 - make a question
 - login as another user

### Step 4 - Determine what data lives in store

- users
- questions
- authedUser

sample: https://www.youtube.com/watch?v=xfmSkLAL__Q