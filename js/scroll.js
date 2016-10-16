// Smooth scrolling to the top of page
function scrollToPosition(position, scrollDuration) {

    const currentScrollHeight = window.scrollY, // Number of pixels that the document is currently scrolled from the top.
        scrollStep = Math.PI / (scrollDuration / 15), // How long steps to take each turn.
        goToScrollHeight = position,
        scrollDifference = currentScrollHeight - goToScrollHeight,
        cosParameter = scrollDifference / 2;

    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval(function() {

            if (window.scrollY != goToScrollHeight) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (currentScrollHeight - scrollMargin));
            } else clearInterval(scrollInterval);

        }, 15);
}
