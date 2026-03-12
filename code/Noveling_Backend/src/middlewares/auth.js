import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// Middleware d'authentification
const auth = (req, res, next) => {
    const access_token = req.cookies?.access_token
    if (!access_token) { // Si le jeton d'authentification n'est pas fourni on renvoie un message d'erreur
        const message = `Vous devez être connecté pour accéder à cette ressource.`;
        return res.status(401).json({ message });
    } else {

        const decodedToken = jwt.verify(
            access_token,
            process.env.JWT_SECRET,
            (error, decodedToken) => {// Vérifie le token
                if (error) { // Si le token n'est pas valide on renvoie un message d'erreur
                    const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource.`;
                    return res.status(403).json({ message, data: error });
                }
                req.user = {
                    idUser: decodedToken.idUser,
                    isAdmin: decodedToken.isAdmin
                };
                next();
            }
        );
    }
};

export default auth;
