# EnhanceEsilvView

A browser extension to enhance the PDF viewer interface on learning.devinci.fr by automatically adjusting iframe heights.

### Before fix 
![image](https://github.com/user-attachments/assets/2eed30cf-a839-4ba8-bfc6-6f89e720c140)

### After fix
![image](https://github.com/user-attachments/assets/eb4071eb-2c6b-48ab-8583-ddee9c10f05f)

## Browser Support

### ✅ Currently Supported
- Chrome/Chromium-based browsers (Chrome, Edge, Opera, Brave, etc.)

### ⏳ Coming Soon
- Firefox
- Safari

## Installation

### Chrome/Chromium Browsers
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the extension directory

## Features
- Automatically adjusts PDF viewer height
- Improves viewing experience on learning.devinci.fr
- Real-time updates when content changes

### Technical Details
- Uses MutationObserver to watch for DOM changes
- Implements automatic iframe height adjustment
- Runs on document load and content changes

## Contributing
Feel free to submit issues and enhancement requests!

## Version History
- v3.0: Current release
  - Improved height adjustment
  - Added real-time content monitoring
