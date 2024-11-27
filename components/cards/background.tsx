import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Growing up amidst the vibrant energy of&nbsp;
          <span className="text-white underline">Lagos, Nigeria</span>, I was
          surrounded by a city that thrived on resilience and innovation. From an early
          age, I was captivated by the intricate blend of tradition and technology that
          shaped my environment, sparking a deep-seated curiosity about the digital
          world. <br />
          <br />
          My journey into the realm of technology began during my teenage years when I
          stumbled upon an old computer at a local community center. It was through
          countless hours of trial and error, fueled by sheer determination, that I
          developed a passion for&nbsp;
          <span className="text-white underline">coding and software development</span>.
          <br />
          <br />
          As I honed my skills, I began exploring a wide array of technologies, from
          <span className="text-white underline">&nbsp;web development&nbsp;</span> to
          <span className="text-white underline">&nbsp;data analysis&nbsp;</span>, each
          new discovery fueling my desire to create impactful solutions. My path
          eventually led me to specialize in&nbsp;
          <span className="text-white underline">fullstack development</span>, where I
          could bring both&nbsp;
          <span className="text-white">frontend and backend</span> expertise to life,
          crafting seamless and immersive digital experiences. <br />
          <br />
          <span className="text-white italic">
            Inspired by the dynamism of Lagos and the boundless potential of technology,
            I am committed to creating solutions that not only meet user needs but also
            inspire and empower communities, transforming everyday challenges into
            meaningful opportunities.
          </span>
        </p>

      </div>
    </Card>
  );
}
