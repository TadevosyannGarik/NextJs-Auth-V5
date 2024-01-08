import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";
import ErrorCardWrapper from "./card-error-wrapper";

export const ErrorCard = () => {
    return (
        <ErrorCardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive w-8 h-8" />
            </div>
        </ErrorCardWrapper>
    );
};