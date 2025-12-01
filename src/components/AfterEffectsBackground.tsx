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
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                <motion.div 
                  className="w-4/5 h-4/5 bg-gradient-to-br from-[#1a1a2a] via-[#2a2a4a] to-[#1a1a3a] rounded-lg relative overflow-hidden shadow-2xl"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Animated video elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-40 h-32 bg-blue-500/30 rounded-lg border-2 border-blue-400/60 shadow-lg shadow-blue-500/20"
                    animate={{
                      x: [0, 60, 0],
                      rotate: [0, 8, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-48 h-24 bg-purple-500/30 rounded-lg border-2 border-purple-400/60 shadow-lg shadow-purple-500/20"
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Rendering text */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      className="text-white/60 text-xs font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    >
                      Rendering Animation...
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Playback Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
                <div className="flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#3a3a3a" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white border border-[#3a3a3a] transition-colors"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
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
