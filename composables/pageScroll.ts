type ScrollLock = (
    'waiting-page-load'
)


export const useTogglePageScroll = (key: ScrollLock, state: boolean) =>
{
    const locks = useState<string[]>('site-scroll-locks', () => []);
    const keyPos = locks.value.indexOf(key);


    // 'state: true' means removing key if present
    if (state && keyPos > -1) locks.value.splice(keyPos, 1);
    // 'state: false' means adding key if not present
    else if (!state && keyPos < 0) locks.value.push(key);


    if (process.server) return;
    // Lock (any key present) or unlock (no keys present) HTML scrolling:
    const htmlClass = document.querySelector('html')!.classList;
    const className = 'no-scroll';
    if (locks.value.length && !htmlClass.contains(className)) {
        htmlClass.add(className);
    }
    else if (!locks.value.length && htmlClass.contains(className)) {
        htmlClass.remove(className);
    }
}
