const quotes = [
    {
      text: "To find yourself, think for yourself.",
      author: "Socrates",
    },
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      text: "Your vision will become clear only when you can look into your own heart.",
      author: "Carl Jung",
    },
    {
      text: "Who looks outside, dreams; who looks inside, awakes.",
      author: "Carl Jung",
    },
    {
      text: "The self is not something ready-made, but something in continuous formation through choice of action.",
      author: "John Dewey",
    },
    {
      text: "The greatest explorer on this earth never takes voyages as long as those of the man who descends to the depth of his heart.",
      author: "Julien Green",
    },
  ];
  
  function getQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[random];
    document.getElementById("quote").textContent = selectedQuote.text;
    document.getElementById("author").textContent = "- " + selectedQuote.author;
  
  
    const tweetText = encodeURIComponent(
      `"${selectedQuote.text}" - ${selectedQuote.author}`
    );
    document.getElementById(
      "tweet"
    ).href = `https://twitter.com/intent/tweet?text=${tweetText}`;
  }
  
  document.getElementById("new-quote").addEventListener("click", getQuote);
  
  
  getQuote();