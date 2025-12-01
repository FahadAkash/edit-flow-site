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
                    {/* Story Title - Center */}
                    <motion.div
                      className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <motion.h1
                        className="text-6xl font-bold text-white drop-shadow-2xl mb-2"
                        animate={{ 
                          scale: [1, 1.02, 1],
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.3)",
                            "0 0 30px rgba(255,255,255,0.5)",
                            "0 0 20px rgba(255,255,255,0.3)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        Your Story
                      </motion.h1>
                      <motion.p
                        className="text-2xl text-white/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        Comes to Life
                      </motion.p>
                    </motion.div>

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

                    {/* Video Clips - Bottom corners, smaller */}
                    <motion.div
                      className="absolute bottom-24 left-6 w-24 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-md border border-orange-400/40 shadow-lg flex items-center justify-center"
                      initial={{ opacity: 0, x: -30, y: 20 }}
                      animate={{ opacity: 0.7, x: 0, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.6 }}
                    >
                      <span className="text-[10px] text-white/60 font-medium">Clip 1</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-24 right-6 w-24 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-md border border-emerald-400/40 shadow-lg flex items-center justify-center"
                      initial={{ opacity: 0, x: 30, y: 20 }}
                      animate={{ opacity: 0.7, x: 0, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.6 }}
                    >
                      <span className="text-[10px] text-white/60 font-medium">Clip 2</span>
                    </motion.div>

                    {/* AI Badge - Top right */}
                    <motion.div
                      className="absolute top-4 right-4 flex items-center gap-2 bg-purple-600/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-400/40"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-purple-300 rounded-full"
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [1, 0.6, 1],
                          boxShadow: [
                            "0 0 0px rgba(192, 132, 252, 0.5)",
                            "0 0 8px rgba(192, 132, 252, 1)",
                            "0 0 0px rgba(192, 132, 252, 0.5)"
                          ]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-xs text-purple-100 font-medium">AI Editing</span>
                    </motion.div>

                    {/* Processing Status - Top left */}
                    <motion.div
                      className="absolute top-4 left-4 text-white/50 text-xs font-mono"
                      animate={{ opacity: [0, 1, 1, 1, 1, 0] }}
                      transition={{ duration: 8, times: [0, 0.1, 0.3, 0.6, 0.85, 1], repeat: Infinity }}
                    >
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Processing
                      </motion.span>
                      ...
                    </motion.div>

                    {/* COMPLETION EFFECT - Dopamine Hit */}
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
                      {/* Radial burst particles */}
                      {Array.from({ length: 40 }).map((_, i) => {
                        const angle = (i / 40) * Math.PI * 2;
                        const distance = 120 + Math.random() * 100;
                        const hue = Math.random() * 360;
                        return (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                            style={{
                              background: `hsl(${hue}, 100%, 65%)`
                            }}
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{
                              x: Math.cos(angle) * distance,
                              y: Math.sin(angle) * distance,
                              opacity: [0, 0, 0, 0, 0, 1, 0.8, 0],
                              scale: [0, 0, 0, 0, 0, 1.2, 0.8, 0]
                            }}
                            transition={{
                              duration: 8,
                              times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.92, 1],
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        );
                      })}

                      {/* Success overlay glow */}
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

                      {/* Success checkmark */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 0, 0, 0, 0, 1, 1, 0.8, 0],
                          scale: [0, 0, 0, 0, 0, 0.5, 1.3, 1.1, 0.8]
                        }}
                        transition={{ 
                          duration: 8,
                          times: [0, 0.75, 0.8, 0.82, 0.84, 0.86, 0.88, 0.92, 1],
                          repeat: Infinity
                        }}
                      >
                        <motion.svg 
                          className="w-32 h-32 text-emerald-400 drop-shadow-2xl" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          animate={{
                            filter: [
                              "drop-shadow(0 0 20px rgba(52, 211, 153, 0.8))",
                              "drop-shadow(0 0 40px rgba(52, 211, 153, 1))",
                              "drop-shadow(0 0 20px rgba(52, 211, 153, 0.8))"
                            ]
                          }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </motion.svg>
                        
                        <motion.div
                          className="mt-4 text-3xl font-bold text-white drop-shadow-2xl"
                          initial={{ y: 10 }}
                          animate={{ y: [-10, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          ✨ RENDER COMPLETE ✨
                        </motion.div>
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
              <div className="text-[10px] text-blue-400 font-mono">0:00:05:00</div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 relative overflow-hidden">
              <div className="absolute inset-0 p-3">
                <div className="space-y-2">
                  {/* Video Track */}
                  <div className="flex items-center gap-3 h-14">
                    <div className="w-20 text-[9px] text-gray-500 font-medium flex-shrink-0">Video 1</div>
                    <div className="flex-1 h-full bg-[#2a2a2a] rounded relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-cyan-600 to-blue-600 border border-cyan-400/40 rounded flex items-center justify-center shadow-lg"
                        initial={{ width: "0%" }}
                        animate={{ width: "66%" }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                      >
                        <span className="text-[9px] text-white/90 font-medium drop-shadow">Main_Video.mp4</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Effects Track */}
                  <div className="flex items-center gap-3 h-14">
                    <div className="w-20 text-[9px] text-gray-500 font-medium flex-shrink-0">Effects</div>
                    <div className="flex-1 h-full bg-[#2a2a2a] rounded relative overflow-hidden">
                      <motion.div
                        className="absolute left-1/4 top-0 bottom-0 w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-400/40 rounded flex items-center justify-center shadow-lg"
                        initial={{ width: "0%" }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                      >
                        <span className="text-[9px] text-white/90 font-medium drop-shadow">Color_Grade</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Audio Track */}
                  <div className="flex items-center gap-3 h-14">
                    <div className="w-20 text-[9px] text-gray-500 font-medium flex-shrink-0">Audio</div>
                    <div className="flex-1 h-full bg-[#2a2a2a] rounded relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-emerald-600/80 to-green-600/80 border border-green-400/30 rounded shadow-lg"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                      >
                        {/* Audio waveform */}
                        <div className="flex items-center h-full px-1 gap-px">
                          {Array.from({ length: 100 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 bg-green-300/70 rounded-full"
                              initial={{ height: "30%" }}
                              animate={{ 
                                height: `${20 + Math.sin(i * 0.3) * 30 + Math.random() * 20}%` 
                              }}
                              transition={{
                                duration: 0.5,
                                delay: 1.5 + i * 0.005,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Playhead */}
                <motion.div
                  className="absolute top-0 w-0.5 bg-red-500 shadow-lg shadow-red-500/50"
                  style={{
                    height: 'calc(100% - 1.5rem)',
                    left: '92px'
                  }}
                  animate={{
                    left: ['92px', 'calc(100% - 20px)', '92px']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
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
              <div className="text-[9px] text-gray-400 font-medium">Main_Composition.mp4</div>
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
