<script>
  import Highlight from 'svelte-highlight';
  import js from 'svelte-highlight/languages/javascript';
  import theme from 'svelte-highlight/styles/lioshi';

  import Slide from '$lib/Slide.svelte';
  import Deck from '$lib/Deck.svelte';
  import Step from '$lib/ui/Step.svelte';

  import { codeHooks, codeClass } from './_codes';
</script>

<svelte:head>
  <title>Svelte, ou pourquoi je ne veux plus faire de React</title>
  <meta name="description" content="Présentation sur le framework Svelte" />
  {@html theme}
</svelte:head>

<Deck>
  <Slide>
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
      <p class="text-xl text-gray-400">@r_ourson</p>
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
  </Slide>

  <Slide>
    <div class="flex justify-around min-h-screen items-center mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        En vrai React c'est dur
      </h3>
      <div class="flex-1">
        <p
          class="text-center mb-10 text-xl op0 animate__animated start-1:animate__fadeIn"
        >
          Classes
        </p>
        <p
          class="text-center text-xl op0 animate__animated start-2:animate__fadeIn"
        >
          Hooks
        </p>
        <div class="m-inline-20% op0 animate__animated start-2:animate__fadeIn">
          <Highlight language={js} code={codeHooks} />
        </div>
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
          src="https://www.youtube.com/embed/AdNJ3fydeao?start=277"
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
        <p>Le Web moderne est compilé</p>
      </h3>

      <div class="flex flex-1 flex-col gap-5 justify-center items-center">
        <img
          class="h-30 animate__animated animate__fadeIn"
          src="webpack.webp"
          alt="webpack logo"
        />
        <img
          class="h-30 animate__animated animate__fadeIn"
          src="babel.webp"
          alt="babel logo"
        />
        <img
          class="h-30 animate__animated animate__fadeIn"
          src="ts.webp"
          alt="typescript logo"
        />
        <img
          class="h-30 animate__animated animate__fadeIn"
          src="sass.png"
          alt="sass logo"
        />
        <img
          class="h-30 animate__animated animate__fadeIn"
          src="react.png"
          alt="react logo"
        />
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
          <p class="mb-5">
            Les liens entre data et UI sont <strong
              >explicitement décrits à build time</strong
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
        class="pokemon font-sans font-normal text-center text-3xl text-gray-400 leading-relaxed"
      >
        Partie 3
      </div>
      <h2
        class="pokemon relative flex font-sans font-black text-neutral-900 text-center text-6xl tracking-tighter mx-auto my-2 leading-none animate__animated animate__fadeIn"
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
  <Slide>
    <div class="flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Gogo gadgeto META</p>
      </h3>

      <div
        class="relative flex-1 flex flex-col justify-center items-center animate__animated animate__fadeInRight"
      >
        <a
          href="https://kit.svelte.dev/"
          target="blank"
          width="100%"
          height="100%"
        >
          <img src="/svelte-kit.png" alt="SvelteKit home page" />
        </a>
      </div>
    </div>
  </Slide>
  <Slide>
    <div class="flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Sveltesque</p>
      </h3>

      <div
        class="benchmark relative flex-1 flex flex-col justify-center h-100vh overflow-auto items-center animate__animated animate__fadeInRight"
      >
        <a
          href="https://krausest.github.io/js-framework-benchmark/current.html"
          target="blank"
        >
          <img src="/benchmark-all.png" alt="Framework benchmark" />
          <img
            class="absolute top-1 w-13 left-33"
            src="/javascript-logo.png"
            alt="Javascript logo"
          />
          <img
            class="absolute top-1 w-13 left-51"
            src="/solid.webp"
            alt="Solid logo"
          />
          <img
            class="absolute top-1 w-13 left-70"
            src="/vue.webp"
            alt="Vue logo"
          />
          <img
            class="absolute top-1 w-11 left-89"
            src="/svelte-logo.png"
            alt="Svelte logo"
          />
          <img
            class="absolute top-1 w-13 left-106"
            src="/angular.webp"
            alt="Angular logo"
          />
          <img
            class="absolute top-1 w-13 left-124"
            src="/react.png"
            alt="React logo"
          />
        </a>
      </div>
    </div>
  </Slide>
  <Slide>
    <div class="flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Plus jamais de React ?</p>
      </h3>

      <div
        class="relative flex-1 flex gap-5 justify-center items-center animate__animated op0 start-1:animate__fadeIn"
      >
        <a
          href="https://reactjs.org/blog/2022/03/29/react-v18.html"
          target="blank"
          class="flex gap-5 justify-center items-center"
        >
          <img src="/react.png" class="w-50" alt="React logo" />
          <p class="text-6xl">React v18.0</p>
        </a>
      </div>
    </div>
  </Slide>
  <Slide>
    <div class="links flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Sources</p>
      </h3>

      <div
        class="relative flex-1 flex flex-col justify-center animate__animated"
      >
        <h4 class="text-3xl">Pourquoi je ne veux plus faire de React</h4>

        <div class="link text-xl">
          Slides:
          <a href="https://svelte-slides-ourson.vercel.app/" target="blank">
            https://svelte-slides-ourson.vercel.app/
          </a>
        </div>

        <div class="link text-xl">
          Code Démo:
          <a
            href="https://github.com/iOiurson/svelte-demo/tree/master"
            target="blank"
          >
            https://github.com/iOiurson/svelte-demo/tree/master
          </a>
        </div>

        <div class="link text-xl">
          Démo:
          <a href="https://svelte-demo-ourson.vercel.app/" target="blank">
            https://svelte-demo-ourson.vercel.app/
          </a>
        </div>

        <h4 class="text-3xl">Svelte</h4>

        <div class="link text-xl">
          Rethinking Reactivity:
          <a href="https://youtu.be/AdNJ3fydeao" target="blank">
            https://youtu.be/AdNJ3fydeao
          </a>
        </div>
        <div class="link text-xl">
          Svelte:
          <a href="https://svelte.dev/" target="blank"> https://svelte.dev/ </a>
        </div>
        <div class="link text-xl">
          Tutoriel: <a href="https://svelte.dev/tutorial/basics" target="blank">
            https://svelte.dev/tutorial/basics
          </a>
        </div>
        <div class="link text-xl">
          SvelteKit:
          <a href="https://kit.svelte.dev/" target="blank">
            https://kit.svelte.dev/
          </a>
        </div>
        <div class="link text-xl">
          Discord:
          <a href="https://discord.com/invite/yy75DKs" target="blank">
            https://discord.com/invite/yy75DKs
          </a>
        </div>

        <h4 class="text-3xl">Autres</h4>

        <div class="link text-xl">
          Framework Benchmark:
          <a
            href="https://krausest.github.io/js-framework-benchmark/current.html"
            target="blank"
          >
            https://krausest.github.io/js-framework-benchmark/current.html
          </a>
        </div>

        <div class="link text-xl">
          React v18.0:
          <a
            href="https://reactjs.org/blog/2022/03/29/react-v18.html"
            target="blank"
          >
            https://reactjs.org/blog/2022/03/29/react-v18.html
          </a>
        </div>
      </div>
    </div>
  </Slide>
  <Slide>
    <div class="flex justify-around min-h-screen mx-auto">
      <h3
        class="flex font-sans font-black text-neutral-900 text-center text-3xl tracking-tighter mx-10 my-2 leading-none animate__animated animate__fadeInLeft"
      >
        <p>Cheers</p>
      </h3>

      <div class="relative flex-1 flex gap-5 justify-center items-center ">
        <img
          class="w-200"
          src="https://media.giphy.com/media/ZEgBAGqsQ0GZyFTkm5/giphy.gif"
          alt="Merci gif"
        />
      </div>
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

  .pokemon {
    font-family: 'PokemonGb';
  }

  .benchmark a {
    position: relative;
    width: 35rem;
  }
  .benchmark a img {
    background: white;
  }

  .links a {
    color: cornflowerblue;
  }

  .links h4 {
    margin-top: 3rem;
  }

  .links .link {
    margin-block: 0.5rem;
  }

  .links a:hover {
    text-decoration: underline;
  }
</style>
