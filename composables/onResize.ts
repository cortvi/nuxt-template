export const useOnResize = (callback: EventListener) =>
{
    onMounted(() => window.addEventListener('resize', callback));
    onUnmounted(() => window.removeEventListener('resize', callback));
    if (!process.server) callback(new Event('resize'));
}
