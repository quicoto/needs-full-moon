const hostname = `source.int.netcentric.biz`
const commonCSSFixForStatus = `padding: 7px 7px 6px;`
const greenStatusCSS = `color: #14892c; background: white;`


if (window.location.hostname === hostname) {
  const $needsWork = document.querySelectorAll('.needs-work.pull-request-state-lozenge')

  $needsWork.forEach(($element) => {
    $element.innerText += ` 🌝`
    $element.style.cssText = commonCSSFixForStatus
  })

  const $approved = document.querySelectorAll('.approved.pull-request-state-lozenge')

  $approved.forEach(($element) => {
    $element.innerText += ` 🥳`
    $element.style.cssText = `${commonCSSFixForStatus} ${greenStatusCSS}`
  })

  const $merged = document.querySelectorAll('.merged.pull-request-state-lozenge')

  $merged.forEach(($element) => {
    $element.innerText += ` 🎉`
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