const instagramUrl = "https://www.instagram.com/asante.tahoe/";

const offerings = [
  ["01", "Strength floor", "Free weights and selectorized equipment for focused, independent training."],
  ["02", "Cardio", "A wide range of cardio equipment to keep every workout moving."],
  ["03", "Group fitness", "Train together with classes that bring energy and community to the room."],
  ["04", "Personal training", "One-on-one or partner sessions shaped around your goals and experience."],
];

const faqs = [
  ["Where is A Santé?", "On the shores of Lake Tahoe in downtown Tahoe City, California."],
  ["What does the facility include?", "The 9,000-square-foot gym includes cardio and strength equipment, group fitness, Pilates, personal training, locker rooms, showers, and a sauna."],
  ["Is personal training available?", "Yes. Trainers offer personalized one-on-one workouts, and you can also pair up with a training partner."],
  ["Where can I find current updates?", "Follow A Santé on Instagram for the latest schedule, hours, and community news."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="A Santé home">
          <img src="/images/logo-6e5558e53b.gif" alt="A Santé Lakeside Fitness" />
        </a>
        <div className="navLinks">
          <a href="#fitness">Fitness</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button small" href={instagramUrl} target="_blank" rel="noreferrer">
          Follow on Instagram
        </a>
      </nav>

      <section className="hero" id="top">
        <img
          className="heroImage"
          src="/images/asante-39aca612a6.jpg"
          alt="A Santé fitness facility on Lake Tahoe"
        />
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">Tahoe City, California</p>
          <h1>Work out<br />with a view.</h1>
          <p className="intro">Lakeside fitness built for stronger bodies, clearer minds, and the way Tahoe moves.</p>
          <a className="button" href={instagramUrl} target="_blank" rel="noreferrer">
            Follow on Instagram
          </a>
        </div>
        <div className="lakeMark" aria-hidden="true">39°10′N<br />120°08′W</div>
      </section>

      <div className="ticker" aria-label="Facility highlights">
        <span>9,000 sq. ft.</span><i />
        <span>Downtown Tahoe City</span><i />
        <span>Strength · Cardio · Pilates</span><i />
        <span>Locker rooms · Sauna</span>
      </div>

      <section className="about section" id="about">
        <div className="aboutCopy">
          <p className="eyebrow dark">Your mountain-town gym</p>
          <h2>Get Tahoe fit.</h2>
          <p className="lead">A Santé is a 9,000-square-foot fitness facility on the shores of Lake Tahoe.</p>
          <p>In a community known for living outside, we’re the partner that helps you build strength for everything beyond our doors. Expect a fun, safe, healthy environment for members, guests, and staff.</p>
          <a className="textLink" href={instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a>
        </div>
        <div className="imageFrame">
          <img src="/images/entrance450x200-7f9fe30edf.jpg" alt="Entrance to A Santé Lakeside Fitness" />
          <span className="caption">On the shore · In the community</span>
        </div>
      </section>

      <section className="fitness section" id="fitness">
        <div className="fitnessIntro">
          <p className="eyebrow">Move better. Get stronger.</p>
          <h2>Everything you need.<br /><em>Nothing you don’t.</em></h2>
        </div>
        <div className="fitnessGrid">
          <div className="offerings">
            {offerings.map(([number, title, text]) => (
              <article className="offering" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <figure className="trainingImage">
            <img src="/images/sherrieschmidt_th-2cfe1ba29f.jpg" alt="Personal training at A Santé" />
            <figcaption>Personal attention.<br />Purposeful progress.</figcaption>
          </figure>
        </div>
      </section>

      <section className="community section">
        <div className="communityImage">
          <img src="/images/p1000473-640x279-3680bad21f.jpg" alt="The A Santé fitness community" />
        </div>
        <div className="communityCopy">
          <p className="eyebrow dark">Built around you</p>
          <h2>Local energy.<br />Personal goals.</h2>
          <p>Our trainers bring backgrounds in fitness, strength training, physical therapy, and more. Find the right fit, then put in the work together.</p>
          <a className="button darkButton" href={instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram</a>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div>
          <p className="eyebrow dark">Good to know</p>
          <h2>Before you<br />head in.</h2>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <img src="/images/asante-300x225-d4a104fa2d.jpg" alt="Lakeside fitness in Tahoe City" />
        <div className="heroShade" />
        <div>
          <p className="eyebrow">Your next move starts here</p>
          <h2>Live up to your<br />expectations.</h2>
          <a className="button" href={instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram</a>
        </div>
      </section>

      <footer>
        <div className="footerBrand">A SANTÉ<span>LAKESIDE FITNESS</span></div>
        <p>Downtown Tahoe City · California</p>
        <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>

      <style>{`
        :root { --ink:#123530; --paper:#f2efe5; --lime:#d9f06a; --blue:#6eb1ba; --white:#fffdf7; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        img { display:block; width:100%; }
        .nav { height:84px; padding:0 4vw; display:flex; align-items:center; justify-content:space-between; background:var(--paper); position:relative; z-index:10; }
        .brand img { width:130px; max-height:60px; object-fit:contain; }
        .navLinks { display:flex; gap:34px; text-transform:uppercase; font-size:12px; font-weight:700; letter-spacing:.12em; }
        .navLinks a:hover { opacity:.55; }
        .button { display:inline-flex; padding:15px 22px; border:1px solid rgba(255,255,255,.7); color:white; font-size:12px; font-weight:800; letter-spacing:.11em; text-transform:uppercase; transition:.2s; }
        .button:hover { background:var(--lime); border-color:var(--lime); color:var(--ink); transform:translateY(-2px); }
        .button.small { color:var(--ink); border-color:var(--ink); padding:12px 17px; }
        .hero { position:relative; min-height:calc(100vh - 84px); display:flex; align-items:flex-end; overflow:hidden; color:white; }
        .heroImage, .finalCta>img { position:absolute; inset:0; height:100%; object-fit:cover; }
        .heroImage { filter:saturate(.75) contrast(1.08); }
        .heroShade { position:absolute; inset:0; background:linear-gradient(90deg,rgba(5,30,28,.8),rgba(5,30,28,.08) 72%),linear-gradient(0deg,rgba(5,30,28,.45),transparent 50%); }
        .heroCopy { position:relative; z-index:1; padding:9vw 6vw; max-width:850px; }
        .eyebrow { margin:0 0 18px; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.24em; }
        .eyebrow.dark { color:#46766e; }
        h1,h2 { margin:0; font-family:Georgia, 'Times New Roman', serif; font-weight:400; line-height:.87; letter-spacing:-.055em; }
        h1 { font-size:clamp(70px,11vw,164px); }
        h2 { font-size:clamp(52px,7.5vw,108px); }
        .intro { max-width:490px; margin:30px 0; font-family:Georgia, serif; font-size:21px; line-height:1.45; }
        .lakeMark { position:absolute; right:4vw; bottom:4vw; z-index:1; font-size:11px; letter-spacing:.18em; line-height:1.7; text-align:right; }
        .ticker { min-height:65px; padding:18px 4vw; display:flex; align-items:center; justify-content:space-around; gap:20px; background:var(--lime); font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .ticker i { width:5px; height:5px; border-radius:50%; background:var(--ink); }
        .section { padding:10vw 6vw; }
        .about { display:grid; grid-template-columns:1fr 1.15fr; align-items:center; gap:9vw; }
        .aboutCopy .lead { margin:35px 0 20px; font:28px/1.3 Georgia,serif; }
        .aboutCopy>p:last-of-type, .communityCopy>p { font-size:15px; line-height:1.75; max-width:540px; }
        .textLink { display:inline-block; margin-top:25px; padding-bottom:7px; border-bottom:1px solid; text-transform:uppercase; letter-spacing:.12em; font-size:11px; font-weight:800; }
        .textLink span { margin-left:35px; }
        .imageFrame { position:relative; padding:0 0 32px 32px; }
        .imageFrame:before { content:''; position:absolute; left:0; bottom:0; width:85%; height:85%; background:var(--blue); }
        .imageFrame img { position:relative; aspect-ratio:1.15; object-fit:cover; image-rendering:auto; }
        .caption { position:absolute; bottom:8px; left:48px; font-size:10px; color:white; text-transform:uppercase; letter-spacing:.14em; }
        .fitness { background:var(--ink); color:var(--white); }
        .fitnessIntro { border-bottom:1px solid rgba(255,255,255,.25); padding-bottom:6vw; }
        .fitness h2 em { color:var(--lime); font-weight:400; }
        .fitnessGrid { display:grid; grid-template-columns:1.1fr .9fr; gap:8vw; padding-top:6vw; }
        .offering { padding:25px 0; display:grid; grid-template-columns:60px 1fr; border-bottom:1px solid rgba(255,255,255,.18); }
        .offering>span { color:var(--lime); font:italic 17px Georgia,serif; }
        .offering h3 { margin:0 0 8px; font:32px Georgia,serif; font-weight:400; }
        .offering p { margin:0; color:#b5c6c0; font-size:14px; line-height:1.55; }
        .trainingImage { margin:0; position:relative; align-self:start; }
        .trainingImage img { height:570px; object-fit:cover; filter:grayscale(25%) sepia(10%); }
        .trainingImage figcaption { position:absolute; left:-30px; bottom:28px; padding:18px 22px; background:var(--lime); color:var(--ink); font:italic 21px/1.2 Georgia,serif; }
        .community { display:grid; grid-template-columns:1.15fr .85fr; gap:8vw; align-items:center; background:var(--blue); }
        .communityImage { transform:rotate(-2deg); padding:12px; background:var(--white); box-shadow:0 20px 50px rgba(18,53,48,.18); }
        .communityImage img { aspect-ratio:1.25; object-fit:cover; }
        .communityCopy h2 { font-size:clamp(48px,6vw,88px); }
        .communityCopy>p { margin:30px 0; }
        .darkButton { color:var(--ink); border-color:var(--ink); }
        .faq { display:grid; grid-template-columns:.75fr 1.25fr; gap:10vw; }
        .faqList { border-top:1px solid rgba(18,53,48,.35); }
        details { border-bottom:1px solid rgba(18,53,48,.35); }
        summary { cursor:pointer; list-style:none; padding:24px 0; display:flex; justify-content:space-between; font:22px Georgia,serif; }
        summary::-webkit-details-marker { display:none; }
        summary span { font-family:Arial,sans-serif; font-weight:300; }
        details[open] summary span { transform:rotate(45deg); }
        details p { max-width:630px; margin:0 40px 24px 0; line-height:1.65; color:#45655f; }
        .finalCta { min-height:650px; padding:8vw 6vw; display:flex; align-items:center; position:relative; color:white; overflow:hidden; }
        .finalCta>img { filter:saturate(.65); }
        .finalCta>div:last-child { position:relative; z-index:1; }
        .finalCta h2 { margin-bottom:35px; font-size:clamp(60px,8.5vw,125px); }
        footer { min-height:180px; padding:45px 6vw; background:#092a27; color:white; display:flex; align-items:center; justify-content:space-between; }
        .footerBrand { font:32px Georgia,serif; }
        .footerBrand span { display:block; margin-top:5px; font:8px Arial,sans-serif; letter-spacing:.32em; }
        footer p, footer a { font-size:10px; text-transform:uppercase; letter-spacing:.17em; }
        @media (max-width:760px) {
          .nav { height:70px; }
          .brand img { width:105px; }
          .navLinks { display:none; }
          .button.small { padding:10px 11px; font-size:9px; }
          .hero { min-height:720px; }
          .heroCopy { padding:80px 7vw; }
          .heroCopy .intro { font-size:18px; }
          .lakeMark { display:none; }
          .ticker { justify-content:flex-start; overflow:hidden; white-space:nowrap; }
          .ticker span:nth-of-type(n+3), .ticker i:nth-of-type(n+2) { display:none; }
          .section { padding:90px 7vw; }
          .about, .fitnessGrid, .community, .faq { grid-template-columns:1fr; }
          .about { gap:60px; }
          .imageFrame { padding:0 0 22px 22px; }
          .fitnessGrid { gap:60px; }
          .trainingImage { margin-left:20px; }
          .trainingImage img { height:430px; }
          .community { gap:65px; }
          .communityImage { order:2; }
          .faq { gap:55px; }
          .finalCta { min-height:600px; padding:80px 7vw; }
          footer { gap:30px; align-items:flex-start; flex-direction:column; }
        }
      `}</style>
    </main>
  );
}
