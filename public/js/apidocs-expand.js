// client-side expand/collapse helper for the "Expand all" link
(function () {
  const toggle = document.getElementById('expand-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const details = document.querySelectorAll('details');
    const shouldExpand = toggle.innerText === 'Expand all';
    details.forEach(d => d.open = shouldExpand);
    toggle.innerText = shouldExpand ? 'Collapse all' : 'Expand all';
  });
})();
