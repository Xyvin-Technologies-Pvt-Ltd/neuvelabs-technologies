import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
            <div className="relative flex flex-col items-center">
                {/* Logo Icon */}
                <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                    <div className="absolute inset-2 rounded-full bg-purple-500/20 animate-pulse" />
                    <div className="relative z-10">
                        <Image
                            src="/logo-title.svg"
                            alt="Neuve Labs"
                            width={80}
                            height={80}
                            className="animate-pulse"
                        />
                    </div>
                </div>

                {/* Loading Text */}
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" />
                </div>
            </div>
        </div>
    );
}