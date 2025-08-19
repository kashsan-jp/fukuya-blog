import "server-only";

import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers";

const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

// Create JWT 
export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey);
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(
            session, encodedKey, {
            algorithms: ["HS256"]
        })
        return payload
    } catch(err) {
        console.log("Fail to verify session");
    }
}

export async function createSession(userId) {

    const expiresAt = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000);

    //const expiresAt = new Date.toLocaleString({ timeZone: 'Asia/Tokyo' });

    const session = await encrypt({ userId, expiresAt});
    const cookiesStore = await cookies();

    cookiesStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: "/",
    })

}