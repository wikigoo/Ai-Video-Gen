
# A Practical Guide to Engineering AI Multimedia Prompts

  
## Part I: The Universal Principles of Prompt Engineering: Communicating with a Non-Human Mind

  
The art and science of guiding generative artificial intelligence (AI) models has evolved from a simple act of inputting keywords into a sophisticated discipline known as prompt engineering. At its core, prompt engineering is the practice of designing and refining inputs to elicit specific, accurate, and high-quality outputs from AI systems.1 It is less about writing code and more about strategic communication—learning to "speak AI" by understanding how these models interpret human language to achieve desired outcomes.3 Mastering this skill is crucial for unlocking the full potential of generative AI, leading to greater efficiency, accuracy, and control over the creative process.1 This section establishes the foundational, modality-agnostic principles that underpin all effective AI prompting, providing a cognitive framework for interacting with a non-human intelligence.
  
### Chapter 1: The Core Philosophy: Clarity, Context, and Iteration


The foundation of successful prompt engineering rests on three pillars: clarity of instruction, richness of context, and a commitment to iterative refinement. These principles are not merely tips but a fundamental philosophy for interacting with systems that are powerful yet lack human intuition and common sense. A well-crafted prompt acts as a clear call to action, reducing ambiguity and the need for extensive post-processing.1

  #### 1.1 Beyond Keywords: The Shift to Directive Communication

  
Modern prompt engineering has moved beyond simple "keyword stuffing." The most effective interaction with a generative AI is not a search query but a directive, similar to giving instructions to a highly intelligent but literal-minded assistant.3 This requires a deliberate approach to language and structure.

Clarity and Specificity

The primary source of failure in AI generation is ambiguity. Vague prompts lead to generic, unpredictable, and often useless results.5 To counteract this, every prompt must be constructed with maximum clarity and specificity. This is achieved by:

- Using Strong Action Verbs: Begin prompts with clear, unambiguous verbs that specify the desired action. Terms like Write, Create, Summarize, List, Outline, and Describe leave no room for misinterpretation.7
    
- Employing Concrete Nouns: Abstract concepts like "love" or "justice" are difficult for models to render accurately as a primary subject. Grounding the prompt in concrete nouns—such as human, cup, dog, or planet—provides a solid foundation for the AI to build upon.9
    
- Defining Scope and Constraints: Clearly outline the parameters of the request. Instead of a vague prompt like "Write a story," a specific directive such as "Write a 500-word short story in the science fiction genre, set on a Martian colony in 2150, with a main character who is a botanist" provides the necessary constraints for a targeted and relevant output.3 Similarly, specifying a length ("50 characters or less") or format ("in a bulleted list") ensures the output is immediately usable.7
    

Providing Rich Context

An AI model operates on the information it is given. Without sufficient context, it cannot grasp the user's intent or the specific requirements of the task. Providing rich context ensures the generated response is tailored and relevant.4 Key methods for providing context include:

- Defining the Target Audience: The same information can be presented in vastly different ways depending on the intended audience. Specifying the audience—for example, "Write this in an academic style for a professor with citations" versus "Write this for someone who has expert knowledge" or "Use vocabulary and grammar at the third-grade level"—dramatically alters the tone, complexity, and style of the AI's response.5
    
- Including Relevant Facts and Data: Grounding the prompt in factual information helps the AI understand the scope of the request. For instance, a prompt like "Given that global temperatures have risen by 1 degree Celsius since the pre-industrial era, discuss the potential consequences for sea level rise" provides a factual starting point for a more focused analysis.7
    
- Defining Key Terms: If a prompt involves specialized or ambiguous terminology, defining these terms within the prompt itself prevents misinterpretation and ensures the AI operates from the correct conceptual framework.7
    

The Iterative Dialogue

Perfecting a prompt is rarely a one-shot process; it is an iterative dialogue between the user and the AI.8 The first output should be seen as a starting point, not a final product. Effective prompt engineering involves a continuous feedback loop 1:

1. Craft an initial prompt: Start with a simple, straightforward prompt before adding layers of complexity.4
    
2. Analyze the output: Evaluate the AI's response, identifying errors, deviations from the instructions, or areas of ambiguity.
    
3. Refine the prompt: Based on the analysis, modify the prompt to be more specific, add more context, or correct misunderstandings. For example, if a prompt for a restaurant in Cambridge returns results from the UK, the refined prompt would specify "Cambridge, Massachusetts".6
    
4. Repeat: Continue this cycle of testing and refinement until the desired outcome is achieved. Research shows that this iterative process is fundamental to mastering prompt engineering, as it builds an intuition for how different models respond to various inputs.3
    

  
#### 1.2 The "Describe the Result, Not the Action" Principle

  
A critical mental shift is required to move from novice to expert prompting, particularly for tasks involving modification or correction of media. Humans intuitively think in terms of actions: "remove the person," "make the dress blue," "add a tree." However, generative models do not "edit" in the traditional sense. They do not possess a toolkit of actions to apply to an existing canvas. Instead, they regenerate a portion of the media based on a new description of its desired final state.

Therefore, the most effective prompts for modification tasks do not describe the action to be taken, but rather the result after the action has been completed. This principle is fundamental to controlling inpainting, outpainting, and other corrective techniques.

For example, when using an inpainting tool to remove an unwanted chair from a room, the incorrect, action-based prompt would be "remove the chair." This provides no information about what should replace it. The correct, result-based prompt would be "an empty corner of the room with a wooden floor and a white wall".11 This gives the AI a clear description of the new reality it needs to generate within the masked area. Similarly, to change a character's clothing color from red to blue, the prompt should not be "change the dress to blue." Instead, it should be a complete description of the new state: "a woman wearing a blue satin evening gown".11

This "describe the result" principle forces the user to think like the AI, providing a complete and coherent vision of the desired outcome. It acknowledges that the AI is not an editor but a creator, and every "edit" is, in fact, an act of re-creation guided by the user's description. Mastering this concept is a significant step toward gaining precise control over generative models.

  
### Chapter 2: Foundational Techniques for Complex Tasks

  
While the core philosophy of clarity, context, and iteration applies to all prompts, a set of foundational techniques allows users to tackle more complex requests with greater precision and reliability. These methods—role prompting, few-shot learning, and task decomposition—transform the AI from a simple generator into a versatile and collaborative partner.

  
#### 2.1 Role Prompting: Assigning an Expert Persona
  

One of the most powerful yet simple techniques for guiding an AI's output is role prompting. This involves instructing the model to "act as" or "assume the role of" a specific persona, such as a cybersecurity analyst, a professional copywriter, a travel guide, or a personal trainer.1

Mechanism and Effect

Assigning a role primes the model to access specific domains of its vast training data. When instructed to act as a particular expert, the AI adopts the characteristic tone, vocabulary, and structural conventions associated with that role.5 For example, a prompt beginning with "Act as if you are my personal trainer..." will yield recipe suggestions that are healthier and more aligned with fitness goals than a generic recipe request for the same ingredients.6 This technique provides clear context, establishes a consistent voice, and enables a deeper level of analysis from a specific perspective.12

Advanced Application: Building a Custom Expert

A more advanced application of role prompting involves a two-step process to create a custom-tailored expert. Instead of simply assigning a generic role, the user first prompts the AI to define the knowledge, experience, and expertise of that role. For example: "List what knowledge, experience, and expertise a professional pet care expert should have." The AI will generate a detailed list. The user can then select the most relevant points from that list and construct a new prompt: "Now, adopt points 1, 5, 8, and 10 from the previous list and act as my personal pet care expert".12 This method allows the user to build a bespoke persona, guiding the AI with a lens specifically crafted for the task at hand rather than a generic costume.

  

#### 2.2 Few-Shot Learning: Guiding by Example

  

Providing examples is one of the most effective ways to guide an AI's output, a technique known as few-shot (or one-shot) learning.1 By showing the model one to five examples of the desired input-output format, the user can communicate style, tone, and structure with a precision that is often difficult to achieve with descriptive language alone.3 Research indicates that prompts containing examples can yield responses that are up to 50% more aligned with user expectations compared to generic prompts.4

This technique is particularly powerful for tasks requiring a specific format or style. For instance, if a user wants to generate product descriptions with a punchy, minimalist tone, they can provide a few examples directly in the prompt 3:

Example Prompt with Few-Shot Learning:

Generate a product description for our new smartwatch, "ChronoSync". Here are some examples of the style I want:

Example Product Descriptions:

- Nexus X: Your digital revolution. Quantum-core processor for unmatched speed. Adaptive AI anticipates your needs.

- LuminaPro: Illuminate your world. Holographic display brings content to life.

- EcoSync: Sustainable innovation. Recycled materials, air-purifying shell.

Now, write one for ChronoSync.

This approach sets clear expectations and constrains the AI's output to match the provided style, making it invaluable for content creation, data extraction, and any task where format consistency is key.3

  
#### 2.3 Chain-of-Thought (CoT) and Task Decomposition

  
Complex tasks are often too multifaceted for a single, monolithic prompt to handle effectively. The AI may miss nuances, overlook steps, or produce a shallow response. The solution is to break down the complex task into a series of smaller, manageable sub-tasks.3 This technique, known as task decomposition or chain-of-thought prompting, guides the model through a logical progression, with the output of one step often serving as the input or context for the next.1

This transforms the interaction from a single command into a structured workflow, allowing the user to review, adjust, and guide the AI at each stage. For example, instead of asking the AI to "Create a comprehensive marketing plan for a new reusable water bottle," a more effective approach would be to chain prompts together 3:

- Step 1: Define Personas. Prompt: Define three target audience personas for a new sustainable, smart water bottle. Include demographics, psychographics, and key pain points for each.
    
- Step 2: Craft USP. [AI responds with personas]. Prompt: Based on the personas defined, craft a compelling Unique Selling Proposition (USP) for our water bottle that addresses their needs and differentiates us from competitors.
    
- Step 3: Suggest Channels. . Prompt: Suggest the five most effective marketing channels for reaching our target audience. For each channel, explain why it's suitable and provide one specific marketing tactic we could employ.
    

This step-by-step method ensures a more coherent, detailed, and strategically sound final output. It allows for course correction and refinement throughout the process, making it an essential technique for any complex creative or analytical task.3

  
## Part II: Mastering Text-to-Image Generation: The Virtual Photographer's Manual

  
Creating compelling images with AI is an exercise in virtual photography and art direction. Success hinges on the ability to translate a mental vision into a precise, structured set of instructions that the AI can interpret. This section provides a comprehensive methodology for crafting text-to-image prompts, treating the prompt not as a mere text box, but as a virtual camera, a lighting kit, and an artist's palette. By mastering the language of visual description, users can move from generating random curiosities to producing professional-grade, intentional artwork.

  
### Chapter 3: Anatomy of a Masterful Image Prompt

  
While generative models offer immense creative freedom, the most consistent and high-quality results come from prompts that follow a logical and hierarchical structure. This structure ensures that all critical aspects of the desired image are communicated to the AI in an order it can effectively process.

  
#### 3.1 The Core Formula: A Hierarchy of Descriptors
  

An effective image prompt is not just a list of keywords but a well-organized description. The generally accepted optimal structure places the most fundamental elements first, followed by increasingly specific modifiers. This hierarchy guides the AI's generation process from the general concept to the fine details.9

A robust formula for an image prompt is as follows:

,,,, [Composition/Camera Angle], [Lighting], [Color Palette], [Quality Modifiers].8

The order of these elements is significant. AI models that use language-image pre-training, such as CLIP, process prompts sequentially. Therefore, terms placed at the beginning of the prompt, particularly the image type and subject, carry more weight and have a greater influence on the overall composition and aesthetic.17 Starting a prompt with

photo of... versus oil painting of... immediately sets the generation process on two vastly different paths, influencing everything from texture to lighting and realism.

  
#### 3.2 Subject and Scene: The Foundation of the Image

  
The subject and its environment are the narrative core of any image. Describing them with precision and detail is the first and most crucial step in prompt construction.

- Subject: The subject is the main focus and must be a concrete, describable entity.9 Vague descriptions yield generic results. To achieve a specific vision, the prompt must be hyper-descriptive. Include details such as:
    

- Action: What is the subject doing? (looking up, playing, running, casting magic).18
    
- Emotion: What feeling is the subject conveying? (joyfully, fearfully, pensive, serene).9
    
- Attributes: Describe physical characteristics like age, ethnicity, hairstyle, and clothing with specificity (a mid-30s woman with shoulder-length auburn hair, wearing a red dress, detailed leather clothing with gemstones).9
    
- Texture and Material: Specify materials to enhance realism (polished oak table, silk dress, vibrant orange fur).8
    

- Scene/Environment: The background is not an afterthought; it provides context, mood, and depth. The scene should be described with the same level of detail as the subject.9 A prompt for  
    a majestic Bengal tiger is good, but a majestic Bengal tiger stalking through a lush tropical rainforest dappled with sunlight creates a complete, immersive world for the AI to render.9
    

  
#### 3.3 Medium and Style: Defining the Aesthetic

  
Once the content of the image is established, the next step is to define its visual and artistic treatment through the medium and style.

- Medium: This keyword specifies the physical or digital material of the artwork. It is a foundational descriptor that dictates the fundamental look and feel. Examples include photograph, oil painting, watercolor, charcoal sketch, 3D rendering, fresco, or digital painting.9 The choice of medium is one of the most impactful decisions in a prompt.
    
- Style: Style refers to the broader artistic approach, genre, or movement being emulated. This is where the user can inject a specific aesthetic vision into the generation.
    

- Art Movements: Referencing established art movements like Impressionism, Surrealism, Cubism, Art Deco, or Art Nouveau provides the AI with a rich set of visual rules to follow.21
    
- Genre Aesthetics: Specifying a genre like Cyberpunk, Steampunk, Gothic, or Minimalist applies a consistent set of thematic and visual elements.8
    
- Artist and Platform References: A powerful technique is to reference the style of a specific artist (in the style of Vincent van Gogh, by Greg Rutkowski) or a niche art-sharing website (trending on ArtStation, trending on CGSociety).8 These references act as potent style modifiers, as the AI has learned the distinct aesthetics associated with these names and platforms from its training data.
    

By combining a clear subject and scene with a specific medium and style, the user lays a robust foundation upon which the finer details of lighting and composition can be built.

  
### Chapter 4: The Virtual Cinematographer's Toolkit: Lighting and Camera

  
To elevate an AI-generated image from a simple depiction to a work of art, one must master the tools of a virtual cinematographer: lighting and camera control. These elements are not mere additions; they are the primary drivers of mood, realism, and narrative impact. A well-placed virtual light or a carefully chosen camera angle can transform a flat image into a dynamic, emotive scene.

  
#### 4.1 Painting with Light: A Deep Dive into Lighting Keywords
  

Lighting is arguably the most critical component for establishing atmosphere and realism. Prompts that include specific lighting terminology borrowed from photography and cinematography give the user precise control over the final image's mood and dimensionality. A comprehensive list of these keywords is presented in the table below.

- Directional Lighting: These terms define the position of the light source relative to the subject, which in turn dictates the shape and placement of shadows. This is fundamental to creating a sense of three-dimensional form. Key terms include Backlight, Rim Light (a specific effect of backlighting that creates a halo), Broad Lighting, Loop Lighting, Butterfly Lighting, and the classic Rembrandt Lighting, known for the characteristic triangle of light on the cheek.26
    
- Atmospheric and Mood Lighting: This category of keywords controls the overall emotional tone of the image. Cinematic Lighting suggests a dramatic, high-production-value feel. Volumetric Lighting and Crepuscular Rays (also known as God Rays) make light beams visible, often through dust or fog, adding a sense of drama or divinity.26  
    Chiaroscuro and Noir Lighting create high-contrast, moody scenes with deep shadows.26 Time-of-day keywords like  
    Golden Hour (warm, soft light just after sunrise or before sunset) and Blue Hour (the cool, tranquil light just before sunrise or after sunset) are powerful shortcuts to specific moods.26  
    Neon Lighting is essential for futuristic or urban night scenes.27
    
- Light Quality and Effects: These descriptors define the character and texture of the light itself. Soft Light and Diffused Light create gentle shadows and a flattering look, while Hard Light produces sharp, defined shadows and high contrast.26  
    Caustics describe the intricate patterns of light created when it refracts through water or glass.26  
    Iridescent and Luminescent keywords can be used to create magical, glowing effects, while Shimmering Light and Bokeh (the aesthetic quality of the blur in out-of-focus parts of an image) add texture and visual interest.26
    

Table 1: Master Lighting Keyword Reference

| Category | Keyword/Term | Description & Effect | Example Prompt Snippet |

| :--- | :--- | :--- | :--- |

| Directional | Rim Light | Creates a bright outline around the subject, separating it from the background. Adds drama and definition. | ...portrait of a knight, dramatic rim light... 26 |

  

| | Backlight | Light source is behind the subject, often creating a silhouette or a glowing edge. | ...a woman's silhouette against a window, backlight... 27 |

  

| | Rembrandt Lighting | Creates a small, inverted triangle of light on the cheek opposite the light source. Very dramatic for portraits. | ...a moody portrait of an old man, Rembrandt lighting... 26 |

  

| Atmospheric | Cinematic Lighting | Evokes the look of a high-budget film. Often implies dramatic contrast, specific color grading, and a carefully controlled mood. | ...a city street at night, cinematic lighting... 27 |

  

| | Volumetric Lighting | Makes light rays visible as they pass through atmosphere (e.g., fog, smoke, dust). Also known as Crepuscular Rays or God Rays. | ...sunlight filtering through a misty forest, volumetric lighting... 29 |

  

| | Chiaroscuro | An artistic technique using strong contrasts between light and dark, usually for dramatic effect. | ...a still life painting of a skull, chiaroscuro lighting... 26 |

  

| Quality & Effects| Soft Light | Diffused light that creates soft, gradual shadows. Flattering for portraits. | ...a professional portrait of a model, soft light... 26 |

  

| | Hard Light | Direct, undiffused light that creates sharp, high-contrast shadows. | ...a gritty street photograph, hard light from the sun... 26 |

  

| | Caustics | Intricate, web-like patterns of light created when light refracts through a transparent substance like water or glass. | ...underwater scene with sunlight filtering through the water, caustics on the sea floor... 26 |

  

| Color & Time | Golden Hour | The period shortly after sunrise or before sunset, characterized by warm, soft, golden light. | ...a couple walking on the beach, golden hour lighting... 27 |

  

| | Blue Hour | The period just before sunrise or after sunset, when the light is indirect and evenly diffused, with a cool blue hue. | ...a cityscape at dusk, blue hour... 26 |

  

| | Neon Lighting | The vibrant, colorful light from neon signs, essential for cyberpunk and urban night aesthetics. | ...a futuristic alleyway, glowing with pink and blue neon lighting... 27 |

  

#### 4.2 The Implicit Quality of Technical Language

  

When crafting prompts for photorealistic images, a powerful advanced technique is to include highly specific, technical photography and camera-related terms. Phrases like shot on Canon 5D Mark IV with 85mm f/1.4 lens, f/16 aperture, 16K resolution, 4K, or HDR do more than just request a specific technical attribute.22

The AI models have been trained on immense datasets of images scraped from the internet. A significant portion of these images originates from professional photography websites, forums, and portfolio sites like Flickr or 500px, where photographers meticulously upload their work along with detailed EXIF data (camera, lens, aperture, shutter speed, etc.). Consequently, the AI learns a strong statistical correlation: images associated with this kind of technical jargon are overwhelmingly high-quality, professionally composed, well-lit, and sharply focused.

Therefore, when a user includes such language in a prompt, it functions as a potent "quality booster".24 The prompt is not merely asking for a shallow depth of field when it specifies

f/1.4; it is implicitly instructing the model to generate an image that possesses the overall quality and characteristics of a photograph taken by a professional who would use such a lens. This can lead to more realistic skin textures, more naturalistic lighting, more pleasing compositions, and finer details, even if the model isn't literally simulating that exact camera and lens combination. This is a crucial shortcut for bypassing generic AI aesthetics and achieving a higher standard of photorealism.

  

#### 4.3 Controlling the Frame: Camera Shots, Angles, and Composition

  

Directing the virtual camera is essential for storytelling and controlling how the viewer perceives the scene. Specific keywords can dictate the camera's position, angle, and the composition of elements within the frame.

- View Size / Shot Type: These terms define how much of the subject and their surroundings are visible, controlling the framing of the shot. They range from the vast Extreme Wide Shot (EWS) or Long Shot (LS), perfect for establishing landscapes and showing a character within their environment, to the intimate Close-Up (CU) and Extreme Close-Up (ECU), which focus on facial expressions and fine details. Intermediate shots like the Medium Shot (MS, from the waist up) and Cowboy Shot (from mid-thigh up) offer a balance between character and context.33
    
- Camera Angle: The angle from which the camera views the subject has a profound psychological impact on the audience.
    

- An Eye-Level Shot is neutral and relatable, creating a direct connection with the subject.35
    
- A Low Angle Shot, looking up at the subject, makes them appear powerful, dominant, or heroic.33
    
- A High Angle Shot, looking down, can make the subject seem small, vulnerable, or submissive.33
    
- A Dutch Angle (or Dutch Tilt), where the camera is tilted on its roll axis, creates a sense of unease, tension, or psychological imbalance.33
    
- Overhead views like Bird's-Eye View are excellent for revealing patterns and layouts.33
    

- Compositional Keywords: While the AI has its own compositional biases, users can guide the arrangement of elements by explicitly including compositional principles in the prompt. Terms like Rule of Thirds, Leading Lines, Symmetrical Composition, Minimalist, and Centered Composition can help structure the final image more deliberately.22
    

Table 2: Camera & Composition: A Cinematographer's Guide

| Term | Technical Description | Psychological & Narrative Impact | Ideal Use Case & Example Prompt |

| :--- | :--- | :--- | :--- |

| Extreme Wide Shot (EWS) | Camera is placed very far from the subject, which appears small in the frame. | Establishes setting, shows grand scale, can make subject feel isolated or overwhelmed. | Epic landscapes, establishing shots. Vast alien desert, a lone astronaut walking, extreme wide shot. 33 |

  

| Long Shot (LS) | Shows the full subject from head to toe, but with significant environmental context. | Balances character with their environment, shows relationship to the setting. | Character introductions in a specific location. A detective standing on a rainy street, long shot. 33 |

  

| Medium Shot (MS) | Frames the subject from the waist up. | Neutral, conversational. Balances facial expression with some body language. | Dialogue scenes, portraits. A CEO in their office, medium shot, looking at the camera. 15 |

  

| Close-Up (CU) | Frames the subject's face, showing little to no background. | Creates intimacy, highlights emotion, focuses on details. | Emotional moments, showing a character's reaction. A tear rolling down a woman's cheek, close-up. 33 |

  

| Low Angle Shot | Camera is positioned below the subject, looking up. | Makes the subject appear powerful, dominant, heroic, or intimidating. | Hero shots, villain introductions, architectural photography. A supervillain laughing maniacally, low angle shot. 36 |

  

| High Angle Shot | Camera is positioned above the subject, looking down. | Makes the subject appear vulnerable, powerless, or small. Can also be used as an objective overview. | Showing a character in peril, establishing shots of a location. A lost child in a crowded market, high angle shot. 34 |

  

| Dutch Angle | The camera is tilted on its roll axis, making the horizon appear slanted. | Creates a sense of unease, tension, disorientation, or psychological instability. | Thriller scenes, moments of conflict or confusion. A character running through a dark alley, dutch angle. 33 |

  

### Chapter 5: A Lexicon of Styles and Modifiers

  

Beyond the foundational elements of subject, lighting, and camera, a vast lexicon of stylistic and quality-enhancing keywords can be used to refine and perfect an AI-generated image. These modifiers allow the user to dial in a precise aesthetic, from historical art movements to cutting-edge digital trends, and to push the model towards its highest level of fidelity.

  

#### 5.1 Curated Lists of Styles

  

Specifying a style is one of the most effective ways to guide the AI's creative direction. The following lists provide a starting point for exploring different aesthetics.

- Historical Art Movements: Referencing established movements provides the AI with a rich visual library of techniques, color palettes, and subject matter.
    

- Renaissance: Classical composition, realistic details, often religious or mythological themes.23
    
- Baroque: Dramatic lighting (chiaroscuro), grand compositions, intense emotion.23
    
- Impressionism: Soft brush strokes, focus on light and atmosphere, vibrant colors.23
    
- Post-Impressionism: Vivid colors, distinctive and often thick brush strokes, emotional content (e.g., in the style of Van Gogh).23
    
- Cubism: Geometric shapes, abstract forms, multiple viewpoints simultaneously.23
    
- Surrealism: Dream-like elements, strange juxtapositions, illogical scenes.23
    
- Pop Art: Bold colors, iconic imagery from popular culture, often with a graphic or comic-book feel.23
    
- Art Deco: Geometric shapes, luxurious design, sleek lines, often associated with the 1920s and 30s.23
    
- Art Nouveau: Flowing, organic lines, floral motifs, decorative patterns.23
    

- Digital and Modern Aesthetics: These styles are native to the digital realm or reflect contemporary trends.
    

- Cyberpunk: Futuristic, dystopian, neon-lit cities, high-tech elements.41
    
- Steampunk: Retro-futuristic aesthetic combining Victorian-era technology with steam power, gears, and brass.43
    
- Vaporwave: Nostalgic 80s/90s internet aesthetic, often featuring pastel colors, Roman statues, and glitch art elements.
    
- Glitch Art: Intentionally uses digital errors and artifacts for aesthetic effect, creating fragmented and chaotic visuals.42
    
- Low Poly: A 3D modeling style that uses a small number of polygons, resulting in a faceted, geometric look.9
    
- Minimalist: Simple, clean lines, often with a monochromatic or limited color palette.23
    
- Maximalist: The opposite of minimalist; cluttered, complex, and ornate with intricate details.45
    

- Medium-Based Styles: These keywords specify the look of a particular artistic medium.
    

- Pixel Art: Resembles early video game graphics, created with visible square pixels.40
    
- Papercraft / Papercut: Art that appears to be made from cut, folded, or layered paper.40
    
- Ink Sketch / Line Art: Uses fine lines to define form, often in black and white.43
    
- Charcoal Drawing: A monochrome style with soft shading and rough strokes.43
    
- Gouache Paint: Opaque watercolor paint, resulting in flat, vibrant colors.46
    
- Claymation: A stop-motion animation style using clay figures, giving a distinct, molded texture.39
    

  

#### 5.2 Quality and Detail Modifiers

  

To push the AI to produce its highest-fidelity output, a specific set of keywords can be used. These "quality boosters" signal to the model that a premium result is expected, encouraging it to render more detail, sharpness, and clarity.24

- General Modifiers: highly detailed, intricate detail, hyperdetailed, sharp focus, professional photography.8
    
- Resolution and Rendering Engines: 8K, 4K, UHD, Unreal Engine, Octane Render, V-Ray.8 As discussed previously, these technical terms often function as implicit quality enhancers.
    
- Realism Modifiers: photorealistic, hyper-realistic, ultrarealistic.9 These explicitly tell the model to aim for a photographic level of accuracy.
    

  

#### 5.3 Negative Prompts for Image Refinement

  

Negative prompts are a powerful tool for steering the AI away from unwanted elements, styles, or common generation flaws.1 They are particularly useful for cleaning up results and enforcing a consistent aesthetic.

- Purpose and Function: A negative prompt is a separate input field (in platforms that support it, like Stable Diffusion) or a parameter (like --no in Midjourney) where the user lists things to exclude from the image.18
    
- Excluding Common AI Artifacts: Generative models are notorious for certain recurring flaws. A standard "universal" negative prompt often includes terms to combat these issues: extra limbs, extra fingers, distorted face, malformed limbs, bad anatomy, mutated hands, blurry, grainy, low quality, watermark, signature, text, ugly, disfigured.48
    
- Enforcing Stylistic Consistency: Negative prompts can be used to refine a chosen style by excluding others. For example, when aiming for a clean vector illustration, the negative prompt could include watercolor, oil painting, 3D render, photorealistic, noise, grain, texture to prevent the AI from blending in unwanted aesthetics.51 Similarly, for a  
    vintage photography style, the negative prompt might include modern, futuristic, digital artifacts, HD, sharp edges.51
    
- The Pitfall of Over-Negative-Prompting: While useful, negative prompts must be used with care. They guide the model away from concepts, which can sometimes have unintended consequences. For example, a heavy negative prompt for deformed hands might cause the model to avoid generating hands altogether, resulting in characters with their hands hidden behind their backs or out of frame.50 This reveals a more nuanced aspect of prompt engineering: it is often more effective to guide the model  
    towards a desired positive outcome than to simply forbid a negative one. In the case of hands, a positive prompt like perfectly formed hands, detailed fingers can be more reliable than a negative prompt alone. The ideal approach often involves a balance of both: a positive prompt to define the goal and a negative prompt to filter out common failure modes.
    

  

## Part III: Directing Motion: Text-to-Video and Image-to-Video

  

The transition from static images to dynamic video introduces the critical dimension of time, demanding a new layer of prompting expertise. Crafting effective video prompts requires not only the visual descriptive skills of a virtual photographer but also the narrative and temporal sensibilities of a cinematographer and director. The core challenge lies in describing motion—of subjects, environments, and the camera itself—in a way that is clear, concise, and achievable within the short durations typical of current AI video generation.

  

### Chapter 6: The Language of Motion: Prompting for Text-to-Video

  

Generating a video from a text prompt alone is one of the most complex tasks for generative AI. Success hinges on a highly structured prompt that clearly delineates the subject, its actions, the environment, and the desired cinematic treatment.

  

#### 6.1 The Core Video Prompt Formula

  

A structured approach is paramount for video generation to avoid chaotic or nonsensical results. While different platforms may have slight variations, a robust and widely effective formula incorporates the following elements in a logical sequence 53:

,,, [Camera Language/Movement], [Lighting/Atmosphere],.55

The key to this structure is its focus on simplicity and clarity. Video models are more sensitive to overly complex or contradictory prompts than image models. It is best to focus on one or two central ideas and a single, continuous action that can realistically unfold within a few seconds.53

  

#### 6.2 Describing Subject and Environmental Motion

  

The essence of a video is movement. Articulating this movement with precision is the prompt's most important job.

- Subject Action and Movement: Use vivid, dynamic verbs and adverbs to describe what the subject is doing. Specificity is crucial. Instead of "a person moves," a better prompt would be "a person is sprinting joyfully," "a character walks cautiously," or "a ballet dancer gracefully performs a pirouette".54 The prompt should describe the  
    how of the movement to convey emotion and intent. For generating 3D animations, one can even string together simple actions like "Stand walk sit" to create a unique sequence.57
    
- Environmental and Background Motion: The world around the subject should also be alive. Describe the motion of background elements to create a more immersive and believable scene. Examples include "flowers sway in the gentle breeze," "dust swirls around abandoned cars," "clouds are rolling slowly in the distance," or "reflections shimmer on the wet pavement".53 This "insinuated motion" can often produce more natural results than directly commanding every element to move.58
    

  

#### 6.3 Directing the Virtual Camera in Motion

  

Camera movement is the primary tool for adding a cinematic quality to AI-generated video. Explicitly prompting for specific camera actions can transform a static scene into a dynamic narrative shot.

- Standard Camera Movements: Industry-standard cinematography terms are the most effective way to communicate camera motion.
    

- Pan right or pan left: The camera pivots horizontally.59
    
- Tilt up or tilt down: The camera pivots vertically.59
    
- Dolly in or dolly out: The entire camera moves physically closer to or farther from the subject.60
    
- Zoom in or zoom out: The camera's focal length changes, magnifying or de-magnifying the subject without the camera physically moving. This creates a different visual effect than a dolly.60
    
- Truck left or truck right: The entire camera moves horizontally, parallel to the scene.60
    
- Crane shot or Jib shot: The camera sweeps vertically, often from a high to a low position or vice versa, creating dramatic reveals.60
    
- Aerial shot or drone footage: A high-altitude shot, often moving, that provides a broad overview of a landscape.53
    

- Camera Stability and Style: The prompt can also specify the stability of the camera.
    

- Handheld shot: Simulates the subtle shake and movement of a camera held by an operator, adding realism or a sense of urgency.60
    
- Steadicam shot or smooth tracking shot: Creates a fluid, stable motion, often used to follow a character as they move.55
    

It is important to recognize the current limitations of AI in interpreting these commands. While models are improving, camera movement can still be inconsistent. A prompt for a zoom might be interpreted as a pan, and overly complex movements (e.g., "a dolly zoom while craning down and panning left") are likely to be ignored or result in unpredictable motion.62 Therefore, the most effective strategy is to start with simple, clear camera movements like

wide static shot or slow pan left before attempting more complex cinematography.56 The prompt should be seen as a strong suggestion to the AI, not an infallible command.

  

#### 6.4 Scene Transitions and Temporal Elements

  

A significant limitation of current text-to-video models is their inability to handle hard cuts or transitions between different scenes within a single prompt.56 Each prompt generates a single, continuous clip.

To create a multi-scene video, the professional workflow involves:

1. Generating each scene or shot as a separate video clip.
    
2. Importing these individual clips into a traditional video editing software (e.g., Adobe Premiere Pro, DaVinci Resolve).
    
3. Assembling the clips in the desired sequence to construct the final narrative.
    

While direct transitions cannot be prompted, AI can be used to create elements for transitions. For example, a user can prompt for "light flares on a black background" or "particle effects on a green screen".59 These generated clips can then be used as overlays or transition effects during the editing phase, bridging the gap between AI generation and conventional post-production.

  

### Chapter 7: Animating the Inanimate: Image-to-Video Techniques

  

Image-to-video generation offers a powerful way to bring static images to life. This process involves providing a source image and a text prompt that guides the AI in creating motion. The key principle is that the image provides the "what" (the visual content), while the prompt provides the "how" (the animation and movement).

  

#### 7.1 The Guiding Principle: The Prompt Describes the Motion

  

When starting with a static image, the text prompt's primary function is to describe the animation you wish to see. The AI uses the image as the starting frame and context, and the prompt as the set of instructions for generating subsequent frames.63 The prompt should focus almost exclusively on movement, as the visual style and subject are already defined by the source image.58

For example, if you upload an image of a serene forest, a prompt like "gentle wind rustles the leaves on the trees" will create subtle, naturalistic motion. If you upload a portrait, a prompt like "the person nods their head slowly and gives a gentle smile" will animate the character's expression.64 The more specific the action described, the more controlled the output.

  

#### 7.2 Controlling Animation Style and Speed

  

While the source image dictates the primary visual style, the prompt can still influence the style of animation and its speed.

- Animation Style: Adding stylistic keywords to the prompt can transform the video's aesthetic. For example, applying a prompt like "cartoon style" or "Pixart style" to a realistic photo will not only animate it but also attempt to render that animation in the specified artistic style.68 Similarly, "oil paint style" can make the motion appear as if it's being painted frame by frame.68
    
- Speed and Intensity: Some platforms, like DomoAI, offer direct settings to control "video intensity" or duration (e.g., 3, 5, or 10 seconds).69 In platforms without these explicit controls, the prompt itself can imply speed and intensity. Compare the implied motion of "the flame flickers gently" with "the fire erupts violently." The choice of verbs and adverbs guides the AI's interpretation of the animation's energy and pace. Pika Labs and Runway both feature "strength of motion" sliders that provide more granular control.71
    

  

#### 7.3 Maintaining Character Consistency

  

Character consistency—ensuring a character looks the same across different shots or even within a single animated clip—is one of the biggest challenges in generative AI.73 Several techniques have emerged to address this:

- Consistent Prompting: For text-to-video, the most basic method is to use a highly detailed and consistent character description at the beginning of every prompt for every scene. For example, "John Smith is an American guy, 22 years old, with brown hair, brown eyes, and bright skin..." This description should precede any action or scene details, acting as an anchor for the character's appearance.74
    
- Seed Number: In image generation, using the same seed number (--seed) for each prompt can help maintain a consistent style and character, though this is less effective for significant changes in pose or setting.73
    
- Image-to-Image and Reference Features: The most powerful methods involve using a reference image.
    

- In Midjourney, the --cref (Character Reference) parameter allows users to provide a URL to a character image, instructing the model to maintain that character's likeness in new generations.75
    
- Platforms like Vidu.ai, DomoAI, and Hailuo.ai allow users to upload one or more reference images of a character. The AI then uses these images to ensure the character appears consistent from multiple angles when animated.65 This is a significant leap forward for creating coherent narrative videos.
    

By combining a strong reference image with a clear, motion-focused prompt, users can achieve a high degree of control over the final animation, transforming any static picture into a dynamic and expressive video clip.

  

### Chapter 8: A Comparative Analysis of Video Prompting Platforms

  

The landscape of AI video generation is populated by several key players, each with a unique approach to prompting and a distinct set of strengths and weaknesses. Understanding these differences is crucial for selecting the right tool for a specific creative task. This chapter compares three leading platforms: Runway, Pika Labs, and Kling.

  

#### 8.1 Runway (Gen-2 / Gen-3)

  

Runway has positioned itself as a comprehensive suite of creative tools geared towards professional and prosumer use, emphasizing cinematic quality and a high degree of user control.

- Strengths: Runway excels at producing high-quality, cinematic video with realistic human motion and smooth, dynamic camera movements.76 Its interface offers advanced features like the Motion Brush, which allows users to "paint" motion onto specific regions of an image, and granular camera control settings for pan, tilt, and zoom.66 The platform is continuously updated with new models (Gen-2, Gen-3 Alpha) and features, and its generation speeds are often faster than competitors.79
    
- Prompting Style: Runway recommends a structured prompt format: [camera movement]: [establishing scene]. [additional details].66 The platform's philosophy favors descriptive, non-conversational prompts that use positive phrasing (describing what you want, not what you don't).66 However, users report that Runway can sometimes be less adherent to prompts, prioritizing a cinematic aesthetic over literal interpretation.77
    

  

#### 8.2 Pika Labs

  

Pika Labs is known for its user-friendly interface and its ability to generate creative and adventurous animations, often with a higher degree of prompt adherence than Runway.

- Strengths: Pika is highly responsive to text prompts and is often better at incorporating multiple or complex ideas into a single generation.77 It is praised for its ease of use and the creative, sometimes unexpected, results it produces.76 Its free plan is considered generous, making it an accessible option for experimentation.72
    
- Weaknesses: While creative, Pika's output can be less cinematic and more prone to visual distortions or "glitchy" artifacts compared to Runway or Kling.77 It offers fewer fine-grained controls over motion intensity and camera movements, giving the user less precise command over the final animation.76
    

  

#### 8.3 Kling

  

Developed by Kuaishou Technology, Kling has emerged as a powerhouse in high-fidelity video generation, often cited as superior in terms of realism, physics simulation, and prompt adherence.

- Strengths: Kling's standout feature is its ability to generate highly realistic motion that adheres to the laws of physics.83 It excels at complex movements and can produce longer video clips (up to two minutes) than many competitors.83 Users consistently report that Kling is superior at image-to-video tasks and is better at following specific prompt instructions, including character actions like blinking.82 Its character and style consistency are also considered very strong.
    
- Prompting Style: Kling benefits from a detailed and structured prompt formula: , [subject description], [subject movement], [scene], [scene description], [optional: camera language, lighting, atmosphere].54 This structured approach allows for precise control over the output. The main drawback reported is that generation times can be slower than on other platforms.82
    

Table 3: Text-to-Video Platform Prompting Comparison

| Feature/Aspect | Runway | Pika Labs | Kling |

| :--- | :--- | :--- | :--- |

| Prompting Philosophy | Cinematic & subtle. Prioritizes aesthetic quality, sometimes over literal prompt adherence. 77 | Creative & literal. High responsiveness to prompt details and complex ideas. 77 | Realistic & detailed. Excels with structured, specific prompts for high-fidelity output. 54 |

  

| Camera Control | High control via dedicated settings and advanced features like Motion Brush. 76 | Basic control primarily through text prompts; less fine-tuning available. 76 | Good control via descriptive text prompts; excels at interpreting camera language. 54 |

  

| Motion Style | Realistic, smooth, and often subtle human motion. Very cinematic. 78 | More adventurous and dynamic, but can sometimes be less smooth or physically accurate. 77 | Excellent physics simulation; models complex and lifelike motion with high fidelity. 83 |

  

| Character Consistency | Good and improving with new features, but can still produce distorted faces. 77 | Less consistent, especially with human animation; prone to distortion with dynamic motion. 78 | Strong consistency, with dedicated features for maintaining facial features. 83 |

  

| Best Use Case | Generating professional-looking, cinematic clips; VFX; projects requiring high aesthetic polish. 76 | Quick creative exploration; generating imaginative or surreal animations; high prompt adherence is key. 77 | High-fidelity, realistic storytelling; videos requiring accurate physics; long-form narrative clips. 82 |

In summary, the choice of platform depends heavily on the user's goal. For a polished, cinematic look with advanced editing tools, Runway is a strong choice. For rapid, creative brainstorming where prompt adherence is paramount, Pika Labs excels. For achieving the highest level of realism, physical accuracy, and narrative consistency, Kling is currently a leading contender.

  

## Part IV: Composing with Code: The Craft of Text-to-Audio Prompting

  

Generating audio with AI requires a distinct vocabulary that differs significantly from the visual language of image and video prompting. Instead of describing shapes and colors, the user must articulate concepts of sound, harmony, rhythm, and acoustics. This section delves into the specialized craft of text-to-audio prompting, breaking it down into two primary domains: music composition and sound effect design.

  

### Chapter 9: Generating Music from Text

  

AI music generators can compose entire pieces of music from a text description. The key to success is to provide a prompt that balances creative inspiration with technical musical parameters. A well-structured prompt acts as a blueprint for the AI composer.

  

#### 9.1 The Four Pillars of Music Prompting

  

Effective music prompts are typically built upon four foundational elements that define the core characteristics of the desired track.84

1. Genre and Style: This is the most critical element, establishing the overall musical framework. Specificity is key. Instead of a generic term like "rock," use more descriptive styles like Alternative Rock, Classic Rock, or Indie Folk. The genre informs the AI about characteristic chord progressions, rhythmic patterns, and instrumentation.86 Examples of genres include  
    Afrobeat, Americana, Jazz, Bossa Nova, Chiptune, Cinematic Orchestral, and Lo-fi Hip-Hop.87
    
2. Mood and Emotion: Descriptive adjectives are used to set the emotional tone of the piece. This guides the AI in selecting melodies, harmonies, and dynamics that evoke a specific feeling. Examples include Vibrant, Danceable, Storytelling, Emotional, Soulful, Mystical, Energetic, Melancholy, or Nostalgic.84
    
3. Instrumentation: This component specifies the instruments that should be featured in the arrangement. Clearly defining the instrumentation shapes the track's texture and sonic palette.86 Prompts can be as simple as  
    Piano, Strings or more descriptive, like Distorted Guitar, Loud Drums, 8-bit Synth, Pulse Waves, or Rich acoustic guitars paired with soft violins.86 It is also helpful to specify the role of the instruments, such as  
    a strong bassline, smooth saxophone, and warm electric guitar.89
    
4. Tempo and Rhythm: The prompt should define the pace and rhythmic character of the music. This can be done using descriptive terms (fast tempo, slow ballad, upbeat) or by specifying a beats-per-minute (BPM) value (120 BPM, 70 BPM).84 Rhythmic feel can also be described with phrases like  
    driving beat, swing rhythm, or gentle waltz.84
    

  

#### 9.2 Advanced Composition and Structure

  

For more granular control, advanced prompts can include music theory concepts and structural instructions.

- Advanced Prompt Templates: Professional-level prompts can integrate more technical details. A template for this might look like:  
    Create a [length]-minute [mood] composition at [tempo] BPM within the [genre] genre. Integrate [mode/scale] (e.g., Dorian mode, minor scale), [time signature] (e.g., 4/4, 3/4), and [rhythm patterns] (e.g., syncopated rhythms). Feature [instruments] and techniques like [specific techniques] (e.g., side-chain compression, arpeggiation). Structure the piece with [detailed song structure] (e.g., Intro-Verse-Chorus-Verse-Chorus-Bridge-Outro)..87
    
- Using Metatags for Structure: Some platforms, most notably Suno AI, allow for the use of metatags within the prompt to explicitly define the song's structure and elements.89 These tags act as direct commands to the AI.
    

- Structure Tags: [Intro], [Verse], [Chorus], , , [Outro]
    
- Vocal/Sound Tags: [Female narrator], [Male singer], [Audience laughing], [Phone ringing], [Applause]
    

This level of control allows users to architect a song with a high degree of precision, guiding the AI through each section of the composition.

  

### Chapter 10: Designing Soundscapes and Effects

  

Generating sound effects (SFX) requires a different prompting approach than music. Instead of musical concepts, SFX prompts focus on describing a physical event and its acoustic properties. The goal is to paint a clear sonic picture of a specific moment in time.

  

#### 10.1 The Sound Effect (SFX) Prompt Formula

  

A simple yet effective formula for SFX prompts breaks the sound down into its core components: the source, its action, and the environment it occurs in.90

Formula: + [Action] + [Environment]

- Primary Sound Source: The object or entity creating the sound (e.g., horse carriage, vintage typewriter, lion, glass).
    
- Action: The specific action the source is performing (e.g., passing by, keys clacking, roaring, shattering).
    
- Environment: The acoustic space where the sound occurs. This is crucial as it informs reverberation, echo, and background noise (e.g., on a cobblestone street, in a quiet office, in a large cave, in an open field).
    

Example Prompts:

- Exploding fireworks in the night sky.90
    
- Ocean waves crashing on a sandy shore at sunset.90
    
- A person walks clockwise in an angry manner, and then reaches out with their left arm to grab the left arm of a chair, lowering themselves heavily into the seat.57
    

  

#### 10.2 A Taxonomy of Sound Descriptors

  

To further refine SFX, a detailed taxonomy of acoustic descriptors can be used. These optional modifiers add layers of nuance to the sound.91

- Source Category: Broadly classifies the sound's origin (Nature, Urban, Technology, Human, Animal, Fantasy/Sci-Fi).
    
- Texture and Timbre: Describes the sonic quality of the sound (Smooth, Rough, Grainy, Bright, Dark, Warm, Metallic).
    
- Envelope: Defines the sound's amplitude over time (Sharp Attack, Slow Attack, Long Decay, Short Sustain).
    
- Frequency Range: Specifies the pitch (Sub-bass (20-60 Hz), Bass (60-250 Hz), Low-mids (250-500 Hz), Highs (6-20 kHz)).
    
- Motion and Rhythm: Describes how the sound moves in space or time (Static, Rising, Falling, Panning Left-Right, Approaching, Receding, Steady, Irregular, Pulsating).
    
- Environment and Acoustics: Explicitly describing the environment (in a large reverberant cave, in a small, carpeted room, in a lecture hall) allows the AI to simulate realistic echoes, reverberation, and absorption, a key feature of advanced environment-aware audio generation.92
    

By combining the basic formula with these detailed descriptors, users can generate highly specific and realistic sound effects tailored to any film, game, or audio project.

  

## Part V: Post-Production and Enhancement with Prompts

  

The role of prompting does not end with the initial generation of media. A crucial and often overlooked application of prompt engineering lies in post-production: the process of refining, correcting, and transforming existing AI-generated content. This phase requires a subtle but significant shift in prompting strategy, moving from pure creation to guided modification. Whether fixing artifacts in an image, applying a new style to a video, or seamlessly expanding a scene, prompts become the tools of a digital artisan.

  

### Chapter 11: Corrective Image Prompting: Inpainting and Outpainting

  

Inpainting and outpainting are powerful techniques for editing specific parts of an image or extending its boundaries. Success in these tasks is almost entirely dependent on understanding and applying the "Describe the Final State" principle discussed in Part I. The AI does not "edit"; it regenerates a region based on a new description.

  

#### 11.1 The "Describe the Final State" Principle Revisited

  

To reiterate this foundational concept: prompts for inpainting and outpainting must describe the desired content of the final, edited region, not the editing action itself.11 The prompt should paint a picture of the world

as if the change has already occurred. This is the single most important principle for achieving predictable and high-quality results in image modification.

  

#### 11.2 Inpainting: Fixing Artifacts and Modifying Elements

  

Inpainting is the process of regenerating a selected (or "masked") portion of an image. It is ideal for correcting common AI artifacts (like malformed hands), removing unwanted objects, or changing specific elements within a scene.96

The Workflow:

1. Mask the Area: In an application that supports inpainting, use a brush or selection tool to paint a mask over the region you want to change. For best results, the mask should slightly overlap the boundaries of the element being replaced to allow for better blending.97
    
2. Craft the Prompt: Write a prompt that describes in detail what should exist within the masked area.
    
3. Generate: The AI will use the unmasked portions of the image as context and generate new content within the mask that matches the prompt and the surrounding visual information.96
    

Prompting Examples:

- Correcting a Deformed Hand:
    

- Mask: The malformed hand.
    
- Incorrect Prompt: fix the hand.
    
- Correct Prompt: a perfectly formed human hand with five fingers, holding a red apple.52
    

- Changing an Object's Color:
    

- Mask: A character's red dress.
    
- Incorrect Prompt: change the dress to blue.
    
- Correct Prompt: an elegant blue satin evening gown.11
    

- Removing an Object:
    

- Mask: A chair in the corner of a room.
    
- Incorrect Prompt: remove the chair.
    
- Correct Prompt: an empty corner with a light brown wooden floor and a plain white wall.11
    

For complex edits involving multiple changes (e.g., altering a person's clothing, hairstyle, and accessories), it is best practice to break the task down. Perform one change at a time, generate the result, and then proceed to the next edit. This sequential approach yields higher-quality and more coherent results than attempting all changes in a single step.11

  

#### 11.3 Outpainting: Expanding the Canvas

  

Outpainting, or image extrapolation, is the process of extending an image beyond its original borders, generating new content that logically continues the scene.96

The Workflow:

1. Expand the Canvas: The image is placed on a larger canvas, creating transparent areas around the original content.
    
2. Select the Generation Area: A bounding box is typically used to define the region that includes a portion of the original image (for context) and the transparent area to be filled.96 It is generally advisable to outpaint in smaller increments, where the transparent area is no more than 25-40% of the selected bounding box, to ensure higher quality.96
    
3. Craft the Prompt: The prompt must describe the entire desired scene, including the content that is already present in the original image. This is crucial for maintaining coherence and ensuring the newly generated content blends seamlessly.95
    
4. Generate: The AI generates new pixels in the transparent area, guided by both the visual information from the original image and the comprehensive text prompt.
    

Prompting Example:

- Goal: To expand a close-up image of a coffee maker to show the surrounding kitchen.
    
- Input Image: A photo of just a coffee maker.
    
- Incorrect Prompt: a stylish kitchen. (This ignores the existing subject).
    
- Correct Prompt: a coffee maker in a sparse stylish kitchen, a single plate of pastries next to the coffee maker, a single cup of coffee, on a marble countertop.95
    

By describing the full scene, the user guides the AI to create a logical and visually consistent extension of the original image.

  

### Chapter 12: Advanced Video Enhancement and Style Transfer

  

Prompting for video post-production introduces challenges of temporal consistency. Changes must not only look correct in a single frame but must also remain coherent across the duration of the clip. Techniques like style transfer and the emerging field of video inpainting allow for powerful, prompt-driven video enhancement.

  

#### 12.1 Prompt-Based Video Style Transfer

  

Video style transfer is a technique that applies the aesthetic of a reference image or a described artistic style to a source video, transforming its look and feel while preserving the original motion.99

The Workflow:

The typical process involves providing two main inputs to the AI model 99:

1. A Source Video: The video containing the content and motion to be preserved.
    
2. A Style Reference: This can be either a static image (e.g., a Van Gogh painting) or a detailed text prompt describing the desired aesthetic.
    

Prompting for Style Transfer:

When using a text prompt to define the style, the prompt's focus shifts away from describing action (which is taken from the source video) and towards defining the target aesthetic. The prompt should be rich with stylistic keywords.

Example Prompts for Style Transfer:

- Goal: Apply a Ghibli-esque anime style to a video of a woman walking.
    

- Prompt: A woman in casual attire strolls across a vast, sunlit expanse... The scene is rendered in a whimsical, soft Ghibli art style, with vibrant colors and a peaceful, dreamy atmosphere..99
    

- Goal: Apply a Post-Impressionist style to a video of a couple on a beach.
    

- Prompt: ...the sky and sea are alive with dynamic, swirling brushstrokes and bold, contrasting colors reminiscent of Van Gogh's Starry Night. The scene is rendered in a Post-Impressionist art style, with expressive movement, thick impasto textures, and luminous, dreamlike blues and yellows..99
    

The AI analyzes the style from the reference image or prompt and applies it frame by frame to the source video, creating a new, stylized clip that retains the original narrative motion.101

  

#### 12.2 Correcting AI-Generated Video Artifacts

  

AI-generated videos are often plagued by temporal artifacts such as flickering, unwanted object morphing, or inconsistent character features. While some of these issues can be mitigated by re-generating with a more precise initial prompt (e.g., adding negative prompts like blurry, warped, flickering, extra limbs), more advanced prompt-driven techniques are required for targeted correction.52

Professional Workflows for Correction:

- Video Inpainting (e.g., FlowEdit): This is an advanced technique analogous to image inpainting but applied to video. A user can mask a specific region of the video (e.g., a distorted face or an unwanted object) across multiple frames. A prompt is then used to describe what should be regenerated within that masked region throughout the clip.103 This allows for the targeted removal of artifacts or the replacement of elements in a moving shot, offering a high degree of post-production control.97
    
- Image Editor as an Intermediate Step: A common professional workflow for fixing persistent issues like malformed hands or faces involves a hybrid approach.52
    

1. Export a keyframe from the problematic video sequence.
    
2. Open the frame in a traditional image editing program like Adobe Photoshop or GIMP.
    
3. Manually correct the artifact (e.g., paint over the deformed hand to create a correctly shaped one).
    
4. Use this corrected image as a strong reference input for an image-to-video generation process.  
    This corrected frame acts as a powerful guide for the AI, significantly improving the consistency and quality of the regenerated video sequence. This method combines the precision of manual editing with the generative power of AI.
    

- Leveraging Artifact-Aware Tools (e.g., Claude Artifacts): Some platforms, like Anthropic's Claude, are developing "artifact-aware" interfaces. While not direct video correction, these tools allow users to generate code, UI elements, or documents in a separate preview window. Users can then highlight a specific part of the generated artifact (e.g., a button in a UI) and provide a corrective prompt ("Make this button larger") that modifies only the selected element without regenerating the entire output.104 This iterative, targeted correction model points towards a future where similar techniques could be applied directly to video frames, allowing users to conversationally "debug" visual artifacts.
    

  

## Part VI: The Expert's Toolkit: Advanced and Cross-Platform Strategies

  

Reaching the highest level of prompt engineering requires moving beyond universal principles to master the specific syntax, parameters, and underlying philosophies of different AI platforms. Each major generative ecosystem—Midjourney, Stable Diffusion, DALL-E 3—has its own "dialect" and operational logic. An expert prompter is not only fluent in the general language of visual description but is also adept at tailoring their commands to the unique character of each tool, leveraging platform-specific features to achieve unparalleled control and precision.

  

### Chapter 13: Mastering Prompt Syntax and Parameters

  

Advanced control over AI generation is achieved through the use of specific parameters and syntax that modify the model's behavior. These tools allow the user to fine-tune everything from the weight of a particular keyword to the overall randomness of the output.

  

#### 13.1 Prompt Weighting and Emphasis

  

Prompt weighting is a critical technique for assigning relative importance to different elements within a prompt, allowing the user to resolve ambiguity or prioritize certain features.

- Stable Diffusion Syntax: Stable Diffusion offers the most granular control over weighting. The primary syntax is (keyword:factor), where factor is a number. A factor greater than 1 increases the keyword's importance, while a factor less than 1 decreases it.18 For example,  
    (a majestic castle:1.3) gives "majestic castle" 30% more emphasis. As a shortcut, parentheses () and brackets `` can be used to incrementally adjust weight. Each set of ( ) around a keyword multiplies its weight by 1.1, while each set of [ ] multiplies it by 0.9 (effectively dividing by 1.1).18
    

- Example: ((blue)) car is equivalent to (blue:1.21) car.
    
- Example: [red] car is equivalent to (red:0.9) car.
    

- Midjourney Syntax: Midjourney uses a simpler syntax for weighting. A user can add a double colon :: followed by a number after a term to assign its weight. For example, in the prompt space ship::2, vibrant colors::1, the term "space ship" is given twice the importance of "vibrant colors".9 If no number is provided, the weight defaults to 1.
    

  

#### 13.2 Controlling Randomness and Consistency

  

Every AI generation starts from a random noise pattern, which is then refined into an image. Controlling this initial randomness is key to achieving consistent and reproducible results.

- Seed: The seed is the number that initializes the random noise pattern. By specifying a particular seed number (e.g., --seed 12345), a user can force the AI to start from the exact same noise pattern every time for a given prompt. This is indispensable for iterative refinement, as it allows the user to make small changes to a prompt and see their direct effect on a consistent base image.48
    
- Chaos (Midjourney): Midjourney's --chaos <value> parameter, which ranges from 0 to 100, controls the level of variation in the initial grid of images. A low chaos value (e.g., --chaos 10) will produce four images that are stylistically very similar. A high chaos value (e.g., --chaos 80) will produce four wildly different interpretations of the prompt, making it a useful tool for creative exploration.49
    
- CFG Scale (Stable Diffusion): The Classifier-Free Guidance (CFG) scale determines how strictly the model must adhere to the text prompt.
    

- Low CFG (e.g., 2-6): The AI has more creative freedom and may deviate significantly from the prompt, leading to more artistic but potentially distorted or irrelevant results.
    
- Medium CFG (e.g., 7-10): This is the recommended range, offering a good balance between prompt adherence and creative quality.
    
- High CFG (e.g., 10-15+): The AI will follow the prompt very strictly. This requires a highly detailed and well-structured prompt, as the model will have little room to "fill in the blanks" creatively. High values can sometimes reduce image quality or coherence if the prompt is not perfect.48
    

  

#### 13.3 Aspect Ratios and Quality Parameters

  

- Aspect Ratio: All major platforms allow users to control the dimensions of the output image. This is typically done with a parameter like --ar in Midjourney (e.g., --ar 16:9 for widescreen, --ar 2:3 for portrait) or through preset selections in user interfaces.15
    
- Quality/Stylize Parameters (Midjourney): Midjourney offers specific parameters to control the aesthetic quality and generation time.
    

- --stylize or --s <value>: This parameter (0-1000, default 100) controls how strongly Midjourney's default artistic style is applied. Low values produce images that are very faithful to the prompt but may be less artistic. High values produce highly stylized images that may take more creative liberties.49
    
- --quality or --q <value>: This parameter (.25,.5, or 1) adjusts the generation time and level of detail. Higher values use more GPU time and produce more detailed images, while lower values are faster and more economical for rapid iteration.112
    

  

### Chapter 14: A Comparative Look at Prompting Across Ecosystems

  

The most advanced prompters understand that Midjourney, Stable Diffusion, and DALL-E 3 are not interchangeable tools. They are distinct ecosystems with different underlying philosophies, which dictates their behavior and the most effective prompting strategies for each.

  

#### 14.1 Midjourney: The Artistic Director

  

- Philosophy: Midjourney is designed to be an "artistic director." Its primary goal is to produce aesthetically pleasing, polished, and often dramatic or painterly images, even if it means taking creative liberties with the prompt.113 It is a closed, curated system optimized for ease of use and high-quality visual output straight from the box.75
    
- Prompting Style: Midjourney responds well to natural language, evocative adjectives, and artistic modifiers. It is less about technical precision and more about conveying a mood or a vibe. Its unique parameters like --cref (Character Reference) and --sref (Style Reference) are immensely powerful for maintaining consistency in style and character, a key strength for storyboarding and branded content.75 However, its tendency to "beautify" can sometimes override specific instructions, making it a challenge when absolute prompt fidelity is required.114
    

  

#### 14.2 Stable Diffusion: The Technical Operator

  

- Philosophy: Stable Diffusion is the "technical operator's" tool. As an open-source model, its core philosophy is to provide maximum control, flexibility, and customization to the user.115 This power comes with a steeper learning curve and greater responsibility for the final output.113
    
- Prompting Style: Stable Diffusion rewards a more technical, keyword-driven approach. It adheres more strictly to prompts than Midjourney.117 Its true power is unlocked not just through the prompt itself, but through the vast ecosystem of custom-trained models (checkpoints), LoRAs (small models that modify a checkpoint's style), embeddings, and extensions like ControlNet, which allows for precise control over composition and pose.18 It is the platform of choice for users who need to fine-tune every aspect of the generation process and build reproducible, highly specific visual assets.75
    

  

#### 14.3 DALL-E 3 (via ChatGPT): The Conversational Interpreter

  

- Philosophy: DALL-E 3's integration with ChatGPT introduces a third paradigm: the "conversational interpreter." Its core strength is leveraging the advanced natural language understanding of a Large Language Model (LLM) to translate conversational requests into highly detailed and effective image prompts "under the hood".75 It is designed for intuitive interaction and excels at understanding complex, nuanced sentences and spatial relationships.
    
- Prompting Style: The user experience is a dialogue. One can make a simple request, and ChatGPT will automatically expand it into a rich prompt. More importantly, users can iteratively refine the image conversationally (e.g., "That's great, but now make the background a bustling cityscape at night").75 DALL-E 3 demonstrates superior prompt adherence and is uniquely skilled at rendering legible text within images, a significant weakness of other models.75 Its main limitation is that it is a closed, cloud-based system with less granular control over parameters like weighting and no support for custom models.75
    

Table 4: Platform Prompting Philosophy and Syntax Comparison

| Aspect | Midjourney | Stable Diffusion | DALL-E 3 (via ChatGPT) |

| :--- | :--- | :--- | :--- |

| Core Philosophy | Artistic Director: Prioritizes aesthetic quality and a polished, stylized output. 113 |

Technical Operator: Prioritizes user control, customization, and prompt fidelity. 115 |

Conversational Interpreter: Prioritizes natural language understanding and iterative dialogue. 75 |

  

| Prompt Syntax | Natural language with artistic modifiers and specific parameters (--). 120 | Keyword-heavy, technical syntax with granular weighting and negative prompts. 18 | Natural language conversation; the LLM generates the detailed prompt automatically. 75 |

  

| Key Strength | High-quality, artistic, and cinematic visuals "out-of-the-box." Powerful style and character reference tools. 75 | Extreme customization through open-source models, LoRAs, and tools like ControlNet. High prompt fidelity. 75 | Unmatched prompt understanding and adherence. Excellent at generating legible text. Iterative, conversational refinement. 75 |

  

| Key Weakness | Less literal control; can prioritize aesthetics over prompt details. Closed ecosystem. 75 | Steep learning curve; requires technical setup and manual fine-tuning for best results. 113 | Less granular control over generation parameters. Session-bound memory for consistency. 75 |

  

| Key Parameter Example | --sref [image_url] for style transfer. 116 |

(keyword:1.5) for precise keyword weighting. 18 | Using

gen_id to refer to a previous image for consistency within a session. 75 |

  

### Conclusion

  

The journey from a simple text input to a precisely rendered piece of multimedia art is governed by the principles of effective prompt engineering. This guide has demonstrated that mastery of this discipline transcends the mere selection of keywords and extends into a strategic dialogue with a non-human intelligence. The universal tenets of clarity, context, and iteration form the bedrock of this communication. By providing specific, unambiguous directives, enriching prompts with relevant background information, and embracing a cycle of refinement, users can begin to bridge the gap between their creative vision and the AI's generative capabilities.

Advanced techniques further elevate this control. Role prompting primes the AI with an expert persona, while few-shot learning guides it by example, and task decomposition breaks down complex requests into manageable, sequential steps. For visual media, the prompt becomes a virtual cinematographer's toolkit. The deliberate choice of medium, style, lighting, and camera angles transforms the user from a passive observer into an active director, shaping the mood, narrative, and psychological impact of the final image or video. A deep understanding of how technical language can implicitly boost quality, or how a negative prompt can be both a tool and a potential pitfall, separates novice users from expert practitioners.

The principles shift again for auditory and corrective tasks. Music generation requires a vocabulary of genre, mood, instrumentation, and tempo, while sound effect design is built on the clear description of a source, action, and environment. Post-production tasks like inpainting and style transfer hinge on the critical insight to describe the desired final state, not the editing action.

Finally, true expertise lies in recognizing the distinct philosophies of the major AI ecosystems. Midjourney acts as an artistic partner, prioritizing aesthetics. Stable Diffusion serves as a powerful, technical engine that grants total control to those willing to master its complexities. DALL-E 3, integrated within ChatGPT, functions as a conversational interpreter, excelling at understanding natural language and nuanced requests.

Ultimately, prompt engineering is an evolving, dynamic skill. It requires creativity, critical thinking, and a willingness to experiment. By mastering the structured, hierarchical, and platform-aware prompting strategies outlined in this guide, creators can unlock the full potential of generative AI, transforming these powerful models from unpredictable tools into reliable and indispensable partners in any creative endeavor.

#### Cited sources

1. Prompt Engineering for Generative AI - eInfochips, access time: June 15, 2025, [https://www.einfochips.com/blog/prompt-engineering-for-generative-ai/](https://www.einfochips.com/blog/prompt-engineering-for-generative-ai/)
    
2. AI PROMPT ENGINEERING & DESIGN FUNDAMENTALS - Amazon.com, Accessed June 15, 2025, [https://www.amazon.com/AI-PROMPT-ENGINEERING-DESIGN-FUNDAMENTALS/dp/B0F18S27HQ](https://www.amazon.com/AI-PROMPT-ENGINEERING-DESIGN-FUNDAMENTALS/dp/B0F18S27HQ)
    
3. 5 Timeless Prompt Engineering Principles for Reliable AI Outputs - General Assembly, access time: June 15, 2025, [https://generalassemb.ly/blog/timeless-prompt-engineering-principles-improve-ai-output-reliability/](https://generalassemb.ly/blog/timeless-prompt-engineering-principles-improve-ai-output-reliability/)
    
4. What are the Five Principles of Prompt Engineering? - DigiPix Inc., accessed June 15, 2025, [https://www.digipixinc.com/blogs/technology/what-are-the-five-principles-of-prompt-engineering/](https://www.digipixinc.com/blogs/technology/what-are-the-five-principles-of-prompt-engineering/)
    
5. A Complete Guide: Write Effective AI Prompts - AI-Pro.org, accessed June 15, 2025, [https://ai-pro.org/learn-ai/articles/a-complete-guide-write-effective-ai-prompts/](https://ai-pro.org/learn-ai/articles/a-complete-guide-write-effective-ai-prompts/)
    
6. Getting started with prompts for text-based Generative AI tools | Harvard University Information Technology, accessed June 15, 2025, [https://www.huit.harvard.edu/news/ai-prompts](https://www.huit.harvard.edu/news/ai-prompts)
    
7. Prompt Engineering for AI Guide | Google Cloud, access time: June 15, 2025, [https://cloud.google.com/discover/what-is-prompt-engineering](https://cloud.google.com/discover/what-is-prompt-engineering)
    
8. Writing AI Prompts: 7 Key Elements - RebelMouse, access time: June 15, 2025, [https://www.rebelmouse.com/ai-writing-prompts](https://www.rebelmouse.com/ai-writing-prompts)
    
9. How to write AI image prompts - From basic to pro [2024] - Let's Enhance, access time: June 15, 2025, [https://letsenhance.io/blog/article/ai-text-prompt-guide/](https://letsenhance.io/blog/article/ai-text-prompt-guide/)
    
10. 5 Principles of Prompt Engineering for Research - LibGuides, access time: June 15, 2025, [https://libguides.nyit.edu/promptengineering/principlesofpromptengineering](https://libguides.nyit.edu/promptengineering/principlesofpromptengineering)
    
11. Guide to Writing Prompts for Inpainting - Getimg.ai, access time: June 15, 2025, [https://getimg.ai/guides/guide-to-writing-prompts-for-inpainting](https://getimg.ai/guides/guide-to-writing-prompts-for-inpainting)
    
12. AI Prompting (1/10): Essential Foundation Techniques Everyone Should Know - Reddit, accessed June 15, 2025, [https://www.reddit.com/r/PromptEngineering/comments/1ieb65h/ai_prompting_110_essential_foundation_techniques/](https://www.reddit.com/r/PromptEngineering/comments/1ieb65h/ai_prompting_110_essential_foundation_techniques/)
    
13. 6 advanced AI prompt engineering techniques for better outputs - Outshift | Cisco, Accessed: June 15, 2025, [https://outshift.cisco.com/blog/advanced-ai-prompt-engineering-techniques](https://outshift.cisco.com/blog/advanced-ai-prompt-engineering-techniques)
    
14. How to Write Great Text-to-Image Prompts | Leonardo.Ai Help Center - Intercom, Accessed: June 15, 2025, [https://intercom.help/leonardo-ai/en/articles/8942657-how-to-write-great-text-to-image-prompts](https://intercom.help/leonardo-ai/en/articles/8942657-how-to-write-great-text-to-image-prompts)
    
15. AI Image Generation: How to Write Good AI Image Prompts | Typeface Academy, accessed June 15, 2025, [https://www.typeface.ai/education/typeface-academy/how-to-write-good-ai-image-prompts](https://www.typeface.ai/education/typeface-academy/how-to-write-good-ai-image-prompts)
    
16. ADOBE FIREFLY - Mastering text-to-image prompts, access time: June 15, 2025, [https://business.adobe.com/content/dam/dx/us/en/resources/sdk/mastering-text-to-image-prompts/mastering-text-to-image-prompts.pdf](https://business.adobe.com/content/dam/dx/us/en/resources/sdk/mastering-text-to-image-prompts/mastering-text-to-image-prompts.pdf)
    
17. ELi5: Absolute beginner's guide to getting started in A.I. Image generation. : r/StableDiffusion, Accessed: June 15, 2025, [https://www.reddit.com/r/StableDiffusion/comments/1b2mhjv/eli5_absolute_beginners_guide_to_getting_started/](https://www.reddit.com/r/StableDiffusion/comments/1b2mhjv/eli5_absolute_beginners_guide_to_getting_started/)
    
18. Stable Diffusion prompt: a definitive guide, access time: June 15, 2025, [https://stable-diffusion-art.com/prompt-guide/](https://stable-diffusion-art.com/prompt-guide/)
    
19. How to write AI art prompts | Zapier, accessed June 15, 2025, [https://zapier.com/blog/ai-art-prompts/](https://zapier.com/blog/ai-art-prompts/)
    
20. Guide to Writing Text to Image Prompts getimg.ai, access time: June 15, 2025, [https://getimg.ai/guides/guide-to-writing-text-to-image-prompts](https://getimg.ai/guides/guide-to-writing-text-to-image-prompts)
    
21. 8 Components of Great AI Art Prompts | Microsoft Copilot, accessed June 15, 2025, [https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/ai-art-and-creativity/8-components-of-great-ai-art-prompts](https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/ai-art-and-creativity/8-components-of-great-ai-art-prompts)
    
22. Advanced Prompt Techniques: Getting Hyper-Realistic Results from Your AI Photo Generator - Stockimg AI, access time: June 15, 2025, [https://stockimg.ai/blog/prompts/advanced-prompt-techniques-getting-hyper-realistic-results-from-your-ai-photo-generator](https://stockimg.ai/blog/prompts/advanced-prompt-techniques-getting-hyper-realistic-results-from-your-ai-photo-generator)
    
23. The Best 25 Stable Diffusion Prompts for Art Style - OpenArt, access time: June 15, 2025, [https://openart.ai/blog/post/stable-diffusion-prompts-for-art-style](https://openart.ai/blog/post/stable-diffusion-prompts-for-art-style)
    
24. Style Modifiers - Learn Prompting, accessed June 15, 2025, [https://learnprompting.org/ja/docs/image_prompting/style_modifiers](https://learnprompting.org/ja/docs/image_prompting/style_modifiers)
    
25. Style Modifiers: Enhance AI Image Generation with Specific Styles - Learn Prompting, access time: June 15, 2025, [https://learnprompting.org/docs/image_prompting/style_modifiers](https://learnprompting.org/docs/image_prompting/style_modifiers)
    
26. Best Stable Diffusion Lighting Prompts and Controls, accessed June 15, 2025, [https://www.aiarty.com/stable-diffusion-prompts/stable-diffusion-lighting-prompts.htm](https://www.aiarty.com/stable-diffusion-prompts/stable-diffusion-lighting-prompts.htm)
    
27. The Best 25 Midjourney Prompts for Lighting - OpenArt, access time: June 15, 2025, [https://openart.ai/blog/post/midjourney-prompts-for-lighting](https://openart.ai/blog/post/midjourney-prompts-for-lighting)
    
28. Lighting Prompts for Midjourney - Tory Barber, accessed June 15, 2025, [https://torybarber.com/lighting-prompts-midjourney/](https://torybarber.com/lighting-prompts-midjourney/)
    
29. 70+ AI art styles to use in your AI prompts - Zapier, access time: June 15, 2025, [https://zapier.com/blog/ai-art-styles/](https://zapier.com/blog/ai-art-styles/)
    
30. 50+ Midjourney Lighting Prompts for Great Effects, access time: June 15, 2025, [https://www.aiarty.com/midjourney-prompts/midjourney-lighting-prompts.htm](https://www.aiarty.com/midjourney-prompts/midjourney-lighting-prompts.htm)
    
31. Prompt and image attribute guide Generative AI on Vertex AI - Google Cloud, access time: June 15, 2025, [https://cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
    
32. 55+ Midjourney Prompts for Realistic Photos - Foundation Marketing, access time: June 15, 2025, [https://foundationinc.co/lab/midjourney-ai-prompts](https://foundationinc.co/lab/midjourney-ai-prompts)
    
33. Master Guide to Camera Angles and Shot Types for AI ... - MimicPC, access time: June 15, 2025, [https://www.mimicpc.com/learn/master-guide-to-camera-angles-and-shot-types-for-AI-image-and-video-generation](https://www.mimicpc.com/learn/master-guide-to-camera-angles-and-shot-types-for-AI-image-and-video-generation)
    
34. Prompt Style: Camera Shots and Angles - ARTSMART AI, Access Time: June 15, 2025, [https://artsmart.ai/docs/camera-shots-and-angles/](https://artsmart.ai/docs/camera-shots-and-angles/)
    
35. 5 tips for AI image generator camera position prompts - Venice AI, access time: June 15, 2025, [https://venice.ai/blog/5-tips-for-ai-image-generator-camera-position-prompts](https://venice.ai/blog/5-tips-for-ai-image-generator-camera-position-prompts)
    
36. Guide to Camera Angles in AI Images - Tengr.ai Blog, access time: June 15, 2025, [https://blog.tengrai.com/docs/camera-angles-in-ai-images/](https://blog.tengrai.com/docs/camera-angles-in-ai-images/)
    
37. Mastering Camera Positions for AI Art and Generative AI - Exploring AI, access time: June 15, 2025, [https://unimatrixz.com/blog/latent-space-camera-positions/](https://unimatrixz.com/blog/latent-space-camera-positions/)
    
38. AI Image Prompt Guide: How to Generate Jaw-Dropping Results - Magai, Accessed: June 15, 2025, [https://magai.co/ai-image-prompt-guide/](https://magai.co/ai-image-prompt-guide/)
    
39. AI Art Prompting Guide: Genres & Styles | Microsoft Copilot, accessed June 15, 2025, [https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/ai-art-prompting-guide/ai-genres-and-styles](https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/ai-art-prompting-guide/ai-genres-and-styles)
    
40. Different AI Art Styles for AI Image Generation - Revealed - StarryAI, access time: June 15, 2025, [https://starryai.com/en/blog/ai-art-styles](https://starryai.com/en/blog/ai-art-styles)
    
41. Exploring AI Art Styles: A Comprehensive List with Examples, accessed June 15, 2025, [https://www.aiartkingdom.com/post/ai-art-styles-list](https://www.aiartkingdom.com/post/ai-art-styles-list)
    
42. 10 Mind-blowing AI Art Styles You Must See - Tengr.ai Blog, access time: June 15, 2025, [https://blog.tengrai.com/docs/mind-blowing-ai-art-styles/](https://blog.tengrai.com/docs/mind-blowing-ai-art-styles/)
    
43. AI Art Styles - Guide for Prompting & Visual Styles : r/summonworlds - Reddit, accessed June 15, 2025, [https://www.reddit.com/r/summonworlds/comments/1ioq4q4/ai_art_styles_guide_for_prompting_visual_styles/](https://www.reddit.com/r/summonworlds/comments/1ioq4q4/ai_art_styles_guide_for_prompting_visual_styles/)
    
44. Mastering AI Image Prompting for AI Image Generation - Learn Prompting, access time: June 15, 2025, [https://learnprompting.org/docs/image_prompting/introduction](https://learnprompting.org/docs/image_prompting/introduction)
    
45. MidJourney-Styles-and-Keywords-Reference/Pages/MJ_V4 ..., accessed June 15, 2025, [https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Pages/MJ_V4/Style_Pages/Just_The_Style/Design_Styles.md](https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference/blob/main/Pages/MJ_V4/Style_Pages/Just_The_Style/Design_Styles.md)
    
46. Midlibrary: Midjourney AI Styles & SREF Codes Library. Midjourney Guides + Tools, accessed June 15, 2025, [https://midlibrary.io/](https://midlibrary.io/)
    
47. Mastering AI Art Prompts: An In-depth Guide to Effective and Creative Prompting, access time: June 15, 2025, [https://easy-peasy.ai/blog/mastering-ai-art-prompts-an-in-depth-guide-to-effective-and-creative-prompting](https://easy-peasy.ai/blog/mastering-ai-art-prompts-an-in-depth-guide-to-effective-and-creative-prompting)
    
48. The Most Complete Guide to Stable Diffusion Parameters - OpenArt, access time: June 15, 2025, [https://openart.ai/blog/post/the-most-complete-guide-to-stable-diffusion-parameters](https://openart.ai/blog/post/the-most-complete-guide-to-stable-diffusion-parameters)
    
49. 2025 Midjourney Prompts Cheat Sheet – Commands, Parameters, Tips, More, Access Time: June 15, 2025, [https://www.aiarty.com/midjourney-prompts/midjourney-prompts-cheat-sheet.htm](https://www.aiarty.com/midjourney-prompts/midjourney-prompts-cheat-sheet.htm)
    
50. List of Key Words-Negative Prompt - AI Visualizer - VectorWorks forum, access time: June 15, 2025, [https://forum.vectorworks.net/index.php?/topic/116408-list-of-key-words-negative-prompt/](https://forum.vectorworks.net/index.php?/topic/116408-list-of-key-words-negative-prompt/)
    
51. How to Use AI Negative Prompts for Better Outputs (+Examples) - ClickUp, access time: June 15, 2025, [https://clickup.com/blog/ai-negative-prompt-examples/](https://clickup.com/blog/ai-negative-prompt-examples/)
    
52. How to avoid AI artifacts? : r/fooocus - Reddit, Accessed: June 15, 2025, [https://www.reddit.com/r/fooocus/comments/1du8vqo/how_to_avoid_ai_artifacts/](https://www.reddit.com/r/fooocus/comments/1du8vqo/how_to_avoid_ai_artifacts/)
    
53. How to write effective text prompts to generate AI videos? - FlexClip Help Center, access time: June 15, 2025, [https://help.flexclip.com/en/articles/10326783-how-to-write-effective-text-prompts-to-generate-ai-videos](https://help.flexclip.com/en/articles/10326783-how-to-write-effective-text-prompts-to-generate-ai-videos)
    
54. Text-to-Video Prompt Guide: How to Prompt with Kling, accessed June 15, 2025, [https://learn.rundiffusion.com/text-to-video-prompt-guide-how-to-prompt-with-kling/](https://learn.rundiffusion.com/text-to-video-prompt-guide-how-to-prompt-with-kling/)
    
55. How to Write an Effective AI Video Prompt for HunyuanVideo - MimicPC, access time: June 15, 2025, [https://www.mimicpc.com/learn/how-to-write-an-effective-ai-video-prompt-for-hunyuan-video](https://www.mimicpc.com/learn/how-to-write-an-effective-ai-video-prompt-for-hunyuan-video)
    
56. AI Video Prompt Writing: Structured Templates and Description for Better AI Clips - Reddit, Accessed June 15, 2025, [https://www.reddit.com/r/StableDiffusion/comments/1j4yhlb/ai_video_prompt_writing_structured_templates_and/](https://www.reddit.com/r/StableDiffusion/comments/1j4yhlb/ai_video_prompt_writing_structured_templates_and/)
    
57. Best Practices for Text Prompts to Generate 3D Motion Animation - DeepMotion, accessed June 15, 2025, [https://www.deepmotion.com/article/saymotion-text-prompt-guide](https://www.deepmotion.com/article/saymotion-text-prompt-guide)
    
58. Gen-4 Video Prompting Guide - Runway, accessed June 15, 2025, [https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide](https://help.runwayml.com/hc/en-us/articles/39789879462419-Gen-4-Video-Prompting-Guide)
    
59. Writing effective text prompts for video generation - Adobe Support, access time: June 15, 2025, [https://helpx.adobe.com/firefly/work-with-audio-and-video/work-with-video/writing-effective-text-prompts-for-video-generation.html](https://helpx.adobe.com/firefly/work-with-audio-and-video/work-with-video/writing-effective-text-prompts-for-video-generation.html)
    
60. Crafting Cinematic Sora Video Prompts: A complete guide - GitHub Gist, accessed June 15, 2025, [https://gist.github.com/ruvnet/e20537eb50866b2d837d4d13b066bd88](https://gist.github.com/ruvnet/e20537eb50866b2d837d4d13b066bd88)
    
61. How to write MiniMax Video AI prompts - discover 4 easy tricks - Film Art ai, access time: June 15, 2025, [https://filmart.ai/minimax-video-ai-prompts/](https://filmart.ai/minimax-video-ai-prompts/)
    
62. How to write prompts for better footage in Runway Gen-2 - YouTube, access time: June 15, 2025, [https://www.youtube.com/watch?v=kgWd1iMv8Zw](https://www.youtube.com/watch?v=kgWd1iMv8Zw)
    
63. Animate Your Own Images with AI Image and Video - Artlist, access time: June 15, 2025, [https://help.artlist.io/hc/en-us/articles/27181914821149-Animate-Your-Own-Images-with-AI-Image-and-Video](https://help.artlist.io/hc/en-us/articles/27181914821149-Animate-Your-Own-Images-with-AI-Image-and-Video)
    
64. Free Image to Video AI Generator - VEED.IO, access time: June 15, 2025, [https://www.veed.io/tools/image-to-video-ai](https://www.veed.io/tools/image-to-video-ai)
    
65. AI Image Animator - Animate Old Photos, Portraits & Paintings | Vidu AI, accessed June 15, 2025, [https://www.vidu.com/ai-image-animator](https://www.vidu.com/ai-image-animator)
    
66. A Complete Guide to Runway - Learn Prompting, accessed June 15, 2025, [https://learnprompting.org/blog/guide-runwayml](https://learnprompting.org/blog/guide-runwayml)
    
67. Animate Anything with AI with 10+ Killer Motion Prompts for Runway 4.0 & Midjourney, access time: June 15, 2025, [https://selldone.com/blog/ai-animation-prompts-runway-midjourney-guide-1274](https://selldone.com/blog/ai-animation-prompts-runway-midjourney-guide-1274)
    
68. Video Style Transfer - Morph Studio, access time: June 15, 2025, [https://www.morphstudio.com/video-style-transfer](https://www.morphstudio.com/video-style-transfer)
    
69. Image to Video AI Generator - Make Video from Photos - DomoAI, access time: June 15, 2025, [https://domoai.app/ai-tools/image-to-video](https://domoai.app/ai-tools/image-to-video)
    
70. Image Animation AI Generator - Animate Photos Online - DomoAI, access time: June 15, 2025, [https://domoai.app/ai-tools/image-animation](https://domoai.app/ai-tools/image-animation)
    
71. Unlock the FULL POTENTIAL of Pika Labs // AI Filmmaking Tutorial - YouTube, access time: June 15, 2025, [https://www.youtube.com/watch?v=GGRPYrxbVXc](https://www.youtube.com/watch?v=GGRPYrxbVXc)
    
72. Pika vs Runway Animation Comparison! - Watch Before You Pay for a Subscription, access time: June 15, 2025, [https://www.youtube.com/watch?v=-5RjuNOtjnw](https://www.youtube.com/watch?v=-5RjuNOtjnw)
    
73. Struggling to keep character consistency in AI-Generated images : r/dalle2 - Reddit, access time: June 15, 2025, [https://www.reddit.com/r/dalle2/comments/1id1ept/struggling_to_keep_character_consistency_in/](https://www.reddit.com/r/dalle2/comments/1id1ept/struggling_to_keep_character_consistency_in/)
    
74. Mastering Character Consistency in AI-Generated Images and Videos GoTranscript, accessed June 15, 2025, [https://gotranscript.com/public/mastering-character-consistency-in-ai-generated-images-and-videos](https://gotranscript.com/public/mastering-character-consistency-in-ai-generated-images-and-videos)
    
75. Midjourney vs. Stable Diffusion vs. DALL·E 3 for Storyboarding | Prescene Blog, accessed June 15, 2025, [https://www.prescene.ai/blog/midjourney-vs-stable-diffusion-vs-dalle-for-storyboarding](https://www.prescene.ai/blog/midjourney-vs-stable-diffusion-vs-dalle-for-storyboarding)
    
76. Runway Vs Pika Labs: The Ultimate AI Showdown in 2024 - Fahim AI, access time: June 15, 2025, [https://www.fahimai.com/runway-vs-pika-labs](https://www.fahimai.com/runway-vs-pika-labs)
    
77. Pika vs Runway: text to video comparison - Definition, access time: June 15, 2025, [https://video.thisisdefinition.com/insights/pika-vs-runway](https://video.thisisdefinition.com/insights/pika-vs-runway)
    
78. Pika vs Runway, access time: June 15, 2025, [https://pikalabs.org/pika-vs-runway/](https://pikalabs.org/pika-vs-runway/)
    
79. RunwayML Prompt Guide: How to Prompt in Runway (Examples Included) - Pollo AI, access time: June 15, 2025, [https://pollo.ai/hub/runway-prompt-guide](https://pollo.ai/hub/runway-prompt-guide)
    
80. Kling vs. Runway Gen 3 vs. Luma Dream Machine vs. Pixverse - YouTube, access time: June 15, 2025, [https://www.youtube.com/watch?v=NpvQReYeDHw](https://www.youtube.com/watch?v=NpvQReYeDHw)
    
81. How to prompt within Runway, access time: June 15, 2025, [https://help.runwayml.com/hc/en-us/articles/23996932381203-How-to-prompt-within-Runway](https://help.runwayml.com/hc/en-us/articles/23996932381203-How-to-prompt-within-Runway)
    
82. Runway vs Kling - which one is better? : r/runwayml - Reddit, Accessed: June 15, 2025, [https://www.reddit.com/r/runwayml/comments/1foq0qv/runway_vs_kling_which_one_is_better/](https://www.reddit.com/r/runwayml/comments/1foq0qv/runway_vs_kling_which_one_is_better/)
    
83. Kling vs. Runway vs. Sora vs. Lumalabs: A Deep Dive into AI Video Generation Platforms - David Harris Web Designer, accessed June 15, 2025, [https://davidharris.uk/2025/04/11/kling-vs-runway-vs-sora-vs-lumalabs-a-deep-dive-into-ai-video-generation-platforms/](https://davidharris.uk/2025/04/11/kling-vs-runway-vs-sora-vs-lumalabs-a-deep-dive-into-ai-video-generation-platforms/)
    
84. Lyria music generation prompt guide | Generative AI on Vertex AI - Google Cloud, access time: June 15, 2025, [https://cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide](https://cloud.google.com/vertex-ai/generative-ai/docs/music/music-gen-prompt-guide)
    
85. Prompt Like a Master | Udio Help Center, accessed June 15, 2025, [https://help.udio.com/en/articles/10716541-prompt-like-a-master](https://help.udio.com/en/articles/10716541-prompt-like-a-master)
    
86. 5 Key Elements of an Effective AI Music Prompt - SendFame, access time: June 15, 2025, [https://sendfame.com/blog/ai-music-prompt](https://sendfame.com/blog/ai-music-prompt)
    
87. Best Prompts for AI Music Generators: Beginner to Advanced - Altorise, access time: June 15, 2025, [https://altorise.com/hub/best-prompts-for-ai-music-generators/](https://altorise.com/hub/best-prompts-for-ai-music-generators/)
    
88. Suno AI Prompt Guide (A–C) – AI Music Prompting Examples - Jack Righteous, accessed June 15, 2025, [https://jackrighteous.com/blogs/guides-using-suno-ai-music-creation/bookmark-this-suno-ai-a-z-prompts-guide-a-to-c](https://jackrighteous.com/blogs/guides-using-suno-ai-music-creation/bookmark-this-suno-ai-a-z-prompts-guide-a-to-c)
    
89. A Complete How-To Guide to Suno: The Easiest Way to Create Personalized Music, access time: June 15, 2025, [https://learnprompting.org/blog/guide-suno](https://learnprompting.org/blog/guide-suno)
    
90. AI Sound Effect Generator - Captions, access time: June 15, 2025, [https://www.captions.ai/features/ai-sound-effect-generator](https://www.captions.ai/features/ai-sound-effect-generator)
    
91. ElevenLabs Text to Sound Effect Prompt Generator, access time: June 15, 2025, [https://audio-generation-plugin.com/elevenlabs-text-to-sound-effect-prompt-generator/](https://audio-generation-plugin.com/elevenlabs-text-to-sound-effect-prompt-generator/)
    
92. Environment-Aware TTS Just Sounds Better: The Key to Natural-Sounding AI | Deepgram, accessed June 15, 2025, [https://deepgram.com/learn/environment-aware-tts-just-sounds-better-the-key-to-natural-sounding-ai](https://deepgram.com/learn/environment-aware-tts-just-sounds-better-the-key-to-natural-sounding-ai)
    
93. Free AI Sound Effect Generator - Create Custom Sound Effects Online - MyEdit, access time: June 15, 2025, [https://myedit.online/en/audio-editor/ai-sound-effect-generator](https://myedit.online/en/audio-editor/ai-sound-effect-generator)
    
94. how to inpaint or outpaint in dall-e using chatgpt, access time: June 15, 2025, [https://www.ai-outpainting.com/en/blogs/how%20to%20inpaint%20or%20outpaint%20in%20dall-e%20using%20chatgpt/](https://www.ai-outpainting.com/en/blogs/how%20to%20inpaint%20or%20outpaint%20in%20dall-e%20using%20chatgpt/)
    
95. Outpainting prompts - Amazon Nova - AWS Documentation, accessed June 15, 2025, [https://docs.aws.amazon.com/nova/latest/userguide/prompting-image-outpainting.html](https://docs.aws.amazon.com/nova/latest/userguide/prompting-image-outpainting.html)
    
96. Inpainting, Outpainting, and Bounding Box - Invoke Support Portal, Accessed: June 15, 2025, [https://support.invoke.ai/support/solutions/articles/151000096702-inpainting-outpainting-and-bounding-box](https://support.invoke.ai/support/solutions/articles/151000096702-inpainting-outpainting-and-bounding-box)
    
97. AI Image Editing - OpenArt Inpainting Tutorial 2025 - YouTube, access time: June 15, 2025, [https://www.youtube.com/watch?v=2Jp_yh6RSJ8](https://www.youtube.com/watch?v=2Jp_yh6RSJ8)
    
98. How to Use AI Outpainting: A Complete Guide to Expanding Your Art, accessed June 15, 2025, [https://artsmart.ai/blog/how-to-use-ai-outpainting/](https://artsmart.ai/blog/how-to-use-ai-outpainting/)
    
99. How to Use Wan 2.1 for Video Style Transfer: A Step-by-Step Guide - Learn Think Diffusion, access time: June 15, 2025, [https://learn.thinkdiffusion.com/wan-2-1-video-style-transfer-guide/](https://learn.thinkdiffusion.com/wan-2-1-video-style-transfer-guide/)
    
100. Video to Video Style Transfer With Diffex Desktop UI - Next Diffusion, access time: June 15, 2025, [https://www.nextdiffusion.ai/tutorials/video-to-video-style-transfer-with-diffex-desktop-ui](https://www.nextdiffusion.ai/tutorials/video-to-video-style-transfer-with-diffex-desktop-ui)
    
101. AI Video Style Transfer - Transform Video with Any Style Free - DomoAI, access time: June 15, 2025, [https://domoai.app/quick-apps/ai-video-style-transfer](https://domoai.app/quick-apps/ai-video-style-transfer)
    
102. Text-to-Video: Master Prompts for AI Video - Nugg.ad, accessed June 15, 2025, [https://nugg.ad/en/text-to-video-become-an-expert-in-ai-video-generation/](https://nugg.ad/en/text-to-video-become-an-expert-in-ai-video-generation/)
    
103. Video Inpainting with FlowEdit : r/StableDiffusion - Reddit, access time: June 15, 2025, [https://www.reddit.com/r/StableDiffusion/comments/1j4bipc/video_inpainting_with_flowedit/](https://www.reddit.com/r/StableDiffusion/comments/1j4bipc/video_inpainting_with_flowedit/)
    
104. How to use Claude Artifacts: 7 Ways with examples | Guide 2025 - Albato, access time: June 15, 2025, [https://albato.com/blog/publications/how-to-use-claude-artifacts-guide](https://albato.com/blog/publications/how-to-use-claude-artifacts-guide)
    
105. Prompt Engineering for Stable Diffusion - Portkey, accessed June 15, 2025, [https://portkey.ai/blog/prompt-engineering-for-stable-diffusion](https://portkey.ai/blog/prompt-engineering-for-stable-diffusion)
    
106. Stable Diffusion Prompt Guide: Basic to Advanced & Examples - Aiarty Image Enhancer, access time: June 15, 2025, [https://www.aiarty.com/stable-diffusion-prompts/stable-diffusion-prompt-guide.htm](https://www.aiarty.com/stable-diffusion-prompts/stable-diffusion-prompt-guide.htm)
    
107. Best Stable Diffusion Prompts Guide with Examples - Mockey AI, access time: June 15, 2025, [https://mockey.ai/blog/stable-diffusion-prompts-guide/](https://mockey.ai/blog/stable-diffusion-prompts-guide/)
    
108. Prompt Syntax for Stable Diffusion: FAQ - Generative Labs, accessed June 15, 2025, [https://www.generativelabs.co/post/prompt-syntax-for-stable-diffusion-faq](https://www.generativelabs.co/post/prompt-syntax-for-stable-diffusion-faq)
    
109. Stable Diffusion Weights: 0–1 Beginner's Guide - Aiarty Image Enhancer, accessed June 15, 2025, [https://www.aiarty.com/stable-diffusion-guide/stable-diffusion-weights.htm](https://www.aiarty.com/stable-diffusion-guide/stable-diffusion-weights.htm)
    
110. Varying Prompt Weight with Stable Diffusion - PromptZone, access time: June 15, 2025, [https://www.promptzone.com/stabletom/varying-prompt-weight-with-stable-diffusion-2nf1](https://www.promptzone.com/stabletom/varying-prompt-weight-with-stable-diffusion-2nf1)
    
111. All Midjourney commands in a cheat sheet, with examples - Aituts, access time: June 15, 2025, [https://aituts.com/midjourney-cheatsheet/](https://aituts.com/midjourney-cheatsheet/)
    
112. Midjourney Prompts 101 (With V6 Examples for 2025) - Printify, access time: June 15, 2025, [https://printify.com/blog/midjourney-prompts/](https://printify.com/blog/midjourney-prompts/)
    
113. Midjourney vs. Stable Diffusion For Marketing: Which One's Better? - AI Tools, access time: June 15, 2025, [https://www.godofprompt.ai/blog/midjourney-vs-stable-diffusion-for-marketing-which-ones-better](https://www.godofprompt.ai/blog/midjourney-vs-stable-diffusion-for-marketing-which-ones-better)
    
114. Stable Diffusion vs Midjourney: Which Generates Better Images? - AutoGPT, access time: June 15, 2025, [https://autogpt.net/stable-diffusion-vs-midjourney-which-generates-better-images/](https://autogpt.net/stable-diffusion-vs-midjourney-which-generates-better-images/)
    
115. Midjourney vs. Stable Diffusion: Which Should You Use? - viso.ai, access time: June 15, 2025, [https://viso.ai/deep-learning/midjourney-stable-diffusion/](https://viso.ai/deep-learning/midjourney-stable-diffusion/)
    
116. Style Reference – Midjourney, accessed June 15, 2025, [https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference)
    
117. Midjourney vs. Stable Diffusion vs. Dall-e – Which is the Best AI Art Tool? - Gemoo, access time: June 15, 2025, [https://gemoo.com/blog/midjourney-vs-stable-diffusion-vs-dalle.htm](https://gemoo.com/blog/midjourney-vs-stable-diffusion-vs-dalle.htm)
    
118. Midjourney vs Stable Diffusion: 2025's Creative Clash - eWEEK, Accessed June 15, 2025, [https://www.eweek.com/artificial-intelligence/midjourney-vs-stable-diffusion/](https://www.eweek.com/artificial-intelligence/midjourney-vs-stable-diffusion/)
    
119. Midjourney vs. Stable Diffusion: A Comprehensive Comparison Guide - Aiarty, accessed June 15, 2025, [https://www.aiarty.com/midjourney-guide/midjourney-vs-stable-diffusion.htm](https://www.aiarty.com/midjourney-guide/midjourney-vs-stable-diffusion.htm)
    
120. Best Architecture Prompts for Midjourney and Stable Diffusion - MyArchitectAI, access time: June 15, 2025, [https://www.myarchitectai.com/blog/midjourney-architecture-prompts](https://www.myarchitectai.com/blog/midjourney-architecture-prompts)
    
121. Midjourney vs. Stable Diffusion: A Comprehensive Comparison Guide - Aiarty, accessed June 15, 2025, [https://www.aiarty.com/midjourney-guide/midjourney-vs-stable-diffusion-vs-dall-e.htm](https://www.aiarty.com/midjourney-guide/midjourney-vs-stable-diffusion-vs-dall-e.htm)
    
122. Prompt Basics - Midjourney, accessed June 15, 2025, [https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics](https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics)
    
123. Midjourney vs Stable Diffusion: Which AI image generator should you use? - Content Beta, access time: June 15, 2025, [https://www.contentbeta.com/blog/midjourney-vs-stable-diffusion/](https://www.contentbeta.com/blog/midjourney-vs-stable-diffusion/)
    

  
**