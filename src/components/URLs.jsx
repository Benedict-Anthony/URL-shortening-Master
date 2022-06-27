import { useState } from "react";

import "../UI/urls.css";
import Button from "./shared/Button";
import UrlList from "./shared/UrlList";

const shrtcode = "https://api.shrtco.de/v2/";

function URLs() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);

  const fecthURL = async (longUrl) => {
    setLoading(true);
    const params = new URLSearchParams({
      url: longUrl,
    });
    const response = await fetch(`${shrtcode}/shorten?${params}`);

    const data = await response.json();
    setLoading(false);

    const { result } = data;
    setUrls([...urls, result]);
  };

  const shortenURL = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("please a valid url");
    } else {
      fecthURL(text);
    }

    setText("");
  };

  const copyToClipboard = (code) => {
    urls.map((url) =>
      url.code === code ? navigator.clipboard.writeText(url.short_link) : url
    );
  };

  return (
    <div className="urls-lists">
      <div className="container">
        <div className="wrapper">
          <form className="form" onSubmit={shortenURL}>
            <div className="input-bar">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <p>please add a link</p>
            </div>
            <div className="form-btn">
              <Button text="Shorten It!" className="name" />
            </div>
          </form>

          <div className="urls">
            {urls.length > 0 && (
              <ul className="urls__items">
                {urls.map((url) => (
                  <UrlList
                    key={url.code}
                    url={url}
                    func={() => copyToClipboard(url.code)}
                  />
                ))}
              </ul>
            )}
            {loading ? (
              <p
                style={{
                  backgroundColor: "steelblue",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: ".5rem 1rem",
                  marginTop: "10px",
                  fontSize: "18px,",
                }}
              >
                Shortening Url....
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default URLs;
//  https://www.youtube.com/watch?v=FbQB2TvRe0A
