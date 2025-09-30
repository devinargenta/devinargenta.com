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
        software engineer, engineering manager, stuff enjoyer
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flex: "1 0 auto",
          flexWrap: "wrap",
          
        }}
      >
        <section
          style={{
        
            marginBottom: "1rem"
          }}
        >
          <i>professionally...</i>
          <p>manager, clinical software @ availity</p>
          <p>building next generation healthcare software and shared services</p>
       <section>
        <i>contact:</i> devin @ devin argenta dot com
        </section>
          <div style={{marginBottom: "1rem"}}></div>
          <i>personally...</i>
          <p>i like:</p>
          <ul>
            <li>improving developer experience</li>
            <li>being empathetic</li>
            <li>distributed systems</li>
            <li>javascript</li>
            <li>dogs</li>
            <li>art</li>
            <li>learning new things</li>
            <li>teaching others.</li>
          </ul>
        </section>
        <section>
          <i>...previously</i>
          <p>manager, team lead @ diameter health (now availity)</p>
          <p>Senior Engineer / Manager @ BuzzFeed</p>
          <p>Senior Front End @ ESPN</p>
          <p>Senior Front End @ Finalsite</p>
          <p>@ self</p>
        </section>
        
      </div>
    </main>
  );
}
