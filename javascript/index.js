const url = window.location.href;
if (url === 'https://betacat.ian-codes.repl.co/') {
  document.getElementById('sa-stable').style.display = 'none';
} else {
  document.getElementById('sa-experimental').style.display = 'none';
}