import { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    'data-en'?: string;
    'data-de'?: string;
}

export default function Link({ href, className = '', children, 'data-en': enText, 'data-de': deText }: LinkProps) {
    const [hover, setHover] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const language = navigator.language.startsWith('de') ? 'de' : 'en';
    let translatedText: string;
    
    if (language === 'de' && deText) {
        translatedText = deText;
    } else if (language === 'en' && enText) {
        translatedText = enText;
    } else {
        translatedText = children as string;
    }

    useLayoutEffect(() => {
        if (textRef.current) {
            const updateDimensions = () => {
                if (textRef.current) {
                    const { width, height } = textRef.current!.getBoundingClientRect();
                    setDimensions({ width, height });
                }
            }
            
            setTimeout(updateDimensions, 0);

            window.addEventListener('resize', updateDimensions);

            return () => {
                window.removeEventListener('resize', updateDimensions);
            }
        }
    }, [translatedText, className]);
    
    const bounceVariant = {
        initial: { y: 0, transition: { type: 'spring', stiffness: 175, damping: 15 } },
        hover: { y: dimensions.height, transition: { type: 'spring', stiffness: 175, damping: 15 } }
    };

    return (
        <a
            href={href}
            className={`relative ${className} hover:text-bmb-orange text-nowrap transition-colors duration-300 cursor-pointer`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ width: dimensions.width, height: dimensions.height }}
        >
            <div className="relative overflow-hidden w-full h-full">
                <motion.p
                    ref={textRef} 
                    className="absolute top-0" 
                    variants={bounceVariant} initial="initial" 
                    animate={hover ? 'hover' : 'initial'}
                    >
                    {translatedText}
                </motion.p>
                <motion.p
                    className="absolute"
                    style={{ top: -dimensions.height }}
                    variants={bounceVariant} 
                    initial="initial"
                    animate={hover ? 'hover' : 'initial'}
                    >
                    {translatedText}
                </motion.p>
            </div>
        </a>
    );
}