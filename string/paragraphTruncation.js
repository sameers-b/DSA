// Truncate a paragraph to the nearest word under a character limit.

function truncate(paragraph, limit) {
    if (paragraph.length <= limit) return paragraph;
    
    const truncated = paragraph.substring(0, limit);
    return truncated.substring(0, truncated.lastIndexOf(' ')) + "...";
  }
  
  // Example
  console.log(truncate("This is a long paragraph that needs truncating.", 20));
  // "This is a long..."