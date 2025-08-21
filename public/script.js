(function(){
  const url = new URL(location.href);
  const custom = url.searchParams.get('v');
  const vid = document.getElementById('vid');
  if (custom) {
    const s = document.createElement('source');
    s.src = custom;
    s.type = custom.endsWith('.webm') ? 'video/webm' : 'video/mp4';
    vid.innerHTML = '';
    vid.appendChild(s);
  }
  const btn = document.getElementById('toggle-sound');
  btn.addEventListener('click', () => {
    const willUnmute = vid.muted;
    vid.muted = !vid.muted;
    btn.textContent = vid.muted ? '🔊 开声音' : '🔈 关声音';
    btn.setAttribute('aria-pressed', (!vid.muted).toString());
    if (willUnmute && vid.paused) vid.play().catch(()=>{});
  });
})();