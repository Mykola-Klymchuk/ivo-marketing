'use client';

import Button from '../../button';

const CTASection = () => {
    return (
        <section className="bg-green-blue text-pure-white py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 lg:mb-8">
                    Ready to Transform Your Operations?
                </h2>
                <p className="text-base lg:text-lg text-pure-white/90 mb-8 lg:mb-10 max-w-2xl mx-auto">
                    Connect with us to discover how our solutions can help you simplify training, improve audit results, and win more tenders.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
                    <Button 
                        variant="solid-white" 
                        onClick={() => {}}
                        className="text-base lg:text-lg px-8 py-3"
                    >
                        Book a Discovery Call
                    </Button>
                    <Button 
                        variant="outlined-white" 
                        onClick={() => {}}
                        icon={true}
                        className="text-base lg:text-lg px-8 py-3"
                    >
                        Download Overview PDF
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

