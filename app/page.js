export default function Home() {
  return (
    <main>
      <h2
        style={{
          marginBottom: "2rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid",
        }}
      >
        software engineer, manager, dog haver, stuff enjoyer
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section
          style={{
            marginRight: "3rem",
            paddingRight: "3rem",
          }}
        >
          <i>professionally...</i>
          <p>manager, platform @ availity</p>
          <p>building platform tools and shared services</p>
          <br></br>
          <br></br>
          <i>personally...</i>
          <p>i like:</p>
          <ul>
            <li>improving developer experience</li>
            <li>being empathetic</li>
            <li>distributed systems</li>
            <li>javascript</li>
            <li>dogs</li>
            <li>learning new things</li>
            <li>teaching others.</li>
          </ul>
        </section>
        <section>
          <i>...previously</i>
          <p>manager, team lead @ diameter health (now availity)</p>
          <p>@ BuzzFeed</p>
          <p>@ ESPN</p>
          <p>@ self</p>
        </section>
      </div>
    </main>
  );
}
