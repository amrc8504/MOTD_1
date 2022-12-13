function copyLink() {
var text = "https://discord.gg/U4GPbvhq42";
navigator.clipboard.writeText(text).then(function() {
  console.log('Copying to clipboard was successful!');
}, function(err) {
  console.error('Could not copy text: ', err);
});

  }