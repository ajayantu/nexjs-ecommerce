import jwt from "jsonwebtoken"

export function verifyToken(request){
    try {
        const token = request.cookies.get("token")?.value || ''
        const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);
        return decodedToken.id;
    } catch (error) {
        console.log("bla");
        throw new Error(error.message)
    }
}