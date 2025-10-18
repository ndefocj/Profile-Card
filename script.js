document.addEventListener('DOMContentLoaded', () => {

    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    if (!timeElement) {
        console.error('The element with data-testid="test-user-time" was not found.');
        return;
    }

    const formatOpts = {
        timeZone: 'UTC',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    function updateUTC() {
        const now = new Date();
        timeElement.textContent = now.toLocaleString('en-GB', formatOpts) + ' UTC';
    }

    let intervalId = null;
    let alignTimeout = null;

    function startClock() {
        // Immediate update
        updateUTC();
        // Align the next tick to the next full second
        const msToNextSecond = 1000 - (Date.now() % 1000);
        alignTimeout = setTimeout(() => {
            updateUTC();
            intervalId = setInterval(updateUTC, 1000);
        }, msToNextSecond);
    }

    function stopClock() {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
        if (alignTimeout) { clearTimeout(alignTimeout); alignTimeout = null; }
    }

    startClock();

    // Pause updates while the document is hidden to save resources
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopClock();
        } else {
            startClock();
        }
    });

    // Cleanup on unload
    window.addEventListener('beforeunload', () => {
        stopClock();
    });

});