type ViewState = {
    width: number,
    hieght: number,

    /* Body font-size in pixels */
    rem: number,
}


export const useView = () =>
{
    const hooked = useState('view-state-hooked', () => false);
    const ready = useState('view-state-ready', () => false);
    const state = useState<ViewState>('view-state', () => <ViewState>{ });
    if (!hooked.value && !process.server)
    {
        hooked.value = true;
        onMounted(() =>
        {
            state.value.rem = parseInt(
                getComputedStyle(document.documentElement).fontSize
            );
            const onResize = () =>
            {
                state.value.width = window.innerWidth;
                state.value.hieght = window.innerHeight;
                
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
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
    const isThin = (w: number) => state.value.width <= w;
    const isShort = (h: number) => state.value.hieght <= h;


    return { ready, dims: state, isThin, isShort };
}
