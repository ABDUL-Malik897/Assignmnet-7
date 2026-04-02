
# This backend implementation is extra and not part of the required assignment.

## How to Run 

### Install Dependencies

>> npm i 

>> npm i express

>> npm i nodemon -D

>> npm i uuid

### Starting Server

>> npm start/npm run start 

    node index.js

>> npm run dev

    nodemon index.js


## API Endpoints

1. GET /list

    >> Purpose : To get all the Todo-Lists

    >> Request : 

            >> Body : None

            >> Params : None
    
    >> Response : 

                [
                    {
                        "id": "uuid-string",
                        "title": "Study OS",
                        "content" : "Read notes",
                        "completed": true/false
                    },
                    n-different todos
                ]


2. GET /list/:id

    >> Purpose : To get a single Todo-List by it's ID

    >> Request : 

            >> Body : None

            >> Params : id
    
    >> Response :

                [
                    {
                        "id": "uuid-string",
                        "title": "Study OS",
                        "content" : "Read notes",
                        "completed": true/false
                    }
                ]


3. POST /list

    >> Purpose : To create a new Todo-List

    >> Request : 

            >> Body : 

                       {
                            "title": "xyz",
                            "content":"abc",
                            "completed": true/false
                       }
            >> Params : None
    
    >> Response : 

                [
                    {
                        "id":"uuid-string",
                        "title": "xyz",
                        "content":"abc",
                        "completed": true/false
                    }
                ]


4. PUT /list/:id 

    >> Purpose : To update a Todo-List

    >> Request : 

            >> Body : 
                       {
                            "content":"pqr"
                       }
            >> Params : id
    
    >> Response : 

                [
                    {
                        "id":"uuid-string",
                        "title": "xyz",
                        "content":"pqr",
                        "completed": true/false
                    }
                ]


5. DELETE /list/:id 

    >> Purpose : To update a Todo-List

    >> Request : 

            >> Body : None
            >> Params : id
    
    >> Response : 

                {
                    "message" : "Todo-list Deleted succesfully"  
                }