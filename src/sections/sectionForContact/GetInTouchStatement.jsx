

export default function GetInTouchStatement() {
    return (
        <div className="w-full py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">

                {/* Top label */}
                <div className="flex items-center gap-4 w-full max-w-xs">
                    <hr className="flex-1 border-gray-300" />
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                        Get in touch
                    </p>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Main heading */}
                <div className="space-y-3">
                    <h2 className="text-4xl md:text-5xl font-light text-black">
                        Contact
                    </h2>
                    <div className="w-16 h-[2px] bg-black mx-auto"></div>
                </div>

            </div>
        </div>
    )
}