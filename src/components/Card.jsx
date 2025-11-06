//import styles
import "./Card.css";
export default function Card({ info }) {
  //Remove <p> </p> tags from API response
  //Reference : https://stackoverflow.com/questions/24302485/remove-p-tags-regular-expression-regex
  let description =
    info.details != null ? info.details.replace(/<\/?p[^>]*>/g, "") : "";
  let caution =
    info.caution != null ? info.caution.replace(/<\/?p[^>]*>/g, "") : " ";
  //Remove <br> </br> tags
  caution = caution.replace(/<\/?br[^>]*>/g, "");
  let reward =
    info.reward_text != null ? (
      <p>
        <b> Reward : </b> {info.reward_text}
      </p>
    ) : (
      ""
    );
  let warning =
    info.warning_message != null ? (
      <h5>
        {" "}
        <span>&#128316;</span> Warning : {info.warning_message}{" "}
      </h5>
    ) : (
      ""
    );

  return (
    <>
      <div className="card">
        <h2>{info.title}</h2>
        <h3> {caution} </h3>
        <h4> {description} </h4>
        {reward}

        {warning}
      </div>
    </>
  );
}
