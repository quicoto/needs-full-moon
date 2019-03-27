const hostname = `source.int.netcentric.biz`


if (window.location.hostname === hostname) {
  const $needsWork = document.querySelectorAll('.needs-work')

  $needsWork.forEach(($element) => {
    $element.innerText += ` 🌝`
  })
}