import Button from "./Button";

function UrlList({ url, func }) {
  return (
    <li className="urls__item">
      <div className="lg-url">
        <span>{url.original_link}</span>
      </div>

      <div className="sht-url">
        <span>{url.short_link}</span>

        <div className="url-btn">
          <Button text="copy" func={func} />
        </div>
      </div>
    </li>
  );
}

export default UrlList;
