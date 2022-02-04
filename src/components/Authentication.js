import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const CLIENT_ID = "27d94f3bea17489aaff2d53dc9f31772";
  const REDIRECT_URI = "https://soundbreak-io.firebaseapp.com";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="Music">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9GRpeH4CL0S?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="myPlaylist"
      ></iframe>

      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          <button type="button" class="btn btn-dark">
            Login to Spotify
          </button>
        </a>
      ) : (
        <button type="button" class="btn btn-dark" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
