const userService = require('../Services/user.service')

exports.registerUser = async (req, res) => {
    try{
        await userService.registerUser(req.body).then((response) => {
            if(response){
                res.status(201).json({ message: 'User created successfully' })
            }else{
                res.status(400).json({ message: 'Failed to create user' })
            }
        })
    } catch (error) {
        console.error('Error Registering User:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

exports.loginUser = async (req, res) => {
    try{
        await userService.loginUser(req.body).then((response) => {
            if(response){
                res.status(200).json(response)
            }else{
                res.status(401).json({ message: 'Invalid credentials' })
            }
        })
    } catch (error) {
        console.error('Error logging in User:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

exports.currentUser = async (req, res) => {
    try{
        await userService.currentUser(req.user).then((response) => {
            if(response){
                res.status(200).json(response)
            }else{
                res.status(401).json({ message: 'Invalid credentials' })
            }
        })
    } catch (error) {
        console.error('Error logging in User:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}