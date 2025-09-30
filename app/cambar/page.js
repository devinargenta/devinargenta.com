import Image from "next/image";
import screenshot from "../../public/cambar-ss.png";
import cambarIcon from "../../public/cambar-icon-512.png";

export default function Page({ params }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        width="256"
        src={cambarIcon}
        alt="cambar icon - a green face on a white background"
        style={{
          display: "flex",
        }}
      />
      <section>
        <h1>cambar</h1>

        <p>
          cambar is a macOS menubar app that allows you to quickly preview how
          you look without loading up a secondary application or committing to
          reveal yourself in a meeting
        </p>
        <p>compatible with macOS Ventura (macos 13)</p>
          <h4><a href="https://apps.apple.com/us/app/cambar/id1672468138?mt=12">Download cambar</a></h4>
        
      </section>
      <figure>
        <Image
          src={screenshot}
          alt="a preview of the application"
          style={{
            borderRadius: 8,
            boxShadow: "0 0 0 3px #fff",
          }}
        />
      </figure>
    </div>
  );
}
