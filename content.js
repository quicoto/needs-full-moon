const hostname = `source.int.netcentric.biz`
const commonCSSFixForStatus = `padding: 7px 7px 6px; background: white; border: 1px solid;`
const greenStatusCSS = `color: rgb(0, 102, 68);`
const redStatusCSS = `color: rgb(222, 53, 11);`
const orangeStatusCSS = `color: rgb(255, 139, 0);`
const purpleStatusCSS = `color: rgb(82, 67, 170);`
const blueStatusCSS = `color: rgb(0, 82, 204);`
const yellowStatusCSS = `border-color: black;`
const activities = '.activities'

function getElementsByXPath(xpath, parent) {
  let results = [];
  let query = document.evaluate(xpath, parent || document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  for (let i = 0, length = query.snapshotLength; i < length; ++i) {
      results.push(query.snapshotItem(i));
  }
  return results;
}


if (window.location.hostname === hostname) {
  function magic() {
    // Needs a timeout as it lazyloads a view
    window.setTimeout(function() {
      const $needsWork = document.querySelectorAll(`${activities} .css-3qf4jv`)
      $needsWork.forEach(($element) => {
        $element.innerText = `Needs Work 🌝`
        $element.style.cssText = `${commonCSSFixForStatus} ${orangeStatusCSS}`
      })

      const $outdated = getElementsByXPath("//span[contains(., 'Outdated')]");
      $outdated.forEach(($element) => {
        const $inner = $element.querySelector('span')
        if ($inner) {
          $inner.innerText = `Outdated 👵`
          $inner.style.cssText = `${commonCSSFixForStatus} ${yellowStatusCSS}`
        }
      })

      const $added = getElementsByXPath("//span[contains(., 'ADDED')]");
      $added.forEach(($element) => {
        $element.innerText = `Added 🙄`
        $element.style.cssText = `${commonCSSFixForStatus} ${greenStatusCSS}`
      })

      const $approved = getElementsByXPath("//span[contains(., 'approved')]");
      $approved.forEach(($element) => {
        const $inner = $element.querySelector('span')
        if ($inner) {
          $inner.innerText = `Approved 🥳`
          $inner.style.cssText = `${commonCSSFixForStatus} ${greenStatusCSS}`
        }
      })

      const $merged = document.querySelectorAll(`${activities} .css-u56ty1`)
      $merged.forEach(($element) => {
        $element.innerText = `Merged 🎉`
        $element.style.cssText = `${commonCSSFixForStatus} ${greenStatusCSS}`
      })

      const $unapproved = document.querySelectorAll(`${activities} .css-1qhpcpt`)
      $unapproved.forEach(($element) => {
        $element.innerText = `Unapproved ❌`
        $element.style.cssText = `${commonCSSFixForStatus} ${redStatusCSS}`
      })

      const $declined = document.querySelectorAll(`${activities} .css-1qhpcpt`)
      $declined.forEach(($element) => {
        $element.innerText = `Declined 🙅🏻‍♂️`
        $element.style.cssText = `${commonCSSFixForStatus} ${redStatusCSS}`
      })

      const $updated = document.querySelectorAll(`${activities} .css-1bs1zhb`)
      $updated.forEach(($element) => {
        $element.innerText = `Updated 🤦‍♂️`
        $element.style.cssText = `${commonCSSFixForStatus} ${purpleStatusCSS}`
      })


      const $opened = document.querySelectorAll(`${activities} .css-on81so`)
      $opened.forEach(($element) => {
        $element.innerText = `opened 🤞`
        $element.style.cssText = `${commonCSSFixForStatus} color: #4a6785`
      })

      const $reopened = document.querySelectorAll(`${activities} .css-9vb5rs`)
      $reopened.forEach(($element) => {
        $element.innerText = `reopened 🤪`
        $element.style.cssText = `${commonCSSFixForStatus} ${blueStatusCSS}`
      })

      // Fix times
      const $times = document.querySelectorAll(`.pull-request-content time`)
      $times.forEach(($element) => {
        if ($element.title && $element.title !== '') {
          $element.innerText = $element.title
        }
      })
    }, 1000)
  }

  // Watch for changes
  const mutationConfig = { attributes: false, childList: true }

  const $body = document.querySelector(`#pull-requests-container`)
  const mainoObserver = new MutationObserver(magic)
  mainoObserver.observe($body, mutationConfig)

  const $activities = document.querySelector(`.activities`)
  const activitiesObserver = new MutationObserver(magic)
  activitiesObserver.observe($activities, mutationConfig)

  // On load
  magic()
}