const hostname = `source.int.netcentric.biz`


if (window.location.hostname === hostname) {
  const $needsWork = document.querySelectorAll('.needs-work.pull-request-state-lozenge')

  $needsWork.forEach(($element) => {
    $element.innerText += ` 🌝`
  })

  const $approved = document.querySelectorAll('.approved.pull-request-state-lozenge')

  $approved.forEach(($element) => {
    $element.innerText += ` 🥳`
    $element.style.cssText = `padding: 7px 5px 5px 5px; color: #14892c; background: white;`
  })

  // Fix times
  const $times = document.querySelectorAll('.pull-request-content time')

  $times.forEach(($element) => {
    if ($element.title && $element.title !== '') {
      $element.innerText = $element.title
    }
  })
}