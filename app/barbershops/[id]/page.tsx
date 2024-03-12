import { db } from "@/app/_lib/prisma"
interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {
        // TODO: redirecionar para home page, caso não passe um ID
        return null   
    }

    const  barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })

    if (!barbershop) {
        // TODO: redirecionar para home page, caso não passe um ID
    }

    return (
        <div>
        <div className="h-[250px] w-ful relative">
            <Image src={barbershop?.imageUrl} 
            fill 
            alt={barbershop?.name} 
            style={{
                objectFit: "couver"
            }}/>                
        </div>
        </div>
    )
}

export default BarbershopDetailsPage