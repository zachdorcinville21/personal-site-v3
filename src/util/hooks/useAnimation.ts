import gsap from 'gsap';

interface AnimationSuite {
    fadeIn: (selector: string) => gsap.core.Tween;
    slideFadeLeft: (selector: string) => gsap.core.Tween;
    reveal: (chars: HTMLElement[]) => gsap.core.Tween;
}

export const useAnimation = (): AnimationSuite => {
    const fadeIn = (selector: string) => {
        return gsap.to(selector, {
            autoAlpha: 1,
            duration: 1,
        });
    };

    const slideFadeLeft = (selector: string) => {
        return gsap.to(selector, {
            autoAlpha: 1,
            x: 50,
            duration: 1,
        });
    };

    const reveal = (chars: HTMLElement[]) => {
        return gsap.fromTo(
            chars,
            {
                y: 100,
                autoAlpha: 0,
            },
            {
                y: 0,
                autoAlpha: 1,
                stagger: 0.05,
                duration: 1,
                ease: 'power4.out',
            },
        );
    };

    return {
        fadeIn,
        slideFadeLeft,
        reveal,
    };
};
