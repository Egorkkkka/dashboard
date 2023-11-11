'use client'

import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image, Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";


export default function PersonCard({name, description, link}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    }

    const imageLoader = ({src, width, quality}) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }


    return (
        <>
            <Card className="py-4 flex">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        width={270}
                        loader={imageLoader}
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <div className="font-bold text-large text-center mb-2">{name}</div>
                    <small className="text-default-500 text-md mb-6">{description}</small>
                    <Button onClick={handleClick} radius="full"
                            className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg">
                        Задать вопрос
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}