import { Jwt, JwtPayload, verify } from "jsonwebtoken";


export const verifyToken = (token: string): string | JwtPayload => {
  console.log(process.env.JWT_PUBLIC_KEY)
  return verify(token, process.env.JWT_PUBLIC_KEY, {
    algorithms: ["RS256"],
  });
};
