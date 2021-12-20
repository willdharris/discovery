async function getTok() {
  const stuff = {
    username: "",
    password: "",
  };

  const getIT = {
    method: "POST",
    body: JSON.stringify(stuff),
  };
  const newTok = await fetch(
    "https://cors-anywhere.herokuapp.com/https://json.schedulesdirect.org/20141201/token",
    getIT
  );
  const jsonTok = await newTok.json();
  const taken = await jsonTok.token;
  // const strToken = JSON.stringify(token);
  console.log(taken);
  return taken;
}

export { getTok, taken };
