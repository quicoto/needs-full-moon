const hostname = `source.int.netcentric.biz`
const commonCSSFixForStatus = `padding: 7px 7px 6px;`
const greenStatusCSS = `color: #14892c; background: white;`


if (window.location.hostname === hostname) {
  function magic() {
    const $needsWork = document.querySelectorAll('.needs-work.pull-request-state-lozenge')

    $needsWork.forEach(($element) => {
      $element.innerText = `Needs Work 🌝`
      $element.style.cssText = commonCSSFixForStatus
    })

    const $approved = document.querySelectorAll('.approved.pull-request-state-lozenge')

    $approved.forEach(($element) => {
      $element.innerText = `Approved 🥳`
      $element.style.cssText = `${commonCSSFixForStatus} ${greenStatusCSS}`
    })

    const $merged = document.querySelectorAll('.merged.pull-request-state-lozenge')

    $merged.forEach(($element) => {
      $element.innerText = `Merged 🎉`
      $element.style.cssText = `${commonCSSFixForStatus} ${greenStatusCSS}`
    })


    // Fix times
    const $times = document.querySelectorAll('.pull-request-content time')

    $times.forEach(($element) => {
      if ($element.title && $element.title !== '') {
        $element.innerText = $element.title
      }
    })
  }

  // Watch for changes
  const $activePane = document.querySelector(`.tabs-pane.active-pane.pull-request-content`)
  var mutationConfig = { attributes: false, childList: true, subtree: true }
  var observer = new MutationObserver(magic)
  observer.observe($activePane, mutationConfig)

  magic()
}