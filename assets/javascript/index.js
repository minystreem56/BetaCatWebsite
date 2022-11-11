const url = window.location.href;
if (url.startsWith('https://betacat.ian-codes.repl.co/')) {
  document.getElementById('sa-stable').style.display = 'none';
} else if(url.startsWith('https://minystreem56.github.io/BetaCatWebsite') || url.startsWith('https://betacat.org')) {
  document.getElementById('sa-experimental').style.display = 'none';
} else {
  document.getElementById('sa-stable').style.display = 'none';
  document.getElementById('sa-experimental').style.display = 'none';
}