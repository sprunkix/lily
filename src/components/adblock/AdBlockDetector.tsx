'use client'

import { useEffect, useState } from 'react'
import styles from './AdBlockDetector.module.css'
import { getDictionary, defaultLocale } from "@/lib/i18n"
import { useParams } from 'next/navigation'

export default function AdBlockDetector() {
  const [isAdBlockDetected, setIsAdBlockDetected] = useState(false);
  const [dictionary, setDictionary] = useState<any>(null);
  const params = useParams();
  const lang = (params?.lang as string) || defaultLocale;

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    };
    loadDictionary();
  }, [lang]);

  useEffect(() => {
    const detectAdBlock = async () => {
      try {
        // 创建一个 Promise 来处理广告脚本加载
        const adScriptPromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          script.async = true;
          script.onerror = () => reject(new Error('Ad script failed to load'));
          script.onload = resolve;
          document.head.appendChild(script);

          // 设置超时
          setTimeout(() => reject(new Error('Ad script load timeout')), 5000);
        });

        // 创建测试广告元素
        const bait = document.createElement('div');
        bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock';
        bait.style.cssText = 'position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;';
        document.body.appendChild(bait);

        try {
          // 等待广告脚本加载
          await adScriptPromise;
        } catch (error) {
          console.log('Ad script failed:', error);
          setIsAdBlockDetected(true);
          document.body.removeChild(bait);
          return; // 如果脚本加载失败，直接返回
        }

        // 检查广告元素是否被屏蔽
        const isBlocked = 
          window.getComputedStyle(bait).display === 'none' ||
          window.getComputedStyle(bait).visibility === 'hidden' ||
          bait.offsetParent === null ||
          bait.offsetHeight === 0 ||
          bait.offsetLeft === 0 ||
          bait.offsetTop === 0 ||
          bait.offsetWidth === 0 ||
          bait.clientHeight === 0 ||
          bait.clientWidth === 0;

        // 检查是否存在广告拦截器注入的元素
        const hasBlockerElement = document.querySelector('div#banner_ad') !== null;

        setIsAdBlockDetected(isBlocked || hasBlockerElement);

        // 清理测试元素
        document.body.removeChild(bait);

      } catch (error) {
        console.log('AdBlock detection failed:', error);
        setIsAdBlockDetected(true); // 发生任何错误都认为是被屏蔽
      }
    };

    // 初始检测
    detectAdBlock();

    // 定期检查
    const checkInterval = setInterval(detectAdBlock, 10000);

    return () => {
      clearInterval(checkInterval);
    };
  }, []);

  const checkAndCloseOverlay = async () => {
    try {
      // 创建测试广告元素
      const testAd = document.createElement('ins');
      testAd.className = 'adsbygoogle';
      testAd.style.display = 'block';
      testAd.style.position = 'absolute';
      testAd.style.top = '-999px';
      document.body.appendChild(testAd);

      let scriptLoadFailed = false;

      try {
        // 尝试加载广告脚本
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          script.async = true;
          
          const handleError = () => {
            scriptLoadFailed = true;
            reject(new Error('Ad script failed to load'));
          };

          script.onload = resolve;
          script.onerror = handleError;
          script.addEventListener('error', handleError);
          document.head.appendChild(script);

          // 设置超时
          setTimeout(() => {
            scriptLoadFailed = true;
            reject(new Error('Script load timeout'));
          }, 5000);
        });
      } catch (scriptError) {
        console.log('Ad script load failed:', scriptError);
        setIsAdBlockDetected(true);
        document.body.removeChild(testAd);
        return; // 脚本加载失败，直接返回
      }

      // 只有在脚本成功加载的情况下才检查广告元素
      if (!scriptLoadFailed) {
        const isBlocked = 
          window.getComputedStyle(testAd).display === 'none' ||
          testAd.offsetHeight === 0;

        setIsAdBlockDetected(isBlocked);
      }

      document.body.removeChild(testAd);

    } catch (error) {
      console.log('Other AdBlock check error:', error);
      // 这里只处理其他类型的错误，脚本加载错误已经在内部 try-catch 中处理
    }
  };
 
  if (!isAdBlockDetected || !dictionary) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.message}>
        <h2>{dictionary.adblock.title}</h2>
        <p>{dictionary.adblock.message}</p>
        <button 
          onClick={checkAndCloseOverlay}
          className={styles.button}
        >
          {dictionary.adblock.button}
        </button>
      </div>
    </div>
  );
} 