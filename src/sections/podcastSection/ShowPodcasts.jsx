export default function ({ podcastEpisodes = [], setActiveEpisode }) {
    return (
        <>
            {
                podcastEpisodes?.map((ep) => (
                    <button
                        key={ep.id}
                        onClick={() => setActiveEpisode(ep)}
                        className="text-left p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={ep.thumbnail}
                                className="w-12 h-12 rounded-lg object-cover"
                                alt={ep.title}
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{ep.title}</h3>
                                <p className="text-sm text-zinc-400">{ep.desc}</p>
                            </div>
                        </div>
                    </button>
                ))
            }
        </>
    )
}
