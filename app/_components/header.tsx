"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const { data } = useSession()

    const handleLoginClick = async () => {
        await signIn()
    }
    return ( 
        <Card>
            <CardContent className="px-5 py-6 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={22} width={120}/>
            {/* <Button variant="outline" size="icon"className="h-8 w-8">
                <MenuIcon  size={18}/>
            </Button> */}

            {data?.user ? (
                <div>
                    <Button onClick={() => signOut()}>
                        <h1>{data.user.name}</h1>
                    </Button>
                </div>
            ) : (
                <Button onClick={handleLoginClick}>Login</Button>
                )}
            </CardContent>
        </Card> );
}
 
export default Header;