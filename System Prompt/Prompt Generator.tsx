import React, { useState } from 'react';
import { Copy, Wand2, Sparkles, Camera, Palette, Zap } from 'lucide-react';

const PromptGenerator = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [copied, setCopied] = useState(false);

  // Predefined options for variety
  const poses = [
    'dynamic action stance', 'dramatic pose', 'confident posture', 'elegant stance',
    'powerful position', 'graceful pose', 'heroic stance', 'contemplative pose',
    'combat ready position', 'regal bearing'
  ];

  const environments = [
    'ancient stone battlefield at golden hour',
    'modern urban rooftop at sunset',
    'mystical forest clearing with dappled light',
    'futuristic cityscape at night',
    'medieval castle courtyard',
    'post-apocalyptic wasteland',
    'serene mountain landscape',
    'industrial warehouse with dramatic lighting',
    'ornate palace interior',
    'cyberpunk alleyway with neon lights'
  ];

  const lightingStyles = [
    'dramatic golden hour backlighting with rim lighting',
    'soft studio lighting with professional setup',
    'harsh directional lighting creating strong shadows',
    'ethereal moonlight with subtle blue tones',
    'warm firelight with dancing shadows',
    'cinematic three-point lighting',
    'natural window light with soft diffusion',
    'dramatic spotlighting from above',
    'colorful neon lighting with vibrant reflections',
    'misty atmospheric lighting with fog effects'
  ];

  const effects = [
    'floating sparks and embers, wind-blown hair',
    'dust particles in air, motion blur',
    'magical energy effects, glowing elements',
    'smoke and mist, atmospheric haze',
    'lens flares and light rays',
    'water droplets and spray effects',
    'floating debris and particles',
    'energy waves and power emanations',
    'snow or rain effects',
    'fire and flame elements'
  ];

  const colorPalettes = [
    'warm orange and deep blue',
    'cool blues and purples',
    'dramatic reds and golds',
    'monochromatic with accent colors',
    'earth tones with natural warmth',
    'vibrant neon colors',
    'muted pastels with soft contrast',
    'high contrast black and white with color splash',
    'sunset oranges and pinks',
    'deep forest greens and browns'
  ];

  const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

  const generatePrompt = () => {
    if (!userInput.trim()) return;

    const subject = userInput.trim();
    const pose = getRandomElement(poses);
    const environment = getRandomElement(environments);
    const lighting = getRandomElement(lightingStyles);
    const effect = getRandomElement(effects);
    const colorPalette = getRandomElement(colorPalettes);

    const prompt = `${subject} in ${pose}, ultra-detailed textures and realistic materials, intense focused expression with dramatic emotion

Environment: ${environment}, atmospheric depth with detailed background elements, professional composition

Technical Specs: Medium telephoto lens shot, rule of thirds composition, ${lighting}, ${colorPalette} color palette

Visual Style: Hyperrealism, photorealistic rendering, cinematic quality, film-grade production values

Effects: ${effect}, realistic physics and motion, environmental storytelling elements

Quality Modifiers: ultra-detailed, high sharpness, professional photography, cinematic composition, dramatic lighting, realistic physical effects, 8K resolution, award-winning cinematography

📸 Style: Hyperrealism, cinematic, ultra-detailed
🖼️ Aspect Ratio: ${aspectRatio}`;

    const negative = `blurry, out of focus, low resolution, pixelated, noise, artifacts, compression, distorted proportions, cartoon, anime, illustration, flat shading, oversaturated, undersaturated, washed out colors, low detail, poor textures, plastic appearance, fake materials, amateur photography, bad lighting, harsh shadows, cropped face, cut off limbs, awkward poses, floating objects, perspective errors, unnatural anatomy, static pose, empty background, weak composition`;

    setGeneratedPrompt(prompt);
    setNegativePrompt(negative);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAll = () => {
    const fullPrompt = `POSITIVE PROMPT:
${generatedPrompt}

NEGATIVE PROMPT:
${negativePrompt}`;
    copyToClipboard(fullPrompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">AI Prompt Generator</h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-gray-300 text-lg">Transform your ideas into hyperrealistic, cinematic prompts</p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-4">
            <Wand2 className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-semibold text-white">Describe Your Subject</h2>
          </div>
          
          <div className="space-y-4">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your subject (e.g., 'A female warrior', 'An ancient dragon', 'A cyberpunk detective', 'A magical forest spirit')"
              className="w-full h-24 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
            />
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-purple-400" />
                <label className="text-sm text-gray-300">Aspect Ratio:</label>
                <select
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white text-sm focus:outline-none focus:border-purple-500"
                >
                  <option value="9:16">9:16 (Portrait)</option>
                  <option value="16:9">16:9 (Landscape)</option>
                  <option value="1:1">1:1 (Square)</option>
                  <option value="4:3">4:3 (Classic)</option>
                  <option value="3:4">3:4 (Portrait)</option>
                </select>
              </div>
              
              <button
                onClick={generatePrompt}
                disabled={!userInput.trim()}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed"
              >
                <Zap className="w-4 h-4" />
                Generate Prompt
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {generatedPrompt && (
          <div className="space-y-6">
            {/* Positive Prompt */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-400">✨ Positive Prompt</h3>
                <button
                  onClick={() => copyToClipboard(generatedPrompt)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-200 whitespace-pre-wrap border border-gray-700">
                {generatedPrompt}
              </div>
            </div>

            {/* Negative Prompt */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-red-400">🚫 Negative Prompt</h3>
                <button
                  onClick={() => copyToClipboard(negativePrompt)}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-200 whitespace-pre-wrap border border-gray-700">
                {negativePrompt}
              </div>
            </div>

            {/* Copy All Button */}
            <div className="text-center">
              <button
                onClick={copyAll}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <Copy className="w-5 h-5" />
                {copied ? 'Copied!' : 'Copy Both Prompts'}
              </button>
            </div>
          </div>
        )}

        {/* Quick Examples */}
        <div className="mt-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">💡 Quick Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'A steampunk inventor in their workshop',
              'A mystical forest guardian',
              'A cyberpunk hacker in neon-lit city',
              'An ancient Egyptian pharaoh',
              'A space explorer on alien planet',
              'A medieval knight in battle'
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => setUserInput(example)}
                className="text-left p-3 bg-gray-700/40 hover:bg-gray-700/60 rounded-lg text-gray-300 hover:text-white transition-colors border border-gray-600/50 hover:border-purple-500/50"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;