import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AfterEffectsBackground = () => {
  return (
    <div className="relative w-[95%] max-w-[1400px] mx-auto h-[85vh] my-12 bg-[#1e1e1e] overflow-hidden rounded-[20px] shadow-2xl border-[12px] border-[#111] transform hover:scale-[1.01] transition-transform duration-700">
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

      <div className="flex h-[calc(100%-2.5rem)]">
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
              <video 
                src="/videos/main.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />

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
