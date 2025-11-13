'use client';

import Button from '../../button';
import RoleCard from '../../role-card';

const RolesSection = () => {
    return (
        <section className="bg-night text-pure-white pt-4 lg:pt-8 pb-12 lg:pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-10">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
                        <span className="text-pure-white">Discover Tailored Solutions </span>
                        <span className="bg-gradient-to-r from-green-blue to-picton-blue bg-clip-text text-transparent">for Every Role</span>
                    </h2>
                    <p className="text-pure-white text-base lg:text-lg max-w-4xl mx-auto">
                        Our solutions are designed to meet the unique needs of each role in the cleaning industry. Choose your path below to find the resources that will empower you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6 max-w-3xl mx-auto">
                    <RoleCard
                        imageSrc="/sections/roles/20240424_110748-1.jpg"
                        imageAlt="Team cleaning with operational tools"
                        title="Make your team faster, safer and more efficient."
                        buttonText="See Operational Tools"
                        buttonVariant="outlined-badge-blue"
                        onClick={() => {}}
                    />
                    <RoleCard
                        imageSrc="/sections/roles/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg"
                        imageAlt="Business partnership handshake"
                        title="Win more tenders with effective innovation."
                        buttonText="View Sales Resources"
                        buttonVariant="outlined-badge-blue"
                        onClick={() => {}}
                    />
                </div>

                <div className="relative w-full h-18 lg:h-22 rounded-3xl overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: 'url(/sections/roles/delivery-man.jpg)',
                            backgroundSize: '50%',
                            backgroundPosition: '0 80%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 left-[10%] bg-gradient-to-l from-green-blue via-green-blue/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-end gap-6 lg:gap-8 pr-10 lg:pr-16">
                        <h3 className="text-pure-white text-2xl lg:text-3xl font-bold">
                            Are you a distributor?
                        </h3>
                        <Button 
                            variant="solid-blue-inverse" 
                            onClick={() => {}}
                        >
                            Explore Distributor Hub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RolesSection;

