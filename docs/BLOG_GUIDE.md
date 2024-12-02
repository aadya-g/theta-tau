# Blog Chair Guide

This guide provides instructions for the Blog Chair on how to create and manage blog posts for the Theta Tau website.

## Creating a New Blog Post

### Step 1: Create the Blog Post File

1. Navigate to the `src/content/blog` directory
2. Create a new Markdown file with the format: `YYYY-MM-DD-title-of-post.md`
   - Example: `2024-01-15-winter-rush-recap.md`

### Step 2: Add Front Matter

At the top of your Markdown file, include the following front matter:

```yaml
---
title: "Your Blog Post Title"
date: YYYY-MM-DD
author: "Your Name"
image: "/images/blog/your-image.jpg"
---
```

### Step 3: Add Content

Write your blog post content using Markdown formatting:

- Use `#` for headings (## for h2, ### for h3, etc.)
- Use `*` or `_` for *italics*
- Use `**` or `__` for **bold**
- Use `-` or `*` for bullet points
- Use `1.` for numbered lists
- Use `[text](url)` for links
- Use `![alt text](image-url)` for images

Example:
```markdown
## Event Recap

Last weekend, our chapter hosted the Winter Rush event. The turnout was amazing, with over 50 potential pledges attending!

### Highlights
- Interactive engineering workshops
- Alumni networking session
- Team building activities

![Winter Rush Group Photo](/images/blog/winter-rush-2024.jpg)
```

### Step 4: Adding Images

1. Save your images in the `public/blog` directory
2. Use descriptive names for your images (e.g., `winter-rush-2024.jpg`)
3. Reference images in your blog post using the path `/blog/your-image.jpg`

#### Image Formatting Options

You have two ways to add images to your blog posts:

1. **Simple Markdown Format**
   ```markdown
   ![Alt Text](/your-image.jpg)
   ```
   Example:
   ```markdown
   ![Sami](/image-1-1-768x1024.png)
   ```

2. **Grid Layout with Styling**
   Use this format for more control over image layout and styling:
   ```jsx
   <div className="grid grid-cols-2 gap-4 my-6 max-w-2xl mx-auto">
     <img
       src="/your-image-1.jpg"
       alt="Description of Image 1"
       className="rounded-lg shadow-md w-full max-h-40 object-cover"
     />
     <img
       src="/your-image-2.jpg"
       alt="Description of Image 2"
       className="rounded-lg shadow-md w-full max-h-40 object-cover"
     />
   </div>
   ```

   For a single image in grid layout:
   ```jsx
   <div className="grid grid-cols-2 gap-4 my-6 max-w-2xl mx-auto">
     <img
       src="/your-image.jpg"
       alt="Description of Image"
       className="rounded-lg shadow-md w-full max-h-40 object-cover"
     />
   </div>
   ```

#### Styling Classes Explained (Definitely use ChatGPT for this):
- `grid grid-cols-2`: Creates a 2-column grid layout
- `gap-4`: Adds spacing between grid items
- `my-6`: Adds vertical margin
- `max-w-2xl`: Sets maximum width
- `mx-auto`: Centers the grid
- `rounded-lg`: Rounds the corners of images
- `shadow-md`: Adds a medium shadow effect
- `w-full`: Makes image take full width of its container
- `max-h-40`: Sets maximum height
- `object-cover`: Ensures image covers its container while maintaining aspect ratio

### Step 5: Preview and Test

1. Run the development server:
   ```bash
   npm run dev
   ```
2. Visit `http://localhost:3000/blog` to preview your post
3. Check that:
   - All images load correctly
   - Formatting appears as intended
   - Links work properly

## Getting Started with Git

### Initial Setup

1. Install Git on your computer if you haven't already:
   - Download from [https://git-scm.com/downloads](https://git-scm.com/downloads)
   - Follow the installation instructions for your operating system

2. Configure Git with your information:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### Cloning the Repository

1. Open Terminal (Mac/Linux) or Command Prompt/PowerShell (Windows)

2. Navigate to where you want to store the project:
   ```bash
   cd Documents/Projects  # or your preferred directory
   ```

3. Clone the repository:
   ```bash
   git clone https://github.com/[your-website-chair-github-username]/theta-tau.git
   cd theta-tau
   ```

4. Install project dependencies:
   ```bash
   npm install
   ```

### Making Changes

1. Always start by getting the latest changes:
   ```bash
   git pull origin main
   ```

2. Make your changes (add blog post, images, etc.)

3. Check which files you've changed:
   ```bash
   git status
   ```

4. Stage your changes:
   ```bash
   git add .                                     # for all changes
   ```

5. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add blog post: Winter Rush 2024 Recap"
   ```

6. Push your changes to GitHub:
   ```bash
   git push origin main
   ```

### Common Git Commands

- `git status`: Check the status of your changes
- `git diff`: See detailed changes in files
- `git log`: View commit history
- `git pull`: Get latest changes from remote repository

### Tips

1. Always pull before making new changes
2. Write clear commit messages
3. Test your changes locally before pushing
4. Ask the website chair for help if you encounter any Git issues

## Best Practices

1. **Images**
   - Optimize images before uploading (compress large files)
   - Use JPG for photos, PNG for graphics with transparency
   - Keep image file sizes under 500KB when possible

2. **Content**
   - Write engaging, clear content
   - Include relevant images to break up text
   - Use proper grammar and spelling
   - Keep paragraphs concise
   - Include a call-to-action when appropriate

3. **SEO**
   - Use descriptive titles
   - Include relevant tags
   - Write meaningful image alt text
   - Add a clear meta description

## Common Issues and Solutions

### Images Not Displaying
- Verify the image path is correct
- Check that the image exists in the correct directory
- Ensure the image filename matches exactly (case-sensitive)

### Formatting Issues
- Make sure there's a blank line between paragraphs
- Check that front matter is properly formatted with three dashes (`---`)
- Verify Markdown syntax is correct

## Need Help?

If you encounter any issues or have questions:
1. Use ChatGPT or any AI chatbot
2. Ask the website chair
2. Review the git commit history for examples of previous blog posts


Remember to commit and push your changes to the repository after creating or updating blog posts!
