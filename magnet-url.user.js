// ==UserScript==
// @name         Magnet Url
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @license      MIT
// @description  复制磁力链接
// @author       Xcec
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xzonesoft.com
// @grant        none
// ==/UserScript==

"use strict";

(function () {
  "use strict";

  // Function to extract magnet links
  function extractMagnetLinks() {
    const magnetLinks = [];
    const regex = /magnet:\?xt=urn:btih:[a-fA-F0-9]{40,}/g;

    // Iterate over all text nodes in the document
    function traverse(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const matches = node.textContent.match(regex);
        if (matches) {
          matches.forEach((match) => {
            const parentElement = node.parentElement;
            magnetLinks.push({ link: match, element: parentElement });
          });
        }
      } else {
        node.childNodes.forEach((child) => traverse(child));
      }
    }

    traverse(document.body);

    return magnetLinks;
  }

  // Get all magnet links and their closest parent elements
  const magnets = extractMagnetLinks();

  // 在每个元素后增加一个按钮，点击复制磁力链接
  magnets.forEach((magnet) => {
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.style.cssText =
      "position: absolute; right: -54px; top: -5px; z-index: 999";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(magnet.link);
    });
    magnet.element.style.cssText = "position: relative;";
    magnet.element.appendChild(button);
  });

  // 在页面底部增加一个按钮，点击复制所有磁力链接
  const button = document.createElement("button");
  button.className = "floating-btn"; // 使用类名控制样式
  button.innerHTML = `
    <span class="btn-text">🔗 Copy All</span>
    <span class="hover-effect"></span>
  `;

  // 通过CSS类集中管理样式
  const style = document.createElement("style");
  style.textContent = `
  .floating-btn {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 999;
    
    /* 视觉设计 */
    min-width: 120px;
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    background: linear-gradient(135deg, #4a90e2, #6366f1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    
    /* 文字样式 */
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 14px;
    
    /* 交互效果 */
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
    overflow: hidden;
  }

  /* 悬停状态 */
  .floating-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    background: linear-gradient(135deg, #6366f1, #4a90e2);
  }

  /* 点击反馈 */
  .floating-btn:active {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }

  /* 焦点状态 */
  .floating-btn:focus-visible {
    outline: 3px solid rgba(99, 102, 241, 0.4);
    outline-offset: 2px;
  }

  /* 动态效果层 */
  .hover-effect {
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }

  /* 文字防选中 */
  .btn-text {
    position: relative;
    z-index: 1;
    user-select: none;
  }
  `;

  button.addEventListener("click", () => {
    const magnetLinks = magnets.map((magnet) => magnet.link);
    navigator.clipboard.writeText(magnetLinks.join("\n"));
  });
  document.body.appendChild(style);
  document.body.appendChild(button);
})();
