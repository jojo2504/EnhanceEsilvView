function removeClassesFromDiv() {
    // Look for all divs with the data-owner attribute
    const divs = document.querySelectorAll('div[data-owner-cmp="b-weekview-1"]');
    
    // Go through each div and check if it has the exact classes we want
    divs.forEach(div => {
        if (div.className === "b-dayview-day-content b-widget-scroller b-resize-monitored b-vertical-overflow") {
            console.log('Found exact div, removing classes');
            div.removeAttribute('class');
            div.className = '';
        }
        if (div.className === "b-timeaxis-container"){
            console.log('Found exact div, deleting');
            div.remove()
        }
    });
    // Remove footer if it exists
    const footer = document.querySelector('footer');  // Adjust this selector based on your actual footer structure
    if (footer) {
        console.log('Removing footer');
        footer.remove();
    }
}

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

    removeClassesFromDiv();
    // Run again after a short delay
    setTimeout(removeClassesFromDiv, 1000);
    // Run when content changes
    const observer = new MutationObserver((mutations) => {
        removeClassesFromDiv();
    });

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