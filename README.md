# ToDoList-BE
This is Backend For To Do List

## How To Run ?
Open Terminal and follow the instructions

1. Download [MongoDB](https://www.mongodb.com/download-center/community/releases) and start it
2. git clone the project
3. npm i
4. npm start

## Endpoints

You can test EndPoints By [Postman](https://www.postman.com/downloads/)

### GET METHODS
1. get ToDoLists ->  http://localhost:3000/todolists
2. get ToDoList By ID -> http://localhost:3000/todolists/:id
3. search ToDoLists By Title -> http://localhost:3000/todolists/search/:searchQuery
4. paginate ToDoLists -> http://localhost:3000/todolists/paginate/:pageNumber

### POST METHODS
1. Add ToDOList -> http://localhost:3000/todolists  -- body should have it's object Model

### Delete Methods
1. Delete ToDoList By ID -> http://localhost:3000/todolists/:id

### Put Methods
1. Update ToDoList By ID -> http://localhost:3000/todolists/:id
   
   
