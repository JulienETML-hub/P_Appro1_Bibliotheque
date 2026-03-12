import jwt from "jsonwebtoken";
const authorize = (requireAdmin = false) => {
  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({ message: "Non authentifié" });
    }

    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Accès interdit" });
    }

    next();
  };
};

export default authorize;