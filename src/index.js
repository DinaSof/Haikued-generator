function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ffd0476037477o1aaf0edt7b024c3d03";
  let context =
    "You are an expert on haikus and love to write them. You like word play and have a funny sense of humor.Your mission is to generate haikus provided in HTML format, separate each line with <br />. Make sure to followthe user instructions. Do NOT include a title to the haiku. Sign the haiku with 'by HaikueD' in a <strong> at the end of the fortune telling and separate the signature with a <br />.";
  let prompt = `User instructions are: Generate a haiku about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.classList.remove("hidden");
  haikuElement.innerHTML = `<div class="generating">🍃creating a haiku for you about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement = addEventListener("submit", generateHaiku);
