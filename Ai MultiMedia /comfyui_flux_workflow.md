# گردش کار تولید تصاویر رئالیستی خبری با ComfyUI و Flux

## فاز اول: آماده‌سازی سیستم

### نصب و پیکربندی

**سیستم مورد نیاز:**
- GPU: RTX 3060 (12GB VRAM) یا بالاتر
- RAM: 32GB حداقل (64GB توصیه شده)
- Storage: 100GB فضای خالی SSD

**فایل‌های ضروری:**
1. **ComfyUI**: نصب از مخزن رسمی GitHub
2. **Flux Dev Model**: `flux1-dev.safetensors` → `ComfyUI/models/diffusion_models/`
3. **Text Encoders**: 
   - `t5xxl_fp16.safetensors` → `ComfyUI/models/text_encoders/`
   - `clip_l.safetensors` → `ComfyUI/models/text_encoders/`
4. **VAE**: `ae.safetensors` → `ComfyUI/models/vae/`

### تنظیمات بهینه‌سازی

```yaml
# در فایل extra_model_paths.yaml
flux:
  base_path: ./models/flux/
  checkpoints: ./models/diffusion_models/
  text_encoders: ./models/text_encoders/
  vae: ./models/vae/
```

## فاز دوم: طراحی Workflow اصلی

### گره‌های اساسی (Core Nodes)

1. **Load Diffusion Model**
   - مدل: `flux1-dev.safetensors`
   - weight_dtype: `fp16` (برای کیفیت بالا) یا `fp8` (برای صرفه‌جویی حافظه)

2. **Dual CLIP Loader**
   - clip_name1: `t5xxl_fp16.safetensors`
   - clip_name2: `clip_l.safetensors`

3. **VAE Loader**
   - vae_name: `ae.safetensors`

4. **Empty Latent Image**
   - resolution: 1024x1024 (استاندارد) یا 1920x1080 (16:9) یا 1080x1920 (9:16)

### گره‌های پیشرفته برای کیفیت حرفه‌ای

5. **CLIP Text Encode (Positive)**
   - Prompt engineering برای تصاویر خبری

6. **CLIP Text Encode (Negative)**
   - کنترل کیفیت و حذف عناصر ناخواسته

7. **BasicScheduler**
   - model: از Load Diffusion Model
   - scheduler: `beta` (بهترین کیفیت)
   - steps: 20-25 (برای کیفیت بالا)

8. **BasicGuider**
   - conditioning: از positive prompt
   - cfg: 1.0 (استاندارد Flux)

9. **RandomNoise**
   - seed: manual control برای consistency

10. **SamplerCustomAdvanced**
    - noise: از RandomNoise
    - guider: از BasicGuider
    - sampler: از BasicScheduler
    - latent_image: از Empty Latent

11. **VAE Decode**
    - samples: از SamplerCustomAdvanced
    - vae: از VAE Loader

12. **Save Image**
    - images: از VAE Decode

## فاز سوم: تنظیمات ویژه تصاویر خبری

### Prompt Engineering برای محتوای خبری

**الگوی کلی prompt:**
```
[subject description], [setting/location], [lighting conditions], [style modifiers], [quality enhancers]
```

**مثال برای چهره سیاستمدار:**
```
Positive: "Professional headshot portrait of middle-aged politician, formal business attire, neutral expression, studio lighting, sharp focus, photorealistic, high detail, diplomatic setting, 4k resolution, canon 5d mark iv style"

Negative: "cartoon, anime, drawing, low quality, blurry, distorted face, multiple faces, weird hands, unrealistic proportions, over-saturated, artificial lighting"
```

### تنظیمات کیفیت حرفه‌ای

**BasicScheduler Settings:**
- Steps: 25 (بالاترین کیفیت)
- Scheduler: `beta` یا `ddim_uniform`
- Denoise: 1.0

**Resolution Guidelines:**
- پرتره شخصی: 1024x1024
- تصاویر خبری افقی: 1920x1080
- Instagram Stories: 1080x1920
- پوستر خبری: 1080x1350

## فاز چهارم: Post-Processing حرفه‌ای

### گره‌های تکمیلی

1. **ImageScale** (در صورت نیاز به تغییر اندازه)
2. **Color Correct** (تنظیم رنگ و کنتراست)
3. **Unsharp Mask** (افزایش وضوح)

### ControlNet برای کنترل دقیق

```
Load ControlNet Model → Apply ControlNet → Connect to workflow
```

**کاربردهای مفید:**
- **Canny**: کنترل خطوط و لبه‌ها
- **Depth**: کنترل عمق میدان
- **OpenPose**: کنترل پوزیشن بدن

## فاز پنجم: بهینه‌سازی عملکرد

### تنظیمات حافظه

**برای سیستم‌های محدود:**
```bash
python main.py --force-fp16 --lowvram
```

**برای عملکرد بهینه:**
```bash
python main.py --highvram --fp16-vae
```

### مدیریت مدل‌ها

1. **FP8 Checkpoint Version** (برای صرفه‌جویی حافظه):
   - `flux1-dev-fp8.safetensors` → `ComfyUI/models/checkpoints/`
   - استفاده از Load Checkpoint معمولی
   - CFG: 1.0

2. **Model Switching** (برای پروژه‌های مختلف):
   - Flux Dev: کیفیت بالا، زمان بیشتر
   - Flux Schnell: سرعت بالا، 4 مرحله

## فاز ششم: Templates آماده برای خبرگزاری

### Template 1: پرتره مقامات رسمی
```
Workflow: Load Diffusion → Dual CLIP → Positive/Negative Prompt → Scheduler → Sampler → VAE Decode → Save
Prompt Focus: "Official portrait, formal attire, neutral background, professional lighting"
```

### Template 2: صحنه‌های خبری
```
Enhanced Workflow: + ControlNet Canny + Image Scale + Color Correct
Prompt Focus: "News scene, realistic environment, documentary style, photojournalism"
```

### Template 3: اینفوگرافیک خبری
```
Special Workflow: + Text Integration + Layout Control + Brand Elements
Prompt Focus: "Clean infographic style, readable text, professional layout"
```

## نکات حرفه‌ای و بهترین شیوه‌ها

### کنترل کیفیت
1. **Seed Management**: ثبت seed برای تکرارپذیری
2. **Batch Processing**: تولید چندین variation
3. **Quality Check**: بررسی دقت تاریخی و فرهنگی

### سازگاری با استانداردهای خبری
1. **Fact Verification**: اطمینان از دقت بصری
2. **Cultural Sensitivity**: رعایت ارزش‌های فرهنگی
3. **Technical Standards**: کیفیت مناسب برای چاپ و وب

### مدیریت پروژه
1. **Workflow Templates**: ذخیره template های آماده
2. **Version Control**: نگهداری نسخه‌های مختلف
3. **Asset Management**: سازماندهی فایل‌های تولیدی

## عیب‌یابی رایج

### مشکلات حافظه
- کاهش resolution
- استفاده از FP8 models
- فعال‌سازی `--lowvram`

### مشکلات کیفیت
- افزایش تعداد steps
- تنظیم مجدد prompts
- استفاده از ControlNet

### مشکلات سازگاری
- بررسی version های model
- به‌روزرسانی ComfyUI
- نصب مجدد dependencies

---

**نتیجه‌گیری:** این workflow برای تولید تصاویر رئالیستی با کیفیت حرفه‌ای مناسب محتوای خبری طراحی شده و قابلیت تطبیق با نیازهای مختلف خبرگزاری‌ها را دارد.
