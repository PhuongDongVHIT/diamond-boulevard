import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger if we are in the browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  trigger?: HTMLElement | string;
}

/**
 * A Svelte action that animates an element fading in and moving up
 * as it scrolls into view.
 */
export function fadeUp(node: HTMLElement, options: RevealOptions = {}) {
  const {
    y = 50,
    duration = 1,
    delay = 0,
    ease = 'power3.out',
    start = 'top 85%',
    trigger = node
  } = options;

  let ctx = gsap.context(() => {
    gsap.fromTo(node, 
      { 
        y: y, 
        autoAlpha: 0 
      },
      {
        y: 0,
        autoAlpha: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: trigger,
          start: start,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, node);

  return {
    destroy() {
      ctx.revert(); // clean up GSAP when component is unmounted
    }
  };
}

/**
 * A Svelte action for stagger fading child elements.
 * Apply this to a parent container.
 */
export function staggerFadeUp(node: HTMLElement, options: RevealOptions = {}) {
  const {
    y = 30,
    duration = 0.8,
    stagger = 0.15,
    ease = 'power2.out',
    start = 'top 80%',
  } = options;

  let ctx = gsap.context(() => {
    // Select immediate children to stagger
    const children = node.children;
    if (children.length === 0) return;

    gsap.fromTo(children, 
      { 
        y: y, 
        autoAlpha: 0 
      },
      {
        y: 0,
        autoAlpha: 1,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: node,
          start: start,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, node);

  return {
    destroy() {
      ctx.revert();
    }
  };
}
