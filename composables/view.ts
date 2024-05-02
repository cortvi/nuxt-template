export const useView = () =>
{
    const state = useState<ViewState>('view-state', () =>
    {
        const initial = <ViewState>{ hooked: false };
        return initial;
    });
    if (!state.value.hooked && !process.server)
    {
        state.value.hooked = true;
        onMounted(() =>
        {
            state.value.rem = parseInt(
                getComputedStyle(document.documentElement).fontSize
            );
            const onResize = () =>
            {
                state.value.width = window.innerWidth;
                state.value.hieght = window.innerHeight;
            }
            window.addEventListener('resize', onResize);
            onResize();
        });
    }
    const isThin = (w: number) => state.value.width <= w;
    const isShort = (h: number) => state.value.hieght <= h;


    return { dims: state, isThin, isShort };
}
