export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00ff88]">
            {/* Grid pattern overlay */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            
            {/* Scanline effect */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                }}
            />

            <div className="relative flex flex-col items-center">
                {/* Terminal-style loader */}
                <div className="relative mb-8">
                    {/* Outer ring */}
                    <div className="w-24 h-24 border-4 border-black/30 flex items-center justify-center">
                        {/* Spinning inner element */}
                        <div className="w-16 h-16 border-4 border-black border-t-transparent animate-spin" />
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-black" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-black" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-black" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-black" />
                </div>

                {/* Loading Text */}
                <div className="font-mono text-black font-bold uppercase tracking-widest text-sm">
                    <span className="inline-block animate-pulse">Initializing</span>
                    <span className="inline-block animate-bounce ml-1">.</span>
                    <span className="inline-block animate-bounce [animation-delay:0.1s] ml-0.5">.</span>
                    <span className="inline-block animate-bounce [animation-delay:0.2s] ml-0.5">.</span>
                </div>
            </div>
        </div>
    );
}
