'use client';

import Button from './button';

interface EmailSubscriptionProps {
    placeholder?: string;
    buttonText?: string;
    disclaimerText?: string;
    onSubscribe?: () => void;
}

const EmailSubscription = ({
    placeholder = 'Your Email Here',
    buttonText = 'Join',
    disclaimerText,
    onSubscribe,
}: EmailSubscriptionProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <input
                    type="email"
                    placeholder={placeholder}
                    className="flex-1 px-4 py-2.5 rounded-full border border-pure-white bg-night text-pure-white placeholder:text-pure-white/50 focus:outline-none focus:ring-2 focus:ring-picton-blue"
                />
                <Button 
                    variant="solid-white" 
                    onClick={onSubscribe || (() => {})}
                >
                    {buttonText}
                </Button>
            </div>
            
            {disclaimerText && (
                <p className="text-pure-white/70 text-xs">
                    {disclaimerText}
                </p>
            )}
        </div>
    );
};

export default EmailSubscription;

