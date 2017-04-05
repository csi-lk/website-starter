export default function docReady(callback) {
  function completed() {
    document.removeEventListener('DOMContentLoaded', completed, false)
    window.removeEventListener('load', completed, false)
    callback()
  }
  if (document.readyState === 'complete') {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    setTimeout(callback)
  } else {
    // Use the handy event callback
    document.addEventListener('DOMContentLoaded', completed, false)
    // A fallback to window.onload, that will always work
    window.addEventListener('load', completed, false)
  }
}