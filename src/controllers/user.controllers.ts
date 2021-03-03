import { Request, Response } from 'express';
import User, { IUser } from '../models/user'
import jwt from 'jsonwebtoken';
import config from '../config/config';

function createToken(user: IUser) {
    return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, {
        expiresIn: 36000
    });
}

export const singUp = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'No se encontró email o contraseña' })
    }
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(406).json({ message: 'El email ya existe' })
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
};

export const singIn = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'No se encontró email o contraseña' })
    }
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ message: 'El usuario no existe' })
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(200).json({ token: createToken(user) });
    }

    return res.status(400).json({
        message: 'Email o contraseñas incorrectas'
    })
}