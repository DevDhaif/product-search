import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-20 pb-8">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col md:flex-row items-center justify-between p-5 border-t border-t-white/50">
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="flex items-center gap-8">
                            <Image src="/icons/vision2030.svg" alt="National Housing" width={32} height={32} />
                            <Image src="/icons/nhc.svg" alt="National Housing" width={48} height={32} />
                        </div>
                    </div>

                    <div className="text-sm">
                        All rights reserved © {currentYear}- Developed and operated by National Housing
                    </div>
                </div>
            </div>
        </footer>
    );
}