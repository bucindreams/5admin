function shortenUrl() {
    const accessToken = 'c24478032c655d6a463600511fc99a17c75a6824'; // Gantilah dengan API Key Anda
    const longUrl = document.getElementById('longUrlInput').value;

    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        long_url: longUrl
      })
    })
    .then(response => response.json())
    .then(data => {
      const hasilContainer = document.getElementById('hasilContainer');
      const shortenedUrlElement = document.getElementById('shortenedUrl');

      shortenedUrlElement.value = data.id;
      hasilContainer.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function salinHasil() {
    const shortenedUrlElement = document.getElementById('shortenedUrl');
    shortenedUrlElement.select();
    document.execCommand('copy');
  }
