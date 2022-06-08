<script>
  import Highlight from 'svelte-highlight';
  import js from 'svelte-highlight/languages/javascript';
  import theme from 'svelte-highlight/styles/lioshi';

  import Slide from '$lib/Slide.svelte';
  import Deck from '$lib/Deck.svelte';
  import Step from '$lib/ui/Step.svelte';

  const code1 = `const [loading, setLoading] = useState(false);`;
  const code2 = `useEffect(() => {
  setOther(nb * 10);
}, [nb])`;
</script>

<svelte:head>
  <title>Svelte, ou pourquoi je ne veux plus faire de React</title>
  <meta name="description" content="Présentation sur le framework Svelte" />
  {@html theme}
</svelte:head>

<Deck>
  <!-- <Slide>
    <div class="flex flex-col min-h-screen justify-center">
      <h1
        class="font-sans font-black text-neutral-900 text-center text-6xl tracking-tighter max-w-5/6 mx-auto my-2 leading-none"
      >
        Javascript
      </h1>
      <p
        class="font-sans font-normal text-center text-2xl text-gray-500 max-w-4/6 mx-auto leading-relaxed start-1:delete"
      >
        en bref
      </p>

      <div class="flex justify-center mt-20">
        <Step
          order={1}
          href="https://fr.wikipedia.org/wiki/Brendan_Eich"
          src="/brendan.jpeg"
          alt="Brendan Eich"
          year={1961}
        />
        <Step
          order={2}
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          src="/javascript-logo.png"
          alt="Javascript logo"
          year={1995}
        />
        <Step
          order={3}
          href="https://jquery.com/"
          src="/jquery.gif"
          alt="jQuery logo"
          year={2006}
        />
        <Step
          order={4}
          href="https://reactjs.org/"
          src="/react.png"
          alt="React logo"
          year={2013}
        />
      </div>
    </div>
  </Slide>
  <Slide>
    <div
      class="flex flex-col gap-3 min-h-screen justify-center items-center animate__animated animate__fadeIn"
    >
      <img
        class="w-40 rounded-full m-x-5"
        src="/moi.png"
        alt="Romain l'Ourson"
      />
      <p class="text-3xl">Romain Crestey</p>
      <p class="text-l">@r_ourson</p>
    </div>
  </Slide>
  <Slide>
    <div class="flex flex-col min-h-screen justify-center">
      <h1
        class="flex font-sans font-black text-neutral-900 text-center text-9xl tracking-tighter max-w-5/6 mx-auto my-5 leading-none"
      >
        <img src="/logo.svg" class="h-28 mx-4" alt="Svelte logo" /> Svelte
      </h1>
      <div class="relative">
        <p
          class="absolute w-100% font-sans font-normal text-center text-4xl text-gray-500 leading-relaxed animate__animated start-1:animate__fadeOutLeft"
        >
          REX après 2 ans de développement sous Svelte
        </p>
        <p
          class="absolute w-100% font-sans font-normal text-center text-4xl text-gray-500 leading-relaxed animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
        >
          pourquoi je ne veux plus faire de React
        </p>
      </div>
    </div>
  </Slide>
  <Slide>
    <div class="flex flex-col justify-center min-h-screen items-center mx-auto">
      <div
        class="font-sans font-normal text-center text-3xl text-gray-400 leading-relaxed"
      >
        Partie 1
      </div>
      <h2
        class="relative flex font-sans font-black text-neutral-900 text-center text-6xl tracking-tighter mx-auto my-2 leading-none animate__animated animate__fadeIn"
      >
        <img
          class="absolute left--5rem h-15"
          src="/react.png"
          alt="React logo"
        />
        React, le sauveur
      </h2>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-auto leading-none animate__animated animate__fadeInLeft"
      >
        <p>Pourquoi React ?</p>
      </h3>
      <div class="flex-1">
        <p>Construire une app web c'est dur <span>...même avec jQuery</span></p>
        <ul>
          <li>Architecture par composants</li>
          <li>Donnée descendante + procuration</li>
          <li>Le VirtualDOM</li>
          <li>Le JSX</li>
        </ul>
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>React a sauvé le web front-end</p>
      </h3>
      <iframe
        title="really?"
        src="https://giphy.com/embed/L20E2bh3ntSCc"
        width="600"
        height="400"
        frameBorder="0"
        class="giphy-embed flex-1 op0 start-1:op100 animate__animated start-1:animate__fadeIn"
        allowFullScreen
      />
    </div>
  </Slide> -->

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        En vrai React c'est dur
      </h3>
      <div class="flex-1">
        <p>Classes, fonctions, hooks ?</p>
        <Highlight language={js} code={code1} />
        <Highlight language={js} code={code2} />
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>~45 ko tout nu</p>
      </h3>

      <div class="flex-1 bundle-size">
        <iframe
          title="react-size"
          src="https://bundlephobia.com/package/react@18.1.0"
          frameBorder="0"
        />
        <iframe
          title="react-size"
          src="https://bundlephobia.com/package/react-dom@18.1.0"
          frameBorder="0"
        />
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Le VirtualDOM travaille souvent pour rien</p>
      </h3>

      <div class="vdom flex-1 flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/AdNJ3fydeao?start=256"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>React n'est pas vraiment réactif</p>
      </h3>

      <div class="not-reactive flex-1 flex-col justify-center items-center">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            &quot;React&quot; is a terrible name for <a
              href="https://twitter.com/reactjs?ref_src=twsrc%5Etfw">@reactjs</a
            >.
          </p>
          &mdash; John (6996) Lindquist (@johnlindquist)
          <a
            href="https://twitter.com/johnlindquist/status/1109498707475488768?ref_src=twsrc%5Etfw"
          >
            March 23, 2019
          </a>
        </blockquote>
        <p>Notamment à cause de sa boucle de rendu</p>
        <p>Opt-in optims</p>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"></script>
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex flex-col justify-center min-h-screen items-center mx-auto">
      <div
        class="font-sans font-normal text-center text-3xl text-gray-400 leading-relaxed"
      >
        Partie 2
      </div>
      <h2
        class="relative flex font-sans font-black text-neutral-900 text-center text-6xl tracking-tighter mx-auto my-2 leading-none animate__animated animate__fadeIn"
      >
        <img
          class="absolute left--5rem h-15"
          src="/logo.svg"
          alt="Svelte logo"
        />
        Svelte, le traître
      </h2>
    </div>
  </Slide>

  <Slide>
    <div class="flex flex-col min-h-screen justify-center">
      <div class="flex justify-center mt-20">
        <Step
          href="https://fr.wikipedia.org/wiki/Brendan_Eich"
          src="/brendan.jpeg"
          alt="Brendan Eich"
          year={1961}
          animated={false}
        />
        <Step
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          src="/javascript-logo.png"
          alt="Javascript logo"
          year={1995}
          animated={false}
        />
        <Step
          href="https://jquery.com/"
          src="/jquery.gif"
          alt="jQuery logo"
          year={2006}
          animated={false}
        />
        <Step
          order={1}
          href="https://nodejs.org/en/about/"
          src="/node.png"
          alt="Node logo"
          year={2009}
        />
        <Step
          href="https://reactjs.org/"
          src="/react.png"
          alt="React logo"
          year={2013}
          animated={false}
        />
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Le JS moderne est compilé</p>
      </h3>

      <div class="flex-1 flex-col justify-center items-center">
        Linters, uglify, JSX, SASS
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Svelte est un compilateur</p>
      </h3>

      <div class="flex-1 flex flex-col justify-center">
        <div
          class="flex flex-col flex-1 justify-center items-center text-2xl op0 animate__animated start-1:animate__fadeIn"
        >
          <p>
            Les liens entre data et UI sont explicitement décrits à <strong
              >build time</strong
            >
          </p>
          <p>Pas de boucle de rendu</p>
          <p>Pas de DOM virtuel</p>
          <p>Optimisé par défaut</p>
        </div>
        <div class="flex flex-1 justify-center gap-20">
          <div class="flex flex-col items-center">
            <p class="feat op0 animate__animated start-2:animate__fadeIn">
              Moins de code exécuté
            </p>
            <p
              class="bg-blue text-white op0 animate__animated start-3:animate__fadeIn"
            >
              Rapide
            </p>
          </div>
          <div class="flex flex-col items-center">
            <p class="feat op0 animate__animated start-4:animate__fadeIn">
              Moins de code embarqué
            </p>
            <p
              class="bg-red text-white op0 animate__animated start-5:animate__fadeIn"
            >
              Léger
            </p>
          </div>
          <div class="flex flex-col items-center">
            <p class="feat op0 animate__animated start-6:animate__fadeIn">
              Moins de code à écrire
            </p>
            <p
              class="bg-orange text-white op0 animate__animated start-7:animate__fadeIn"
            >
              Simple
            </p>
          </div>
        </div>
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Svelte est un superset de HTML</p>
      </h3>

      <div class="relative flex-1 flex flex-col justify-center items-center">
        <iframe
          title="superhero"
          src="https://giphy.com/embed/TH1doTnuEWR2Ntdnyy"
          width="480"
          height="420"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        />
        <img
          class="absolute mt-60 ml-20 w-20"
          src="/html.png"
          alt="Logo HTML 5"
        />
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="flex flex-col justify-center min-h-screen items-center mx-auto">
      <div
        class="font-sans font-normal text-center text-3xl text-gray-400 leading-relaxed"
      >
        Partie 3
      </div>
      <h2
        class="gogo relative flex font-sans font-black text-neutral-900 text-center text-6xl tracking-tighter mx-auto my-2 leading-none animate__animated animate__fadeIn"
      >
        Live Coding
      </h2>
    </div>
  </Slide>

  <Slide>
    <div class="flex flex-col justify-center min-h-screen items-center mx-auto">
      <div
        class="font-sans font-normal text-center text-3xl text-gray-400 leading-relaxed"
      >
        Épilogue
      </div>
      <h2
        class="relative flex font-sans font-black text-neutral-900 text-center text-6xl tracking-tighter mx-auto my-2 leading-none animate__animated animate__fadeIn"
      >
        <img
          class="absolute left--5rem h-15"
          src="/logo.svg"
          alt="Svelte logo"
        />
        Sveltesque
      </h2>
    </div>
  </Slide>
</Deck>

<style>
  h3 {
    width: 25%;
  }
  h3 p {
    margin: auto;
  }
  .vdom iframe {
    width: 60rem;
    height: 40rem;
  }
  .bundle-size iframe {
    width: 45rem;
    height: 20rem;
    margin: 5rem auto;
  }
  .twitter-tweet {
    margin-inline: auto;
  }

  .feat {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .feat + p {
    font-size: 3rem;
    padding: 2rem;
    border-radius: 8px;
  }

  .gogo {
    font-family: 'Josefin';
  }
</style>
