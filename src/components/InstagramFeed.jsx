import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Play, ShieldCheck, Sparkles, ExternalLink, X } from 'lucide-react';
import { instagramProfile, instagramPosts } from '../data/instagram';

export default function InstagramFeed({ onOpenBooking }) {
  const [activePost, setActivePost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <section id="instagram" className="py-24 relative overflow-hidden bg-[#07080a]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#946E37]/10 via-[#CFA868]/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Profile Header Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 mb-12 border border-white/10 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            {/* Avatar with Gradient Ring */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-amber-500 via-[#CFA868] to-purple-600">
                <img
                  src={instagramProfile.avatar}
                  alt={instagramProfile.handle}
                  className="w-full h-full rounded-full object-cover p-[2px] bg-black"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-[#0c0e14] flex items-center justify-center text-[10px] text-black font-bold">
                ✓
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {instagramProfile.handle}
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-sky-400 fill-sky-400/20" />
                </div>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://instagram.com/the_bodi_genie"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-[#CFA868]/20"
                  >
                    <Instagram className="w-3.5 h-3.5" /> Follow on IG
                  </a>

                  <button
                    onClick={() => onOpenBooking()}
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all"
                  >
                    Direct Book
                  </button>
                </div>
              </div>

              {/* Counts */}
              <div className="flex items-center justify-center sm:justify-start gap-6 text-xs sm:text-sm text-gray-300">
                <div><span className="font-bold text-white">{instagramProfile.postsCount}</span> posts</div>
                <div><span className="font-bold text-white">{instagramProfile.followers}</span> followers</div>
                <div><span className="font-bold text-white">{instagramProfile.following}</span> following</div>
              </div>

              {/* Bio */}
              <div className="text-xs sm:text-sm text-gray-300 whitespace-pre-line leading-relaxed font-normal">
                {instagramProfile.bio}
              </div>
            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#CFA868] mb-1">
              <Sparkles className="w-3 h-3" /> Live Feed & Daily Transformations
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              Behind the Scenes at <span className="italic font-normal text-[#DEC293]">@the_bodi_genie</span>
            </h2>
          </div>

          <a
            href="https://instagram.com/the_bodi_genie"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CFA868] hover:text-white transition-colors"
          >
            <span>Open in Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {instagramPosts.map((post) => {
            const isLiked = !!likedPosts[post.id];
            return (
              <motion.div
                key={post.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActivePost(post)}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10 bg-black/40 shadow-xl"
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Reel Badge if video */}
                {post.type === 'reel' && (
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 z-10">
                    <Play className="w-3 h-3 fill-white" />
                  </div>
                )}

                {/* Hover Overlay with Likes & Comments */}
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-20">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="font-semibold text-[#CFA868]">@the_bodi_genie</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">{post.type}</span>
                  </div>

                  <p className="text-xs text-white line-clamp-3 font-normal leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-white">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(post.id);
                      }}
                      className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                      <span>{post.likes}</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-gray-300">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Expanded Post Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="bg-[#0e1117] border border-white/20 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative"
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 text-gray-300 hover:text-white border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Media */}
              <div className="relative aspect-square md:aspect-auto h-full bg-black">
                <img
                  src={activePost.image}
                  alt={activePost.caption}
                  className="w-full h-full object-cover"
                />
                {activePost.type === 'reel' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Content */}
              <div className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <img
                      src={instagramProfile.avatar}
                      alt="@the_bodi_genie"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white">the_bodi_genie</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                      </div>
                      <span className="text-[10px] text-gray-400">Shardae Rae • Stafford Clinic</span>
                    </div>
                  </div>

                  <div className="py-4 space-y-3">
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {activePost.caption}
                    </p>
                    <p className="text-xs text-[#CFA868] font-mono">
                      {activePost.tag}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="font-semibold text-white">{activePost.likes} likes</span>
                    <span>{activePost.comments} comments</span>
                  </div>

                  <button
                    onClick={() => {
                      setActivePost(null);
                      onOpenBooking();
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book Treatment From This Post</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
