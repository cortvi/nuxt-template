export const useView = () =>
    {
        const hooked = useState('view-state-hooked', () => false);
        const ready = useState('view-state-ready', () => false);
        
        const width = useState('view-state-w', () => 0);
        const height = useState('view-state-h', () => 0);
        const rem = useState('view-state-rem', () => 10);
    
    
        if (!hooked.value && !process.server)
        {        
            hooked.value = true;
            onMounted(() =>
            {
                rem.value = parseInt(
                    getComputedStyle(document.documentElement).fontSize
                );
                const onResize = () =>
                {
                    width.value = window.innerWidth;
                    height.value = window.innerHeight;
                    
                    const vh = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
                    // const navbarH = document.querySelector('nav.c-navbar')!.clientHeight;
                    // document.documentElement.style.setProperty('--navbarH', `${navbarH}px`);
                }
                if (window)
                {                
                    window.addEventListener('resize', onResize);
                    window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
                    onResize();
                    requestAnimationFrame(() => ready.value = true);
                }
            });
        }
        const isThin = (w: number) => width.value <= w;
        const isShort = (h: number) => height.value <= h;
    
    
        return { ready, isThin, isShort, width, height, rem };
    }
    