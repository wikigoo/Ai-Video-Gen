
Creating a high-quality knowledge base document ensures information is accessible, accurate, and easy to navigate—both for users and AI chatbots. This guide covers best practices, formatting rules, and practical tips to help you structure and write effective articles using Markdown.

---

## 📑 1. Document Planning

### 🎯 Define Purpose and Audience

- **Purpose**: Clarify whether the article is instructional, explanatory, reference-based, or a troubleshooting guide.
    
- **Audience**: Determine the reader's expertise level (Beginner, Intermediate, Advanced).
    

### 🧱 Choose a Template

Start with a pre-defined template that fits the document type:

- **Standard Page Template** for general info
    
- **Guide Template** for how-to tutorials
    
- **Article Template** for knowledge-heavy pieces
    
- **Category Hub** for overviews/indexes
    

Reference: [[Longform Knowledge Base Template]]

---

## 📝 2. Markdown Formatting Rules

### 🔤 Headings and Subheadings

Use headings to create hierarchy and aid navigation:

```markdown
# Title (H1)
## Main Section (H2)
### Subsection (H3)
#### Detail Layer (H4)
```

### 🔢 Lists

- Use `-` or `*` for bullet points
    
- Use `1.`, `2.` for ordered steps
    

### 🧱 Tables

Structure comparisons, configurations, or summaries:

```markdown
| Feature | Description | Required? |
|---------|-------------|-----------|
| Login | User authentication method | Yes |
| API Key | Token for secure calls | Optional |
```

### 🖼️ Images and Diagrams

Use visual aids where helpful:

```markdown
![Alt Text](https://example.com/image.png)
```

### 🔗 Links

```markdown
[Link Text](https://example.com)
```

Use internal links for navigation: `[[Related Article Name]]`

---

## ✍️ 3. Writing Best Practices

### ✂️ Short Sections

- Keep sections under 300 words
    
- Use bullet points or tables for dense info
    

### 🔍 Clear Language

- Use plain English
    
- Avoid jargon (define it if used)
    
- Prefer active voice
    

### 📌 Structure for Scan-Reading

- Begin with a **summary**
    
- Use **headings** to chunk content
    
- Include a **table of contents**
    

### 📦 Examples and Scenarios

```markdown
**Example:**
```

Code block, command, or real-world use

```
**Expected Result:**
Explanation of what should happen.
```

### ⚠️ Common Errors and Fixes

Use tables to highlight typical mistakes:

```markdown
| Issue | Cause | Fix |
|-------|-------|-----|
| Page not loading | URL typo | Check and correct URL |
```

---

## 🧷 4. Source Integration & Referencing

### 🔎 Internal Knowledge

- Link to related guides: `[[Using GitHub Wiki]]`
    
- Add "Related Articles" section at the end
    

### 🌐 External References

Use reliable sources for credibility:

```markdown
[GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)
```

### 📚 Citation Format

```markdown
1. Author, A. (Year). *Title*. Source.
```

---

## 📂 5. Metadata and Classification

Add front matter YAML metadata block:

```yaml
---
title: "Using GitHub Wiki"
author: "@editor"
created_date: "2025-05-08 12:00:00 UTC"
last_modified: "2025-05-08 12:00:00 UTC"
category: "Documentation"
subcategory: "Tools"
status: "Approved"
tags: [github, wiki, markdown]
---
```

---

## 📖 6. Document Anatomy Checklist

|Section|Description|Required?|
|---|---|---|
|Metadata|Front matter with classification|✅|
|Summary|Overview of the topic|✅|
|Table of Contents|List of section links|✅|
|Main Content|Step-by-step, structured info|✅|
|Examples|Show real-world usage|✅|
|Common Issues|Errors and fixes|✅|
|Resources|Links and references|✅|
|Review Log|Reviewer and last updated|✅|

---

## 📌 7. Sample Article Structure

````markdown
# How to Set Up OBS for Streaming

## Overview
This guide helps users set up OBS Studio for live streaming. It covers installation, configuration, and connecting to platforms like YouTube and Twitch.

## Prerequisites
- OBS Studio 29.0+
- Streaming account (YouTube, Twitch, etc.)

## Steps
1. Download OBS from [obsproject.com](https://obsproject.com)
2. Run auto-configuration wizard
3. Add sources (e.g., Display Capture, Audio)
4. Enter stream key from your platform

## Example
```obs
[Setting up webcam and mic]
````

## Resources

- [[OBS Troubleshooting Guide]]
    
- [OBS Wiki](https://obsproject.com/wiki/)
    

```

---

## ✅ 8. Review and Maintenance Tips

- **Self-review**: Read aloud, use Markdown preview
- **Automated checks**: Use linters or content validator scripts
- **Regular updates**: Schedule content review every 3–6 months

---

## 📚 Resources and Templates
- [[Longform Knowledge Base Template]]
- [[Guide Template for Knowledge Base Documentation]]
- [GitHub Docs on Markdown](https://docs.github.com/en)
- [Markdown Live Preview](https://markdownlivepreview.com/)

---

> **Reminder**: Well-written knowledge base articles enhance both user self-service and AI chatbot performance.

*Last reviewed: 2025-05-08 by @editor*

```