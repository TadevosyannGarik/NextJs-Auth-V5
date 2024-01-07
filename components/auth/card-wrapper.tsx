"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;    
}

export const CardWrapper = ({children, headerLabel, backButtonLabel, backButtonHref, showSocial}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-sm">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
                <div className="flex items-center justify-center mt-5">
                    <div className="border-b border-zinc-400 w-full"></div>
                    <span className="px-4 bg-white text-zinc-500">or</span>
                    <div className="border-b border-zinc-400 w-full"></div>
                </div>
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper