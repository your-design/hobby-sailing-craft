/**
 * OSEP-16 Expedition Proa - Main JavaScript
 * Vintage maritime theme enhancements
 */

(function() {
  'use strict';
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active state to current nav item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.color = 'var(--compass-gold)';
      link.style.borderBottom = '2px solid var(--compass-gold)';
    }
  });
  
  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe content cards and feature cards
  document.querySelectorAll('.content-card, .feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
  
  // Table of contents generator (if needed)
  function generateTableOfContents() {
    const headings = document.querySelectorAll('.page-content h2, .page-content h3');
    if (headings.length < 3) return; // Only generate TOC if there are enough headings
    
    const toc = document.createElement('nav');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h4>Table of Contents</h4><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
      // Add ID to heading if it doesn't have one
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      
      const li = document.createElement('li');
      li.className = heading.tagName.toLowerCase();
      
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      
      li.appendChild(link);
      tocList.appendChild(li);
    });
    
    // Insert TOC after first paragraph
    const firstParagraph = document.querySelector('.page-content p');
    if (firstParagraph) {
      firstParagraph.after(toc);
    }
  }
  
  // Uncomment to enable auto-generated TOC
  // generateTableOfContents();
  
  // External links open in new tab
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
  
  // Add copy button to code blocks
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';
    button.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px 12px;
      background: var(--ocean-medium);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      font-family: var(--font-display);
      font-size: 0.75rem;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    
    const pre = codeBlock.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    pre.addEventListener('mouseenter', () => {
      button.style.opacity = '1';
    });
    
    pre.addEventListener('mouseleave', () => {
      button.style.opacity = '0';
    });
    
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
  });
  
  // Print friendly: expand all details/summary elements before print
  window.addEventListener('beforeprint', () => {
    document.querySelectorAll('details').forEach(detail => {
      detail.setAttribute('open', '');
    });
  });
  
  // Console easter egg
  console.log('%c🌊 OSEP-16 Expedition Proa 🛶', 'font-size: 20px; font-weight: bold; color: #2e5266;');
  console.log('%c3000 years of ocean wisdom, reimagined for modern lakes', 'font-style: italic; color: #4a7c99;');
  console.log('%cView source: ' + (window.location.origin || 'https://expedition-proa.org'), 'color: #d97742;');
  
})();

// Add some CSS for the TOC
const style = document.createElement('style');
style.textContent = `
  .table-of-contents {
    background: rgba(74, 124, 153, 0.05);
    border-left: 4px solid var(--ocean-light);
    padding: var(--space-md);
    margin: var(--space-md) 0;
  }
  
  .table-of-contents h4 {
    margin-top: 0;
    color: var(--ocean-deep);
  }
  
  .table-of-contents ul {
    list-style: none;
    margin-left: 0;
  }
  
  .table-of-contents li {
    margin-bottom: 0.5rem;
  }
  
  .table-of-contents li.h3 {
    margin-left: var(--space-md);
    font-size: 0.9rem;
  }
  
  .table-of-contents a {
    color: var(--ocean-medium);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
  }
  
  .table-of-contents a:hover {
    color: var(--coral-accent);
    border-bottom-color: var(--coral-accent);
  }
`;
document.head.appendChild(style);
