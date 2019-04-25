const hostname = `source.int.netcentric.biz`
const commonCSSFixForStatus = `padding: 7px 7px 6px; background: white;`
const greenStatusCSS = `color: #14892c;`
const redStatusCSS = `color: #d04437;`


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

    const $unapproved = document.querySelectorAll('.unapproved.pull-request-state-lozenge')

    $unapproved.forEach(($element) => {
      $element.innerText = `Unapproved ❌`
      $element.style.cssText = `${commonCSSFixForStatus} ${redStatusCSS}`
    })

    const $declined = document.querySelectorAll('.declined.pull-request-state-lozenge')

    $declined.forEach(($element) => {
      $element.innerText = `Declined 🙅🏻‍♂️`
      $element.style.cssText = `${commonCSSFixForStatus} ${redStatusCSS}`
    })

    const $updated = document.querySelectorAll('.updated.pull-request-state-lozenge')

    $updated.forEach(($element) => {
      $element.innerText = `Updated 🤦‍♂️`
      $element.style.cssText = `${commonCSSFixForStatus} color: #ca9100`
    })


    const $opened = document.querySelectorAll('.opened.pull-request-state-lozenge')

    $opened.forEach(($element) => {
      $element.innerText = `opened 🤞`
      $element.style.cssText = `${commonCSSFixForStatus} color: #4a6785`
    })

    const $reopened = document.querySelectorAll('.reopened.pull-request-state-lozenge')

    $reopened.forEach(($element) => {
      $element.innerText = `reopened 🤪`
      $element.style.cssText = `${commonCSSFixForStatus} color: #4a6785`
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
  const mutationConfig = { attributes: false, childList: true }
  const observer = new MutationObserver(magic)
  observer.observe($activePane, mutationConfig)

  magic()
}