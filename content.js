function fixIframeView(height){
    const iframe = document.getElementById('resourceobject');
    if (iframe) {
        iframe.style.height = `${height}px`;
    }
    else {
        console.log("no iframe detected");
    }
}

// Create a MutationObserver instance
const observer = new MutationObserver(function(mutations) {
    fixIframeView(1000); // Call with default height of 1000px
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
});

iframeHeight = 1000

function main(){
    console.log("starting extension...")
    fixIframeView(iframeHeight);

    document.addEventListener('DOMContentLoaded', () => fixIframeView(iframeHeight));
    window.addEventListener('load', () => fixIframeView(iframeHeight));

    // Add specific iframe load event listener
    const iframe = document.getElementById('resourceobject');
    if (iframe) {
        iframe.addEventListener('load', () => fixIframeView(iframeHeight));
    }

    return 0;
}

main()