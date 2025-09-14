function Review() {
    return (
        <div className="bg-secondary py-20">
            <h1 className="text-primary text-5xl font-bold text-center">What People Say</h1>

            <div className="pt-16 flex px-10 gap-x-5">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>


        </div>
    )
}


import { Star, ThumbsUp, Share2, Heart } from "lucide-react";

function ReviewCard() {
    return (
        <div className="bg-primary text-white rounded-3xl p-6 w-[250px] shadow-lg flex flex-col justify-between shrink-0">
            {/* Header: Avatar + Name + Rating */}
            <div className="flex items-center gap-3">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="user"
                    className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                    <h3 className="font-semibold text-sm">Naresh Nair</h3>
                    <div className="flex items-center text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" className="opacity-50" />
                        <span className="ml-1 text-xs text-white">4.5</span>
                    </div>
                </div>
            </div>

            {/* Review Text */}
            <p className="mt-4 text-sm leading-relaxed">
                Come taste the original. Experience the warm crunch, the buttery aroma,
                and the culture behind it all. Whether you're a local or a traveler,
                you're always welcome at our tawa.
            </p>

            {/* Footer Icons */}
            <div className="flex justify-between items-center mt-6">
                <div className="flex gap-4 text-white/80">
                    <ThumbsUp size={18} />
                    <Share2 size={18} />
                </div>
                <Heart size={18} className="text-white/80" />
            </div>
        </div>
    );
}


export default Review