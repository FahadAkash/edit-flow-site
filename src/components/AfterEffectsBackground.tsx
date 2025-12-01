import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AfterEffectsBackground = () => {
  return (
    <div className="relative w-full h-screen bg-[#1e1e1e] overflow-hidden">
      {/* Top Menu Bar */}
      <div className="h-10 bg-[#323232] border-b border-[#181818] flex items-center px-4 gap-4">
        <div className="flex gap-3 text-[11px] text-gray-400">
          <span className="hover:text-white cursor-pointer transition-colors">File</span>
          <span className="hover:text-white cursor-pointer transition-colors">Edit</span>
          <span className="hover:text-white cursor-pointer transition-colors">Composition</span>
          <span className="hover:text-white cursor-pointer transition-colors">Layer</span>
          <span className="hover:text-white cursor-pointer transition-colors">Effect</span>
        </div>
      </div>

      <div className="flex h-[calc(100vh-2.5rem)]">
        {/* Left Panel - Project */}
        <div className="w-64 bg-[#232323] border-r border-[#181818] flex flex-col">
          <div className="p-3 border-b border-[#181818]">
            <div className="text-[10px] text-gray-400 mb-2 font-semibold tracking-wider">PROJECT</div>
            <div className="space-y-1">
              {['Main_Composition.aep', 'Video_Clip_01.mp4', 'Audio_Track.wav', 'Logo.png'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="text-[10px] text-gray-500 py-1.5 px-2 hover:bg-[#2d2d2d] rounded cursor-pointer flex items-center gap-2 transition-colors"
                >
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex-shrink-0"></div>
                  <span className="truncate">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-3 flex-1">
            <div className="text-[10px] text-gray-400 mb-2 font-semibold tracking-wider">EFFECTS & PRESETS</div>
            <div className="space-y-1">
              {['Color Correction', 'Blur & Sharpen', 'Stylize', 'Transitions'].map((effect, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="text-[10px] text-gray-500 py-1.5 px-2 hover:bg-[#2d2d2d] rounded cursor-pointer transition-colors"
                >
                  {effect}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Area */}
        <div className="flex-1 flex flex-col">
          {/* Preview Monitor */}
          <div className="flex-1 bg-[#1a1a1a] p-4 relative">
            <div className="h-full bg-black rounded overflow-hidden relative border border-[#2a2a2a]">
              {/* Video Preview Canvas */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2a] via-[#0a0a1a] to-[#0a0a0a]">
                {/* Animated background effects to simulate video footage */}
                <div className="absolute inset-0">
                  {/* Moving gradient overlays */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  
                  {/* Floating orbs */}
                  <motion.div
                    className="absolute top-20 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -50, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                      x: [0, -80, 0],
                      y: [0, 60, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"
                    animate={{
                      x: [-60, 60, -60],
                      y: [-40, 40, -40],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />

                  {/* Scan lines effect */}
                  <div className="absolute inset-0 opacity-5">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-0 right-0 h-px bg-white"
                        style={{ top: `${i * 5}%` }}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                      />
                    ))}
                  </div>

                  {/* Particle field */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Main composition area */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div 
                    className="relative w-full h-full max-w-5xl max-h-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl overflow-hidden backdrop-blur-sm border border-white/5"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {/* Dynamic Video Type Showcase - Motion Graphics Style */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      
                      {/* Video Type 1: Money Tips (0-20%) */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-green-900/40"
                        animate={{ opacity: [1, 1, 0, 0, 0, 0, 0, 0] }}
                        transition={{ duration: 8, times: [0, 0.18, 0.2, 0.3, 0.5, 0.7, 0.85, 1], repeat: Infinity }}
                      >
                        {/* Person silhouette */}
                        <div className="absolute bottom-0 right-1/4 w-32 h-64 bg-gradient-to-t from-white/20 to-transparent rounded-t-full" />
                        
                        {/* Animated title bar */}
                        <motion.div
                          className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-3 rounded-full"
                          animate={{ scale: [0.95, 1.05, 0.95], rotate: [-1, 1, -1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="text-2xl font-black text-white">💰 5 MONEY SAVING TIPS</div>
                        </motion.div>

                        {/* Animated stats */}
                        <div className="absolute top-1/2 left-1/4 space-y-3">
                          <motion.div
                            className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-emerald-400"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, repeat: Infinity, repeatDelay: 7.7 }}
                          >
                            <div className="text-emerald-300 text-sm font-bold">Save $500/month</div>
                          </motion.div>
                          <motion.div
                            className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-green-400"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, repeat: Infinity, repeatDelay: 7.4 }}
                          >
                            <div className="text-green-300 text-sm font-bold">Cut expenses 40%</div>
                          </motion.div>
                        </div>

                        {/* Coin animation */}
                        <motion.div
                          className="absolute top-1/3 right-1/3 text-6xl"
                          animate={{ y: [0, -20, 0], rotate: [0, 360, 720] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          💵
                        </motion.div>
                      </motion.div>

                      {/* Video Type 2: Gym Progress (20-40%) */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-red-900/40"
                        animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
                        transition={{ duration: 8, times: [0, 0.18, 0.2, 0.38, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
                      >
                        {/* Workout person silhouette */}
                        <motion.div
                          className="absolute bottom-0 left-1/3 w-40 h-72 bg-gradient-to-t from-orange-500/30 to-transparent rounded-t-full"
                          animate={{ scaleY: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />

                        {/* Progress title */}
                        <motion.div
                          className="absolute top-1/4 left-1/2 -translate-x-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, repeat: Infinity, repeatDelay: 7.8 }}
                        >
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-2xl border-4 border-white/20">
                            <div className="text-3xl font-black text-white text-center">30 DAY</div>
                            <div className="text-xl font-bold text-white/90 text-center">TRANSFORMATION</div>
                          </div>
                        </motion.div>

                        {/* Stats panel */}
                        <div className="absolute top-1/2 right-1/4 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-orange-500/30">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-orange-400 text-xs">WEIGHT LOSS</span>
                              <motion.div
                                className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                                animate={{ width: [0, 80] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 6.5 }}
                              />
                              <span className="text-white text-xs font-bold">-12kg</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-red-400 text-xs">MUSCLE GAIN</span>
                              <motion.div
                                className="h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                                animate={{ width: [0, 100] }}
                                transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatDelay: 6.2 }}
                              />
                              <span className="text-white text-xs font-bold">+8kg</span>
                            </div>
                          </div>
                        </div>

                        {/* Floating trophy */}
                        <motion.div
                          className="absolute top-1/3 left-1/4 text-5xl"
                          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🏆
                        </motion.div>
                      </motion.div>

                      {/* Video Type 3: Property Tour (40-55%) */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-cyan-900/40"
                        animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                        transition={{ duration: 8, times: [0, 0.38, 0.4, 0.53, 0.55, 0.68, 0.7, 1], repeat: Infinity }}
                      >
                        {/* House outline */}
                        <motion.div
                          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          animate={{ scale: [0.9, 1, 0.9] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <svg width="200" height="180" viewBox="0 0 200 180" className="drop-shadow-2xl">
                            <motion.path
                              d="M100 20 L180 80 L180 160 L20 160 L20 80 Z"
                              fill="rgba(59, 130, 246, 0.2)"
                              stroke="rgba(59, 130, 246, 0.8)"
                              strokeWidth="3"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
                            />
                            <rect x="80" y="100" width="40" height="60" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="2"/>
                          </svg>
                        </motion.div>

                        {/* Property details */}
                        <motion.div
                          className="absolute top-1/4 left-1/4 bg-black/70 backdrop-blur-md px-6 py-3 rounded-xl border-l-4 border-cyan-400"
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5, repeat: Infinity, repeatDelay: 7.5 }}
                        >
                          <div className="text-cyan-300 text-2xl font-bold">Modern Villa</div>
                          <div className="text-white/80 text-sm">3 Bed • 2 Bath • 2500 sqft</div>
                        </motion.div>

                        {/* Price tag */}
                        <motion.div
                          className="absolute bottom-1/3 right-1/4 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full"
                          animate={{ scale: [1, 1.1, 1], rotate: [-2, 2, -2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="text-2xl font-black text-white">$850K</div>
                        </motion.div>

                        {/* Location pin */}
                        <motion.div
                          className="absolute top-1/2 right-1/3 text-4xl"
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          📍
                        </motion.div>
                      </motion.div>

                      {/* Video Type 4: UGC Product Review (55-70%) */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40"
                        animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 0] }}
                        transition={{ duration: 8, times: [0, 0.53, 0.55, 0.68, 0.7, 0.82, 0.84, 1], repeat: Infinity }}
                      >
                        {/* Creator circle */}
                        <motion.div
                          className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white/30 flex items-center justify-center"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="text-5xl">🎬</div>
                        </motion.div>

                        {/* Review title */}
                        <motion.div
                          className="absolute top-1/3 right-1/4 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-2xl"
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3, repeat: Infinity, repeatDelay: 7.7 }}
                        >
                          <div className="text-xl font-bold text-white">HONEST REVIEW</div>
                          <div className="text-sm text-white/80">Product Unboxing</div>
                        </motion.div>

                        {/* Rating stars */}
                        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 flex gap-2">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              className="text-3xl"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.4 + i * 0.1, repeat: Infinity, repeatDelay: 7.1 - i * 0.1 }}
                            >
                              ⭐
                            </motion.div>
                          ))}
                        </div>

                        {/* Like counter */}
                        <motion.div
                          className="absolute bottom-1/4 right-1/3 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <span className="text-2xl">❤️</span>
                          <motion.span
                            className="text-white font-bold"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            10.2K
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Music Visualizer - Bottom */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1 h-20 w-2/3">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                          key={`bar-${i}`}
                          className="flex-1 bg-gradient-to-t from-cyan-500 via-blue-500 to-purple-500 rounded-t"
                          initial={{ height: "10%" }}
                          animate={{ 
                            height: [
                              `${15 + Math.random() * 20}%`,
                              `${40 + Math.random() * 60}%`,
                              `${15 + Math.random() * 20}%`
                            ]
                          }}
                          transition={{
                            duration: 0.6 + Math.random() * 0.4,
                            delay: 2.5 + i * 0.02,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>







                    {/* MORPHING GRID OVERLAY */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none opacity-10"
                      animate={{ opacity: [0, 0.1, 0.1, 0] }}
                      transition={{ duration: 8, times: [0, 0.2, 0.6, 0.85], repeat: Infinity }}
                    >
                      <svg className="w-full h-full">
                        {Array.from({ length: 8 }).map((_, y) =>
                          Array.from({ length: 12 }).map((_, x) => (
                            <motion.circle
                              key={`grid-${x}-${y}`}
                              cx={x * 8.33 + 4}
                              cy={y * 12.5 + 6}
                              r="1"
                              fill="white"
                              initial={{ opacity: 0.2 }}
                              animate={{ opacity: [0.2, 0.8, 0.2] }}
                              transition={{
                                duration: 2,
                                delay: (x + y) * 0.05,
                                repeat: Infinity
                              }}
                            />
                          ))
                        )}
                      </svg>
                    </motion.div>

                    {/* COMPLETION EFFECT - Rank-Up & Feedback */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 0, 0, 0, 1, 0] }}
                      transition={{ 
                        duration: 8,
                        times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 1],
                        repeat: Infinity
                      }}
                    >
                      {/* Confetti Particles */}
                      {Array.from({ length: 50 }).map((_, i) => {
                        const angle = (i / 50) * Math.PI * 2;
                        const distance = 150 + Math.random() * 150;
                        const colors = ['#fbbf24', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        return (
                          <motion.div
                            key={`confetti-${i}`}
                            className="absolute top-1/2 left-1/2"
                            style={{
                              width: '6px',
                              height: '6px',
                              background: color,
                              borderRadius: Math.random() > 0.5 ? '50%' : '0'
                            }}
                            initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
                            animate={{
                              x: Math.cos(angle) * distance,
                              y: Math.sin(angle) * distance + 100,
                              opacity: [0, 0, 0, 0, 0, 1, 0.8, 0],
                              rotate: [0, 0, 0, 0, 0, Math.random() * 720, Math.random() * 1080]
                            }}
                            transition={{
                              duration: 8,
                              times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.95, 1],
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        );
                      })}

                      {/* Light Rays */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={`ray-${i}`}
                          className="absolute top-1/2 left-1/2 origin-left"
                          style={{
                            width: '200px',
                            height: '2px',
                            background: 'linear-gradient(90deg, rgba(251, 191, 36, 0.8), transparent)',
                            transform: `rotate(${i * 45}deg)`,
                            transformOrigin: '0 0'
                          }}
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{
                            opacity: [0, 0, 0, 0, 0, 1, 0.6, 0],
                            scaleX: [0, 0, 0, 0, 0, 1, 1.2, 0]
                          }}
                          transition={{
                            duration: 8,
                            times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.92, 1],
                            repeat: Infinity
                          }}
                        />
                      ))}

                      {/* Success Glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/40 to-purple-500/40 rounded-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: [0, 0, 0, 0, 0, 1, 0.6, 0],
                          scale: [0.9, 0.9, 0.9, 0.9, 0.9, 1.1, 1.3, 1.5]
                        }}
                        transition={{ 
                          duration: 8,
                          times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.92, 1],
                          repeat: Infinity
                        }}
                      />

                      {/* Rank-Up Badge */}
                      <motion.div
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ 
                          opacity: [0, 0, 0, 0, 0, 1, 1, 0.9, 0],
                          scale: [0, 0, 0, 0, 0, 0.3, 1.2, 1, 0.8],
                          rotate: [-180, -180, -180, -180, -180, 0, 0, 0, 0]
                        }}
                        transition={{ 
                          duration: 8,
                          times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.88, 0.92, 1],
                          repeat: Infinity
                        }}
                      >
                        <div className="relative">
                          {/* Badge Background */}
                          <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-200">
                            <div className="text-center">
                              <div className="text-3xl mb-1">🏆</div>
                              <div className="text-xs font-bold text-amber-900">LEVEL UP!</div>
                            </div>
                          </div>
                          {/* Badge Shine */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rounded-full"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <div className="text-center mt-2 text-white font-bold text-lg drop-shadow-lg">
                          Storyteller Level 3
                        </div>
                      </motion.div>

                      {/* Success Checkmark (smaller, moved down) */}
                      <motion.div
                        className="absolute top-2/3 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 0, 0, 0, 0, 1, 1, 0.8, 0],
                          scale: [0, 0, 0, 0, 0, 0.5, 1.1, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 8,
                          times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.88, 0.92, 1],
                          repeat: Infinity
                        }}
                      >
                        <motion.svg 
                          className="w-20 h-20 text-emerald-400 drop-shadow-2xl" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          animate={{
                            filter: [
                              "drop-shadow(0 0 10px rgba(52, 211, 153, 0.8))",
                              "drop-shadow(0 0 20px rgba(52, 211, 153, 1))",
                              "drop-shadow(0 0 10px rgba(52, 211, 153, 0.8))"
                            ]
                          }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      </motion.div>

                      {/* User Feedback Metrics */}
                      <motion.div
                        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: [0, 0, 0, 0, 0, 1, 1, 0.9, 0],
                          y: [30, 30, 30, 30, 30, 0, -5, -10, -30]
                        }}
                        transition={{
                          duration: 8,
                          times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.9, 0.94, 1],
                          repeat: Infinity
                        }}
                      >
                        {/* Emotional Impact */}
                        <div className="bg-gradient-to-br from-orange-500/90 to-red-500/90 px-4 py-2 rounded-lg backdrop-blur-sm border border-orange-300/50 shadow-xl">
                          <div className="text-xs text-orange-100 mb-1">Emotional Impact</div>
                          <div className="text-2xl font-bold text-white flex items-center gap-2">
                            🔥 98%
                          </div>
                        </div>

                        {/* Scene Match */}
                        <div className="bg-gradient-to-br from-emerald-500/90 to-green-500/90 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-300/50 shadow-xl">
                          <div className="text-xs text-emerald-100 mb-1">Scene Match</div>
                          <div className="text-2xl font-bold text-white flex items-center gap-2">
                            🎯 Perfect
                          </div>
                        </div>
                      </motion.div>

                      {/* Completion Title Card */}
                      <motion.div
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: [0, 0, 0, 0, 0, 1, 1, 0.95, 0],
                          scale: [0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 1.05, 1, 0.9]
                        }}
                        transition={{
                          duration: 8,
                          times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.89, 0.93, 1],
                          repeat: Infinity
                        }}
                      >
                        <div className="text-4xl font-bold text-white drop-shadow-2xl mb-1">
                          ✨ Your Story, Now Ready ✨
                        </div>
                        <div className="text-sm text-white/80">
                          Powered by AI • Crafted with Magic
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                <div className="flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.15, backgroundColor: "#3a3a3a" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white border border-[#444] shadow-lg transition-all"
                  >
                    <Play className="w-6 h-6 ml-0.5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Area */}
          <div className="h-72 bg-[#1e1e1e] border-t border-[#181818] flex flex-col">
            {/* Timeline Header */}
            <div className="h-9 bg-[#232323] border-b border-[#181818] flex items-center px-3 justify-between flex-shrink-0">
              <div className="text-[10px] text-gray-400 font-semibold tracking-wider">TIMELINE</div>
              
              {/* Current Video Type Indicator */}
              <div className="flex items-center gap-2">
                <motion.div
                  className="text-[9px] font-mono"
                  animate={{
                    color: [
                      "rgb(236, 72, 153)", // Pink - UGC
                      "rgb(236, 72, 153)",
                      "rgb(251, 146, 60)", // Orange - Product
                      "rgb(251, 146, 60)",
                      "rgb(14, 165, 233)", // Blue - Property
                      "rgb(14, 165, 233)",
                      "rgb(34, 197, 94)", // Green - Money
                      "rgb(34, 197, 94)"
                    ]
                  }}
                  transition={{ duration: 8, times: [0, 0.2, 0.2, 0.4, 0.4, 0.55, 0.55, 0.7], repeat: Infinity }}
                >
                  <motion.span
                    animate={{ opacity: [1, 1, 0, 0, 0, 0, 0, 0] }}
                    transition={{ duration: 8, times: [0, 0.18, 0.2, 0.3, 0.5, 0.7, 0.85, 1], repeat: Infinity }}
                  >
                    UGC_CREATOR.mp4
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
                    transition={{ duration: 8, times: [0, 0.18, 0.2, 0.38, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
                  >
                    PRODUCT_SHOW.mp4
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                    transition={{ duration: 8, times: [0, 0.38, 0.4, 0.53, 0.55, 0.68, 0.7, 1], repeat: Infinity }}
                  >
                    PROPERTY_TOUR.mp4
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 0] }}
                    transition={{ duration: 8, times: [0, 0.53, 0.55, 0.68, 0.7, 0.82, 0.84, 1], repeat: Infinity }}
                  >
                    MONEY_TIPS.mp4
                  </motion.span>
                </motion.div>
                
                <div className="text-[10px] text-blue-400 font-mono">0:00:05:00</div>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 relative overflow-hidden">
              <div className="absolute inset-0 p-3">
                <div className="space-y-2">
                  {/* Video Track - Beginning of Story */}
                  <div className="flex items-center gap-3 h-14">
                    <div className="w-20 text-[9px] text-gray-500 font-medium flex-shrink-0">Video 1</div>
                    <div className="flex-1 h-full bg-[#2a2a2a] rounded relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-cyan-600 to-blue-600 border border-cyan-400/40 rounded flex items-center justify-center shadow-lg"
                        animate={{ 
                          opacity: [0.6, 1, 1, 0.6],
                          boxShadow: [
                            "0 0 10px rgba(6, 182, 212, 0.3)",
                            "0 0 20px rgba(6, 182, 212, 0.6)",
                            "0 0 20px rgba(6, 182, 212, 0.6)",
                            "0 0 10px rgba(6, 182, 212, 0.3)"
                          ]
                        }}
                        transition={{ 
                          duration: 8, 
                          times: [0, 0.25, 0.35, 0.5],
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div 
                          className="text-[9px] text-white/90 font-medium drop-shadow"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.span
                            animate={{ opacity: [1, 1, 0, 0, 0, 0, 0, 0] }}
                            transition={{ duration: 8, times: [0, 0.18, 0.2, 0.3, 0.5, 0.7, 0.85, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            UGC_Source_Cam1.mp4
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
                            transition={{ duration: 8, times: [0, 0.18, 0.2, 0.38, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            Product_B_Roll.mov
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                            transition={{ duration: 8, times: [0, 0.38, 0.4, 0.53, 0.55, 0.68, 0.7, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            Drone_Shot_4K.mp4
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 0] }}
                            transition={{ duration: 8, times: [0, 0.53, 0.55, 0.68, 0.7, 0.82, 0.84, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            Talking_Head_A.mp4
                          </motion.span>
                        </motion.div>
                        
                        {/* Processing indicator */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Effects Track - Emotion & Processing */}
                  <div className="flex items-center gap-3 h-14">
                    <div className="w-20 text-[9px] text-gray-500 font-medium flex-shrink-0">Effects</div>
                    <div className="flex-1 h-full bg-[#2a2a2a] rounded relative overflow-hidden">
                      <motion.div
                        className="absolute left-1/4 top-0 bottom-0 w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-400/40 rounded flex items-center justify-center shadow-lg"
                        animate={{ 
                          opacity: [0.4, 0.6, 1, 1, 0.6],
                          boxShadow: [
                            "0 0 10px rgba(168, 85, 247, 0.2)",
                            "0 0 15px rgba(168, 85, 247, 0.4)",
                            "0 0 25px rgba(168, 85, 247, 0.7)",
                            "0 0 25px rgba(168, 85, 247, 0.7)",
                            "0 0 10px rgba(168, 85, 247, 0.2)"
                          ]
                        }}
                        transition={{ 
                          duration: 8, 
                          times: [0, 0.3, 0.45, 0.55, 0.7],
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div 
                          className="text-[9px] text-white/90 font-medium drop-shadow relative w-full h-full"
                          animate={{ scale: [0.95, 1.05, 0.95] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        >
                          <motion.span
                            animate={{ opacity: [1, 1, 0, 0, 0, 0, 0, 0] }}
                            transition={{ duration: 8, times: [0, 0.18, 0.2, 0.3, 0.5, 0.7, 0.85, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            LUT_Vibrant_Vlog
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
                            transition={{ duration: 8, times: [0, 0.18, 0.2, 0.38, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            Speed_Ramp_Effect
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                            transition={{ duration: 8, times: [0, 0.38, 0.4, 0.53, 0.55, 0.68, 0.7, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            Stabilizer_Pro
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 0] }}
                            transition={{ duration: 8, times: [0, 0.53, 0.55, 0.68, 0.7, 0.82, 0.84, 1], repeat: Infinity }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            Text_Overlay_Anim
                          </motion.span>
                        </motion.div>
                        
                        {/* AI processing shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Audio Track - Climax & Completion */}
                  <div className="flex items-center gap-3 h-14">
                    <div className="w-20 text-[9px] text-gray-500 font-medium flex-shrink-0">Audio</div>
                    <div className="flex-1 h-full bg-[#2a2a2a] rounded relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-emerald-600/80 to-green-600/80 border border-green-400/30 rounded shadow-lg"
                        animate={{ 
                          opacity: [0.4, 0.5, 0.7, 1, 1, 0.7],
                          boxShadow: [
                            "0 0 10px rgba(16, 185, 129, 0.2)",
                            "0 0 15px rgba(16, 185, 129, 0.3)",
                            "0 0 20px rgba(16, 185, 129, 0.5)",
                            "0 0 30px rgba(16, 185, 129, 0.8)",
                            "0 0 30px rgba(16, 185, 129, 0.8)",
                            "0 0 15px rgba(16, 185, 129, 0.3)"
                          ]
                        }}
                        transition={{ 
                          duration: 8, 
                          times: [0, 0.4, 0.55, 0.7, 0.85, 1],
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Dynamic waveform */}
                        <div className="flex items-center h-full px-1 gap-px">
                          {Array.from({ length: 100 }).map((_, i) => (
                            <motion.div
                              key={`wave-${i}`}
                              className="flex-1 bg-green-300/70 rounded-full"
                              animate={{ 
                                height: [
                                  `${20 + Math.sin(i * 0.3) * 15}%`,
                                  `${40 + Math.sin(i * 0.3) * 35 + Math.random() * 20}%`,
                                  `${20 + Math.sin(i * 0.3) * 15}%`
                                ]
                              }}
                              transition={{
                                duration: 1.2,
                                delay: 2 + i * 0.008,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Sound wave sweep */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Playhead */}
                <motion.div
                  className="absolute top-0 w-0.5 bg-red-500 shadow-lg shadow-red-500/50 z-10"
                  style={{
                    height: 'calc(100% - 1.5rem)'
                  }}
                  animate={{
                    left: ['7%', '95%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <div className="w-3 h-3 bg-red-500 -translate-x-1/2 rounded-full shadow-lg shadow-red-500/50"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className="w-80 bg-[#232323] border-l border-[#181818] flex flex-col">
          <div className="p-3 border-b border-[#181818]">
            <div className="text-[10px] text-gray-400 mb-3 font-semibold tracking-wider">EFFECT CONTROLS</div>
            <div className="space-y-3">
              {[
                { name: 'Opacity', value: 100 },
                { name: 'Scale', value: 100 },
                { name: 'Position X', value: 960 },
                { name: 'Position Y', value: 540 }
              ].map((prop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="space-y-1.5"
                >
                  <div className="text-[9px] text-gray-500 font-medium">{prop.name}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(prop.value / (prop.name.includes('Position') ? 1920 : 100)) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                    <span className="text-[9px] text-gray-400 w-10 text-right font-mono">{prop.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-3 flex-1">
            <div className="text-[10px] text-gray-400 mb-3 font-semibold tracking-wider">RENDER QUEUE</div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-[#1a1a1a] rounded-lg p-3 space-y-2.5"
            >
              <div className="text-[9px] text-gray-400 font-medium relative h-4">
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0, 0, 0, 0, 0] }}
                  transition={{ duration: 8, times: [0, 0.18, 0.2, 0.3, 0.5, 0.7, 0.85, 1], repeat: Infinity }}
                  className="absolute inset-0"
                >
                  UGC_CREATOR.mp4
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
                  transition={{ duration: 8, times: [0, 0.18, 0.2, 0.38, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
                  className="absolute inset-0"
                >
                  PRODUCT_SHOW.mp4
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
                  transition={{ duration: 8, times: [0, 0.38, 0.4, 0.53, 0.55, 0.68, 0.7, 1], repeat: Infinity }}
                  className="absolute inset-0"
                >
                  PROPERTY_TOUR.mp4
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 0, 0, 0, 0, 0, 1, 0] }}
                  transition={{ duration: 8, times: [0, 0.53, 0.55, 0.68, 0.7, 0.82, 0.84, 1], repeat: Infinity }}
                  className="absolute inset-0"
                >
                  MONEY_TIPS.mp4
                </motion.span>
              </div>
              <div className="relative h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/30"
                  animate={{
                    width: ["0%", "100%", "100%"]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.8, 1]
                  }}
                />
              </div>
              <div className="text-[9px] text-orange-400 font-mono">Rendering... 67%</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterEffectsBackground;
