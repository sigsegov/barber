import Image from "next/image"
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent>
                <Image src="/logo.png" alt="FSW Barber" height={61} width={363}/>
            </CardContent>
            <Button variant="outline" size="icon">
                <MenuIcon />
            </Button>
        </Card> );
}
 
export default Header;