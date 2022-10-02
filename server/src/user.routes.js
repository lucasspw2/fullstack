import { Router } from 'express';

const userRoutes = Router();


const User = [
    {    
        name: 'Fulano Beltrano de oliveira da Silva', 
        email: 'fulanobos@gmail.com',
        nascimento: '13/10/1995',
        telefone: '(31) 9 9666-1111'
    }
    
    ];
3
userRoutes.post("/register", (request, response) => {
    const {name, email, nascimento, telefone} = request.body;

    User.push({
        name, 
        email, 
        nascimento, 
        telefone
    });
    
    return response.status(201).json(User);
})

userRoutes.get("/all", (request, response) => {
    
    return response.status(201).json(User);
})




export { userRoutes };

